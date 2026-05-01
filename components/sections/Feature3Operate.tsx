"use client";

import { Bell, Package, PackageCheck, Truck } from "lucide-react";
import { useInView } from "@/components/hooks/useInView";

const NOTIFY_CHIPS: Array<{
  handle: string;
  tx: string;
  ty: string;
  delay: string;
}> = [
  { handle: "@han_a", tx: "-180px", ty: "-120px", delay: "0s" },
  { handle: "@han_b", tx: "180px", ty: "-130px", delay: "0.15s" },
  { handle: "@han_c", tx: "-220px", ty: "20px", delay: "0.3s" },
  { handle: "@han_d", tx: "220px", ty: "30px", delay: "0.45s" },
  { handle: "@han_e", tx: "-150px", ty: "150px", delay: "0.6s" },
  { handle: "@han_f", tx: "160px", ty: "160px", delay: "0.75s" },
  { handle: "@han_g", tx: "0px", ty: "-180px", delay: "0.9s" },
  { handle: "@han_h", tx: "0px", ty: "200px", delay: "1.05s" },
];

export function Feature3Operate() {
  const { ref: headRef, inView: headInView } = useInView<HTMLDivElement>();
  const { ref: bodyRef, inView: bodyInView } = useInView<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: "0px 0px -15% 0px",
  });

  return (
    <section
      id="operate"
      className="relative overflow-hidden py-24 md:py-32 bg-paper"
    >
      <div className="mx-auto max-w-6xl px-5">
        <div
          ref={headRef}
          data-in-view={headInView ? "true" : "false"}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="fade-up inline-block text-sm font-semibold text-brand-700">
            STEP 03 · 운영
          </span>
          <h2 className="fade-up stagger-1 mt-3 text-3xl md:text-5xl font-bold tracking-tight leading-[1.2]">
            토글은 한 번에,
            <br />
            알림은 모두에게.
          </h2>
          <p className="fade-up stagger-2 mt-5 text-base md:text-lg text-slate-600">
            주문 완료, 배송 시작, 택배 도착. 토글 한 번이면 참여자 전원에게 자동 알림이 가요.
          </p>
        </div>

        <div
          ref={bodyRef}
          data-in-view={bodyInView ? "true" : "false"}
          className="fade-up relative mt-16 md:mt-20 h-[440px] md:h-[480px] flex items-center justify-center"
        >
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-brand-300 pulse-ring" data-in-view={bodyInView ? "true" : "false"} />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-brand-500 pulse-ring" data-in-view={bodyInView ? "true" : "false"} style={{ animationDelay: "0.7s" }} />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-accent-500 pulse-ring" data-in-view={bodyInView ? "true" : "false"} style={{ animationDelay: "1.4s" }} />

          <div className="relative z-20 rounded-3xl bg-white border border-slate-200 shadow-2xl px-7 py-6 w-[260px]">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              운영 단계
            </div>

            <ToggleStep icon={Package} label="주문 완료" active />
            <div className="ml-4 my-1 w-px h-3 bg-slate-200" />
            <ToggleStep icon={Truck} label="배송 시작" />
            <div className="ml-4 my-1 w-px h-3 bg-slate-200" />
            <ToggleStep icon={PackageCheck} label="택배 도착" />
          </div>

          {NOTIFY_CHIPS.map((chip, i) => (
            <div
              key={chip.handle}
              className="notify-burst absolute left-1/2 top-1/2 z-10"
              data-in-view={bodyInView ? "true" : "false"}
              style={
                {
                  "--tx": chip.tx,
                  "--ty": chip.ty,
                  animationDelay: chip.delay,
                } as React.CSSProperties
              }
            >
              <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-full pl-1 pr-3 py-1 shadow-lg whitespace-nowrap">
                <span className="w-5 h-5 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 grid place-items-center">
                  <Bell size={10} className="text-white" />
                </span>
                <span className="text-[11px] font-semibold text-ink">
                  {chip.handle}
                </span>
                <span className="text-[10px] text-slate-500">주문 완료</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function ToggleStep({
  icon: Icon,
  label,
  active,
}: {
  icon: typeof Package;
  label: string;
  active?: boolean;
}) {
  return (
    <div className="mt-3 flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <div
          className={`w-9 h-9 rounded-xl grid place-items-center ${
            active ? "bg-brand-50 text-brand-700" : "bg-slate-50 text-slate-400"
          }`}
        >
          <Icon size={18} />
        </div>
        <span
          className={`text-sm font-semibold ${
            active ? "text-ink" : "text-slate-400"
          }`}
        >
          {label}
        </span>
      </div>

      <div
        className={`relative w-11 h-6 rounded-full transition ${
          active ? "bg-brand-500" : "bg-slate-200"
        }`}
      >
        <span
          className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-all ${
            active ? "left-[22px]" : "left-0.5"
          }`}
        />
      </div>
    </div>
  );
}
