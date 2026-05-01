"use client";

import { Check, ChevronDown } from "lucide-react";
import { useInView } from "@/components/hooks/useInView";

export function Feature2Apply() {
  const { ref: headRef, inView: headInView } = useInView<HTMLDivElement>();
  const { ref: bodyRef, inView: bodyInView } = useInView<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: "0px 0px -15% 0px",
  });

  return (
    <section
      id="apply"
      className="relative overflow-hidden py-24 md:py-32 bg-white border-y border-slate-200"
    >
      <div className="mx-auto max-w-6xl px-5">
        <div
          ref={headRef}
          data-in-view={headInView ? "true" : "false"}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="fade-up inline-block text-sm font-semibold text-brand-700">
            STEP 02 · 모집
          </span>
          <h2 className="fade-up stagger-1 mt-3 text-3xl md:text-5xl font-bold tracking-tight leading-[1.2]">
            필드는 총대,
            <br />
            답은 참여자.
          </h2>
          <p className="fade-up stagger-2 mt-5 text-base md:text-lg text-slate-600">
            받을 정보만 정해두면, 신청은 한 테이블에 자동으로 쌓여요.
          </p>
        </div>

        <div
          ref={bodyRef}
          data-in-view={bodyInView ? "true" : "false"}
          className="mt-14 md:mt-20 grid lg:grid-cols-[1.3fr_auto_1fr] items-center gap-8 lg:gap-4"
        >
          <div className="fade-up">
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
                  <FieldChip>멤버</FieldChip>
                  <FieldChip>핸들</FieldChip>
                  <FieldChip>주소</FieldChip>
                  <FieldChip>+ 직접 추가</FieldChip>
                </div>

                <div className="mt-5 rounded-xl border border-slate-200 overflow-hidden">
                  <div className="grid grid-cols-[50px_1fr_70px_50px] bg-slate-50 px-3 py-2 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    <span>멤버</span>
                    <span>핸들</span>
                    <span>개봉</span>
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

          <div className="fade-up stagger-1 hidden lg:flex flex-col items-center justify-center px-2">
            <FlowDots direction="left" />
            <div className="my-3 text-[10px] tracking-widest" aria-hidden>
              &nbsp;
            </div>
            <FlowDots direction="right" />
          </div>

          <div className="fade-up stagger-2 flex justify-center lg:justify-start">
            <div className="text-center lg:text-left w-full">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                참여자 화면
              </div>

              <div className="mx-auto lg:mx-0 w-full max-w-[300px] rounded-3xl border border-slate-200 bg-white shadow-xl p-5">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-brand-700">
                  분철 신청 · 그룹 A
                </div>

                <div className="mt-4 space-y-3">
                  <PhoneField label="트위터 핸들" value="@me_user" filled />
                  <PhoneField label="희망 멤버" value="멤버 B" filled select />
                  <PhoneField label="주소" value="입력하기..." />
                </div>

                <button className="mt-5 w-full bg-brand-500 text-ink text-sm font-bold py-2.5 rounded-xl">
                  신청하기
                </button>

                <div className="mt-2 text-[10px] text-slate-500 text-center">
                  승인되면 계좌 안내 알림이 와요
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
          {paid && (
            <Check size={10} strokeWidth={3} className="text-white" />
          )}
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
}: {
  label: string;
  value: string;
  filled?: boolean;
  select?: boolean;
}) {
  return (
    <div>
      <div className="text-[10px] font-semibold text-slate-500">{label}</div>
      <div
        className={`mt-1 px-2.5 py-2 rounded-lg text-xs flex items-center justify-between ${
          filled
            ? "bg-brand-50 border border-brand-300 text-ink font-medium"
            : "bg-slate-50 border border-slate-200 text-slate-400"
        }`}
      >
        <span>{value}</span>
        {select && (
          <ChevronDown
            size={12}
            className={filled ? "text-brand-700" : "text-slate-400"}
          />
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
