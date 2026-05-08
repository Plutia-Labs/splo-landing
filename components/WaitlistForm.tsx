"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import {
  WAITLIST_COUNT_EVENT,
  type WaitlistCountEventDetail,
} from "./WaitlistCounterView";

type Role = "host" | "joiner" | "both";
type ReferralSource = "ad" | "referral" | "other";
type Platform = "twitter" | "bunjang" | "other";

const REFERRAL_OPTIONS: { value: ReferralSource; label: string }[] = [
  { value: "ad", label: "트위터" },
  { value: "referral", label: "지인 소개" },
  { value: "other", label: "기타" },
];

const PLATFORM_OPTIONS: { value: Platform; label: string }[] = [
  { value: "twitter", label: "트위터" },
  { value: "bunjang", label: "번개장터" },
  { value: "other", label: "기타" },
];

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
    | "invalid_referral"
    | "missing_referral_other"
    | "invalid_platforms"
    | "missing_platform_other"
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

export function WaitlistForm() {
  const [state, setState] = useState<SubmitState>({ status: "idle" });
  const [role, setRole] = useState<Role | "">("");
  const [referralSource, setReferralSource] = useState<ReferralSource | "">("");
  const [referralOther, setReferralOther] = useState("");
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [platformOther, setPlatformOther] = useState("");

  function togglePlatform(p: Platform) {
    setPlatforms((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p],
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "").trim();
    const handle = String(data.get("handle") ?? "").trim();
    const survey = data.get("survey") === "on";

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      const emailInput = form.elements.namedItem("email");
      if (emailInput instanceof HTMLInputElement) emailInput.reportValidity();
      return;
    }

    if (!role) {
      setState({ status: "error", message: "역할을 선택해주세요." });
      return;
    }

    if (!referralSource) {
      setState({ status: "error", message: "유입 경로를 선택해주세요." });
      return;
    }

    const includesReferralOther = referralSource === "other";
    const includesReferralReferral = referralSource === "referral";
    const referralOtherTrimmed = referralOther.trim();
    if (includesReferralOther && !referralOtherTrimmed) {
      setState({
        status: "error",
        message: "유입 경로 기타를 입력해주세요.",
      });
      return;
    }

    if (platforms.length === 0) {
      setState({
        status: "error",
        message: "현재 사용 중인 플랫폼을 1개 이상 선택해주세요.",
      });
      return;
    }

    const includesOther = platforms.includes("other");
    const platformOtherTrimmed = platformOther.trim();
    if (includesOther && !platformOtherTrimmed) {
      setState({
        status: "error",
        message: "기타 플랫폼을 입력해주세요.",
      });
      return;
    }

    setState({ status: "submitting" });

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          role,
          handle,
          survey,
          referralSource,
          referralOther:
            includesReferralOther || includesReferralReferral
              ? referralOtherTrimmed
              : "",
          platforms,
          platformOther: includesOther ? platformOtherTrimmed : "",
        }),
      });

      const body = (await res.json().catch(() => ({}))) as ApiResponse;

      if (!res.ok) {
        const message =
          body.status === "invalid_domain"
            ? "이메일 도메인을 다시 확인해주세요. 메일을 받을 수 없는 주소예요."
            : body.status === "invalid_email"
              ? "이메일 형식이 올바르지 않아요."
              : body.status === "invalid_referral"
                ? "유입 경로를 선택해주세요."
                : body.status === "missing_referral_other"
                  ? "유입 경로 기타를 입력해주세요."
                  : body.status === "invalid_platforms"
                    ? "현재 사용 중인 플랫폼을 1개 이상 선택해주세요."
                    : body.status === "missing_platform_other"
                      ? "기타 플랫폼을 입력해주세요."
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
      setState({ status: "success", count });
    } catch (err) {
      console.error("[WaitlistForm] submit failed", err);
      setState({
        status: "error",
        message: "네트워크 오류로 신청에 실패했어요. 잠시 후 다시 시도해주세요.",
      });
    }
  }

  if (state.status === "success") {
    return (
      <div className="mt-8 text-center py-10 px-6 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-3">
        <p className="text-xs font-semibold tracking-wide text-emerald-700 uppercase">
          신청 완료
        </p>
        <h3 className="text-xl font-bold text-emerald-900">
          현재 {state.count}번째 대기자로 등록됐어요
        </h3>
        <p className="text-sm text-emerald-800">
          출시 소식을 입력해주신 이메일로 보내드릴게요.
          <br />
          가까운 분들에게{" "}
          <strong className="font-bold text-emerald-900">스플로</strong>를
          알려주시면 더 빨리 선보일 수 있어요.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-1 mt-2 text-sm font-medium text-emerald-800 underline underline-offset-2 hover:text-emerald-900"
        >
          스플로 메인 페이지에서 더 알아보기
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    );
  }

  if (state.status === "duplicate") {
    return (
      <div className="mt-8 text-center py-10 px-6 rounded-2xl bg-brand-50 border border-brand-100 space-y-3">
        <p className="text-xs font-semibold tracking-wide text-brand-700 uppercase">
          이미 신청한 이메일이에요
        </p>
        <h3 className="text-xl font-bold text-ink">
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
        <Link
          href="/"
          className="inline-flex items-center gap-1 mt-2 text-sm font-medium text-brand-700 underline underline-offset-2 hover:text-ink"
        >
          스플로 메인 페이지에서 더 알아보기
          <span aria-hidden="true">→</span>
        </Link>
        <div>
          <button
            type="button"
            onClick={() => setState({ status: "idle" })}
            className="text-xs text-slate-500 underline hover:text-slate-700"
          >
            다른 이메일로 신청하기
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
          이메일 <span className="text-rose-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
        />
      </div>

      <div>
        <label htmlFor="handle" className="block text-sm font-medium text-slate-700 mb-2">
          트위터 핸들 <span className="text-slate-400">(선택)</span>
        </label>
        <input
          id="handle"
          name="handle"
          type="text"
          placeholder="@your_handle"
          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
        />
      </div>

      <div>
        <span className="block text-sm font-medium text-slate-700 mb-2">
          역할 <span className="text-rose-500">*</span>
        </span>
        <div className="grid grid-cols-3 gap-2 role-pill">
          <label className="cursor-pointer">
            <input
              type="radio"
              name="role"
              value="host"
              checked={role === "host"}
              onChange={() => setRole("host")}
              className="sr-only"
            />
            <span className="block text-center text-sm py-3 rounded-xl border border-slate-300 font-medium">
              총대
            </span>
          </label>
          <label className="cursor-pointer">
            <input
              type="radio"
              name="role"
              value="joiner"
              checked={role === "joiner"}
              onChange={() => setRole("joiner")}
              className="sr-only"
            />
            <span className="block text-center text-sm py-3 rounded-xl border border-slate-300 font-medium">
              분철자
            </span>
          </label>
          <label className="cursor-pointer">
            <input
              type="radio"
              name="role"
              value="both"
              checked={role === "both"}
              onChange={() => setRole("both")}
              className="sr-only"
            />
            <span className="block text-center text-sm py-3 rounded-xl border border-slate-300 font-medium">
              둘 다
            </span>
          </label>
        </div>
      </div>

      <div>
        <span className="block text-sm font-medium text-slate-700 mb-2">
          유입 경로 <span className="text-rose-500">*</span>
        </span>
        <div className="grid grid-cols-3 gap-2 role-pill">
          {REFERRAL_OPTIONS.map((opt) => (
            <label key={opt.value} className="cursor-pointer">
              <input
                type="radio"
                name="referralSource"
                value={opt.value}
                checked={referralSource === opt.value}
                onChange={() => setReferralSource(opt.value)}
                className="sr-only"
              />
              <span className="block text-center text-sm py-3 rounded-xl border border-slate-300 font-medium">
                {opt.label}
              </span>
            </label>
          ))}
        </div>
        {referralSource === "other" && (
          <input
            type="text"
            value={referralOther}
            onChange={(e) => setReferralOther(e.target.value)}
            placeholder="어떻게 알게 되셨나요?"
            className="mt-2 w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
          />
        )}
        {referralSource === "referral" && (
          <div className="mt-2">
            <input
              type="text"
              value={referralOther}
              onChange={(e) => setReferralOther(e.target.value)}
              placeholder="지인의 트위터 핸들 또는 이메일 등"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
            />
            <p className="mt-1 text-xs text-slate-500">
              선택 항목 — 비워두셔도 신청 가능해요.
            </p>
          </div>
        )}
      </div>

      <div>
        <span className="block text-sm font-medium text-slate-700 mb-2">
          현재 사용 플랫폼 <span className="text-rose-500">*</span>
          <span className="ml-1 text-xs font-normal text-slate-500">(중복 선택 가능)</span>
        </span>
        <div className="grid grid-cols-3 gap-2 role-pill">
          {PLATFORM_OPTIONS.map((opt) => (
            <label key={opt.value} className="cursor-pointer">
              <input
                type="checkbox"
                name="platforms"
                value={opt.value}
                checked={platforms.includes(opt.value)}
                onChange={() => togglePlatform(opt.value)}
                className="sr-only"
              />
              <span className="block text-center text-sm py-3 rounded-xl border border-slate-300 font-medium">
                {opt.label}
              </span>
            </label>
          ))}
        </div>
        {platforms.includes("other") && (
          <input
            type="text"
            value={platformOther}
            onChange={(e) => setPlatformOther(e.target.value)}
            placeholder="어떤 플랫폼인가요? (예: 디스코드, 오픈채팅)"
            className="mt-2 w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
          />
        )}
      </div>

      <div className="hidden bg-brand-50 border border-brand-100 rounded-xl p-4">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            id="survey"
            name="survey"
            type="checkbox"
            className="mt-1 w-4 h-4 accent-brand-500"
          />
          <span className="text-sm text-slate-700">
            <strong className="text-ink">분철 운영 페인 포인트 설문조사에 참여할게요.</strong>
            <span className="block mt-0.5 text-slate-600">
              참여해주신 의견은 <u>실제 서비스 개발에 반영될 수도 있어요.</u> "이런 기능은 무조건 있었으면 좋겠다" 같은 자유 의견 환영. 설문 폼은 메일로 보내드립니다.
            </span>
          </span>
        </label>
      </div>

      {state.status === "error" && (
        <p className="text-sm text-rose-600 text-center">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={state.status === "submitting"}
        className="cta-btn w-full bg-brand-500 text-ink font-semibold py-3.5 rounded-xl disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state.status === "submitting" ? "신청 중..." : "사전 신청 완료하기"}
      </button>

      <p className="text-xs text-center text-slate-500">
        제출하시면{" "}
        <Link
          href="/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-ink"
        >
          개인정보 처리방침
        </Link>
        에 동의한 것으로 간주됩니다. 광고·스팸 발송하지 않아요.
      </p>
    </form>
  );
}
