import React from "react";
import { TERAKOYA_DATA } from "@/constants/terakoyaData";
import { School, Users, JapaneseYen, Calendar, ShieldCheck, Sparkles, AlertCircle, Check } from "lucide-react";

export const OverviewSection: React.FC = () => {
  const { overview } = TERAKOYA_DATA;

  return (
    <section id="overview" className="py-20 sm:py-28 bg-leaf-50/50 border-y border-leaf-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションタイトル */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-leaf-100 text-terakoya-green text-xs sm:text-sm font-bold">
            <School className="w-4 h-4 text-terakoya-green" />
            <span>SCHOOL OVERVIEW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-terakoya-text tracking-tight">
            学校の概要・費用
          </h2>
          <p className="text-sm sm:text-base text-terakoya-muted font-medium">
            募集対象、学費、休日および安心・安全への取り組みについて
          </p>
        </div>

        {/* 2カラムグリッド（基本情報・学費 & 休日・ガイドライン） */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-14">
          {/* 左側：基本情報 ＆ 学費テーブル（7カラム） */}
          <div className="lg:col-span-7 space-y-6">
            {/* 対象 & 定員 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-3xl bg-white border border-leaf-100 shadow-xs flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-leaf-50 text-terakoya-green flex-shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-terakoya-muted block">対象</span>
                  <p className="font-bold text-base sm:text-lg text-terakoya-text mt-0.5">
                    {overview.target}
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-leaf-100 shadow-xs flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-terakoya-yellow-soft text-terakoya-yellow flex-shrink-0">
                  <School className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-terakoya-muted block">定員</span>
                  <p className="font-bold text-base sm:text-lg text-terakoya-text mt-0.5">
                    {overview.capacity}
                  </p>
                </div>
              </div>
            </div>

            {/* 費用カード */}
            <div className="p-7 sm:p-8 rounded-3xl bg-white border border-leaf-100 shadow-xs space-y-6">
              <div className="flex items-center gap-2.5 pb-4 border-b border-leaf-100">
                <div className="p-2 rounded-xl bg-terakoya-orange-soft text-terakoya-orange">
                  <JapaneseYen className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg sm:text-xl text-terakoya-text">費用のご案内</h3>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 rounded-2xl bg-leaf-50/60 border border-leaf-100 gap-1.5">
                  <span className="font-bold text-sm sm:text-base text-terakoya-text">入学金</span>
                  <span className="text-xl sm:text-2xl font-black text-terakoya-green">
                    {overview.tuition.admissionFee}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 rounded-2xl bg-leaf-50/60 border border-leaf-100 gap-1.5">
                  <div>
                    <span className="font-bold text-sm sm:text-base text-terakoya-text">月謝</span>
                    <span className="text-xs sm:text-sm text-terakoya-muted ml-2">（昼食費込み）</span>
                  </div>
                  <span className="text-xl sm:text-2xl font-black text-terakoya-green">
                    {overview.tuition.monthlyFee}
                  </span>
                </div>
              </div>

              {/* 特記事項：物納・スキル提供での支払い可能 ＆ 兄弟割引 */}
              <div className="space-y-3 pt-2">
                <div className="p-4 sm:p-5 rounded-2xl bg-terakoya-yellow-soft/70 border border-amber-200 text-sm sm:text-base text-terakoya-text leading-relaxed flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-terakoya-yellow flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block mb-1">柔軟な支払い方法（物納・スキル提供）</span>
                    <span className="text-xs sm:text-sm text-terakoya-muted block">
                      {overview.tuition.alternativePaymentNote}
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-terakoya-orange-soft/70 border border-orange-200 text-sm sm:text-base text-terakoya-text leading-relaxed flex items-start gap-3">
                  <Check className="w-5 h-5 text-terakoya-orange flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block mb-1">兄弟割引</span>
                    <span className="text-xs sm:text-sm text-terakoya-muted block">
                      {overview.tuition.siblingDiscount}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 休日について */}
            <div className="p-7 rounded-3xl bg-white border border-leaf-100 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5 pb-3 border-b border-leaf-100">
                <div className="p-2 rounded-xl bg-leaf-50 text-terakoya-green">
                  <Calendar className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base sm:text-lg text-terakoya-text">休日・長期休暇</h3>
              </div>

              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="p-3.5 rounded-xl bg-leaf-50/50">
                  <dt className="font-bold text-terakoya-muted text-xs">定休日</dt>
                  <dd className="font-semibold text-terakoya-text text-sm sm:text-base mt-0.5">{overview.holidays.weekly}</dd>
                </div>
                <div className="p-3.5 rounded-xl bg-leaf-50/50">
                  <dt className="font-bold text-terakoya-muted text-xs">夏休み</dt>
                  <dd className="font-semibold text-terakoya-text text-sm sm:text-base mt-0.5">{overview.holidays.summer}</dd>
                </div>
                <div className="p-3.5 rounded-xl bg-leaf-50/50">
                  <dt className="font-bold text-terakoya-muted text-xs">冬休み</dt>
                  <dd className="font-semibold text-terakoya-text text-sm sm:text-base mt-0.5">{overview.holidays.winter}</dd>
                </div>
                <div className="p-3.5 rounded-xl bg-leaf-50/50">
                  <dt className="font-bold text-terakoya-muted text-xs">春休み</dt>
                  <dd className="font-semibold text-terakoya-text text-sm sm:text-base mt-0.5">{overview.holidays.spring}</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* 右側：ガイドライン・安全への取り組み（5カラム） */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-leaf-100 shadow-xs space-y-5">
              <div className="flex items-center gap-2.5 pb-3 border-b border-leaf-100">
                <div className="p-2 rounded-xl bg-leaf-50 text-terakoya-green">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base sm:text-lg text-terakoya-text">安心・安全とお願い</h3>
              </div>

              <div className="space-y-4">
                {overview.guidelines.map((guide, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-leaf-50/60 border border-leaf-100 space-y-2"
                  >
                    <h4 className="font-bold text-sm sm:text-base text-terakoya-green flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-terakoya-orange flex-shrink-0 mt-1" />
                      <span>{guide.title}</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-terakoya-muted leading-relaxed">
                      {guide.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
