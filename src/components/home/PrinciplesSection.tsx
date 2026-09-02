import React from "react";
import { TERAKOYA_DATA } from "@/constants/terakoyaData";
import { HeartHandshake, MessageSquare, Trees, BookOpen, Smile, Sparkles, Leaf } from "lucide-react";

export const PrinciplesSection: React.FC = () => {
  const { principles } = TERAKOYA_DATA;

  const iconMap: Record<string, React.ReactNode> = {
    "01": <HeartHandshake className="w-7 h-7 text-terakoya-green" />,
    "02": <MessageSquare className="w-7 h-7 text-terakoya-yellow" />,
    "03": <Trees className="w-7 h-7 text-terakoya-green" />,
    "04": <BookOpen className="w-7 h-7 text-terakoya-orange" />,
    "05": <Smile className="w-7 h-7 text-terakoya-yellow" />,
  };

  return (
    <section id="principles" className="py-20 sm:py-28 bg-leaf-50/50 border-y border-leaf-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクション見出し */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-leaf-100 text-terakoya-green text-xs sm:text-sm font-bold">
            <Sparkles className="w-4 h-4 text-terakoya-yellow" />
            <span>OUR 5 PRINCIPLES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-terakoya-text tracking-tight">
            大事にしたいこと
          </h2>
          <p className="text-sm sm:text-base text-terakoya-muted font-medium">
            てらこやの日常と学びのベースとなる5つの大切な柱
          </p>
        </div>

        {/* 5つの項目を1つずつ縦に並べる */}
        <div className="mt-14 max-w-4xl mx-auto space-y-8">
          {principles.map((item) => (
            <div
              key={item.id}
              className="p-7 sm:p-9 rounded-3xl bg-white border border-leaf-100 shadow-xs hover:shadow-md transition-all duration-300 group"
            >
              {/* ヘッダー部（番号・アイコン・タイトル） */}
              <div className="flex items-start gap-4 sm:gap-5 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-leaf-50 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform flex-shrink-0">
                  {iconMap[item.id]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-sm font-black text-leaf-400 font-mono tracking-wider">
                      #{item.id}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-terakoya-text">
                      {item.title}
                    </h3>
                  </div>

                  {/* サブタイトル（あれば） */}
                  {item.subtitle && !item.quote && (
                    <p className="text-xs sm:text-sm font-bold text-terakoya-green mt-1.5">
                      〜 {item.subtitle} 〜
                    </p>
                  )}
                </div>
              </div>

              {/* 名言引用（01のみ） */}
              {item.quote && (
                <div className="mb-5 p-4 rounded-xl bg-leaf-50 border-l-4 border-terakoya-green text-xs sm:text-sm text-terakoya-green font-bold leading-relaxed">
                  <p>{item.quote}</p>
                  {item.quoteAuthor && (
                    <p className="text-right text-[11px] text-terakoya-muted font-normal mt-1">
                      {item.quoteAuthor}
                    </p>
                  )}
                </div>
              )}

              {/* 説明文 ─ 1行ずつリスト表示 */}
              <ul className="space-y-2.5">
                {item.descPoints.map((point, pIdx) => (
                  <li
                    key={pIdx}
                    className="flex items-start gap-2.5 text-sm sm:text-base text-terakoya-text leading-relaxed"
                  >
                    <Leaf className="w-4 h-4 text-leaf-400 flex-shrink-0 mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
