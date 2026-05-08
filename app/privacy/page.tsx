import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { readFile } from "node:fs/promises";
import path from "node:path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const metadata: Metadata = {
  title: "개인정보 처리방침 | 스플로",
  description:
    "스플로(splo) 사전 신청 단계 개인정보 처리방침. 수집·보유·파기 기준과 정보주체 권리를 안내합니다.",
};

export const dynamic = "force-static";

async function loadPrivacyContent(): Promise<string> {
  const filePath = path.join(process.cwd(), "content", "privacy.md");
  return readFile(filePath, "utf-8");
}

export default async function PrivacyPage() {
  const content = await loadPrivacyContent();

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur nav-shadow">
        <div className="mx-auto max-w-3xl px-5 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/img/splo-icon.png"
              alt="스플로 로고"
              width={40}
              height={40}
              className="rounded-xl ring-1 ring-slate-200"
              priority
            />
            <span className="font-semibold text-ink">스플로</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-ink"
          >
            <ChevronLeft size={16} />
            메인으로
          </Link>
        </div>
      </header>

      <main className="bg-paper min-h-[calc(100vh-4rem)] py-12 md:py-20">
        <article className="mx-auto max-w-3xl px-5">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-12">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => (
                  <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-ink mt-0 mb-6">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-xl md:text-2xl font-bold text-ink mt-10 mb-4">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-lg font-semibold text-ink mt-6 mb-3">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-slate-700 leading-7 my-4">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc pl-5 space-y-2 text-slate-700 my-4 leading-7">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal pl-5 space-y-2 text-slate-700 my-4 leading-7">
                    {children}
                  </ol>
                ),
                li: ({ children }) => <li>{children}</li>,
                strong: ({ children }) => (
                  <strong className="font-semibold text-ink">{children}</strong>
                ),
                em: ({ children }) => (
                  <em className="italic text-slate-600">{children}</em>
                ),
                hr: () => <hr className="my-8 border-slate-200" />,
                blockquote: ({ children }) => (
                  <blockquote className="my-4 border-l-4 border-brand-300 bg-brand-50/50 pl-4 py-2 text-sm text-slate-600">
                    {children}
                  </blockquote>
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    className="text-brand-700 hover:text-brand-900 underline"
                    target={href?.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href?.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {children}
                  </a>
                ),
                code: ({ children }) => (
                  <code className="px-1.5 py-0.5 rounded bg-slate-100 text-sm text-ink">
                    {children}
                  </code>
                ),
                table: ({ children }) => (
                  <div className="my-6 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      {children}
                    </table>
                  </div>
                ),
                thead: ({ children }) => (
                  <thead className="bg-slate-50 border-b border-slate-200">
                    {children}
                  </thead>
                ),
                tbody: ({ children }) => (
                  <tbody className="divide-y divide-slate-200">
                    {children}
                  </tbody>
                ),
                tr: ({ children }) => <tr>{children}</tr>,
                th: ({ children }) => (
                  <th className="px-3 py-2 text-left font-semibold text-ink">
                    {children}
                  </th>
                ),
                td: ({ children }) => (
                  <td className="px-3 py-2 text-slate-700 align-top">
                    {children}
                  </td>
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        </article>
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
              <Link href="/" className="hover:text-ink">
                메인
              </Link>
              <a
                href="mailto:hello@splo.app"
                className="hover:text-ink"
              >
                문의
              </a>
            </div>
          </div>
          <div className="mt-6 text-xs text-slate-400">© 2026 Plutia Labs</div>
        </div>
      </footer>
    </>
  );
}
