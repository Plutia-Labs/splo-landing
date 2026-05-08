"use client";

import Image from "next/image";
import { Bell, Check, Package, PackageCheck, Truck } from "lucide-react";
import { useInView } from "@/components/hooks/useInView";
import { MobileStickyCarousel } from "@/components/MobileStickyCarousel";

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
    <section id="operate" className="bg-white">
      <MobileStickyCarousel
        step="STEP 03 · 운영"
        title="송장번호 한 번이면,"
        slides={[
          {
            caption: (
              <>
                단계별로 자동 알림.
                <span className="block text-xs font-normal text-slate-500 mt-1.5">
                  개인정보는 노출되지 않습니다
                </span>
              </>
            ),
            label: "총대 화면 · 송장 추적",
            card: <TrackingCardCompact />,
          },
          {
            caption: (
              <>
                단계별로 알림 도착.
                <span className="block text-xs font-normal text-slate-500 mt-1.5">
                  개인정보는 노출되지 않습니다
                </span>
              </>
            ),
            label: "분철자 푸시 · 단계 알림",
            card: <NotificationCardCompact />,
          },
        ]}
      />

      <div className="hidden md:block relative overflow-hidden py-24 md:py-32">
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
              송장번호 한 번이면,
            </h2>
            <p className="fade-up stagger-2 mt-3 text-base md:text-lg text-slate-600">
              주문·배송·도착 단계별 자동 알림.
              <span className="block mt-1.5 text-sm font-normal text-slate-500">
                개인정보는 분철자에게 노출되지 않습니다.
              </span>
            </p>
          </div>

          <div
            ref={bodyRef}
            data-in-view={bodyInView ? "true" : "false"}
            className="fade-up relative mt-16 md:mt-20 h-[500px] md:h-[540px] flex items-center justify-center"
          >
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-brand-300 pulse-ring"
              data-in-view={bodyInView ? "true" : "false"}
            />
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-brand-500 pulse-ring"
              data-in-view={bodyInView ? "true" : "false"}
              style={{ animationDelay: "0.7s" }}
            />
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-accent-500 pulse-ring"
              data-in-view={bodyInView ? "true" : "false"}
              style={{ animationDelay: "1.4s" }}
            />

            <div className="relative z-20 rounded-3xl bg-white border border-slate-200 shadow-2xl px-7 py-6 w-[280px]">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                송장번호
              </div>

              <div className="mt-2 px-3 py-2.5 rounded-xl bg-brand-50 border border-brand-300 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <Truck size={14} className="text-brand-700 shrink-0" />
                  <span className="text-sm text-slate-400 font-mono font-semibold tracking-widest">
                    ●●●●·●●●●·●●●●
                  </span>
                </div>
                <Check
                  size={14}
                  strokeWidth={3}
                  className="text-brand-700 shrink-0"
                />
              </div>

              <div className="mt-5 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                자동 추적
              </div>

              <StepIndicator icon={Package} label="주문 완료" status="done" />
              <div className="ml-4 my-1 w-px h-3 bg-slate-200" />
              <StepIndicator icon={Truck} label="배송 시작" status="active" />
              <div className="ml-4 my-1 w-px h-3 bg-slate-200" />
              <StepIndicator
                icon={PackageCheck}
                label="택배 도착"
                status="pending"
              />
            </div>

            {NOTIFY_CHIPS.map((chip) => (
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
                  <span className="text-[10px] text-slate-500">배송 시작</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrackingCardCompact() {
  return (
    <div className="w-[280px] max-w-[82vw] rounded-2xl bg-white border border-slate-200 shadow-xl p-5">
      <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
        송장번호
      </div>

      <div className="mt-2 px-3 py-2 rounded-xl bg-brand-50 border border-brand-300 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <Truck size={14} className="text-brand-700 shrink-0" />
          <span className="text-xs text-slate-400 font-mono font-semibold tracking-widest">
            ●●●●·●●●●·●●●●
          </span>
        </div>
        <Check
          size={14}
          strokeWidth={3}
          className="text-brand-700 shrink-0"
        />
      </div>

      <div className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
        자동 추적
      </div>

      <StepIndicator icon={Package} label="주문 완료" status="done" />
      <div className="ml-4 my-1 w-px h-3 bg-slate-200" />
      <StepIndicator icon={Truck} label="배송 시작" status="active" />
      <div className="ml-4 my-1 w-px h-3 bg-slate-200" />
      <StepIndicator
        icon={PackageCheck}
        label="택배 도착"
        status="pending"
      />
    </div>
  );
}

function NotificationCardCompact() {
  return (
    <div className="w-[280px] max-w-[82vw] flex flex-col gap-2">
      <PushNotification
        time="방금"
        title="배송 시작"
        body="그룹 A · The Album Vol.1"
        active
      />
      <PushNotification
        time="어제"
        title="주문 완료"
        body="그룹 A · The Album Vol.1"
      />
      <PushNotification
        time="3일 전"
        title="입금 확인"
        body="그룹 A · The Album Vol.1"
      />
    </div>
  );
}

function PushNotification({
  time,
  title,
  body,
  active,
}: {
  time: string;
  title: string;
  body: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2.5 rounded-2xl border bg-white px-3 py-2.5 ${
        active ? "border-brand-300 shadow-lg" : "border-slate-200 shadow-sm opacity-90"
      }`}
    >
      <Image
        src="/img/splo-icon.png"
        alt="스플로"
        width={32}
        height={32}
        className="w-8 h-8 rounded-lg ring-1 ring-slate-200 shrink-0"
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <div className="text-[11px] font-bold text-ink">스플로</div>
          <div className="text-[10px] text-slate-400">{time}</div>
        </div>
        <div className="text-[12px] font-semibold text-ink leading-tight">
          {title}
        </div>
        <div className="text-[11px] text-slate-500 leading-tight truncate">
          {body}
        </div>
      </div>
    </div>
  );
}

function StepIndicator({
  icon: Icon,
  label,
  status,
}: {
  icon: typeof Package;
  label: string;
  status: "done" | "active" | "pending";
}) {
  const isDone = status === "done";
  const isActive = status === "active";

  return (
    <div className="mt-3 flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <div
          className={`w-9 h-9 rounded-xl grid place-items-center ${
            isDone || isActive
              ? "bg-brand-50 text-brand-700"
              : "bg-slate-50 text-slate-400"
          }`}
        >
          <Icon size={18} />
        </div>
        <span
          className={`text-sm font-semibold ${
            isDone || isActive ? "text-ink" : "text-slate-400"
          }`}
        >
          {label}
        </span>
      </div>

      {isDone && (
        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-500">
          <Check size={12} strokeWidth={3} className="text-white" />
        </div>
      )}
      {isActive && (
        <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-brand-500">
          <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
        </div>
      )}
      {!isDone && !isActive && (
        <div className="w-6 h-6 rounded-full border-2 border-slate-200" />
      )}
    </div>
  );
}
