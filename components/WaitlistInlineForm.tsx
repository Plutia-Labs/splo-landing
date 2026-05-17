"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { track } from "@vercel/analytics";
import {
  WAITLIST_COUNT_EVENT,
  type WaitlistCountEventDetail,
} from "./WaitlistCounterView";

// 제출 단계 상태. 기존 WaitlistForm 과 동일한 단계 모델을 이메일만 받도록 단순화한 것.
type SubmitState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success"; count: number }
  | {
      status: "duplicate";
      count: number;
      registeredAt: string;
      position: number;
    }
  | { status: "error"; message: string };

type ApiResponse = {
  status:
    | "created"
    | "duplicate"
    | "invalid_email"
    | "invalid_domain"
    | "error";
  count?: number;
  position?: number;
  registeredAt?: string;
  error?: string;
};

const dateFormatter = new Intl.DateTimeFormat("ko-KR", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

function formatDate(iso: string) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return dateFormatter.format(date);
}

type Variant = "hero" | "section";

export function WaitlistInlineForm({
  variant = "section",
  idPrefix = "wl",
}: {
  variant?: Variant;
  idPrefix?: string;
}) {
  const [state, setState] = useState<SubmitState>({ status: "idle" });
  const emailId = `${idPrefix}-email`;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "").trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      const emailInput = form.elements.namedItem("email");
      if (emailInput instanceof HTMLInputElement) emailInput.reportValidity();
      return;
    }

    setState({ status: "submitting" });

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // 이메일만 전송. role/referral/platform 은 서버가 기본값으로 채운다.
        body: JSON.stringify({ email }),
      });

      const body = (await res.json().catch(() => ({}))) as ApiResponse;

      if (!res.ok) {
        const message =
          body.status === "invalid_domain"
            ? "이메일 도메인을 다시 확인해주세요. 메일을 받을 수 없는 주소예요."
            : body.status === "invalid_email"
              ? "이메일 형식이 올바르지 않아요."
              : "신청 처리 중 오류가 발생했어요.";
        setState({ status: "error", message });
        return;
      }

      if (body.status === "duplicate") {
        setState({
          status: "duplicate",
          count: body.count ?? 0,
          registeredAt: body.registeredAt ?? "",
          position: body.position ?? 0,
        });
        return;
      }

      const count = body.count ?? 0;
      window.dispatchEvent(
        new CustomEvent<WaitlistCountEventDetail>(WAITLIST_COUNT_EVENT, {
          detail: { count },
        }),
      );
      if (typeof window !== "undefined") {
        if (typeof window.gtag === "function") {
          window.gtag("event", "sign_up", { method: "waitlist" });
        }
        if (typeof window.fbq === "function") {
          window.fbq("track", "CompleteRegistration", {
            content_name: "splo_waitlist",
            method: "waitlist",
          });
        }
        track("waitlist_submit", { method: "waitlist" });
      }
      setState({ status: "success", count });
    } catch (err) {
      console.error("[WaitlistInlineForm] submit failed", err);
      setState({
        status: "error",
        message: "네트워크 오류로 신청에 실패했어요. 잠시 후 다시 시도해주세요.",
      });
    }
  }

  if (state.status === "success") {
    return (
      <div className="text-center py-8 px-6 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
        <p className="text-xs font-semibold tracking-wide text-emerald-700 uppercase">
          신청 완료
        </p>
        <h3 className="text-lg font-bold text-emerald-900">
          현재 {state.count}번째 대기자로 등록됐어요
        </h3>
        <p className="text-sm text-emerald-800">
          출시 소식을 입력해주신 이메일로 보내드릴게요.
        </p>
      </div>
    );
  }

  if (state.status === "duplicate") {
    return (
      <div className="text-center py-8 px-6 rounded-2xl bg-brand-50 border border-brand-100 space-y-2">
        <p className="text-xs font-semibold tracking-wide text-brand-700 uppercase">
          이미 신청한 이메일이에요
        </p>
        <h3 className="text-lg font-bold text-ink">
          {state.position}번째로 신청해주셨어요
        </h3>
        <p className="text-sm text-slate-700">
          {state.registeredAt && (
            <>
              {formatDate(state.registeredAt)}에 이미 사전 신청을 완료하셨어요.
              <br />
            </>
          )}
          출시 소식 들어가면 동일한 이메일로 안내드릴게요.
        </p>
        <button
          type="button"
          onClick={() => setState({ status: "idle" })}
          className="text-xs text-slate-500 underline hover:text-slate-700"
        >
          다른 이메일로 신청하기
        </button>
      </div>
    );
  }

  const submitting = state.status === "submitting";

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full">
      <div
        className={
          variant === "hero"
            ? "flex flex-col sm:flex-row gap-2 sm:gap-2 max-w-xs sm:max-w-md mx-auto"
            : "flex flex-col sm:flex-row gap-2 sm:gap-2 max-w-xs sm:max-w-md mx-auto"
        }
      >
        <label htmlFor={emailId} className="sr-only">
          이메일
        </label>
        <input
          id={emailId}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          aria-label="이메일"
          className="w-full sm:flex-1 px-4 py-3.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
        />
        <button
          type="submit"
          disabled={submitting}
          className="cta-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-500 text-ink font-semibold px-6 py-3.5 rounded-xl disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {submitting ? "신청 중..." : "사전 신청"}
          {!submitting && <ArrowRight size={16} />}
        </button>
      </div>

      {state.status === "error" && (
        <p className="mt-3 text-sm text-rose-600 text-center">
          {state.message}
        </p>
      )}

      <p className="mt-3 text-xs text-center text-slate-500">
        제출하시면{" "}
        <Link
          href="/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-ink"
        >
          개인정보 처리방침
        </Link>
        에 동의한 것으로 간주됩니다.
        <br />
        광고·스팸 발송하지 않아요.
      </p>
    </form>
  );
}
