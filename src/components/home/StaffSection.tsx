import React from "react";
import { TERAKOYA_DATA } from "@/constants/terakoyaData";
import { Users, Award, Smile } from "lucide-react";

export const StaffSection: React.FC = () => {
  const { staffList, guestInstructors } = TERAKOYA_DATA;

  return (
    <section id="staff" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* セクションタイトル */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-leaf-100 text-terakoya-green text-xs sm:text-sm font-bold">
          <Users className="w-4 h-4 text-terakoya-green" />
          <span>STAFF & INSTRUCTORS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-terakoya-text tracking-tight">
          スタッフ・特別講師紹介
        </h2>
        <p className="text-sm sm:text-base text-terakoya-muted font-medium">
          子どもたちとともに学び、育ちあうスタッフと、多彩な分野の達人たち
        </p>
      </div>

      {/* 常勤スタッフグリッド */}
      <div className="mt-14">
        <h3 className="text-center font-bold text-lg sm:text-xl text-terakoya-text mb-8 flex items-center justify-center gap-2">
          <Smile className="w-5 h-5 text-terakoya-green" />
          <span>てらこやスタッフ</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {staffList.map((staff, index) => (
            <div
              key={index}
              className="p-7 sm:p-8 rounded-3xl bg-white border border-leaf-100 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* アバター & 役職 */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-leaf-400 to-terakoya-green text-white flex items-center justify-center font-bold text-lg shadow-sm flex-shrink-0">
                    {staff.name.slice(0, 1)}
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <h4 className="font-bold text-lg sm:text-xl text-terakoya-text">
                        {staff.name}
                      </h4>
                      <span className="text-xs font-bold text-terakoya-green bg-leaf-50 px-2.5 py-0.5 rounded-full border border-leaf-200">
                        {staff.nickname}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-terakoya-muted mt-0.5 font-medium">
                      {staff.role}
                    </p>
                  </div>
                </div>

                {/* 自己紹介文 */}
                <p className="text-sm sm:text-base text-terakoya-muted leading-relaxed">
                  {staff.description}
                </p>
              </div>

              {/* タグ */}
              {staff.tags && staff.tags.length > 0 && (
                <div className="mt-6 pt-4 border-t border-leaf-100/70 flex flex-wrap gap-2">
                  {staff.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-semibold text-terakoya-green bg-leaf-50/90 px-3 py-1 rounded-full border border-leaf-200/60"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 特別講師陣 */}
      <div className="mt-16 bg-leaf-50/60 rounded-3xl p-8 sm:p-12 border border-leaf-100">
        <div className="text-center space-y-2 mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-terakoya-orange bg-terakoya-orange-soft px-3.5 py-1 rounded-full border border-orange-200">
            <Award className="w-4 h-4" />
            <span>GUEST INSTRUCTORS</span>
          </div>
          <h3 className="font-bold text-xl sm:text-2xl text-terakoya-text">
            特別講師陣
          </h3>
          <p className="text-xs sm:text-sm text-terakoya-muted">
            本物の体験・技・世界観を伝えてくれる各界の専門家・達人たち
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {guestInstructors.map((instructor, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-white border border-leaf-100 shadow-2xs hover:border-leaf-300 transition-all text-center space-y-1 group"
            >
              <p className="font-bold text-sm sm:text-base text-terakoya-text group-hover:text-terakoya-green transition-colors">
                {instructor.name}
              </p>
              <p className="text-xs font-medium text-terakoya-muted">
                {instructor.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
