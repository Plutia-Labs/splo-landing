"use client";

import { CheckCircle2 } from "lucide-react";
import { useInView } from "@/components/hooks/useInView";

export function Feature2Apply() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section
      id="apply"
      className="relative overflow-hidden py-24 md:py-32 bg-white border-y border-slate-200"
    >
      <div
        ref={ref}
        className="mx-auto max-w-6xl px-5"
        data-in-view={inView ? "true" : "false"}
      >
        <div className="text-center max-w-2xl mx-auto">
          <span className="fade-up inline-block text-sm font-semibold text-brand-700">
            STEP 02 · 모집
          </span>
          <h2 className="fade-up stagger-1 mt-3 text-3xl md:text-5xl font-bold tracking-tight leading-[1.2]">
            필드는 총대가,
            <br />
            <span className="gradient-text">답은 참여자</span>가.
          </h2>
          <p className="fade-up stagger-2 mt-5 text-base md:text-lg text-slate-600">
            받을 정보만 정해두면, 신청은 한 테이블에 자동으로 쌓여요.
          </p>
        </div>

        <div className="mt-14 md:mt-20 grid lg:grid-cols-[1.3fr_auto_1fr] items-center gap-8 lg:gap-4">
          <div className="fade-up stagger-3">
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
                  splo.io/dashboard
                </div>
              </div>

              <div className="p-5">
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  받을 정보 설정
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  <FieldChip>트위터 핸들</FieldChip>
                  <FieldChip>희망 멤버</FieldChip>
                  <FieldChip>주소</FieldChip>
                  <FieldChip>+ 직접 추가</FieldChip>
                </div>

                <div className="mt-5 rounded-xl border border-slate-200 overflow-hidden">
                  <div className="grid grid-cols-[1fr_60px_60px_50px] bg-slate-50 px-3 py-2 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    <span>핸들</span>
                    <span>멤버</span>
                    <span>결제</span>
                    <span></span>
                  </div>
                  <ApplicantRow handle="@han_a" member="A" paid />
                  <ApplicantRow handle="@han_b" member="B" paid />
                  <ApplicantRow handle="@han_c" member="A" paid />
                  <ApplicantRow handle="@han_d" member="C" />
                  <ApplicantRow handle="@han_e" member="B" pending />
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

          <div className="fade-up stagger-4 hidden lg:flex flex-col items-center justify-center px-2">
            <FlowDots direction="left" />
            <div className="my-3 text-[10px] font-semibold text-slate-400 uppercase tracking-widest rotate-90 lg:rotate-0">
              자동 동기화
            </div>
            <FlowDots direction="right" />
          </div>

          <div className="fade-up stagger-5 flex justify-center lg:justify-start">
            <div className="text-center lg:text-left w-full">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                참여자 화면 · 모바일
              </div>

              <div className="phone-frame mx-auto lg:mx-0 w-[260px] bg-slate-900 rounded-[40px] p-2.5">
                <div className="bg-white rounded-[32px] overflow-hidden">
                  <div className="px-4 pt-4 pb-2 flex items-center justify-between">
                    <div className="text-[10px] text-slate-500 font-mono">
                      splo.io/abc123
                    </div>
                    <div className="flex gap-1">
                      <span className="w-1 h-1 rounded-full bg-slate-300" />
                      <span className="w-1 h-1 rounded-full bg-slate-300" />
                      <span className="w-1 h-1 rounded-full bg-slate-300" />
                    </div>
                  </div>

                  <div className="px-4 pb-4">
                    <div className="rounded-2xl bg-gradient-to-br from-brand-100 to-brand-50 p-3.5">
                      <div className="text-[10px] uppercase tracking-wider text-brand-700 font-semibold">
                        그룹 A · The Album
                      </div>
                      <div className="mt-0.5 text-sm font-bold text-ink">
                        분철 신청
                      </div>
                    </div>

                    <div className="mt-3 space-y-2.5">
                      <PhoneField label="트위터 핸들" value="@me_user" filled />
                      <PhoneField label="희망 멤버" value="멤버 B" filled />
                      <PhoneField label="주소" value="입력하기..." />
                    </div>

                    <button className="mt-4 w-full bg-brand-500 text-ink text-sm font-bold py-2.5 rounded-xl">
                      신청하기
                    </button>

                    <div className="mt-2 text-[10px] text-slate-500 text-center">
                      신청 후 트위터 DM으로 결제 안내
                    </div>
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

function FieldChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-md bg-brand-50 text-brand-700 border border-brand-300">
      {children}
    </span>
  );
}

function ApplicantRow({
  handle,
  member,
  paid,
  pending,
}: {
  handle: string;
  member: string;
  paid?: boolean;
  pending?: boolean;
}) {
  return (
    <div className="grid grid-cols-[1fr_60px_60px_50px] items-center px-3 py-2 text-xs border-t border-slate-100 first:border-t-0">
      <span className="text-slate-700 font-medium">{handle}</span>
      <span className="text-slate-500">{member}</span>
      <span>
        {paid ? (
          <span className="inline-flex items-center gap-0.5 text-emerald-600 font-semibold">
            <CheckCircle2 size={12} /> 완
          </span>
        ) : pending ? (
          <span className="text-amber-500 font-semibold">대기</span>
        ) : (
          <span className="text-slate-300">·</span>
        )}
      </span>
      <span className="text-right text-[10px] text-slate-400">방금</span>
    </div>
  );
}

function PhoneField({
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
      <div className="text-[10px] font-semibold text-slate-500">{label}</div>
      <div
        className={`mt-1 px-2.5 py-2 rounded-lg text-xs ${
          filled
            ? "bg-brand-50 border border-brand-300 text-ink font-medium"
            : "bg-slate-50 border border-slate-200 text-slate-400"
        }`}
      >
        {value}
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
