import React from "react";
import Link from "next/link";
import { Trees, Mail, Phone, MapPin, Heart, Sparkles } from "lucide-react";
import { NAV_ITEMS, SITE_INFO } from "@/constants/navigation";
import { TERAKOYA_DATA } from "@/constants/terakoyaData";

export const Footer: React.FC = () => {
  const { schoolInfo } = TERAKOYA_DATA.contactAndAccess;

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t-4 border-terakoya-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-stone-800">
          {/* 左側：ロゴ & 理念 */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-terakoya-green text-white flex items-center justify-center shadow-md">
                <Trees className="w-6 h-6" />
              </div>
              <div>
                <span className="block font-bold text-xl text-white tracking-wide">
                  {SITE_INFO.name}
                </span>
                <span className="block text-[10px] text-leaf-300 tracking-wider">
                  ALTERNATIVE SCHOOL
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              自然の中で、比べられることなく、強いられることなく、遊び、学び、自分を知り調和して生きるオルタナティブスクールです。
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-800 text-xs text-terakoya-yellow font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>見学・体験は随時受付中</span>
            </div>
          </div>

          {/* 中央：ナビゲーション */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-white tracking-wider uppercase">
              Navigation
            </h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-stone-400 hover:text-terakoya-yellow-soft transition-colors inline-block py-0.5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 右側：アクセス & 連絡先情報 */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-white tracking-wider uppercase">
              Information & Access
            </h4>
            <div className="space-y-2 text-xs text-stone-400 leading-relaxed">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-terakoya-yellow flex-shrink-0 mt-0.5" />
                <span>{schoolInfo.address.postalCode} {schoolInfo.address.location}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-leaf-300 flex-shrink-0" />
                <span>TEL: {schoolInfo.contactMethods.tel} / 携帯: {schoolInfo.contactMethods.mobile}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-terakoya-orange flex-shrink-0" />
                <span>Email: {schoolInfo.contactMethods.email}</span>
              </p>
            </div>
            <div className="pt-2">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-terakoya-orange hover:bg-terakoya-orange-hover text-white text-xs font-bold shadow-sm transition-all"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>お問い合わせ・見学申込</span>
              </Link>
            </div>
          </div>
        </div>

        {/* コピーライト */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} {schoolInfo.orgName}. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            自然の中で育つ子どもたちの未来のために <Heart className="w-3.5 h-3.5 text-terakoya-orange fill-terakoya-orange" />
          </p>
        </div>
      </div>
    </footer>
  );
};
