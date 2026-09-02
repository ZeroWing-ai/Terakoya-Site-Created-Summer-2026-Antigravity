export interface NavItem {
  label: string;
  enLabel: string;
  href: string;
  description?: string;
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: "トップ",
    enLabel: "TOP",
    href: "/",
    description: "てらこやのホーム",
  },
  {
    label: "てらこやについて",
    enLabel: "ABOUT",
    href: "#about",
    description: "理念と代表メッセージ・4つの力",
  },
  {
    label: "教育理念",
    enLabel: "PRINCIPLES",
    href: "#principles",
    description: "主体性の尊重・自然との調和など5つの柱",
  },
  {
    label: "1日の流れ",
    enLabel: "SCHEDULE",
    href: "#schedule",
    description: "ミーティング・探究プラン・昼食・振り返り",
  },
  {
    label: "概要・学費",
    enLabel: "OVERVIEW",
    href: "#overview",
    description: "対象年齢・定員・費用・安心の取り組み",
  },
  {
    label: "スタッフ",
    enLabel: "STAFF",
    href: "#staff",
    description: "スタッフ・多彩な特別講師陣",
  },
  {
    label: "見学・お問合せ",
    enLabel: "CONTACT",
    href: "#contact",
    description: "見学体験・ビジター料・アクセス情報",
  },
];

export const SITE_INFO = {
  name: "てらこや",
  subTitle: "自然豊かな環境で育むオルタナティブスクール",
  tagline: "子どもたちの「やってみたい！」が動き出す場所",
};
