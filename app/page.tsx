import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Comparison />
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
          <a href="#problem" className="hover:text-ink">총대의 하루</a>
          <a href="#solution" className="hover:text-ink">우리가 도와줄게</a>
          <a href="#how" className="hover:text-ink">작동 방식</a>
          <a href="#compare" className="hover:text-ink">비교</a>
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
              href="#how"
              className="cta-btn inline-flex items-center gap-2 bg-white border border-slate-200 text-ink font-semibold px-5 py-3 rounded-xl"
            >
              작동 방식 보기
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

function Problem() {
  return (
    <section id="problem" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-brand-700">총대의 하루</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
            분철 한 번에 <br className="hidden md:inline" />왜 이렇게 손이 많이 갈까?
          </h2>
        </div>
      </div>
    </section>
  );
}

function Solution() {
  return (
    <section id="solution" className="py-24 md:py-32 bg-white border-y border-slate-200">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-brand-700">우리가 도와줄게</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
            트위터 흐름은 그대로,
            <br />
            총대의 손만 빌려드릴게요.
          </h2>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-brand-700">작동 방식</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">한 분철, 5분.</h2>
        </div>
      </div>
    </section>
  );
}

function Comparison() {
  return (
    <section id="compare" className="py-24 md:py-32 bg-white border-y border-slate-200">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-brand-700">비교</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">왜 굳이 새 도구를?</h2>
        </div>
      </div>
    </section>
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
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <span className="text-sm font-semibold text-brand-700">FAQ</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">자주 묻는 질문</h2>
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
