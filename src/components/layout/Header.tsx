"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Mail, Trees } from "lucide-react";
import { DrawerMenu } from "./DrawerMenu";
import { NAV_ITEMS, SITE_INFO } from "@/constants/navigation";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-2.5 sm:py-3 border-b border-leaf-100"
            : "bg-gradient-to-b from-stone-950/70 via-stone-950/30 to-transparent py-3.5 sm:py-4 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* ブランドロゴ */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group flex-shrink-0 transition-transform duration-200 active:scale-95"
            aria-label="てらこや トップページ"
          >
            <div
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-md ${
                isScrolled
                  ? "bg-terakoya-green text-white shadow-leaf-200"
                  : "bg-white/90 text-terakoya-green backdrop-blur-xs"
              }`}
            >
              <Trees className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <span
                className={`block font-extrabold text-lg sm:text-2xl tracking-wide leading-none transition-colors duration-300 ${
                  isScrolled ? "text-terakoya-green" : "text-white drop-shadow-sm"
                }`}
              >
                {SITE_INFO.name}
              </span>
              <span
                className={`block text-[9px] sm:text-[10px] font-semibold tracking-wider mt-0.5 transition-colors duration-300 ${
                  isScrolled ? "text-terakoya-muted" : "text-white/80 drop-shadow-xs"
                }`}
              >
                ALTERNATIVE SCHOOL
              </span>
            </div>
          </Link>

          {/* 右側：PCナビゲーション ＆ アクションボタン */}
          <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
            {/* PC向け横並びナビ（1行で綺麗に収まるよう whitespace-nowrap 設定） */}
            <nav className="hidden xl:flex items-center gap-1.5 lg:gap-3">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-full text-xs lg:text-sm font-bold tracking-wide whitespace-nowrap transition-all duration-200 hover:scale-105 ${
                    isScrolled
                      ? "text-terakoya-text hover:text-terakoya-green hover:bg-leaf-50"
                      : "text-white/90 hover:text-white hover:bg-white/15 drop-shadow-xs"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* お問い合わせボタン（PC・タブレット表示） */}
            <Link
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-terakoya-orange hover:bg-terakoya-orange-hover text-white text-xs sm:text-sm font-bold shadow-md shadow-terakoya-orange/25 whitespace-nowrap transition-all duration-200 active:scale-95"
            >
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>お問い合わせ</span>
            </Link>

            {/* ハンバーガーメニューボタン（3本線 - 全画面・スマホ・PC共通対応） */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              className={`flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full border transition-all duration-200 active:scale-95 whitespace-nowrap ${
                isScrolled
                  ? "bg-leaf-50 hover:bg-leaf-100 text-terakoya-green border-leaf-200/80 shadow-xs"
                  : "bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-md"
              }`}
              aria-label="メニューを開く"
              aria-expanded={isDrawerOpen}
            >
              {/* 3本線アイコン */}
              <div className="flex flex-col justify-center gap-1 w-4 h-3.5">
                <span className={`block h-0.5 w-4 rounded-full transition-colors ${isScrolled ? "bg-terakoya-green" : "bg-white"}`} />
                <span className={`block h-0.5 w-3 rounded-full transition-colors ${isScrolled ? "bg-terakoya-green" : "bg-white"}`} />
                <span className={`block h-0.5 w-4 rounded-full transition-colors ${isScrolled ? "bg-terakoya-green" : "bg-white"}`} />
              </div>
              <span className="text-xs font-bold tracking-wider">
                MENU
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* スライドインメニュー */}
      <DrawerMenu
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
};
