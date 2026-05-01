"use client";

import { Sparkles } from "lucide-react";
import { useInView } from "@/components/hooks/useInView";

export function Feature1Create() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="create" className="relative overflow-hidden py-24 md:py-32">
      <div
        ref={ref}
        className="mx-auto max-w-6xl px-5"
        data-in-view={inView ? "true" : "false"}
      >
        <div className="text-center max-w-2xl mx-auto">
          <span className="fade-up inline-block text-sm font-semibold text-brand-700">
            STEP 01 · 분철 등록
          </span>
          <h2 className="fade-up stagger-1 mt-3 text-3xl md:text-5xl font-bold tracking-tight leading-[1.2]">
            한 번 채우면,
            <br />
            <span className="gradient-text">모집글이 알아서</span> 완성돼요.
          </h2>
          <p className="fade-up stagger-2 mt-5 text-base md:text-lg text-slate-600">
            앨범·슬롯·계좌. 트위터에 붙여넣을 모집글이 즉시 나와요.
          </p>
        </div>

        <div className="fade-up stagger-3 relative mt-14 md:mt-20 h-[520px] md:h-[480px]">
          <div
            className="
              absolute left-1/2 top-0 -translate-x-1/2
              md:left-[6%] md:top-4 md:translate-x-0 md:-rotate-3
              w-[280px] md:w-[340px] z-10
              rounded-3xl border border-slate-200 bg-white shadow-xl p-5
            "
          >
            <div className="text-[11px] font-semibold uppercase tracking-wider text-brand-700">
              분철 정보 입력
            </div>

            <div className="mt-4 space-y-3">
              <FormField label="앨범" value="The Album · Vol.1" />
              <FormField label="가격" value="₩4,300 / 슬롯" />
              <FormField label="계좌" value="○○은행 123-456-7890" />
              <FormField label="해시태그" value="#분철 #그룹A" />
            </div>

            <div className="mt-5">
              <div className="text-[11px] font-semibold text-slate-500">마감 방식</div>
              <div className="mt-2 flex gap-1.5">
                <Pill active>선착순</Pill>
                <Pill>승인</Pill>
                <Pill>추첨</Pill>
              </div>
            </div>
          </div>

          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 shadow-lg float-y">
            <Sparkles size={24} className="text-white" />
          </div>

          <div
            className="
              absolute left-1/2 bottom-0 -translate-x-1/2
              md:left-auto md:right-[4%] md:top-16 md:bottom-auto md:translate-x-0 md:rotate-2
              w-[300px] md:w-[360px] z-30
              rounded-3xl border border-slate-200 bg-white shadow-2xl p-5
            "
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-accent-500" />
              <div>
                <div className="text-sm font-bold text-ink">@host_a</div>
                <div className="text-[11px] text-slate-500">방금 · 트위터</div>
              </div>
            </div>

            <div className="mt-4 text-sm text-ink leading-relaxed whitespace-pre-line">
              {`🎀 The Album · Vol.1 분철 모집

· 그룹 A · 멤버별 4,300원
· 마감 방식: 선착순
· 입금처: ○○은행 123-456-7890

신청은 ↓
splo.io/abc123

#분철 #그룹A`}
            </div>

            <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-4 text-[11px] text-slate-500">
              <span>♡ 248</span>
              <span>↻ 132</span>
              <span>💬 24</span>
            </div>
          </div>

          <div className="md:hidden absolute left-1/2 top-[260px] -translate-x-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 shadow-lg">
            <Sparkles size={20} className="text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
        {label}
      </div>
      <div className="mt-1 px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-sm text-ink">
        {value}
      </div>
    </div>
  );
}

function Pill({
  children,
  active,
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <span
      className={`flex-1 text-center text-[11px] font-semibold px-2 py-1.5 rounded-full ${
        active
          ? "bg-brand-50 border-2 border-brand-500 text-brand-700"
          : "bg-white border border-slate-200 text-slate-500"
      }`}
    >
      {children}
    </span>
  );
}
