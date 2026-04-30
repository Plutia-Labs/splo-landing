import Image from "next/image";
import {
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  XCircle,
  Minus,
  FormInput,
  Send,
  LayoutList,
  ToggleRight,
  FileText,
  Clipboard,
  Bell,
} from "lucide-react";
import { WaitlistCounter } from "@/components/WaitlistCounter";

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
          <span className="font-semibold text-ink">
            스플로 <span className="text-slate-400 text-sm font-normal">(가제)</span>
          </span>
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

          <div className="mt-8 bg-white border border-slate-200 rounded-2xl p-4 text-sm text-slate-600">
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
          그거 다 <span className="gradient-text">우리가</span> 대신 해드릴게요.
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

const PROBLEMS = [
  { icon: "📝", title: "모집글 매번 다시 쓰기", body: "앨범 정보·슬롯·계좌·DM 안내·해시태그… 매 분철마다 처음부터." },
  { icon: "📋", title: "명단 손으로 적기", body: "DM으로 들어온 신청자, 노션·메모장에 옮겨 적다 누락 발생." },
  { icon: "💬", title: "DM 스레드 뒤지기", body: "한 분철에 N명, DM 스레드 흩어져 누가 어디 멤버인지 헷갈림." },
  { icon: "📤", title: "N명에게 똑같은 안내", body: "발주·발송·송장 등록 단계마다 똑같은 메시지를 N번 복붙." },
  { icon: "🪪", title: "신뢰 증명이 어려움", body: "\"전에 분철 잘 돌렸어요\"를 새 참여자에게 어떻게 보여주지?" },
  { icon: "⏱️", title: "시간이 너무 많이 듦", body: "분철 1건당 운영에 평균 N시간. 본업도 있는데 솔직히 빡세요." },
];

function Problem() {
  return (
    <section id="problem" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-brand-700">총대의 하루</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
            분철 한 번 돌리는 데 <br className="hidden md:inline" />왜 이렇게 손이 많이 갈까?
          </h2>
          <p className="mt-4 text-slate-600">
            분철 자체가 어려운 게 아니에요. <strong className="text-ink">그 운영이</strong> 어렵습니다. 모집글, 명단,
            결제 확인, 안내, 송장. 매번 똑같은 일을 반복해야 하니까요.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {PROBLEMS.map((p) => (
            <div key={p.title} className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="text-2xl">{p.icon}</div>
              <h3 className="mt-3 font-semibold text-ink">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solution() {
  return (
    <section id="solution" className="py-20 md:py-28 bg-white border-y border-slate-200">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-brand-700">우리가 도와줄게</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
            트위터 흐름은 그대로,
            <br />
            <span className="gradient-text">총대의 손만</span> 빌려드릴게요.
          </h2>
          <p className="mt-4 text-slate-600">
            스플로는 <strong className="text-ink">트위터 분철을 대체하지 않습니다.</strong> 모집·홍보·결제는 트위터
            그대로 쓰세요. 우리는 그 흐름의 운영 부담만 덜어드려요.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          <SolutionCard n="01" title="모집글 자동 생성" body="앨범·슬롯·해시태그·우리 링크가 들어간 모집글 템플릿을 자동 생성. 클립보드 복사 → 트위터 붙여넣기.">
            <div className="flex items-center gap-2">
              <div className="w-12 h-14 rounded-md border border-slate-200 bg-slate-50 grid place-items-center">
                <FileText size={20} className="text-brand-600" />
              </div>
              <ArrowRight size={16} className="text-slate-400" />
              <div className="w-12 h-14 rounded-md border border-brand-300 bg-brand-50 grid place-items-center">
                <Clipboard size={20} className="text-brand-600" />
              </div>
            </div>
          </SolutionCard>

          <SolutionCard n="02" title="슬롯 자동 마감 + 마감 방식 선택" body="총대가 직접 정함. 멤버별 잔여 슬롯도 자동 표시·자동 마감.">
            <div className="flex flex-col gap-1.5">
              <span className="inline-flex items-center justify-center text-xs font-semibold px-3 py-1.5 rounded-full border-2 border-brand-500 bg-brand-50 text-brand-700">
                선착순
              </span>
              <span className="inline-flex items-center justify-center text-xs font-semibold px-3 py-1.5 rounded-full border border-slate-200 bg-white text-slate-600">
                총대 승인
              </span>
              <span className="inline-flex items-center justify-center text-xs font-semibold px-3 py-1.5 rounded-full border border-slate-200 bg-white text-slate-600">
                추첨
              </span>
            </div>
          </SolutionCard>

          <SolutionCard n="03" title="참여자 명단 한 화면" body="트위터 핸들·연락처·선택 멤버·결제 확인까지 한 테이블에서. DM 스레드 뒤질 일 없어요.">
            <div className="w-full max-w-[180px] rounded-md border border-slate-200 bg-white overflow-hidden text-[10px]">
              <div className="grid grid-cols-3 bg-slate-50 px-2 py-1 font-semibold text-slate-600 border-b border-slate-200">
                <span>핸들</span>
                <span>멤버</span>
                <span className="text-right">결제</span>
              </div>
              <div className="grid grid-cols-3 px-2 py-1 border-b border-slate-100">
                <span className="text-slate-700">@han_a</span>
                <span className="text-slate-500">A</span>
                <span className="text-right text-emerald-600">✓</span>
              </div>
              <div className="grid grid-cols-3 px-2 py-1 border-b border-slate-100">
                <span className="text-slate-700">@han_b</span>
                <span className="text-slate-500">B</span>
                <span className="text-right text-emerald-600">✓</span>
              </div>
              <div className="grid grid-cols-3 px-2 py-1">
                <span className="text-slate-700">@han_c</span>
                <span className="text-slate-500">C</span>
                <span className="text-right text-slate-300">·</span>
              </div>
            </div>
          </SolutionCard>

          <SolutionCard n="04" title="단계 토글로 일괄 알림" body="발주·발송 토글 한 번 → 참여자 N명에게 자동 알림. 메시지 N번 복붙 안 해도 돼요.">
            <div className="flex items-center gap-2">
              <ToggleRight size={36} className="text-brand-500" />
              <ArrowRight size={14} className="text-slate-400" />
              <div className="relative">
                <Bell size={24} className="text-slate-700" />
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-accent-500 text-white text-[8px] font-bold grid place-items-center">
                  N
                </span>
              </div>
            </div>
          </SolutionCard>

          <SolutionCard
            n="05"
            title="분철 이력 정리·인증 페이지"
            body="지금까지 운영한 분철 횟수·완료율을 자동 정리한 페이지를 발급해드려요. 트위터 바이오·고정 트윗에 링크로 붙이면 새 참여자가 결제 전 한 번 확인할 수 있어요."
            span2
          >
            <div className="rounded-xl border border-slate-200 bg-white p-3 w-full max-w-[210px] shadow-sm">
              <div className="text-[9px] text-slate-400">splo.io/host/@host_a</div>
              <div className="mt-2 inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-[10px] font-semibold px-1.5 py-0.5 rounded-full">
                <CheckCircle2 size={10} />
                인증된 호스트
              </div>
              <div className="mt-2 text-sm font-bold text-ink">@host_a</div>
              <div className="mt-1 text-[10px] text-slate-500">분철 12회 · 완료 100%</div>
              <div className="mt-2 pt-2 border-t border-slate-100 text-[9px] text-slate-400">
                최근: 앨범 X (2026.04)
              </div>
            </div>
          </SolutionCard>
        </div>
      </div>
    </section>
  );
}

function SolutionCard({
  n,
  title,
  body,
  children,
  span2,
}: {
  n: string;
  title: string;
  body: string;
  children: React.ReactNode;
  span2?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border border-slate-200 p-6 hover:border-brand-300 transition flex gap-5 ${
        span2 ? "md:col-span-2" : ""
      }`}
    >
      <div className="shrink-0 grid place-items-center min-w-[80px]">{children}</div>
      <div>
        <div className="text-xs text-brand-700 font-semibold">{n}</div>
        <h3 className="mt-1 text-lg font-bold">{title}</h3>
        <p className="mt-2 text-sm text-slate-600">{body}</p>
      </div>
    </div>
  );
}

const STEPS = [
  {
    n: 1,
    icon: FormInput,
    title: "분철 정보 입력",
    body: "앨범·슬롯·가격·계좌·마감 방식. 한 번만 입력.",
  },
  {
    n: 2,
    icon: Send,
    title: "모집글 자동 생성 → 트위터 게시",
    body: "신청 링크가 포함된 모집글을 자동 작성. 복사해서 트위터에 그대로 붙여넣기.",
  },
  {
    n: 3,
    icon: LayoutList,
    title: "신청 자동 누적",
    body: "참여자가 우리 사이트에서 신청 → 총대 대시보드에 자동.",
  },
  {
    n: 4,
    icon: ToggleRight,
    title: "단계 토글로 끝",
    body: "발주·발송 토글 → 참여자 일괄 알림 자동.",
  },
];

function HowItWorks() {
  return (
    <section id="how" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-brand-700">작동 방식</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">한 분철, 5분.</h2>
          <p className="mt-4 text-slate-600">
            총대가 우리 사이트에 분철 정보 한 번 입력하면 끝. 나머지는 자동.
          </p>
        </div>

        <div className="mt-12 flex flex-col md:flex-row md:items-stretch gap-3 md:gap-2">
          {STEPS.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={s.n} className="flex md:flex-1 md:items-stretch">
                <div className="relative flex-1 bg-white border border-slate-200 rounded-2xl p-6 overflow-hidden">
                  <div className="absolute top-3 right-4 text-5xl font-black text-brand-100 select-none leading-none">
                    {String(s.n).padStart(2, "0")}
                  </div>
                  <div className="relative inline-flex w-12 h-12 rounded-xl bg-brand-50 items-center justify-center text-brand-600">
                    <Icon size={24} strokeWidth={2} />
                  </div>
                  <h3 className="relative mt-4 font-semibold text-ink">{s.title}</h3>
                  <p className="relative mt-2 text-sm text-slate-600">{s.body}</p>
                </div>
                {idx < STEPS.length - 1 && (
                  <div className="grid place-items-center px-1 md:px-2">
                    <ArrowRight className="hidden md:block text-slate-300" size={20} />
                    <ArrowDown className="md:hidden text-slate-300 my-2" size={20} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-sm text-slate-500 text-center">
          ⓘ 결제·계좌이체는 <strong>트위터 DM 그대로</strong>. 우리는 결제에 개입하지 않아요.
        </p>
      </div>
    </section>
  );
}

type CompareIcon = "check" | "cross" | "neutral";
type CompareItem = { label: string; mark: CompareIcon; note?: string };
type CompareColumn = {
  title: string;
  subtitle?: string;
  highlight?: boolean;
  items: CompareItem[];
};

const COMPARE_COLUMNS: CompareColumn[] = [
  {
    title: "트위터 + 노션·메모",
    subtitle: "현재 대부분의 총대",
    items: [
      { label: "전환 비용 0", mark: "check", note: "이미 쓰던 방식" },
      { label: "모집글 매번 직접", mark: "cross" },
      { label: "명단 DM·메모장 산재", mark: "cross" },
      { label: "안내 N명 복붙", mark: "cross" },
      { label: "결제 트위터 DM", mark: "check" },
      { label: "신뢰 팔로워·후기 트윗", mark: "neutral" },
    ],
  },
  {
    title: "결제·중개 통합 플랫폼",
    subtitle: "기존 시도된 대안",
    items: [
      { label: "전환 비용 큼", mark: "cross", note: "결제·약관·가입" },
      { label: "참여자 모객 어려움", mark: "cross", note: "분철 참여자 대다수가 트위터에 있음" },
      { label: "자체 시스템", mark: "check" },
      { label: "자동 알림", mark: "check" },
      { label: "자체 PG·에스크로", mark: "neutral", note: "약관 동의 필요" },
      { label: "자체 평점", mark: "neutral" },
    ],
  },
  {
    title: "스플로 (가제)",
    subtitle: "운영만 거든다",
    highlight: true,
    items: [
      { label: "전환 비용 0", mark: "check", note: "링크 한 줄 추가" },
      { label: "자동 템플릿 + 복사", mark: "check" },
      { label: "한 테이블 + 결제 체크", mark: "check" },
      { label: "단계 토글 → 일괄", mark: "check" },
      { label: "트위터 DM 그대로", mark: "check", note: "개입 X" },
      { label: "이력 인증 페이지", mark: "check", note: "바이오·고정 트윗에 링크로 첨부" },
    ],
  },
];

function Comparison() {
  return (
    <section id="compare" className="py-20 md:py-28 bg-white border-y border-slate-200">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-brand-700">비교</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">왜 굳이 새 도구를?</h2>
          <p className="mt-4 text-slate-600">
            기존 분철 흐름을 깨지 않으면서, 운영 시간만 줄이는 데 집중했어요.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-5 items-start">
          {COMPARE_COLUMNS.map((col) => (
            <CompareCardCol key={col.title} col={col} />
          ))}
        </div>

        <p className="mt-6 text-xs text-slate-500">
          * 결제·환불 보장·영상 인증은 사용자 충분히 모인 뒤 추가 예정. 본 단계에서는 약속하지 않습니다.
        </p>
      </div>
    </section>
  );
}

function CompareCardCol({ col }: { col: CompareColumn }) {
  return (
    <div
      className={`rounded-2xl border p-6 ${
        col.highlight
          ? "border-brand-400 bg-brand-50/40 ring-2 ring-brand-200"
          : "border-slate-200 bg-white"
      }`}
    >
      <h3 className={`font-bold ${col.highlight ? "text-brand-700" : "text-ink"}`}>{col.title}</h3>
      {col.subtitle && <p className="mt-1 text-xs text-slate-500">{col.subtitle}</p>}
      <ul className="mt-5 space-y-3">
        {col.items.map((it) => (
          <li key={it.label} className="flex items-start gap-2.5">
            <CompareMark mark={it.mark} />
            <div className="text-sm">
              <div className={`${col.highlight ? "text-ink font-medium" : "text-slate-700"}`}>{it.label}</div>
              {it.note && <div className="text-xs text-slate-500 mt-0.5">{it.note}</div>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CompareMark({ mark }: { mark: CompareIcon }) {
  if (mark === "check") return <CheckCircle2 size={18} className="text-emerald-500 mt-0.5 shrink-0" />;
  if (mark === "cross") return <XCircle size={18} className="text-rose-400 mt-0.5 shrink-0" />;
  return <Minus size={18} className="text-slate-400 mt-0.5 shrink-0" />;
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
          <p className="mt-3 text-slate-600">
            현재 ~ 2026년 8월 사이 베타로 운영합니다.
            <br />
            이메일 남겨주시면 출시 시 우선 초대해드려요.
          </p>
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
            <span>스플로 (가제) · 분철 총대의 운영 비서</span>
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
