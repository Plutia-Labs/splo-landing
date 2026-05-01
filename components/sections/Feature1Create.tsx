"use client";

import { ChevronDown, Sparkles } from "lucide-react";
import { useInView } from "@/components/hooks/useInView";

export function Feature1Create() {
  const { ref: headRef, inView: headInView } = useInView<HTMLDivElement>();
  const { ref: bodyRef, inView: bodyInView } = useInView<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: "0px 0px -15% 0px",
  });

  return (
    <section id="create" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div
          ref={headRef}
          data-in-view={headInView ? "true" : "false"}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="fade-up inline-block text-sm font-semibold text-brand-700">
            STEP 01 · 등록
          </span>
          <h2 className="fade-up stagger-1 mt-3 text-3xl md:text-5xl font-bold tracking-tight leading-[1.2]">
            입력은 한 번만,
            <br />
            모집글은 즉시.
          </h2>
          <p className="fade-up stagger-2 mt-5 text-base md:text-lg text-slate-600">
            앨범·슬롯·해시태그. 트위터에 붙여넣을 모집글이 즉시 나와요.
          </p>
        </div>

        <div
          ref={bodyRef}
          data-in-view={bodyInView ? "true" : "false"}
          className="fade-up relative mt-14 md:mt-20 h-[520px] md:h-[480px]"
        >
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
              <FormField label="아티스트" value="그룹 A" select />
              <FormField label="앨범" value="The Album · Vol.1" select />
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  가격 · 슬롯별
                </div>
                <div className="mt-1 space-y-1">
                  <SlotPriceRow name="멤버 A" price="₩4,300" />
                  <SlotPriceRow name="멤버 B" price="₩5,000" />
                  <SlotPriceRow name="멤버 C" price="₩4,300" />
                </div>
              </div>
              <FormField label="해시태그" value="#분철 #그룹A" />
            </div>

            <div className="mt-5">
              <div className="text-[11px] font-semibold text-slate-500">마감 방식</div>
              <div className="mt-2 flex gap-1.5">
                <Pill active>선착순</Pill>
                <Pill>승인</Pill>
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

            <div className="mt-4 text-sm text-ink leading-relaxed">
              <div>🎀 The Album · Vol.1 분철 모집</div>
              <div className="mt-3">· 그룹 A</div>
              <div>· 멤버 A 4,300원 (마감)</div>
              <div>· 멤버 B 5,000원</div>
              <div>· 멤버 C 4,300원</div>
              <div>· 마감 방식: 선착순</div>
              <div className="mt-3">신청은 ↓</div>
              <div className="text-brand-700">#분철 #그룹A</div>
            </div>

            <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-4 text-[11px] text-slate-500">
              <span>♡ 248</span>
              <span>↻ 132</span>
              <span>💬 24</span>
            </div>

            <div className="mt-3 pt-3 border-t border-slate-100">
              <div className="flex items-start gap-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 shrink-0" />
                <div className="flex-1">
                  <div className="text-[11px]">
                    <span className="font-bold text-ink">@host_a</span>
                    <span className="text-slate-500 ml-1">방금</span>
                  </div>
                  <div className="mt-0.5 text-sm text-ink leading-relaxed">
                    <div>splo.app/abc123</div>
                    <div className="text-brand-700">#분철 #그룹A</div>
                  </div>
                </div>
              </div>
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

function FormField({
  label,
  value,
  select,
}: {
  label: string;
  value: string;
  select?: boolean;
}) {
  return (
    <div>
      <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
        {label}
      </div>
      <div className="mt-1 px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-sm text-ink flex items-center justify-between">
        <span>{value}</span>
        {select && <ChevronDown size={14} className="text-slate-400" />}
      </div>
    </div>
  );
}

function SlotPriceRow({ name, price }: { name: string; price: string }) {
  return (
    <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-sm">
      <span className="text-slate-700">{name}</span>
      <span className="text-ink font-semibold">{price}</span>
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
