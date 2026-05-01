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
    <section
      id="verify"
      className="relative overflow-hidden py-24 md:py-32 bg-white border-y border-slate-200"
    >
      <div className="mx-auto max-w-6xl px-5">
        <div
          ref={headRef}
          data-in-view={headInView ? "true" : "false"}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="fade-up inline-block text-sm font-semibold text-brand-700">
            STEP 04 · 신뢰
          </span>
          <h2 className="fade-up stagger-1 mt-3 text-3xl md:text-5xl font-bold tracking-tight leading-[1.2]">
            이력은 그대로,
            <br />
            증명은 자동으로.
          </h2>
          <p className="fade-up stagger-2 mt-5 text-base md:text-lg text-slate-600">
            본인 명의 계좌 인증 + 운영 이력 + 완료율. 트위터 바이오에 링크 한 줄.
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
    </section>
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
