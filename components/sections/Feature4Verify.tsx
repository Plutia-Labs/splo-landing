"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, ExternalLink, Star } from "lucide-react";
import { useInView } from "@/components/hooks/useInView";

export function Feature4Verify() {
  const { ref: headRef, inView: headInView } = useInView<HTMLDivElement>();
  const { ref: bodyRef, inView: bodyInView } = useInView<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: "0px 0px -15% 0px",
  });

  return (
    <section id="verify" className="bg-paper md:border-y md:border-slate-200">
      <div
        className="md:hidden flex flex-col"
        style={{ height: "calc(100svh - 64px)" }}
      >
        <div className="text-center px-5 pt-16 shrink-0">
          <span className="inline-block text-sm font-semibold text-brand-700">
            STEP 04 · 이력
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight leading-[1.2]">
            증명까지,
          </h2>
        </div>

        <div className="flex-1 mt-12 px-5 pb-8 grid grid-cols-2 gap-x-3 gap-y-6 items-center">
          <div className="flex justify-end items-center">
            <ProfileMiniCard />
          </div>
          <p className="self-center text-sm font-bold text-slate-600 leading-snug">
            신청 전,
            <br />
            그동안의 이력을 한눈에.
          </p>
          <div className="col-span-2 self-start flex gap-3">
            <div className="flex-1 flex justify-end items-center">
              <p className="text-sm font-bold text-slate-600 leading-snug text-right">
                후기,
                <br />
                따로 정리 안 해도 자동 누적.
              </p>
            </div>
            <div className="flex-1 flex justify-start items-start">
              <HistoryMiniCard />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block relative overflow-hidden py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5">
          <div
            ref={headRef}
            data-in-view={headInView ? "true" : "false"}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="fade-up inline-block text-sm font-semibold text-brand-700">
              STEP 04 · 이력
            </span>
            <h2 className="fade-up stagger-1 mt-3 text-3xl md:text-5xl font-bold tracking-tight leading-[1.2]">
              증명까지,
            </h2>
            <p className="fade-up stagger-2 mt-3 text-base md:text-lg font-bold text-slate-600 leading-snug">
              따로 정리 안 해도 한눈에.
            </p>
          </div>

          <div
            ref={bodyRef}
            data-in-view={bodyInView ? "true" : "false"}
            className="fade-up relative mt-16 md:mt-24 h-[440px] md:h-[480px] flex items-center justify-center"
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 translate-x-[-300px] md:translate-x-[-340px] translate-y-[0px] rotate-[-6deg] z-10 hidden sm:block">
              <RecordCard album="앨범 X · Vol.1" date="2026.04" rate="100%" muted />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 translate-x-[160px] md:translate-x-[200px] translate-y-[50px] rotate-[6deg] z-10 hidden sm:block">
              <RecordCard album="앨범 Y · 미니" date="2026.02" rate="100%" muted />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 translate-x-[20px] md:translate-x-[40px] translate-y-[-220px] md:translate-y-[-260px] rotate-[6deg] z-10 hidden md:block">
              <RecordCard album="앨범 Z · 정규" date="2025.11" rate="100%" muted />
            </div>

            <div className="relative z-20 w-[300px] md:w-[360px] rounded-3xl bg-white border border-slate-200 shadow-2xl p-6">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-400">
                  splo.app/host/@host_a
                </span>
                <ExternalLink size={12} className="text-slate-400" />
              </div>

              <div className="mt-4 flex items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 grid place-items-center text-white font-black text-xl">
                  A
                </div>
                <div>
                  <div className="text-base font-bold text-ink">@host_a</div>
                  <span className="mt-1 inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle2 size={11} />
                    계좌 인증 완료
                  </span>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <Stat label="누적 운영" target={12} suffix="회" inView={bodyInView} />
                <Stat
                  label="완료율"
                  target={100}
                  suffix="%"
                  inView={bodyInView}
                  accent
                />
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100">
                <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                  최근 운영
                </div>
                <div className="mt-2 space-y-1.5">
                  <RecentItem album="앨범 X · Vol.1" date="2026.04" />
                  <RecentItem album="앨범 Y · 미니" date="2026.02" />
                  <RecentItem album="앨범 Z · 정규" date="2025.11" />
                </div>
              </div>

              <div className="mt-4 flex items-center justify-center gap-1 text-amber-400">
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
                <Star size={12} fill="currentColor" />
                <span className="ml-1 text-[10px] text-slate-500 font-medium">
                  참여자 평가 4.9
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProfileMiniCard() {
  return (
    <div className="w-full max-w-[200px] rounded-xl border border-slate-200 bg-white shadow-md p-3.5">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 grid place-items-center text-white font-black text-sm shrink-0">
          A
        </div>
        <div className="min-w-0">
          <div className="text-[11px] font-bold text-ink truncate">@host_a</div>
          <span className="inline-flex items-center gap-0.5 text-[8px] font-bold bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded-full border border-emerald-200 mt-0.5">
            <CheckCircle2 size={9} />
            인증 완료
          </span>
        </div>
      </div>
      <div className="mt-2.5 grid grid-cols-2 gap-1.5">
        <div className="rounded-md bg-slate-50 border border-slate-200 p-1.5 text-center">
          <div className="text-[8px] font-semibold text-slate-500 uppercase tracking-wider">
            누적
          </div>
          <div className="text-sm font-black tabular-nums text-ink">
            12<span className="text-[10px] ml-0.5">회</span>
          </div>
        </div>
        <div className="rounded-md bg-brand-50 border border-brand-300 p-1.5 text-center">
          <div className="text-[8px] font-semibold text-slate-500 uppercase tracking-wider">
            완료율
          </div>
          <div className="text-sm font-black tabular-nums text-brand-700">
            100<span className="text-[10px] ml-0.5">%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function HistoryMiniCard() {
  return (
    <div className="w-full max-w-[200px] rounded-xl border border-slate-200 bg-white shadow-md p-3.5">
      <div className="text-[8px] font-semibold text-slate-500 uppercase tracking-wider">
        최근 운영
      </div>
      <div className="mt-1.5 space-y-0.5">
        <RecentItemMini album="앨범 X · Vol.1" date="04" />
        <RecentItemMini album="앨범 Y · 미니" date="02" />
        <RecentItemMini album="앨범 Z · 정규" date="11" />
      </div>
      <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-center gap-0.5 text-amber-400">
        <Star size={10} fill="currentColor" />
        <Star size={10} fill="currentColor" />
        <Star size={10} fill="currentColor" />
        <Star size={10} fill="currentColor" />
        <Star size={10} fill="currentColor" />
        <span className="ml-1 text-[10px] text-slate-700 font-bold tabular-nums">
          4.9
        </span>
      </div>
    </div>
  );
}

function RecentItemMini({ album, date }: { album: string; date: string }) {
  return (
    <div className="flex items-center justify-between text-[9px]">
      <span className="text-slate-700 truncate">{album}</span>
      <span className="text-slate-400 shrink-0 ml-1">{date}</span>
    </div>
  );
}

function Stat({
  label,
  target,
  suffix,
  inView,
  accent,
}: {
  label: string;
  target: number;
  suffix: string;
  inView: boolean;
  accent?: boolean;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      start = Math.round(target * eased);
      setValue(start);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  return (
    <div
      className={`rounded-2xl border p-3 text-center ${
        accent
          ? "bg-brand-50 border-brand-300"
          : "bg-slate-50 border-slate-200"
      }`}
    >
      <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
        {label}
      </div>
      <div
        className={`mt-1 text-2xl font-black tabular-nums ${
          accent ? "text-brand-700" : "text-ink"
        }`}
      >
        {value}
        <span className="text-base font-bold ml-0.5">{suffix}</span>
      </div>
    </div>
  );
}

function RecentItem({ album, date }: { album: string; date: string }) {
  return (
    <div className="flex items-center justify-between text-xs">
      <span className="text-slate-700">{album}</span>
      <span className="text-slate-400 text-[10px]">{date}</span>
    </div>
  );
}

function RecordCard({
  album,
  date,
  rate,
  muted,
}: {
  album: string;
  date: string;
  rate: string;
  muted?: boolean;
}) {
  return (
    <div
      className={`w-[180px] rounded-2xl border p-3 shadow-lg ${
        muted ? "bg-white/80 border-slate-200 opacity-80" : "bg-white border-slate-200"
      }`}
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-100 to-accent-300" />
        <div className="flex-1 min-w-0">
          <div className="text-[11px] font-bold text-ink truncate">{album}</div>
          <div className="text-[10px] text-slate-400">{date}</div>
        </div>
      </div>
      <div className="mt-2 flex items-center justify-between text-[10px]">
        <span className="text-slate-500">완료율</span>
        <span className="text-emerald-600 font-bold">{rate}</span>
      </div>
    </div>
  );
}
