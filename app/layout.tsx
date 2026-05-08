import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "스플로",
  description:
    "모집은 트위터에서, 운영은 스플로에서. 분철자가 만든 — DM 부담 없이, 둘 다 편한 분철.",
  openGraph: {
    title: "스플로",
    description:
      "모집은 트위터에서, 운영은 스플로에서. 분철자가 만든 — DM 부담 없이, 둘 다 편한 분철.",
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
