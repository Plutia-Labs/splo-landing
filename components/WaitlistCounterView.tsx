"use client";

import { useEffect, useState } from "react";
import { Users } from "lucide-react";

export const WAITLIST_COUNT_EVENT = "waitlist:count-update";

export type WaitlistCountEventDetail = { count: number };

export function WaitlistCounterView({
  initialCount,
  className = "",
}: {
  initialCount: number;
  className?: string;
}) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    function handler(event: Event) {
      const detail = (event as CustomEvent<WaitlistCountEventDetail>).detail;
      if (typeof detail?.count === "number") {
        setCount((prev) => Math.max(prev, detail.count));
      }
    }
    window.addEventListener(WAITLIST_COUNT_EVENT, handler);
    return () => window.removeEventListener(WAITLIST_COUNT_EVENT, handler);
  }, []);

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
