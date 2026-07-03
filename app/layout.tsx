import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-kr",
});

export const metadata: Metadata = {
  title: "내 성격에 딱 맞는 IT 부캐 찾기 | IT 부캐 MBTI 테스트",
  description:
    "8개의 질문으로 알아보는 나의 IT 직장인 부캐. 협업 스타일부터 위기 대처법까지, 나에게 꼭 맞는 IT 직무 페르소나를 확인해보세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${notoSansKr.variable} bg-white font-sans text-gray-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
