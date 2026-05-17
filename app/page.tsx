import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { WaitlistCounter } from "@/components/WaitlistCounter";
import { WaitlistInlineForm } from "@/components/WaitlistInlineForm";
import { Feature1Create } from "@/components/sections/Feature1Create";
import { Feature2Apply } from "@/components/sections/Feature2Apply";
import { Feature3Operate } from "@/components/sections/Feature3Operate";
import { Feature4Verify } from "@/components/sections/Feature4Verify";
import { Feature5Match } from "@/components/sections/Feature5Match";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <Feature1Create />
      <Feature2Apply />
      <Feature3Operate />
      <Feature4Verify />
      <Feature5Match />
      <Waitlist />
      <FAQ />
      <Footer />
    </>
  );
}

function Nav() {
  return (
    <header id="nav" className="sticky top-0 z-40 bg-white/90 backdrop-blur nav-shadow">
      <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <Image
            src="/img/splo-icon.png"
            alt="스플로 로고"
            width={40}
            height={40}
            className="rounded-xl ring-1 ring-slate-200"
            priority
          />
          <span className="font-semibold text-ink">스플로</span>
        </a>
        <div className="flex items-center gap-3">
          <a
            href="#waitlist"
            className="cta-btn inline-flex items-center gap-2 bg-brand-500 text-ink text-sm font-semibold px-4 py-2 rounded-xl"
          >
            사전 신청
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </header>
  );
}

const PAIN_POINTS = [
  { icon: "📝", label: "모집글 재작성" },
  { icon: "🔎", label: "트위터 서치" },
  { icon: "📋", label: "명단 정리" },
  { icon: "📨", label: "총대에게 DM 보내기" },
  { icon: "💬", label: "DM 응대" },
  { icon: "❓", label: "내 분철 진행 모름" },
  { icon: "📦", label: "송장 안내" },
];

function PainConveyor() {
  return (
    <div
      aria-hidden
      className="mx-auto w-full max-w-[640px] md:max-w-[760px] overflow-hidden pointer-events-none"
    >
      <div className="conveyor flex gap-2 whitespace-nowrap w-max">
        {[...PAIN_POINTS, ...PAIN_POINTS, ...PAIN_POINTS].map((p, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-1.5 bg-white/70 backdrop-blur border border-slate-200 text-slate-500 text-sm px-3 py-1.5 rounded-full"
          >
            <span>{p.icon}</span>
            <span className="line-through decoration-slate-400/60">{p.label}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden min-h-[calc(100svh-4rem)] flex items-center justify-center"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50 to-paper" />
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="hero-blob hero-blob-1 absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-brand-300/40 blur-3xl" />
        <div className="hero-blob hero-blob-2 absolute top-1/3 -right-28 w-[460px] h-[460px] rounded-full bg-accent-300/35 blur-3xl" />
        <div className="hero-blob hero-blob-3 absolute -bottom-32 left-1/4 w-[380px] h-[380px] rounded-full bg-brand-100/60 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <PainConveyor />

        <h1 className="mt-6 md:mt-8 text-4xl md:text-6xl font-bold tracking-tight text-ink leading-[1.15]">
          모집은 트위터에서,
          <br />
          운영은 <span className="gradient-text">스플로</span>에서.
        </h1>

        <p className="mt-5 md:mt-6 text-base md:text-lg text-slate-600">
          분철자가 만든 — DM 부담 없이, 둘 다 편한 분철.
        </p>

        <div className="mt-12 md:mt-16">
          <WaitlistInlineForm variant="hero" idPrefix="hero" />
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-6 md:bottom-8">
        <a
          href="#create"
          aria-label="다음 섹션으로 스크롤"
          className="scroll-cue flex flex-col items-center gap-1 text-slate-500 hover:text-ink"
        >
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase">Scroll</span>
          <ChevronDown size={20} strokeWidth={2.25} />
        </a>
      </div>
    </section>
  );
}

function Waitlist() {
  return (
    <section id="waitlist" className="py-20 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-3xl px-5">
        <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-10 text-center">
          <span className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full">
            BETA · 사전 신청
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
            먼저 써보고, 같이 만들어요.
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            2026년 베타로 운영합니다.
            <br />
            이메일 남겨주시면 출시 시 우선 초대해드려요.
          </p>
          <WaitlistCounter className="mt-6" />
          <div className="mt-8">
            <WaitlistInlineForm variant="section" idPrefix="section" />
          </div>
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  {
    q: "결제는 어떻게 받나요? 안전한가요?",
    a: "DM으로 계좌를 주고받는 방식이 아니에요. ① 총대가 등록 단계에서 계좌를 입력해두면 ② 승인되어 참여가 확정된 분철자에게만 계좌가 노출됩니다. ③ 분철자가 입금 후 체크하면 총대에게 알림이 오고 ④ 총대는 대시보드에서 결제 확인을 한 번에 체크해요.",
  },
  {
    q: "마감 방식은 어떻게 정해요?",
    a: "총대가 직접 정해요. 선착순 또는 총대 승인(신청자별 수락/거절) 중 선택. 모집 페이지마다 다르게 설정 가능합니다.",
  },
  {
    q: "가입·본인인증이 필요한가요?",
    a: "모든 사용자 가입 필수예요. 카카오 로그인 또는 이메일/비밀번호 + 휴대폰 SMS 인증 1회. 총대로 활동하려면 정산 계좌 1원 인증이 추가됩니다. PASS 같은 무거운 본인인증은 v2에서 검토.",
  },
  {
    q: "주소·연락처를 잘못 적었어요. 총대한테 DM 보내야 하나요?",
    a: "신청자 본인이 셀프 수정 페이지에서 직접 고치면 돼요. 송장 등록 시점 이후엔 잠겨서 더 이상 수정할 수 없습니다. 총대 DM 응대 부담을 줄이려는 장치예요.",
  },
  {
    q: "요금은요?",
    a: "베타 기간 동안은 사전 신청해주신 분에 한해 완전 무료로 이용 가능합니다. 이후 수익 모델 도입 시점에 사전 공지해요.",
  },
];

function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <span className="text-sm font-semibold text-brand-700">FAQ</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">자주 묻는 질문</h2>
        </div>

        <div className="mt-10 bg-paper border border-slate-200 rounded-2xl p-5 text-sm text-slate-600">
          <div className="flex items-start gap-2">
            <span className="text-accent-600 mt-0.5">★</span>
            <div>
              <p className="font-semibold text-ink">
                가상계좌·에스크로·환불 보장은 <u>약속하지 않습니다.</u>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-3">
          {FAQS.map((f) => (
            <details key={f.q} className="bg-paper border border-slate-200 rounded-2xl p-5">
              <summary className="flex items-center justify-between font-semibold text-ink">
                {f.q}
                <span className="faq-icon text-2xl text-slate-400 leading-none">+</span>
              </summary>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <Image
              src="/img/splo-icon.png"
              alt="스플로 로고"
              width={32}
              height={32}
              className="rounded-lg ring-1 ring-slate-200"
            />
            <span>스플로 · DM 부담 없이, 둘 다 편한 분철</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="mailto:hello@splo.app" className="hover:text-ink">문의</a>
            <Link href="/privacy" className="hover:text-ink">개인정보 처리방침</Link>
          </div>
        </div>
        <div className="mt-6 text-xs text-slate-400">© 2026 Plutia Labs</div>
      </div>
    </footer>
  );
}
