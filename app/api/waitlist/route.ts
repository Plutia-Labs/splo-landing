import { NextResponse } from "next/server";
import { resolveMx } from "node:dns/promises";
import { getSupabase, type WaitlistRole } from "@/lib/supabase";

type WaitlistPayload = {
  email?: unknown;
  role?: unknown;
  handle?: unknown;
  survey?: unknown;
};

const MX_TIMEOUT_MS = 1500;

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
    if (result === timeoutSentinel) return true;
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
