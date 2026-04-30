import { NextResponse } from "next/server";
import { getSupabase, type WaitlistRole } from "@/lib/supabase";

type WaitlistPayload = {
  email?: unknown;
  role?: unknown;
  handle?: unknown;
  survey?: unknown;
};

export async function POST(request: Request) {
  let payload: WaitlistPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid JSON" }, { status: 400 });
  }

  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const role = typeof payload.role === "string" ? payload.role : "";
  const handle = typeof payload.handle === "string" ? payload.handle.trim() : "";
  const survey = Boolean(payload.survey);

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "invalid email" }, { status: 400 });
  }

  if (!["host", "joiner", "both"].includes(role)) {
    return NextResponse.json({ error: "invalid role" }, { status: 400 });
  }

  const supabase = getSupabase();

  const { error } = await supabase.from("waitlist").upsert(
    {
      email,
      role: role as WaitlistRole,
      handle: handle || null,
      survey,
    },
    { onConflict: "email" },
  );

  if (error) {
    console.error("[waitlist] insert failed", error);
    return NextResponse.json({ error: "insert failed" }, { status: 500 });
  }

  const { count } = await supabase
    .from("waitlist")
    .select("*", { count: "exact", head: true });

  return NextResponse.json({ ok: true, count: count ?? 0 });
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
