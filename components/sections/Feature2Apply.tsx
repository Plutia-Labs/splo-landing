"use client";

import { Check, ChevronDown } from "lucide-react";
import { useInView } from "@/components/hooks/useInView";
import { MobileStickyCarousel } from "@/components/MobileStickyCarousel";

export function Feature2Apply() {
  const { ref: headRef, inView: headInView } = useInView<HTMLDivElement>();
  const { ref: bodyRef, inView: bodyInView } = useInView<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: "0px 0px -15% 0px",
  });

  return (
    <section
      id="apply"
      className="bg-paper md:border-y md:border-slate-200"
    >
      <MobileStickyCarousel
        step="STEP 02 · 신청"
        title="대화 없이,"
        slides={[
          {
            caption: (
              <>
                한 번만 저장하면,
                <br />
                다음부턴 정보 일괄 입력.
              </>
            ),
            label: "분철자 화면 · 신청 폼",
            card: <ApplyFormCardCompact />,
          },
          {
            caption: (
              <>
                필요한 항목만 설정하면,
                <br />
                분철자 정보 자동 정리.
              </>
            ),
            label: "총대 화면 · 대시보드",
            card: <DashboardCardCompact />,
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
              STEP 02 · 신청
            </span>
            <h2 className="fade-up stagger-1 mt-3 text-3xl md:text-5xl font-bold tracking-tight leading-[1.2]">
              대화 없이,
            </h2>
            <p className="fade-up stagger-2 mt-3 text-base md:text-lg text-slate-600">
              분철자 — 한 번만 저장하면, 다음부턴 정보 일괄 입력.
              <br />
              총대 — 필요한 항목만 설정하면, 분철자 정보 자동 정리.
            </p>
          </div>

          <div
            ref={bodyRef}
            data-in-view={bodyInView ? "true" : "false"}
            className="mt-14 md:mt-20 grid lg:grid-cols-[1fr_auto_1.3fr] items-stretch gap-8 lg:gap-4"
          >
            <div className="fade-up flex flex-col justify-stretch lg:justify-stretch">
              <div className="mx-auto lg:ml-auto lg:mr-0 w-full max-w-[280px] text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 text-center lg:text-left">
                분철자 화면 · 신청 폼
              </div>
              <div className="mx-auto lg:ml-auto lg:mr-0 w-full max-w-[280px] flex-1 rounded-3xl border border-slate-200 bg-white shadow-xl p-6 flex flex-col">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-brand-700">
                    분철 신청 · 그룹 A
                  </div>

                  <div className="mt-4 space-y-3">
                    <PhoneField label="트위터 핸들" value="@me_user" filled tall />
                    <PhoneField
                      label="희망 멤버"
                      value="멤버 B"
                      filled
                      select
                      tall
                    />
                    <PhoneField
                      label="주소"
                      value="●●●●·●●●●·●●●●"
                      filled
                      masked
                      tall
                    />
                  </div>
                </div>

                <div className="mt-auto pt-5">
                  <button className="w-full bg-brand-500 text-ink text-sm font-bold py-2.5 rounded-xl">
                    신청하기
                  </button>

                  <div className="mt-2 text-[10px] text-slate-500 text-center">
                    저장된 정보로 자동 입력됨
                  </div>
                </div>
              </div>
            </div>

            <div className="fade-up stagger-1 hidden lg:flex flex-col items-center justify-center px-2">
              <FlowDots direction="right" />
              <div className="my-3 text-[10px] tracking-widest" aria-hidden>
                &nbsp;
              </div>
              <FlowDots direction="left" />
            </div>

            <div className="fade-up stagger-2">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                총대 화면 · 대시보드
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white shadow-xl overflow-hidden">
                <div className="px-5 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-300" />
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono">
                    splo.app/dashboard
                  </div>
                </div>

                <div className="p-5">
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    받을 정보 설정
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    <FieldChip>핸들</FieldChip>
                    <FieldChip>주소</FieldChip>
                    <FieldChip>개봉 여부</FieldChip>
                    <FieldChip>+ 직접 추가</FieldChip>
                  </div>

                  <div className="mt-5 rounded-xl border border-slate-200 overflow-hidden">
                    <div className="grid grid-cols-[50px_1fr_70px_50px] bg-slate-50 px-3 py-2 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      <span>멤버</span>
                      <span>핸들</span>
                      <span>개봉 여부</span>
                      <span className="text-right">결제</span>
                    </div>
                    <ApplicantRow member="A" handle="@han_a" opened paid />
                    <ApplicantRow member="B" handle="@han_b" opened paid />
                    <ApplicantRow member="C" handle="@han_c" opened />
                    <ApplicantRow member="D" handle="@han_d" paid />
                    <ApplicantRow member="E" handle="@han_e" />
                  </div>

                  <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500">
                    <span>전체 5명</span>
                    <span className="text-emerald-600 font-semibold">
                      결제 완료 3 · 대기 2
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardCardCompact() {
  return (
    <div className="w-[300px] max-w-[86vw] rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden">
      <div className="px-3 py-1.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-rose-300" />
          <span className="w-2 h-2 rounded-full bg-amber-300" />
          <span className="w-2 h-2 rounded-full bg-emerald-300" />
        </div>
        <div className="text-[10px] text-slate-500 font-mono">
          splo.app/dashboard
        </div>
      </div>
      <div className="p-3">
        <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
          받을 정보 설정
        </div>
        <div className="mt-1.5 flex flex-wrap gap-1">
          <FieldChip>핸들</FieldChip>
          <FieldChip>주소</FieldChip>
          <FieldChip>개봉 여부</FieldChip>
          <FieldChip>+ 추가</FieldChip>
        </div>
        <div className="mt-3 rounded-lg border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-[40px_1fr_50px_40px] bg-slate-50 px-2 py-1.5 text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
            <span>멤버</span>
            <span>핸들</span>
            <span>개봉 여부</span>
            <span className="text-right">결제</span>
          </div>
          <ApplicantRowCompact member="A" handle="@han_a" opened paid />
          <ApplicantRowCompact member="B" handle="@han_b" opened paid />
          <ApplicantRowCompact member="C" handle="@han_c" opened />
          <ApplicantRowCompact member="D" handle="@han_d" />
        </div>
        <div className="mt-2 flex items-center justify-between text-[10px] text-slate-500">
          <span>전체 4명</span>
          <span className="text-emerald-600 font-semibold">
            결제 2 · 대기 2
          </span>
        </div>
      </div>
    </div>
  );
}

function ApplyFormCardCompact() {
  return (
    <div className="w-[260px] max-w-[78vw] rounded-2xl border border-slate-200 bg-white shadow-xl p-4">
      <div className="text-[11px] font-semibold uppercase tracking-wider text-brand-700">
        분철 신청 · 그룹 A
      </div>
      <div className="mt-3 space-y-2">
        <PhoneField label="트위터 핸들" value="@me_user" filled />
        <PhoneField label="희망 멤버" value="멤버 B" filled select />
        <PhoneField
          label="주소"
          value="●●●●·●●●●·●●●●"
          filled
          masked
        />
      </div>
      <button className="mt-4 w-full bg-brand-500 text-ink text-xs font-bold py-2 rounded-lg">
        신청하기
      </button>
      <div className="mt-1.5 text-[10px] text-slate-500 text-center">
        저장된 정보로 자동 입력됨
      </div>
    </div>
  );
}

function FieldChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-md bg-brand-50 text-brand-700 border border-brand-300">
      {children}
    </span>
  );
}

function ApplicantRow({
  member,
  handle,
  opened,
  paid,
}: {
  member: string;
  handle: string;
  opened?: boolean;
  paid?: boolean;
}) {
  return (
    <div className="grid grid-cols-[50px_1fr_70px_50px] items-center px-3 py-2 text-xs border-t border-slate-100 first:border-t-0">
      <span className="text-slate-700 font-medium">{member}</span>
      <span className="text-slate-500">{handle}</span>
      <span>
        {opened ? (
          <span className="text-emerald-600 font-semibold">개봉</span>
        ) : (
          <span className="text-slate-300">미개봉</span>
        )}
      </span>
      <span className="flex justify-end">
        <span
          className={`inline-flex items-center justify-center w-4 h-4 rounded border-2 ${
            paid
              ? "bg-emerald-500 border-emerald-500"
              : "bg-white border-slate-300"
          }`}
        >
          {paid && <Check size={10} strokeWidth={3} className="text-white" />}
        </span>
      </span>
    </div>
  );
}

function ApplicantRowCompact({
  member,
  handle,
  opened,
  paid,
}: {
  member: string;
  handle: string;
  opened?: boolean;
  paid?: boolean;
}) {
  return (
    <div className="grid grid-cols-[40px_1fr_50px_40px] items-center px-2 py-1.5 text-[11px] border-t border-slate-100 first:border-t-0">
      <span className="text-slate-700 font-medium">{member}</span>
      <span className="text-slate-500 truncate">{handle}</span>
      <span>
        {opened ? (
          <span className="text-emerald-600 font-semibold">개봉</span>
        ) : (
          <span className="text-slate-300">미개봉</span>
        )}
      </span>
      <span className="flex justify-end">
        <span
          className={`inline-flex items-center justify-center w-3.5 h-3.5 rounded border-2 ${
            paid
              ? "bg-emerald-500 border-emerald-500"
              : "bg-white border-slate-300"
          }`}
        >
          {paid && <Check size={8} strokeWidth={3} className="text-white" />}
        </span>
      </span>
    </div>
  );
}

function PhoneField({
  label,
  value,
  filled,
  select,
  masked,
  tall,
}: {
  label: string;
  value: string;
  filled?: boolean;
  select?: boolean;
  masked?: boolean;
  tall?: boolean;
}) {
  return (
    <div>
      <div className="text-[10px] font-semibold text-slate-500">{label}</div>
      <div
        className={`mt-1 px-2.5 ${tall ? "py-3" : "py-2"} rounded-lg text-xs flex items-center justify-between ${
          filled
            ? "bg-brand-50 border border-brand-300 text-ink font-medium"
            : "bg-slate-50 border border-slate-200 text-slate-400"
        }`}
      >
        <span
          className={
            masked
              ? "font-mono tracking-widest text-slate-400"
              : ""
          }
        >
          {value}
        </span>
        {select && (
          <ChevronDown
            size={12}
            className={filled ? "text-brand-700" : "text-slate-400"}
          />
        )}
        {masked && (
          <Check size={12} strokeWidth={3} className="text-brand-700" />
        )}
      </div>
    </div>
  );
}

function FlowDots({ direction }: { direction: "left" | "right" }) {
  return (
    <div className="flex items-center gap-1">
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className={`w-1.5 h-1.5 rounded-full ${
            direction === "right"
              ? i % 2 === 0
                ? "bg-brand-500"
                : "bg-brand-300"
              : i % 2 === 0
              ? "bg-accent-500"
              : "bg-accent-300"
          }`}
        />
      ))}
    </div>
  );
}
