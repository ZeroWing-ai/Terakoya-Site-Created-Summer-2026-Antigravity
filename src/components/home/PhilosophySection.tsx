import React from "react";
import { TERAKOYA_DATA } from "@/constants/terakoyaData";
import { Compass, Sparkles, Heart, Lightbulb, Users, Quote } from "lucide-react";

export const PhilosophySection: React.FC = () => {
  const { philosophy } = TERAKOYA_DATA;
  const powerIcons = [
    <Lightbulb key="0" className="w-6 h-6 text-terakoya-green" />,
    <Sparkles key="1" className="w-6 h-6 text-terakoya-yellow" />,
    <Heart key="2" className="w-6 h-6 text-terakoya-orange" />,
    <Users key="3" className="w-6 h-6 text-terakoya-green" />,
  ];

  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* セクションタイトル */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-leaf-100 text-terakoya-green text-xs sm:text-sm font-bold">
          <Compass className="w-4 h-4 text-terakoya-green" />
          <span>{philosophy.subtitle}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-terakoya-text tracking-tight">
          {philosophy.title}
        </h2>
        <p className="text-sm sm:text-base text-terakoya-muted font-medium pt-1">
          オルタナティブスクールてらこやが目指す教育と、私たちが大切にしている想い
        </p>
      </div>

      {/* 代表メッセージ & 導入 */}
      <div className="mt-14 max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-12 border border-leaf-100 shadow-xs hover:shadow-md transition-shadow space-y-8">
        {/* リード文 */}
        <div className="space-y-3 text-sm sm:text-base text-terakoya-text leading-relaxed">
          {philosophy.messageIntro.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* 4つの力（カードグリッド） */}
        <div className="py-4">
          <div className="mb-5 text-center">
            <span className="text-xs font-bold text-terakoya-green tracking-wider uppercase bg-leaf-50 px-3.5 py-1.5 rounded-full border border-leaf-200">
              これからの時代を切り開く4つの力
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {philosophy.fourPowers.map((power, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-leaf-50/70 border border-leaf-100 hover:border-leaf-300 transition-all flex items-start gap-3.5 group hover:bg-leaf-50"
              >
                <div className="p-2.5 rounded-xl bg-white shadow-2xs group-hover:scale-105 transition-transform flex-shrink-0">
                  {powerIcons[idx]}
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-terakoya-text">
                    {power.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-terakoya-muted mt-1 leading-relaxed">
                    {power.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 本文（問い直しと教育のあり方） */}
        <div className="space-y-3 text-sm sm:text-base text-terakoya-text leading-relaxed">
          {philosophy.messageBody.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* コアバリュー強調ボックス */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-leaf-50 via-terakoya-yellow-soft to-terakoya-orange-soft border border-leaf-200 text-center space-y-2 relative overflow-hidden">
          <Quote className="w-16 h-16 text-leaf-200/40 absolute -top-2 -left-2 rotate-180" />
          <div className="relative z-10">
            <p className="text-lg sm:text-2xl font-black text-terakoya-green tracking-wide">
              {philosophy.coreBelief.highlight1}
            </p>
            <p className="text-lg sm:text-2xl font-black text-terakoya-orange tracking-wide">
              {philosophy.coreBelief.highlight2}
            </p>
          </div>
        </div>

        {/* 結びの言葉 */}
        <div className="space-y-3 text-sm sm:text-base text-terakoya-text leading-relaxed pt-2">
          {philosophy.messageConclusion.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* 代表署名 */}
        <div className="pt-6 border-t border-leaf-100 flex flex-col sm:flex-row sm:items-center justify-end gap-1.5 text-right">
          <span className="text-xs sm:text-sm text-terakoya-muted font-medium">
            {philosophy.representative.title}
          </span>
          <span className="text-base sm:text-lg font-bold text-terakoya-text">
            {philosophy.representative.name}
          </span>
        </div>
      </div>
    </section>
  );
};
