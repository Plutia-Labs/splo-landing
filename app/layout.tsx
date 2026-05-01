import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "스플로 — 분철 총대의 운영 비서",
  description:
    "분철은 트위터에서, 운영은 스플로에서. 모집·결제 방식은 그대로 두고 총대의 손만 빌려드립니다.",
  openGraph: {
    title: "스플로 — 분철 총대의 운영 비서",
    description: "모집·결제 방식은 트위터 그대로. 총대의 운영 시간만 줄여드립니다.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.css"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `if('scrollRestoration' in history){history.scrollRestoration='manual';}window.addEventListener('pageshow',function(){window.scrollTo(0,0);});`,
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
