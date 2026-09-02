import React from "react";
import { Header } from "@/components/layout/Header";
import { HeroSlider } from "@/components/home/HeroSlider";
import { PhilosophySection } from "@/components/home/PhilosophySection";
import { PrinciplesSection } from "@/components/home/PrinciplesSection";
import { DailyScheduleSection } from "@/components/home/DailyScheduleSection";
import { OverviewSection } from "@/components/home/OverviewSection";
import { StaffSection } from "@/components/home/StaffSection";
import { ContactSection } from "@/components/home/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-terakoya-bg selection:bg-leaf-200 selection:text-terakoya-green">
      {/* 固定ヘッダー（ハンバーガーメニュー含む） */}
      <Header />

      {/* メインコンテンツ */}
      <main className="flex-1">
        {/* 全画面ヒーロースライダー */}
        <HeroSlider />

        {/* 1. 地球子舎（てらこや）とは・代表メッセージ・4つの力 */}
        <PhilosophySection />

        {/* 2. 大事にしたいこと（5つの柱） */}
        <PrinciplesSection />

        {/* 3. 一日の流れ（タイムライン） */}
        <DailyScheduleSection />

        {/* 4. 学校の概要・費用・安心の取り組み */}
        <OverviewSection />

        {/* 5. スタッフ紹介・特別講師 */}
        <StaffSection />

        {/* 6. 見学・体験・アクセス・お問い合わせ */}
        <ContactSection />
      </main>

      {/* フッター */}
      <Footer />
    </div>
  );
}
