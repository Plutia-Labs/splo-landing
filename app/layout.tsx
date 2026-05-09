import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

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
      <body className="antialiased">
        {children}
        <Analytics />
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_MEASUREMENT_ID}');`,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}
