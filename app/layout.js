import "./globals.css";

const siteUrl = "https://teppanyaki-sumiyaki-saito.vercel.app";
const title = "鉄板焼 炭焼 さいとう｜六本木駅徒歩1分の鉄板焼・炭焼レストラン";
const description =
  "六本木の鉄板焼・炭焼レストラン「鉄板焼 炭焼 さいとう」。黒毛和牛、海鮮、季節の野菜を鉄板焼と備長炭の炭焼で提供。住所、営業時間、メニュー、予約、アクセス、English Guideをご案内します。";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "鉄板焼 炭焼 さいとう｜Teppanyaki Restaurant",
    locale: "ja_JP",
    type: "website"
  },
  twitter: {
    card: "summary",
    title,
    description
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
