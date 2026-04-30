"use client";

import { useState, type FormEvent } from "react";

type Role = "host" | "joiner" | "both";

type SubmitState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success"; count: number }
  | { status: "error"; message: string };

export function WaitlistForm() {
  const [state, setState] = useState<SubmitState>({ status: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "").trim();
    const role = String(data.get("role") ?? "host") as Role;
    const handle = String(data.get("handle") ?? "").trim();
    const survey = data.get("survey") === "on";

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
        body: JSON.stringify({ email, role, handle, survey }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setState({
          status: "error",
          message: body?.error ?? "신청 처리 중 오류가 발생했어요.",
        });
        return;
      }

      const body = (await res.json()) as { count?: number };
      setState({ status: "success", count: body.count ?? 0 });
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
      <div className="mt-8 text-center">
        <div className="inline-flex w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 items-center justify-center text-2xl">
          ✓
        </div>
        <h3 className="mt-4 text-xl font-bold">신청 완료!</h3>
        <p className="mt-2 text-slate-600">
          출시 시 메일로 초대해드릴게요. 설문조사 체크해주신 분께는 별도로 설문 폼 메일 드려요.
        </p>
        {state.count > 0 && (
          <p className="mt-4 text-xs text-slate-500">
            현재까지 {state.count}명이 사전 신청했어요.
          </p>
        )}
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
        <p className="mt-1 text-xs text-slate-500">총대시면 분철 이력 검증·인터뷰 컨택에 사용해요.</p>
      </div>

      <div>
        <span className="block text-sm font-medium text-slate-700 mb-2">
          역할 <span className="text-rose-500">*</span>
        </span>
        <div className="grid grid-cols-3 gap-2 role-pill">
          <label className="cursor-pointer">
            <input type="radio" name="role" value="host" className="sr-only" defaultChecked />
            <span className="block text-center text-sm py-3 rounded-xl border border-slate-300 font-medium">
              총대
            </span>
          </label>
          <label className="cursor-pointer">
            <input type="radio" name="role" value="joiner" className="sr-only" />
            <span className="block text-center text-sm py-3 rounded-xl border border-slate-300 font-medium">
              분철자
            </span>
          </label>
          <label className="cursor-pointer">
            <input type="radio" name="role" value="both" className="sr-only" />
            <span className="block text-center text-sm py-3 rounded-xl border border-slate-300 font-medium">
              둘 다
            </span>
          </label>
        </div>
      </div>

      <div className="bg-brand-50 border border-brand-100 rounded-xl p-4">
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
        제출하시면 <a href="#" className="underline">개인정보 처리방침</a>에 동의한 것으로 간주됩니다. 광고·스팸 발송하지 않아요.
      </p>
    </form>
  );
}
