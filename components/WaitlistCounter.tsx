import { Users } from "lucide-react";
import { getSupabase } from "@/lib/supabase";

async function getCount(): Promise<number> {
  const { count, error } = await getSupabase()
    .from("waitlist")
    .select("*", { count: "exact", head: true });

  if (error) {
    console.error("[WaitlistCounter] count failed", error);
    return 0;
  }

  return count ?? 0;
}

export async function WaitlistCounter({ className = "" }: { className?: string }) {
  const count = await getCount();

  if (count === 0) {
    return (
      <div
        className={`inline-flex items-center gap-2 bg-slate-50 text-slate-500 text-sm font-medium px-3 py-1.5 rounded-full ${className}`}
      >
        <Users size={14} />
        사전 신청 1호가 되어주세요
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-sm font-semibold px-3 py-1.5 rounded-full ${className}`}
    >
      <Users size={14} />
      현재까지 <span className="tabular-nums">{count}</span>명이 사전 신청했어요
    </div>
  );
}
