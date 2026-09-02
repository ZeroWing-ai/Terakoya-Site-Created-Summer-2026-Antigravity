"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowRight,
  Sparkles,
  Mail,
  Compass,
  Home,
  HeartHandshake,
  Clock,
  School,
  Users,
} from "lucide-react";
import { NAV_ITEMS, SITE_INFO } from "@/constants/navigation";

interface DrawerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navIcons: Record<string, React.ReactNode> = {
  "/": <Home className="w-5 h-5 text-terakoya-green" />,
  "#about": <Compass className="w-5 h-5 text-terakoya-green" />,
  "#principles": <HeartHandshake className="w-5 h-5 text-terakoya-yellow" />,
  "#schedule": <Clock className="w-5 h-5 text-terakoya-orange" />,
  "#overview": <School className="w-5 h-5 text-terakoya-green" />,
  "#staff": <Users className="w-5 h-5 text-terakoya-yellow" />,
  "#contact": <Mail className="w-5 h-5 text-terakoya-orange" />,
};

export const DrawerMenu: React.FC<DrawerMenuProps> = ({ isOpen, onClose }) => {
  // Escキーで閉じる & スクロールロック
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* バックドロップ背景（クリックで閉じる） */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-stone-950/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* スライドインドロワーパネル */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="relative w-full max-w-md bg-white/95 backdrop-blur-md shadow-2xl h-full flex flex-col z-10 border-l border-leaf-100 overflow-y-auto"
          >
            {/* 上部ヘッダー（ロゴ ＆ 閉じるボタン） */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-leaf-100/70">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-terakoya-green flex items-center justify-center text-white font-bold text-sm shadow-sm">
                  て
                </div>
                <div>
                  <span className="font-bold text-lg text-terakoya-green tracking-wide">
                    {SITE_INFO.name}
                  </span>
                  <span className="block text-[10px] text-terakoya-muted tracking-wider">
                    ALTERNATIVE SCHOOL
                  </span>
                </div>
              </div>

              {/* 閉じるボタン */}
              <button
                onClick={onClose}
                className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-leaf-50 hover:bg-leaf-100 text-terakoya-text transition-all duration-200 border border-leaf-200/60 active:scale-95"
                aria-label="メニューを閉じる"
              >
                <span className="text-xs font-medium text-terakoya-muted group-hover:text-terakoya-text">
                  閉じる
                </span>
                <X className="w-4 h-4 text-terakoya-green group-hover:rotate-90 transition-transform duration-200" />
              </button>
            </div>

            {/* ナビゲーションリンク一覧 */}
            <div className="flex-1 px-5 sm:px-6 py-6 space-y-3">
              <p className="text-xs font-bold text-terakoya-green uppercase tracking-widest px-2 mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-terakoya-yellow" />
                Menu Navigation
              </p>

              <nav className="space-y-1.5">
                {NAV_ITEMS.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * index + 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="group flex items-center justify-between p-3 rounded-2xl bg-leaf-50/50 hover:bg-leaf-100/70 border border-transparent hover:border-leaf-200 transition-all duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-white shadow-2xs group-hover:scale-105 transition-transform duration-200">
                          {navIcons[item.href] || <ArrowRight className="w-4 h-4 text-terakoya-green" />}
                        </div>
                        <div>
                          <div className="flex items-baseline gap-2">
                            <span className="font-bold text-sm sm:text-base text-terakoya-text group-hover:text-terakoya-green transition-colors">
                              {item.label}
                            </span>
                            <span className="text-[10px] font-semibold text-terakoya-muted tracking-wider">
                              {item.enLabel}
                            </span>
                          </div>
                          {item.description && (
                            <p className="text-[11px] text-terakoya-muted mt-0.5 leading-snug">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-leaf-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 flex-shrink-0" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* お問い合わせ・見学バナー */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-terakoya-orange-soft via-terakoya-yellow-soft to-leaf-50 border border-terakoya-orange/20"
              >
                <span className="inline-block text-xs font-bold text-terakoya-orange bg-white px-2.5 py-0.5 rounded-full mb-2 shadow-xs">
                  随時受付中
                </span>
                <h4 className="font-bold text-terakoya-text text-sm">
                  見学・体験のお申し込み
                </h4>
                <p className="text-xs text-terakoya-muted mt-1 leading-relaxed">
                  てらこやの日常や雰囲気をぜひ体感してください。お気軽にご相談いただけます。
                </p>
                <Link
                  href="#contact"
                  onClick={onClose}
                  className="mt-3.5 inline-flex items-center justify-center w-full gap-2 py-2.5 px-4 rounded-xl bg-terakoya-orange hover:bg-terakoya-orange-hover text-white text-xs font-bold shadow-md shadow-terakoya-orange/20 transition-all active:scale-[0.98]"
                >
                  <Mail className="w-4 h-4" />
                  お問い合わせフォームへ
                </Link>
              </motion.div>
            </div>

            {/* フッター情報 */}
            <div className="px-6 py-4 border-t border-leaf-100/70 bg-leaf-50/40 text-center">
              <p className="text-[11px] text-terakoya-muted">
                © {new Date().getFullYear()} {SITE_INFO.name}. All Rights Reserved.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
