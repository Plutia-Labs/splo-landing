import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        // 옛 상세 폼 페이지(/waitlist)는 메인 사전 신청 폼 섹션으로 영구 통합되었다.
        // Instagram 광고 CTA가 /waitlist?utm_...&utm_content=... 를 직접 가리키므로
        // 옛 경로 유입을 잃지 않도록 메인 #waitlist 섹션으로 리다이렉트한다.
        // Next.js redirects()는 source의 쿼리스트링(UTM)을 destination에 자동 보존한다.
        source: "/waitlist",
        destination: "/#waitlist",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
