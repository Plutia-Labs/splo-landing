"use client";

import Image from "next/image";
import { ChevronDown, Plus } from "lucide-react";
import { useInView } from "@/components/hooks/useInView";
import { MobileStickyCarousel } from "@/components/MobileStickyCarousel";

type Demand = {
  group: string;
  album: string;
  publisher: string;
  members: { name: string; count: number }[];
  hot?: boolean;
};

const DEMANDS: Demand[] = [
  {
    group: "그룹 A",
    album: "The Album Vol.2",
    publisher: "ABC Records",
    members: [
      { name: "멤버 A", count: 12 },
      { name: "멤버 B", count: 8 },
      { name: "멤버 C", count: 5 },
      { name: "멤버 D", count: 7 },
    ],
    hot: true,
  },
  {
    group: "그룹 B",
    album: "미니 3집",
    publisher: "XYZ Music",
    members: [
      { name: "멤버 A", count: 8 },
      { name: "멤버 B", count: 6 },
      { name: "멤버 C", count: 4 },
    ],
  },
];

export function Feature5Match() {
  const { ref: headRef, inView: headInView } = useInView<HTMLDivElement>();
  const { ref: bodyRef, inView: bodyInView } = useInView<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: "0px 0px -15% 0px",
  });

  return (
    <section id="match" className="bg-white md:border-b md:border-slate-200">
      <MobileStickyCarousel
        step="STEP 05 · 매칭"
        title="원하는 분철 없어도,"
        slides={[
          {
            caption: "등록만 해두면, 새 분철 열릴 때 알림.",
            label: "원하는 분철 등록 · 분철자 화면",
            card: <RegistrationCardCompact />,
          },
          {
            caption: (
              <>
                모인 수요 풀 보고,
                <br />
                어떤 분철 열지 한눈에.
              </>
            ),
            label: "수요 풀 · 총대 대시보드",
            card: <DemandPoolCardCompact />,
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
              STEP 05 · 매칭
            </span>
            <h2 className="fade-up stagger-1 mt-3 text-3xl md:text-5xl font-bold tracking-tight leading-[1.2]">
              원하는 분철 없어도,
            </h2>
          </div>

          <div
            ref={bodyRef}
            data-in-view={bodyInView ? "true" : "false"}
            className="fade-up relative mt-14 md:mt-20 h-[600px]"
          >
            <div
              className="
                absolute left-1/2 top-0 -translate-x-1/2
                md:left-[6%] md:top-0 md:translate-x-0 md:-rotate-3
                w-[300px] md:w-[340px] z-10
                flex flex-col items-center
              "
            >
              <p className="mb-4 md:-mt-8 text-base font-bold text-slate-600 text-center max-w-[300px] leading-snug">
                등록만 해두면, 새 분철 열릴 때 알림.
              </p>
              <div className="w-full rounded-3xl border border-slate-200 bg-white shadow-xl p-5">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-brand-700">
                  원하는 분철 등록
                </div>

                <div className="mt-4 space-y-3">
                  <RegistrationField label="아티스트" value="그룹 A" filled />
                  <RegistrationField label="멤버" value="멤버 B" filled />
                  <RegistrationField
                    label="앨범"
                    value="The Album · Vol.2"
                    filled
                  />
                  <RegistrationField label="가격대" value="~ ₩6,000" />
                </div>

                <button className="mt-5 w-full bg-brand-500 text-ink text-sm font-bold py-2.5 rounded-xl">
                  등록하기
                </button>
              </div>
              <p className="mt-3 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                원하는 분철 등록 · 분철자 화면
              </p>
            </div>

            <div
              className="
                absolute left-[62%] top-[20px] -translate-x-1/2
                md:left-[19%] md:top-4 md:translate-x-0 md:rotate-2
                w-[220px] md:w-[260px] z-20
                rounded-2xl border border-slate-200 bg-white shadow-lg p-3
                flex items-center gap-2 float-y
              "
            >
              <Image
                src="/img/splo-icon.png"
                alt="스플로"
                width={32}
                height={32}
                className="w-8 h-8 rounded-lg ring-1 ring-slate-200 shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="text-[11px] font-bold text-ink truncate">
                  스플로
                </div>
                <div className="text-[10px] text-slate-400 leading-snug">
                  새 분철 열렸어요 — 그룹 A · The Album Vol.2
                </div>
              </div>
            </div>

            <div
              className="
                absolute left-1/2 bottom-0 -translate-x-1/2
                md:left-auto md:right-[4%] md:top-0 md:bottom-auto md:translate-x-0 md:rotate-2
                w-[320px] md:w-[380px] z-30
                flex flex-col items-center
              "
            >
              <p className="mb-4 text-base font-bold text-slate-600 text-center max-w-[300px] leading-snug">
                모인 수요 풀 보고,
                <br />
                어떤 분철 열지 한눈에.
              </p>
              <div className="w-full rounded-3xl border border-slate-200 bg-white shadow-2xl overflow-hidden">
                <div className="px-5 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-300" />
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono">
                    splo.app/demand
                  </div>
                </div>

                <div className="p-5">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                    수요 풀
                  </div>

                  <div className="mt-3 space-y-2">
                    {DEMANDS.map((d, i) => (
                      <DemandBlock key={d.album} demand={d} open={i === 0} />
                    ))}
                  </div>

                  <button className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-brand-500 text-ink text-sm font-bold py-2.5 rounded-xl">
                    <Plus size={14} strokeWidth={3} />
                    분철 개설
                  </button>
                </div>
              </div>
              <p className="mt-3 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                수요 풀 · 총대 대시보드
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RegistrationCardCompact() {
  return (
    <div className="relative w-[260px] max-w-[78vw]">
      <div className="rounded-2xl border border-slate-200 bg-white shadow-xl p-4">
        <div className="text-[10px] font-semibold uppercase tracking-wider text-brand-700">
          원하는 분철 등록
        </div>
        <div className="mt-3 space-y-2">
          <RegistrationFieldCompact label="아티스트" value="그룹 A" filled />
          <RegistrationFieldCompact label="멤버" value="멤버 B" filled />
          <RegistrationFieldCompact
            label="앨범"
            value="The Album · Vol.2"
            filled
          />
          <RegistrationFieldCompact label="가격대" value="~ ₩6,000" />
        </div>
        <button className="mt-4 w-full bg-brand-500 text-ink text-xs font-bold py-2 rounded-lg">
          등록하기
        </button>
      </div>

      <div className="absolute -top-3 -right-2 rotate-2 w-[200px] rounded-xl border border-slate-200 bg-white shadow-lg p-2 flex items-center gap-2">
        <Image
          src="/img/splo-icon.png"
          alt="스플로"
          width={28}
          height={28}
          className="w-7 h-7 rounded-lg ring-1 ring-slate-200 shrink-0"
        />
        <div className="flex-1 min-w-0">
          <div className="text-[10px] font-bold text-ink">스플로</div>
          <div className="text-[9px] text-slate-400 leading-snug">
            새 분철 열렸어요 — 그룹 A · The Album Vol.2
          </div>
        </div>
      </div>
    </div>
  );
}

function DemandPoolCardCompact() {
  return (
    <div className="w-[300px] max-w-[86vw] rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden">
      <div className="px-3 py-1.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-rose-300" />
          <span className="w-2 h-2 rounded-full bg-amber-300" />
          <span className="w-2 h-2 rounded-full bg-emerald-300" />
        </div>
        <div className="text-[10px] text-slate-500 font-mono">
          splo.app/demand
        </div>
      </div>
      <div className="p-3">
        <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
          수요 풀
        </div>
        <div className="mt-2 space-y-1.5">
          {DEMANDS.map((d, i) => (
            <DemandBlockCompact key={d.album} demand={d} open={i === 0} />
          ))}
        </div>
        <button className="mt-3 w-full inline-flex items-center justify-center gap-1.5 bg-brand-500 text-ink text-xs font-bold py-2 rounded-lg">
          <Plus size={12} strokeWidth={3} />
          분철 개설
        </button>
      </div>
    </div>
  );
}

function RegistrationField({
  label,
  value,
  filled,
}: {
  label: string;
  value: string;
  filled?: boolean;
}) {
  return (
    <div>
      <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
        {label}
      </div>
      <div
        className={`mt-1 px-3 py-2 rounded-lg text-sm flex items-center justify-between border ${
          filled
            ? "bg-brand-50 border-brand-300 text-ink font-medium"
            : "bg-slate-50 border-slate-200 text-slate-500"
        }`}
      >
        <span>{value}</span>
      </div>
    </div>
  );
}

function RegistrationFieldCompact({
  label,
  value,
  filled,
}: {
  label: string;
  value: string;
  filled?: boolean;
}) {
  return (
    <div>
      <div className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">
        {label}
      </div>
      <div
        className={`mt-0.5 px-2.5 py-1.5 rounded-md text-xs flex items-center justify-between border ${
          filled
            ? "bg-brand-50 border-brand-300 text-ink font-medium"
            : "bg-slate-50 border-slate-200 text-slate-500"
        }`}
      >
        <span>{value}</span>
      </div>
    </div>
  );
}

function DemandBlock({ demand, open }: { demand: Demand; open: boolean }) {
  const sets = Math.min(...demand.members.map((m) => m.count));

  return (
    <div
      className={`rounded-lg border overflow-hidden ${
        demand.hot
          ? "bg-brand-50 border-brand-300"
          : "bg-slate-50 border-slate-200"
      }`}
    >
      <div className="w-full flex items-center justify-between px-3 py-2.5">
        <div className="min-w-0 flex-1">
          <div className="text-xs font-semibold text-ink truncate">
            {demand.group} · {demand.album}
          </div>
          <div className="text-[10px] text-slate-500 truncate">
            {demand.publisher}
          </div>
        </div>
        <div className="flex items-center gap-1.5 shrink-0 ml-2">
          <span
            className={`text-xs font-bold tabular-nums ${
              demand.hot ? "text-brand-700" : "text-slate-600"
            }`}
          >
            {sets}세트
          </span>
          <ChevronDown
            size={14}
            className={`transition-transform ${
              demand.hot ? "text-brand-700" : "text-slate-500"
            } ${open ? "rotate-180" : ""}`}
          />
        </div>
      </div>

      {open && (
        <div className="px-3 pb-2.5 pt-0">
          <div className="space-y-1">
            {demand.members.map((m) => (
              <div
                key={m.name}
                className="flex items-center justify-between text-[11px]"
              >
                <span className="text-slate-600">{m.name}</span>
                <span className="font-semibold tabular-nums text-slate-700">
                  {m.count}명
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function DemandBlockCompact({
  demand,
  open,
}: {
  demand: Demand;
  open: boolean;
}) {
  const sets = Math.min(...demand.members.map((m) => m.count));

  return (
    <div
      className={`rounded-md border overflow-hidden ${
        demand.hot
          ? "bg-brand-50 border-brand-300"
          : "bg-slate-50 border-slate-200"
      }`}
    >
      <div className="flex items-center justify-between px-2.5 py-2">
        <div className="min-w-0 flex-1">
          <div className="text-[11px] font-semibold text-ink truncate">
            {demand.group} · {demand.album}
          </div>
          <div className="text-[9px] text-slate-500 truncate">
            {demand.publisher}
          </div>
        </div>
        <div className="flex items-center gap-1 shrink-0 ml-2">
          <span
            className={`text-[11px] font-bold tabular-nums ${
              demand.hot ? "text-brand-700" : "text-slate-600"
            }`}
          >
            {sets}세트
          </span>
          <ChevronDown
            size={12}
            className={`transition-transform ${
              demand.hot ? "text-brand-700" : "text-slate-500"
            } ${open ? "rotate-180" : ""}`}
          />
        </div>
      </div>

      {open && (
        <div className="px-2.5 pb-2 pt-0">
          <div className="space-y-0.5">
            {demand.members.map((m) => (
              <div
                key={m.name}
                className="flex items-center justify-between text-[10px]"
              >
                <span className="text-slate-600">{m.name}</span>
                <span className="font-semibold tabular-nums text-slate-700">
                  {m.count}명
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
