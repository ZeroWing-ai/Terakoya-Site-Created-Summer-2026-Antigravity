"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight, Trees, Sun } from "lucide-react";

interface SlideData {
  id: number;
  imageUrl: string;
  badge: string;
  title: string;
  subTitle: string;
  description: string;
}

const SLIDES: SlideData[] = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=2000&q=80", // 自然の中の木漏れ日
    badge: "自然と共にある学びの場",
    title: "自分で選び、\n自分で決める。",
    subTitle: "生きる力を育むオルタナティブスクール",
    description: "豊かな自然の中で、子どもたち一人ひとりの「やってみたい！」という好奇心を大切にし、自ら学ぶ力を育みます。",
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=2000&q=80", // 森と子どもたちの自然体験
    badge: "体験から広がる可能性",
    title: "正解はひとつじゃない。\n個性を伸ばす自由な環境。",
    subTitle: "ありのままの自分でいられる安心の居場所",
    description: "教科書だけでは学べない、実体験と対話を通じた探究的な学び。仲間とともに考え、創り出す喜びを体験します。",
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2000&q=80", // 豊かな森林の風景
    badge: "見学・体験随時受付中",
    title: "子どもが主役の、\n新しい学校のかたち。",
    subTitle: "一人ひとりのペースに寄り添う温かなコミュニティ",
    description: "不登校や学校に違和感を持つ子どもたちも、安心して自分のペースで歩み出せる場を提供しています。",
  },
];

export const HeroSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  // 自動スライド送り（5.5秒ごと、ホバー時は一時停止）
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5500);

    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  return (
    <section
      className="relative w-full h-[100svh] min-h-[600px] overflow-hidden bg-stone-900"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="ヒーロースライダー"
    >
      {/* 背景画像スライダー */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${SLIDES[currentIndex].imageUrl})` }}
        >
          {/* 温かみのあるグラデーションオーバーレイ */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/75 via-stone-950/50 to-stone-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/40" />
        </motion.div>
      </AnimatePresence>

      {/* コンテンツ（キャッチコピー・説明・アクションボタン） */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-2xl text-white pt-16 sm:pt-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-4 sm:space-y-6"
            >
              {/* バッジ */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-terakoya-yellow-soft">
                <Sparkles className="w-4 h-4 text-terakoya-yellow" />
                <span>{SLIDES[currentIndex].badge}</span>
              </div>

              {/* メインキャッチコピー */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.25] text-white drop-shadow-md whitespace-pre-line">
                {SLIDES[currentIndex].title}
              </h1>

              {/* サブタイトル */}
              <p className="text-base sm:text-xl font-bold text-leaf-200 drop-shadow-sm">
                {SLIDES[currentIndex].subTitle}
              </p>

              {/* 説明文 */}
              <p className="text-xs sm:text-base text-stone-200 leading-relaxed max-w-xl font-normal drop-shadow-xs">
                {SLIDES[currentIndex].description}
              </p>

              {/* CTAボタングループ */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  href="#about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-terakoya-green hover:bg-leaf-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-terakoya-green/30 transition-all duration-200 active:scale-95 group"
                >
                  <Trees className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span>てらこやについて知る</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/40 text-white font-bold text-sm sm:text-base transition-all duration-200 active:scale-95"
                >
                  <Sun className="w-5 h-5 text-terakoya-yellow" />
                  <span>見学・体験申し込み</span>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* スライド操作用ナビゲーション矢印（PC・タブレット） */}
      <div className="hidden sm:flex absolute right-8 bottom-12 z-20 items-center gap-3">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-md border border-white/20 text-white transition-all duration-200 active:scale-90"
          aria-label="前のスライド"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-md border border-white/20 text-white transition-all duration-200 active:scale-90"
          aria-label="次のスライド"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* ページネーションインジケーター（下部中央または左下） */}
      <div className="absolute left-1/2 -translate-x-1/2 sm:left-8 sm:translate-x-0 bottom-6 sm:bottom-12 z-20 flex items-center gap-3">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              currentIndex === index
                ? "w-8 h-2.5 bg-terakoya-yellow"
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`スライド ${index + 1} へ移動`}
            aria-current={currentIndex === index ? "true" : "false"}
          />
        ))}
      </div>

      {/* スクロール誘導インジケーター */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-2 text-white/70">
        <span className="text-[11px] font-bold tracking-widest uppercase text-terakoya-yellow-soft">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-5 h-9 rounded-full border-2 border-white/40 flex items-start justify-center p-1"
        >
          <div className="w-1.5 h-2.5 bg-terakoya-yellow rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};
