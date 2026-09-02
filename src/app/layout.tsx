import type { Metadata } from "next";
import { Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";

const zenMaruGothic = Zen_Maru_Gothic({
  variable: "--font-zen-maru",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "てらこや | オルタナティブスクール",
  description: "自然豊かな環境で子どもたちの自発性と個性を大切に育むオルタナティブスクール「てらこや」の公式ホームページです。",
  keywords: ["てらこや", "オルタナティブスクール", "フリースクール", "自然体験", "学びの場"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${zenMaruGothic.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased selection:bg-leaf-200 selection:text-terakoya-green">
        {children}
      </body>
    </html>
  );
}
