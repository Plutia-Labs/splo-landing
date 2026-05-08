import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { WaitlistForm } from "@/components/WaitlistForm";
import { WaitlistCounter } from "@/components/WaitlistCounter";

export const dynamic = "force-dynamic";

export default function WaitlistPage() {
  return (
    <>
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur nav-shadow">
        <div className="mx-auto max-w-3xl px-5 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
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
          <a
            href="/"
            className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-ink"
          >
            <ChevronLeft size={16} />
            메인으로
          </a>
        </div>
      </header>

      <main className="bg-gradient-to-b from-brand-50 to-paper min-h-[calc(100vh-4rem)] py-12 md:py-20">
        <div className="mx-auto max-w-2xl px-5">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-10">
            <div className="text-center max-w-xl mx-auto">
              <span className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full">
                BETA · 사전 신청
              </span>
              <h1 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
                먼저 써보고, 같이 만들어요.
              </h1>
              <p className="mt-3 text-slate-600">
                2026년 베타로 운영합니다.
                <br />
                이메일 남겨주시면 출시 시 우선 초대해드려요.
              </p>
              <WaitlistCounter className="mt-6" />
            </div>

            <WaitlistForm />
          </div>
        </div>
      </main>

      <footer className="py-12 border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-3xl px-5">
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
              <Link href="/" className="hover:text-ink">메인</Link>
              <Link href="/privacy" className="hover:text-ink">개인정보 처리방침</Link>
              <a href="mailto:hello@splo.app" className="hover:text-ink">문의</a>
            </div>
          </div>
          <div className="mt-6 text-xs text-slate-400">© 2026 Plutia Labs</div>
        </div>
      </footer>
    </>
  );
}
