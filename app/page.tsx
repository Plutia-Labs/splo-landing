import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { WaitlistCounter } from "@/components/WaitlistCounter";
import { Feature1Create } from "@/components/sections/Feature1Create";
import { Feature2Apply } from "@/components/sections/Feature2Apply";
import { Feature3Operate } from "@/components/sections/Feature3Operate";
import { Feature4Verify } from "@/components/sections/Feature4Verify";

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
      <Waitlist />
      <FAQ />
      <PaymentNotice />
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
        <nav className="hidden md:flex items-center gap-7 text-sm text-slate-600">
          <a href="#create" className="hover:text-ink">분철 만들기</a>
          <a href="#apply" className="hover:text-ink">신청받기</a>
          <a href="#operate" className="hover:text-ink">운영</a>
          <a href="#verify" className="hover:text-ink">인증</a>
          <a href="#faq" className="hover:text-ink">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="/waitlist"
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

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50 to-paper" />
      <div className="mx-auto max-w-6xl px-5 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-600 text-xs px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-accent-500" />
            분철 총대를 위한 운영 도구
          </span>
          <h1 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight text-ink leading-[1.15]">
            분철은 트위터에서,
            <br />
            운영은 <span className="gradient-text">스플로</span>에서.
          </h1>

          <PainChipsFlow />

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/waitlist"
              className="cta-btn inline-flex items-center gap-2 bg-brand-500 text-ink font-semibold px-5 py-3 rounded-xl"
            >
              사전 신청하고 우선 초대받기
              <ArrowRight size={16} />
            </a>
            <a
              href="#create"
              className="cta-btn inline-flex items-center gap-2 bg-white border border-slate-200 text-ink font-semibold px-5 py-3 rounded-xl"
            >
              기능 둘러보기
            </a>
          </div>

        </div>

        <PhoneMockup />
      </div>
    </section>
  );
}

const PAIN_CHIPS = [
  { icon: "📝", label: "모집글 재작성" },
  { icon: "📋", label: "명단 정리" },
  { icon: "💬", label: "DM 뒤지기" },
  { icon: "📤", label: "N번 복붙" },
];

function PainChipsFlow() {
  return (
    <div className="mt-6">
      <div className="grid grid-cols-2 md:flex md:flex-wrap gap-2">
        {PAIN_CHIPS.map((chip) => (
          <span
            key={chip.label}
            className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-500 text-sm px-3 py-1.5 rounded-full line-through decoration-slate-400/60"
          >
            <span className="not-italic no-underline">{chip.icon}</span>
            {chip.label}
          </span>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-3">
        <ArrowRight className="text-brand-500 shrink-0" size={24} />
        <p className="text-lg text-ink font-semibold">
          그거 다 우리가 대신 해드릴게요.
        </p>
      </div>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] md:w-[320px]">
      <div className="phone-frame bg-slate-900 rounded-[44px] p-3">
        <div className="bg-white rounded-[34px] overflow-hidden">
          <div className="px-5 pt-5 pb-3 flex items-center justify-between">
            <div className="text-xs text-slate-500">splo.io/abc123</div>
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            </div>
          </div>
          <div className="px-5 pb-5">
            <div className="rounded-2xl bg-gradient-to-br from-brand-100 to-brand-50 p-4">
              <div className="text-[11px] uppercase tracking-wider text-brand-700 font-semibold">
                그룹 A · 앨범 1
              </div>
              <div className="mt-1 text-base font-bold text-ink">분철 모집</div>
              <div className="mt-3 flex items-center gap-2 text-xs text-slate-600">
                <span className="inline-flex items-center gap-1 bg-white px-2 py-0.5 rounded-full border border-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  @host_a · 분철 12회 · 완료율 100%
                </span>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <SlotRow color="pink" letter="A" name="멤버 A" price="₩4,300" status="마감" />
              <SlotRow
                color="blue"
                letter="B"
                name="멤버 B"
                price="₩4,300 · 잔여 2"
                action="신청"
                highlight
              />
              <SlotRow color="amber" letter="C" name="멤버 C" price="₩4,300 · 잔여 5" action="신청" />
            </div>

            <div className="mt-4 text-[11px] text-slate-500 text-center">
              신청 후 트위터 DM·계좌이체로 결제
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type SlotRowProps = {
  color: "pink" | "blue" | "amber";
  letter: string;
  name: string;
  price: string;
  status?: string;
  action?: string;
  highlight?: boolean;
};

function SlotRow({ color, letter, name, price, status, action, highlight }: SlotRowProps) {
  const colorMap: Record<SlotRowProps["color"], string> = {
    pink: "bg-pink-100 text-pink-600",
    blue: "bg-blue-100 text-brand-700",
    amber: "bg-amber-100 text-amber-600",
  };

  return (
    <div
      className={`flex items-center justify-between p-3 rounded-xl ${
        highlight ? "border-2 border-brand-500 bg-brand-50" : "border border-slate-200"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className={`w-8 h-8 rounded-full grid place-items-center text-xs font-bold ${colorMap[color]}`}>
          {letter}
        </div>
        <div>
          <div className="text-sm font-medium">{name}</div>
          <div className="text-[11px] text-slate-500">{price}</div>
        </div>
      </div>
      {status && <span className="text-[11px] text-rose-500 font-semibold">{status}</span>}
      {action &&
        (highlight ? (
          <button className="text-xs bg-brand-500 text-ink px-3 py-1.5 rounded-lg font-semibold">{action}</button>
        ) : (
          <button className="text-xs border border-slate-300 text-slate-700 px-3 py-1.5 rounded-lg font-semibold">
            {action}
          </button>
        ))}
    </div>
  );
}

function Waitlist() {
  return (
    <section id="waitlist" className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-10 text-center">
          <span className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full">
            BETA · 사전 신청
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
            먼저 써보고, 같이 만들어요.
          </h2>
          <WaitlistCounter className="mt-6" />
          <div className="mt-6">
            <a
              href="/waitlist"
              className="cta-btn inline-flex items-center gap-2 bg-brand-500 text-ink font-semibold px-6 py-3.5 rounded-xl"
            >
              사전 신청하기
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  {
    q: "결제는 어떻게 받나요? 안전한가요?",
    a: "스플로는 결제에 개입하지 않습니다. 트위터 DM·계좌이체 그대로 받으세요. \"결제 안전\"·\"환불 보장\"은 약속하지 않습니다. 결제·에스크로·환불 보장 같은 기능은 사용자 충분히 모인 뒤 도입을 검토할 예정이에요.",
  },
  {
    q: "마감 방식은 어떻게 정해요?",
    a: "총대가 직접 정해요. 선착순·총대 승인(신청자별 수락/거절)·마감 후 추첨 중 선택. 모집 페이지마다 다르게 설정 가능합니다.",
  },
  {
    q: "가입·본인인증이 필요한가요?",
    a: "결제를 받지 않으니 본인인증·KCP 같은 무거운 절차는 없어요. 트위터 핸들 + 이메일 OTP 정도. 참여자는 가입 없이 게스트 신청도 가능하게 만들 예정.",
  },
  {
    q: "요금은요?",
    a: "베타 기간 동안은 사전 신청해주신 분에 한해 완전 무료로 이용 가능합니다. 이후 결제 기능 도입 시점에 거래 수수료 모델을 검토할 예정이고, 그때도 도입 전 사전 공지해요.",
  },
  {
    q: "엔터사 IP나 저작권 문제는 없나요?",
    a: "우리는 분철 자체를 중개하지 않고 운영 도구만 제공합니다. 공식 발매 SKU 한정으로 모집 페이지를 만들 수 있게 안내하고 있어요. 출시 전 1~2개 엔터사와 사전 커뮤니케이션도 검토 중입니다.",
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

        <div className="mt-12 space-y-3">
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

function PaymentNotice() {
  return (
    <section className="py-12 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-3xl px-5">
        <div className="bg-paper border border-slate-200 rounded-2xl p-5 text-sm text-slate-600">
          <div className="flex items-start gap-2">
            <span className="text-accent-600 mt-0.5">★</span>
            <div>
              <p className="font-semibold text-ink">
                결제 안전·환불 보장은 <u>약속하지 않습니다.</u>
              </p>
              <p className="mt-1">
                결제는 트위터 DM·계좌이체 그대로. 우리는 그 흐름의 운영 부담만 줄여드립니다. 추가 기능은 사용자
                충분히 모인 뒤 도입할게요.
              </p>
            </div>
          </div>
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
            <span>스플로 · 분철 총대의 운영 비서</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="mailto:hello@example.com" className="hover:text-ink">문의</a>
            <a href="#" className="hover:text-ink">개인정보 처리방침</a>
            <a href="#" className="hover:text-ink">이용약관</a>
          </div>
        </div>
        <div className="mt-6 text-xs text-slate-400">© 2026 Plutia Labs</div>
      </div>
    </footer>
  );
}
