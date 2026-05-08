"use client";

import { Sparkles } from "lucide-react";
import { useInView } from "@/components/hooks/useInView";
import { MobileStickyCarousel } from "@/components/MobileStickyCarousel";

export function Feature1Create() {
  const { ref: headRef, inView: headInView } = useInView<HTMLDivElement>();
  const { ref: bodyRef, inView: bodyInView } = useInView<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: "0px 0px -15% 0px",
  });

  return (
    <section id="create" className="bg-white">
      <MobileStickyCarousel
        step="STEP 01 · 모집"
        title="게시글은 한 번만,"
        slides={[
          {
            caption: "마감 정보는 링크에서 자동 업데이트.",
            label: "분철 모집글 · 트위터",
            card: <TweetCardCompact />,
          },
          {
            caption: (
              <>
                최신 게시글 찾을 필요 없이,
                <br />
                클릭 한 번으로 확인.
              </>
            ),
            label: "분철 페이지 · 스플로",
            card: <LinkPageCardCompact />,
          },
        ]}
      />

      <div className="hidden md:block relative overflow-hidden py-32">
        <div className="mx-auto max-w-6xl px-5">
          <div
            ref={headRef}
            data-in-view={headInView ? "true" : "false"}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="fade-up inline-block text-sm font-semibold text-brand-700">
              STEP 01 · 모집
            </span>
            <h2 className="fade-up stagger-1 mt-3 text-5xl font-bold tracking-tight leading-[1.2]">
              게시글은 한 번만,
            </h2>
          </div>

          <div
            ref={bodyRef}
            data-in-view={bodyInView ? "true" : "false"}
            className="fade-up relative mt-20 h-[640px]"
          >
            <div className="absolute left-[6%] top-4 -rotate-3 z-10 flex flex-col items-center">
              <p className="mb-4 text-base font-bold text-slate-600 text-center max-w-[300px] leading-snug">
                마감 정보는 링크에서 자동 업데이트.
              </p>
              <TweetCard />
              <p className="mt-3 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                분철 모집글 · 트위터
              </p>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 shadow-lg float-y">
              <Sparkles size={24} className="text-white" />
            </div>
            <div className="absolute right-[4%] top-12 rotate-2 z-30 flex flex-col items-center">
              <p className="mb-4 text-base font-bold text-slate-600 text-center max-w-[300px] leading-snug">
                최신 게시글 찾을 필요 없이,
                <br />
                클릭 한 번으로 확인.
              </p>
              <LinkPageCard />
              <p className="mt-3 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                분철 페이지 · 스플로
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TweetCardCompact() {
  return (
    <div className="w-[280px] max-w-[82vw] rounded-2xl border border-slate-200 bg-white shadow-xl p-4">
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-500 to-accent-500" />
        <div>
          <div className="text-sm font-bold text-ink">@host_a</div>
          <div className="text-[11px] text-slate-500">방금 · 트위터</div>
        </div>
      </div>
      <div className="mt-3 text-sm text-ink leading-relaxed">
        <div>🎀 The Album · Vol.1 분철 모집</div>
        <div className="mt-2">· 그룹 A · 음반사 ABC</div>
        <div className="mt-2">신청 링크는 댓글에 ↓</div>
        <div className="text-brand-700">#분철 #그룹A #The_Album</div>
      </div>
      <div className="mt-3 pt-2 border-t border-slate-100 flex items-center gap-3 text-[11px] text-slate-500">
        <span>♡ 248</span>
        <span>↻ 132</span>
        <span>💬 24</span>
      </div>
      <div className="mt-2 pt-2 border-t border-slate-100">
        <div className="flex items-start gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 shrink-0" />
          <div className="flex-1">
            <div className="text-[11px]">
              <span className="font-bold text-ink">@host_a</span>
              <span className="text-slate-500 ml-1">방금</span>
            </div>
            <div className="text-sm text-brand-700 leading-relaxed">
              splo.app/abc123
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LinkPageCardCompact() {
  return (
    <div className="w-[300px] max-w-[86vw] rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden">
      <div className="px-4 py-2 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-rose-300" />
          <span className="w-2 h-2 rounded-full bg-amber-300" />
          <span className="w-2 h-2 rounded-full bg-emerald-300" />
        </div>
        <div className="text-[10px] text-slate-500 font-mono">
          splo.app/abc123
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500" />
          <div>
            <div className="text-sm font-bold text-ink">The Album · Vol.1</div>
            <div className="text-[11px] text-slate-500">
              그룹 A · 음반사 ABC
            </div>
          </div>
        </div>
        <div className="mt-3">
          <div className="flex items-center justify-between">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              멤버별 가격 · 슬롯
            </div>
            <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
              <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
              실시간
            </span>
          </div>
          <div className="mt-2 space-y-1">
            <SlotRowCompact name="멤버 A" price="₩4,300" status="마감" closed />
            <SlotRowCompact name="멤버 B" price="₩5,000" status="3 / 5" />
            <SlotRowCompact name="멤버 C" price="₩4,300" status="1 / 5" />
          </div>
        </div>
        <button className="mt-3 w-full bg-brand-500 text-ink text-xs font-bold py-2 rounded-lg">
          신청하기
        </button>
      </div>
    </div>
  );
}

function SlotRowCompact({
  name,
  price,
  status,
  closed,
}: {
  name: string;
  price: string;
  status: string;
  closed?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs ${
        closed ? "bg-slate-50 opacity-60" : "bg-brand-50"
      }`}
    >
      <span
        className={`font-medium ${
          closed ? "text-slate-500 line-through" : "text-slate-700"
        }`}
      >
        {name}
      </span>
      <div className="flex items-center gap-2">
        <span
          className={`font-semibold tabular-nums ${
            closed ? "text-slate-400" : "text-ink"
          }`}
        >
          {price}
        </span>
        <span
          className={`text-[10px] font-semibold ${
            closed ? "text-slate-400" : "text-emerald-600"
          }`}
        >
          {status}
        </span>
      </div>
    </div>
  );
}

function TweetCard() {
  return (
    <div className="w-[300px] md:w-[340px] rounded-3xl border border-slate-200 bg-white shadow-xl p-5">
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
        <div>· 음반사 ABC Records</div>
        <div className="mt-3">신청 링크는 댓글에 ↓</div>
        <div className="text-brand-700">#분철 #그룹A #The_Album</div>
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
            <div className="mt-0.5 text-sm text-brand-700 leading-relaxed">
              splo.app/abc123
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LinkPageCard() {
  return (
    <div className="w-[300px] md:w-[360px] rounded-3xl border border-slate-200 bg-white shadow-xl overflow-hidden">
      <div className="px-5 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-300" />
        </div>
        <div className="text-[11px] text-slate-500 font-mono">
          splo.app/abc123
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500" />
          <div>
            <div className="text-sm font-bold text-ink">The Album · Vol.1</div>
            <div className="text-[11px] text-slate-500">
              그룹 A · 음반사 ABC
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              멤버별 가격 · 슬롯
            </div>
            <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              실시간
            </span>
          </div>
          <div className="mt-2 space-y-1.5">
            <SlotRow name="멤버 A" price="₩4,300" status="마감" closed />
            <SlotRow name="멤버 B" price="₩5,000" status="3 / 5명" />
            <SlotRow name="멤버 C" price="₩4,300" status="1 / 5명" />
          </div>
        </div>

        <div className="mt-4 text-[11px] text-slate-500">
          마감 방식 · <span className="text-ink font-semibold">선착순</span>
        </div>

        <button className="mt-4 w-full bg-brand-500 text-ink text-sm font-bold py-2.5 rounded-xl">
          신청하기
        </button>
      </div>
    </div>
  );
}

function SlotRow({
  name,
  price,
  status,
  closed,
}: {
  name: string;
  price: string;
  status: string;
  closed?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm ${
        closed ? "bg-slate-50 opacity-60" : "bg-brand-50"
      }`}
    >
      <span
        className={`font-medium ${
          closed ? "text-slate-500 line-through" : "text-slate-700"
        }`}
      >
        {name}
      </span>
      <div className="flex items-center gap-3">
        <span
          className={`font-semibold tabular-nums ${
            closed ? "text-slate-400" : "text-ink"
          }`}
        >
          {price}
        </span>
        <span
          className={`text-[11px] font-semibold ${
            closed ? "text-slate-400" : "text-emerald-600"
          }`}
        >
          {status}
        </span>
      </div>
    </div>
  );
}
