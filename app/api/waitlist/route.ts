import { NextResponse } from "next/server";
import { resolveMx } from "node:dns/promises";
import { getSupabase, type WaitlistRole } from "@/lib/supabase";

type WaitlistPayload = {
  email?: unknown;
  role?: unknown;
  handle?: unknown;
  survey?: unknown;
  referralSource?: unknown;
  referralOther?: unknown;
  platforms?: unknown;
  platformOther?: unknown;
};

const REFERRAL_SOURCES = ["ad", "referral", "other"] as const;
const PLATFORMS = ["twitter", "bunjang", "other"] as const;
type ReferralSource = (typeof REFERRAL_SOURCES)[number];
type Platform = (typeof PLATFORMS)[number];

const MX_TIMEOUT_MS = 5000;

async function hasValidMxRecord(email: string): Promise<boolean> {
  const domain = email.split("@")[1]?.toLowerCase();
  if (!domain) return false;

  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  const timeoutSentinel = Symbol("mx-timeout");

  try {
    const result = await Promise.race([
      resolveMx(domain),
      new Promise<typeof timeoutSentinel>((resolve) => {
        timeoutId = setTimeout(() => resolve(timeoutSentinel), MX_TIMEOUT_MS);
      }),
    ]);
    if (result === timeoutSentinel) return false;
    return Array.isArray(result) && result.length > 0;
  } catch {
    return false;
  } finally {
    if (timeoutId) clearTimeout(timeoutId);
  }
}

async function fetchTotalCount() {
  const supabase = getSupabase();
  const { count } = await supabase
    .from("waitlist")
    .select("*", { count: "exact", head: true });
  return count ?? 0;
}

async function fetchPosition(createdAt: string) {
  const supabase = getSupabase();
  const { count } = await supabase
    .from("waitlist")
    .select("*", { count: "exact", head: true })
    .lte("created_at", createdAt);
  return count ?? 0;
}

export async function POST(request: Request) {
  let payload: WaitlistPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { status: "error", error: "invalid JSON" },
      { status: 400 },
    );
  }

  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const role = typeof payload.role === "string" ? payload.role : "";
  const handle = typeof payload.handle === "string" ? payload.handle.trim() : "";
  const survey = Boolean(payload.survey);
  const referralSource =
    typeof payload.referralSource === "string" ? payload.referralSource : "";
  const referralOther =
    typeof payload.referralOther === "string"
      ? payload.referralOther.trim()
      : "";
  const platformsRaw = Array.isArray(payload.platforms) ? payload.platforms : [];
  const platforms = platformsRaw.filter(
    (v): v is Platform =>
      typeof v === "string" && (PLATFORMS as readonly string[]).includes(v),
  );
  const platformOther =
    typeof payload.platformOther === "string"
      ? payload.platformOther.trim()
      : "";

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { status: "invalid_email", error: "invalid email" },
      { status: 400 },
    );
  }

  if (!["host", "joiner", "both"].includes(role)) {
    return NextResponse.json(
      { status: "error", error: "invalid role" },
      { status: 400 },
    );
  }

  if (!(REFERRAL_SOURCES as readonly string[]).includes(referralSource)) {
    return NextResponse.json(
      { status: "invalid_referral", error: "invalid referral source" },
      { status: 400 },
    );
  }

  const includesReferralOther = referralSource === "other";
  const includesReferralReferral = referralSource === "referral";
  if (includesReferralOther && !referralOther) {
    return NextResponse.json(
      { status: "missing_referral_other", error: "referral_other required" },
      { status: 400 },
    );
  }

  if (platforms.length === 0 || platforms.length !== platformsRaw.length) {
    return NextResponse.json(
      { status: "invalid_platforms", error: "invalid platforms" },
      { status: 400 },
    );
  }

  const includesOther = platforms.includes("other");
  if (includesOther && !platformOther) {
    return NextResponse.json(
      { status: "missing_platform_other", error: "platform_other required" },
      { status: 400 },
    );
  }

  const mxOk = await hasValidMxRecord(email);
  if (!mxOk) {
    return NextResponse.json(
      { status: "invalid_domain", error: "invalid domain" },
      { status: 400 },
    );
  }

  const supabase = getSupabase();

  const { data: existing, error: selectError } = await supabase
    .from("waitlist")
    .select("created_at")
    .eq("email", email)
    .maybeSingle();

  if (selectError) {
    console.error("[waitlist] lookup failed", selectError);
    return NextResponse.json(
      { status: "error", error: "lookup failed" },
      { status: 500 },
    );
  }

  if (existing) {
    const [position, total] = await Promise.all([
      fetchPosition(existing.created_at),
      fetchTotalCount(),
    ]);
    return NextResponse.json({
      status: "duplicate",
      count: total,
      registeredAt: existing.created_at,
      position,
    });
  }

  const { error: insertError } = await supabase.from("waitlist").insert({
    email,
    role: role as WaitlistRole,
    handle: handle || null,
    survey,
    referral_source: referralSource as ReferralSource,
    referral_other:
      includesReferralOther || (includesReferralReferral && referralOther)
        ? referralOther
        : null,
    platforms,
    platform_other: includesOther ? platformOther : null,
  });

  if (insertError) {
    if (insertError.code === "23505") {
      const { data: raceExisting } = await supabase
        .from("waitlist")
        .select("created_at")
        .eq("email", email)
        .maybeSingle();
      if (raceExisting) {
        const [position, total] = await Promise.all([
          fetchPosition(raceExisting.created_at),
          fetchTotalCount(),
        ]);
        return NextResponse.json({
          status: "duplicate",
          count: total,
          registeredAt: raceExisting.created_at,
          position,
        });
      }
    }
    console.error("[waitlist] insert failed", insertError);
    return NextResponse.json(
      { status: "error", error: "insert failed" },
      { status: 500 },
    );
  }

  const total = await fetchTotalCount();
  return NextResponse.json(
    { status: "created", count: total },
    { status: 201 },
  );
}

export async function GET() {
  const supabase = getSupabase();

  const { count, error } = await supabase
    .from("waitlist")
    .select("*", { count: "exact", head: true });

  if (error) {
    console.error("[waitlist] count failed", error);
    return NextResponse.json({ error: "count failed" }, { status: 500 });
  }

  return NextResponse.json({ count: count ?? 0 });
}
