import { getSupabase } from "@/lib/supabase";
import { WaitlistCounterView } from "./WaitlistCounterView";

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
  return <WaitlistCounterView initialCount={count} className={className} />;
}
