"use client";

import React, { useState } from "react";
import { TERAKOYA_DATA } from "@/constants/terakoyaData";
import { Mail, Phone, MapPin, Sparkles, Send, CheckCircle2, AlertCircle } from "lucide-react";

export const ContactSection: React.FC = () => {
  const { contactAndAccess } = TERAKOYA_DATA;
  const { visitorGuide, schoolInfo } = contactAndAccess;

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "見学のお申し込み",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* セクションタイトル */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-leaf-100 text-terakoya-green text-xs sm:text-sm font-bold">
          <Mail className="w-4 h-4 text-terakoya-green" />
          <span>VISIT & CONTACT</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-terakoya-text tracking-tight">
          見学・体験・お問い合わせ
        </h2>
        <p className="text-sm sm:text-base text-terakoya-muted font-medium">
          てらこやの日常を体感してみませんか？見学や一日体験は随時受け付けています
        </p>
      </div>

      {/* 2カラムグリッド（見学案内・アクセス ＆ お問い合わせフォーム） */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-14">
        {/* 左側：見学・体験・アクセス案内（6カラム） */}
        <div className="lg:col-span-6 space-y-6">
          {/* 見学案内 & ビジター料金表 */}
          <div className="p-7 sm:p-8 rounded-3xl bg-white border border-leaf-100 shadow-xs space-y-5">
            <div className="flex items-center gap-2 pb-3 border-b border-leaf-100">
              <Sparkles className="w-5 h-5 text-terakoya-yellow flex-shrink-0" />
              <h3 className="font-bold text-lg sm:text-xl text-terakoya-text">
                {visitorGuide.title}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-terakoya-muted leading-relaxed">
              {visitorGuide.availability}
            </p>

            {/* 料金グリッド */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {visitorGuide.fees.map((fee, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-leaf-50/70 border border-leaf-100 flex flex-col justify-between"
                >
                  <span className="text-xs sm:text-sm font-bold text-terakoya-text">
                    {fee.label}
                  </span>
                  <div className="flex items-baseline justify-between mt-2.5">
                    <span className="text-lg sm:text-xl font-black text-terakoya-green">
                      {fee.price}
                    </span>
                    <span className="text-xs text-terakoya-muted font-medium">
                      {fee.note}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 所在地 & 連絡先情報 */}
          <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-terakoya-green to-leaf-700 text-white shadow-md space-y-6">
            <div>
              <span className="text-xs font-bold text-leaf-200 tracking-wider block">
                {schoolInfo.orgName}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                所在地 & 連絡先
              </h3>
            </div>

            {/* 住所 */}
            <div className="flex items-start gap-3.5 text-sm sm:text-base">
              <MapPin className="w-5 h-5 text-terakoya-yellow flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-leaf-200 text-xs font-medium">{schoolInfo.address.postalCode}</p>
                <p className="font-bold text-base sm:text-lg">{schoolInfo.address.location}</p>
              </div>
            </div>

            {/* 連絡先 */}
            <div className="space-y-3.5 pt-3 border-t border-leaf-600/80">
              <div className="flex items-center gap-3 text-sm sm:text-base">
                <Phone className="w-5 h-5 text-leaf-300 flex-shrink-0" />
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-xs text-leaf-200">固定電話:</span>
                  <a href={`tel:${schoolInfo.contactMethods.tel}`} className="font-bold hover:underline">
                    {schoolInfo.contactMethods.tel}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm sm:text-base">
                <Phone className="w-5 h-5 text-terakoya-yellow flex-shrink-0" />
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-xs text-leaf-200">携帯（急ぎの場合）:</span>
                  <a href={`tel:${schoolInfo.contactMethods.mobile.replace(/−/g, "")}`} className="font-bold hover:underline">
                    {schoolInfo.contactMethods.mobile}
                  </a>
                  <span className="text-xs text-leaf-200">（担当: {schoolInfo.contactMethods.mobilePerson}）</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm sm:text-base">
                <Mail className="w-5 h-5 text-terakoya-orange flex-shrink-0" />
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-xs text-leaf-200">メール:</span>
                  <a href={`mailto:${schoolInfo.contactMethods.email}`} className="font-bold text-terakoya-yellow-soft hover:underline">
                    {schoolInfo.contactMethods.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/10 text-xs sm:text-sm text-leaf-100 leading-relaxed border border-white/15">
              <AlertCircle className="w-4 h-4 text-terakoya-yellow inline mr-1.5 flex-shrink-0" />
              {schoolInfo.contactMethods.contactPreferenceNote}
            </div>
          </div>
        </div>

        {/* 右側：お問い合わせフォーム（6カラム） */}
        <div className="lg:col-span-6">
          <div className="p-7 sm:p-10 rounded-3xl bg-white border border-leaf-100 shadow-sm">
            <div className="mb-6">
              <h3 className="font-bold text-xl sm:text-2xl text-terakoya-text">
                お問い合わせフォーム
              </h3>
              <p className="text-xs sm:text-sm text-terakoya-muted mt-1">
                以下のフォームよりお気軽にご連絡ください。担当者より折り返しご連絡いたします。
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-leaf-50 border border-leaf-200 text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-full bg-terakoya-green text-white flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-lg text-terakoya-text">
                  お問い合わせを受け付けました
                </h4>
                <p className="text-xs sm:text-sm text-terakoya-muted leading-relaxed">
                  メッセージを送信いただきありがとうございます。<br />
                  内容を確認の上、担当の大下よりご連絡差し上げます。
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-leaf-100 hover:bg-leaf-200 text-terakoya-green text-xs font-bold transition-all"
                >
                  新しいメッセージを送る
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-terakoya-text mb-1">
                    お名前 <span className="text-terakoya-orange">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="山田 太郎"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-leaf-200 bg-leaf-50/40 text-sm sm:text-base focus:outline-hidden focus:ring-2 focus:ring-terakoya-green focus:bg-white transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-terakoya-text mb-1">
                      メールアドレス <span className="text-terakoya-orange">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="example@mail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-leaf-200 bg-leaf-50/40 text-sm sm:text-base focus:outline-hidden focus:ring-2 focus:ring-terakoya-green focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-terakoya-text mb-1">
                      電話番号
                    </label>
                    <input
                      type="tel"
                      placeholder="090-0000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-leaf-200 bg-leaf-50/40 text-sm sm:text-base focus:outline-hidden focus:ring-2 focus:ring-terakoya-green focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-terakoya-text mb-1">
                    お問い合わせ種別 <span className="text-terakoya-orange">*</span>
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-leaf-200 bg-leaf-50/40 text-sm sm:text-base focus:outline-hidden focus:ring-2 focus:ring-terakoya-green focus:bg-white transition-all"
                  >
                    <option value="見学のお申し込み">見学のお申し込み</option>
                    <option value="一日体験のお申し込み">一日体験のお申し込み</option>
                    <option value="入学に関するご相談">入学に関するご相談</option>
                    <option value="その他のお問い合わせ">その他のお問い合わせ</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-terakoya-text mb-1">
                    メッセージ・ご質問 <span className="text-terakoya-orange">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="ご希望の日程やお子様の年齢、ご質問などをご記入ください"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-leaf-200 bg-leaf-50/40 text-sm sm:text-base focus:outline-hidden focus:ring-2 focus:ring-terakoya-green focus:bg-white transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-terakoya-orange hover:bg-terakoya-orange-hover text-white text-sm sm:text-base font-bold shadow-md shadow-terakoya-orange/20 transition-all duration-200 active:scale-98 flex items-center justify-center gap-2 mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>メッセージを送信する</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
