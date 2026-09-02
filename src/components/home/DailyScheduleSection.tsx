import React from "react";
import { TERAKOYA_DATA } from "@/constants/terakoyaData";
import { Clock, Sun, BookOpen, Users, Compass, Utensils, Sparkles, CheckCircle2 } from "lucide-react";

export const DailyScheduleSection: React.FC = () => {
  const { dailySchedule } = TERAKOYA_DATA;

  const iconMap: Record<string, React.ReactNode> = {
    Morning: <BookOpen className="w-5 h-5 text-terakoya-green" />,
    Meeting: <Users className="w-5 h-5 text-terakoya-yellow" />,
    Activity: <Compass className="w-5 h-5 text-terakoya-orange" />,
    Lunch: <Utensils className="w-5 h-5 text-terakoya-green" />,
    Closing: <Sun className="w-5 h-5 text-terakoya-yellow" />,
  };

  return (
    <section id="schedule" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* セクションタイトル */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-leaf-100 text-terakoya-green text-xs sm:text-sm font-bold">
          <Clock className="w-4 h-4 text-terakoya-green" />
          <span>DAILY SCHEDULE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-terakoya-text tracking-tight">
          一日の流れ
        </h2>
        <p className="text-sm sm:text-base text-terakoya-muted font-medium">
          決められた時間割ではなく、対話と自主性を重んじるてらこやの1日
        </p>
      </div>

      {/* タイムライン表示 */}
      <div className="mt-14 max-w-4xl mx-auto relative">
        {/* 中央のライン */}
        <div className="hidden sm:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-leaf-300 via-terakoya-yellow to-leaf-200" />

        <div className="space-y-6 sm:space-y-8">
          {dailySchedule.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-8 group"
            >
              {/* アイコンバッジ */}
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white border-2 border-leaf-200 group-hover:border-terakoya-green shadow-xs flex items-center justify-center z-10 transition-colors">
                {iconMap[item.timeTag] || <Sparkles className="w-5 h-5 text-terakoya-green" />}
              </div>

              {/* コンテンツカード */}
              <div className="flex-1 w-full bg-white rounded-3xl p-6 sm:p-7 border border-leaf-100 shadow-xs hover:shadow-md transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-terakoya-text flex items-center gap-2">
                    <span>{item.title}</span>
                  </h3>
                  <span className="text-xs font-bold text-terakoya-green bg-leaf-50 px-3 py-1 rounded-full border border-leaf-200">
                    {item.category}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-terakoya-muted leading-relaxed">
                  {item.description}
                </p>

                {/* プランの時間の詳細内訳 */}
                {item.details && (
                  <div className="mt-5 pt-5 border-t border-leaf-100/70 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {item.details.map((detail, dIdx) => (
                      <div
                        key={dIdx}
                        className="p-5 rounded-2xl bg-leaf-50/60 border border-leaf-100"
                      >
                        <span className="font-bold text-terakoya-text text-sm sm:text-base block mb-2 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-terakoya-orange flex-shrink-0" />
                          {detail.label}
                        </span>
                        <p className="text-sm sm:text-base text-terakoya-muted leading-relaxed">
                          {detail.content}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
