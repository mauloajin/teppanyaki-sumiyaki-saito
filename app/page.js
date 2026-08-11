const siteUrl = "https://teppanyaki-sumiyaki-saito.vercel.app/";

const store = {
  name: "鉄板焼 炭焼 さいとう",
  fullName: "鉄板焼 炭焼 さいとう｜Teppanyaki Restaurant",
  englishName: "Teppanyaki Sumiyaki Saito",
  address: "〒106-0032 東京都港区六本木6-1-6 ザクセンビル6F",
  phone: "03-6455-5155",
  afterHoursPhone: "050-1784-6362",
  official: "https://teppanyaki-sumiyaki-saito.jp/",
  menu: "https://teppanyaki-sumiyaki-saito.jp/menu/",
  reserve: "https://www.tablecheck.com/shops/sumiyaki-saito/reserve",
  instagram: "https://www.instagram.com/teppanyaki_sumiyaki_saito/",
  facebook: "https://www.facebook.com/roppongi.saito?ref=embed_page",
  tabelog: "https://tabelog.com/tokyo/A1307/A130701/13229670/",
  hotpepper: "https://www.hotpepper.jp/strJ001234012/",
  maps:
    "https://www.google.com/maps/search/?api=1&query=%E9%89%84%E6%9D%BF%E7%84%BC%20%E7%82%AD%E7%84%BC%20%E3%81%95%E3%81%84%E3%81%A8%E3%81%86%20%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%B8%AF%E5%8C%BA%E5%85%AD%E6%9C%AC%E6%9C%A86-1-6"
};

const menuHighlights = [
  {
    number: "01",
    name: "黒毛和牛",
    en: "KUROGE WAGYU",
    text: "BMS No.12 A5銘柄黒毛和牛のシャトーブリアン、テンダーロイン、サーロインを、鉄板焼または備長炭の炭焼で。",
    note: "ステーキ、炭火焼、コースで提供"
  },
  {
    number: "02",
    name: "海鮮",
    en: "SEAFOOD",
    text: "伊勢海老、鮑、旬の魚介を鉄板で調理。生うにと黒毛和牛サーロインの手巻きなど、一品料理も用意されています。",
    note: "仕入れ・季節により内容が変動"
  },
  {
    number: "03",
    name: "一品と締め",
    en: "À LA CARTE",
    text: "焼穴子とクリームチーズの握り、フォアグラハンバーグ、マスカルポーネチーズのオムレツ、ガーリックライスなど。",
    note: "アラカルト予約にも対応"
  },
  {
    number: "04",
    name: "ドリンク",
    en: "DRINKS",
    text: "シャンパン、赤・白ワイン、日本酒、ジャパニーズウイスキー、ビール、カクテル、ソフトドリンクを取り揃えています。",
    note: "ワインのヴィンテージは仕入れで変動"
  }
];

const faqs = [
  [
    "鉄板焼 炭焼 さいとうはどこにありますか？",
    "〒106-0032 東京都港区六本木6-1-6 ザクセンビル6Fです。東京メトロ日比谷線・都営地下鉄大江戸線の六本木駅3番出口から徒歩1分です。"
  ],
  [
    "営業時間と定休日は？",
    "営業時間は18:00〜23:30、料理のラストオーダーは22:15です。定休日は日曜日です。祝日と臨時休業については店舗へお問い合わせください。"
  ],
  [
    "予約方法は？",
    "TableCheckからオンライン予約、または03-6455-5155へ電話で予約・問い合わせができます。電話受付時間は16:00〜23:30です。"
  ],
  [
    "コースだけでなくアラカルトも予約できますか？",
    "はい。公式FAQではアラカルトの予約にも対応すると案内されています。食材の在庫は変動するため、希望がある場合は事前に店舗へご確認ください。"
  ],
  [
    "どのような料理を楽しめますか？",
    "黒毛和牛のステーキ、伊勢海老や鮑などの海鮮、旬の野菜を使った鉄板焼・炭焼料理、握り、オムレツ、ガーリックライスなどがあります。"
  ],
  [
    "個室はありますか？",
    "個室、カウンター席、テーブル席があります。個室には利用条件が設定される場合があるため、人数や希望とあわせて予約時にご確認ください。"
  ],
  [
    "子どもと来店できますか？",
    "公式FAQでは、中学生以下のお子様連れは個室のみ対応と案内されています。予約時に人数と食事の有無を伝えて確認してください。"
  ],
  [
    "サービス料はかかりますか？貸切はできますか？",
    "公式FAQではサービス料は不要、貸切は人数などを相談のうえ対応可能と案内されています。"
  ],
  [
    "外国語メニューはありますか？",
    "公式FAQでは外国語メニューを用意していると案内されています。対応言語の最新状況は予約時に店舗へご確認ください。"
  ],
  [
    "Where is Teppanyaki Sumiyaki Saito?",
    "The restaurant is on the 6th floor of Sachsen Building, 6-1-6 Roppongi, Minato-ku, Tokyo 106-0032. It is a one-minute walk from Exit 3 of Roppongi Station."
  ],
  [
    "How can I book a table?",
    "Book online through TableCheck or call +81-3-6455-5155. The official website lists telephone reception hours as 4:00 p.m. to 11:30 p.m."
  ]
];

const jpAreas = [
  "鉄板焼 炭焼 さいとう",
  "鉄板焼炭焼さいとう",
  "テッパンヤキスミヤキサイトウ",
  "さいとう 六本木",
  "六本木",
  "六本木駅",
  "六本木駅3番出口",
  "六本木六丁目",
  "港区六本木",
  "港区",
  "東京都港区",
  "東京メトロ日比谷線 六本木駅",
  "都営大江戸線 六本木駅",
  "ザクセンビル6F"
];

const jpIntents = [
  "鉄板焼き",
  "炭焼",
  "備長炭 炭火焼",
  "黒毛和牛",
  "A5黒毛和牛",
  "BMS No.12",
  "シャトーブリアン",
  "テンダーロイン",
  "サーロインステーキ",
  "和牛ステーキ",
  "海鮮 鉄板焼",
  "伊勢海老 鉄板焼",
  "鮑 鉄板焼",
  "旬の魚介",
  "季節の野菜",
  "フォアグラハンバーグ",
  "オムレツ",
  "ガーリックライス",
  "アラカルト",
  "コース料理",
  "ディナー",
  "レストラン予約",
  "TableCheck 予約",
  "電話予約",
  "営業時間",
  "日曜定休",
  "住所",
  "アクセス",
  "Googleマップ",
  "駅近 レストラン",
  "個室",
  "カウンター席",
  "テーブル席",
  "貸切 相談",
  "外国語メニュー",
  "ワイン",
  "シャンパン",
  "日本酒",
  "ジャパニーズウイスキー",
  "クレジットカード",
  "PayPay"
];

const enAreas = [
  "Teppanyaki Sumiyaki Saito",
  "Saito Teppanyaki Roppongi",
  "Saito charcoal grill Roppongi",
  "Roppongi",
  "Roppongi Station",
  "Roppongi Station Exit 3",
  "Roppongi 6-chome",
  "Minato City Tokyo",
  "Minato-ku",
  "Tokyo",
  "Tokyo Metro Hibiya Line Roppongi",
  "Toei Oedo Line Roppongi",
  "Sachsen Building 6F"
];

const enIntents = [
  "teppanyaki restaurant",
  "charcoal grill restaurant",
  "Binchotan charcoal grill",
  "Japanese restaurant",
  "Kuroge Wagyu",
  "A5 Wagyu",
  "BMS No.12 Wagyu",
  "Wagyu Chateaubriand",
  "Wagyu tenderloin",
  "Wagyu sirloin steak",
  "Wagyu steak dinner",
  "seafood teppanyaki",
  "Japanese spiny lobster",
  "abalone teppanyaki",
  "seasonal seafood",
  "seasonal vegetables",
  "foie gras hamburger steak",
  "omelette",
  "Wagyu garlic rice",
  "a la carte menu",
  "dinner course",
  "restaurant dinner",
  "restaurant reservation",
  "TableCheck reservation",
  "book by phone",
  "opening hours",
  "closed Sunday",
  "restaurant address",
  "directions",
  "Google Maps",
  "restaurant near station",
  "private room",
  "counter seats",
  "table seats",
  "group booking",
  "foreign-language menu",
  "wine with Wagyu",
  "champagne",
  "Japanese sake",
  "Japanese whisky",
  "credit card payment",
  "PayPay payment"
];

const jpKeywords = jpAreas.flatMap((area) => jpIntents.map((intent) => `${area} ${intent}`));
const enKeywords = enAreas.flatMap((area) => enIntents.map((intent) => `${area} ${intent}`));

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": `${siteUrl}#restaurant`,
  name: store.name,
  alternateName: [store.fullName, store.englishName, "鉄板焼炭焼さいとう"],
  description:
    "六本木駅3番出口から徒歩1分。黒毛和牛、海鮮、季節の野菜を鉄板焼と備長炭の炭焼で提供するレストラン。",
  url: siteUrl,
  telephone: "+81-3-6455-5155",
  address: {
    "@type": "PostalAddress",
    postalCode: "106-0032",
    addressRegion: "東京都",
    addressLocality: "港区",
    streetAddress: "六本木6-1-6 ザクセンビル6F",
    addressCountry: "JP"
  },
  servesCuisine: ["鉄板焼", "炭焼", "和牛料理", "海鮮料理", "Japanese Teppanyaki"],
  hasMenu: store.menu,
  hasMap: store.maps,
  acceptsReservations: store.reserve,
  paymentAccepted: ["Cash", "Credit Card", "PayPay"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "18:00",
      closes: "23:30"
    }
  ],
  sameAs: [
    store.official,
    store.instagram,
    store.facebook,
    store.reserve,
    store.tabelog,
    store.hotpepper
  ]
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer }
  }))
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <header className="hero" id="top">
        <nav className="nav wrap" aria-label="メインナビゲーション">
          <a className="brand" href="#top" aria-label="ページ上部へ">
            <span className="brandMark">齋</span>
            <span>
              鉄板焼 炭焼
              <b>さいとう</b>
            </span>
          </a>
          <div className="navLinks">
            <a href="#concept">特徴</a>
            <a href="#menu">料理</a>
            <a href="#information">店舗情報</a>
            <a href="#english">English</a>
          </div>
          <a className="navReserve" href={store.reserve} target="_blank" rel="noreferrer">
            予約 <Arrow />
          </a>
        </nav>

        <div className="ember emberOne" aria-hidden="true" />
        <div className="ember emberTwo" aria-hidden="true" />

        <div className="heroContent wrap">
          <div className="heroCopy">
            <p className="kicker">ROPPONGI · TOKYO</p>
            <h1>
              鉄板の熱、
              <br />
              炭の香り。
            </h1>
            <p className="heroLead">
              黒毛和牛、海鮮、季節の野菜。
              <br />
              鉄板焼と備長炭の炭焼、二つの技で味わう六本木のディナー。
            </p>
            <div className="heroActions">
              <a className="button buttonGold" href={store.reserve} target="_blank" rel="noreferrer">
                TableCheckで予約 <Arrow />
              </a>
              <a className="button buttonGhost" href={store.maps} target="_blank" rel="noreferrer">
                Googleマップ <Arrow />
              </a>
            </div>
          </div>

          <div className="heroIdentity">
            <p>TEPPANYAKI<br />SUMIYAKI</p>
            <div className="heroSeal">さいとう</div>
            <p>SAITO<br />ROPPONGI</p>
          </div>
        </div>

        <div className="quickFacts wrap">
          <div><span>ACCESS</span><strong>六本木駅 3番出口</strong><em>徒歩1分</em></div>
          <div><span>OPEN</span><strong>18:00 — 23:30</strong><em>L.O. 22:15</em></div>
          <div><span>RESERVATION</span><strong>{store.phone}</strong><em>受付 16:00 — 23:30</em></div>
        </div>
      </header>

      <main>
        <section className="intro section wrap" id="concept">
          <div className="sectionLabel">
            <span>01</span>
            <p>THE EXPERIENCE</p>
          </div>
          <div className="introBody">
            <p className="enStatement" lang="en">
              TWO FIRES.
              <br />
              ONE TABLE.
            </p>
            <div>
              <h2>目の前で仕上がる、<br />鉄板焼と炭焼。</h2>
              <p>
                「鉄板焼 炭焼 さいとう」は、六本木の鉄板焼・炭焼レストランです。厳選した黒毛和牛、店主が市場で選ぶ海鮮、旬の野菜を、素材に合わせた火入れで仕上げます。
              </p>
              <p>
                調理を間近で見られるカウンター席のほか、テーブル席と個室を用意。コースだけでなく、アラカルトでの予約にも対応しています。
              </p>
            </div>
          </div>
          <div className="featureStrip" aria-label="店舗の特徴">
            <p><span>01</span>鉄板焼<br /><em>Teppanyaki</em></p>
            <p><span>02</span>備長炭<br /><em>Charcoal Grill</em></p>
            <p><span>03</span>黒毛和牛<br /><em>Kuroge Wagyu</em></p>
            <p><span>04</span>海鮮<br /><em>Seafood</em></p>
          </div>
        </section>

        <section className="menuSection section" id="menu">
          <div className="wrap">
            <div className="sectionLabel sectionLabelLight">
              <span>02</span>
              <p>FOOD &amp; DRINKS</p>
            </div>
            <div className="sectionHeading splitHeading">
              <div>
                <p className="eyebrow">MENU HIGHLIGHTS</p>
                <h2>料理・ドリンク</h2>
              </div>
              <p>
                コースとアラカルトの両方を用意。仕入れや季節により内容・価格が変わるため、最新情報は公式メニューまたは予約画面でご確認ください。
              </p>
            </div>

            <div className="menuGrid">
              {menuHighlights.map((item) => (
                <article className="menuCard" key={item.number}>
                  <div className="menuCardTop">
                    <span>{item.number}</span>
                    <em>{item.en}</em>
                  </div>
                  <h3>{item.name}</h3>
                  <p>{item.text}</p>
                  <small>{item.note}</small>
                </article>
              ))}
            </div>

            <div className="menuActions">
              <a className="button buttonGold" href={store.menu} target="_blank" rel="noreferrer">
                公式メニューを見る <Arrow />
              </a>
              <a className="textLink" href={store.reserve} target="_blank" rel="noreferrer">
                コースと空席を確認 <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section className="information section wrap" id="information">
          <div className="sectionLabel">
            <span>03</span>
            <p>INFORMATION</p>
          </div>
          <div className="sectionHeading splitHeading">
            <div>
              <p className="eyebrow">RESTAURANT DETAILS</p>
              <h2>店舗情報</h2>
            </div>
            <p>ご予約・ご来店前には、祝日営業や臨時休業を店舗へご確認ください。</p>
          </div>

          <dl className="infoTable">
            <div><dt>正式店名</dt><dd>{store.fullName}<small>{store.englishName}</small></dd></div>
            <div><dt>業態</dt><dd>鉄板焼・炭焼レストラン／和牛・海鮮</dd></div>
            <div><dt>所在地</dt><dd>{store.address}</dd></div>
            <div><dt>電話番号</dt><dd><a href="tel:0364555155">{store.phone}</a><small>受付時間 16:00〜23:30</small></dd></div>
            <div><dt>営業時間</dt><dd>18:00〜23:30<small>料理 L.O. 22:15</small></dd></div>
            <div><dt>定休日</dt><dd>日曜日<small>祝日・臨時休業は要問い合わせ</small></dd></div>
            <div><dt>席</dt><dd>カウンター席／テーブル席／個室<small>個室の利用条件は予約時に確認</small></dd></div>
            <div><dt>子ども利用</dt><dd>中学生以下は個室のみ対応<small>人数・食事の有無を予約時に確認</small></dd></div>
            <div><dt>支払い</dt><dd>現金／PayPay／クレジットカード<small>VISA、Master、JCB、AMEX、Diners、銀聯</small></dd></div>
            <div><dt>サービス料</dt><dd>なし</dd></div>
            <div><dt>貸切</dt><dd>人数などを店舗へ相談</dd></div>
            <div><dt>外国語メニュー</dt><dd>あり<small>対応言語の最新状況は店舗へ確認</small></dd></div>
          </dl>
        </section>

        <section className="accessSection section" id="access">
          <div className="accessGrid wrap">
            <div className="accessCopy">
              <div className="sectionLabel sectionLabelLight">
                <span>04</span>
                <p>ACCESS</p>
              </div>
              <p className="eyebrow">ONE MINUTE FROM EXIT 3</p>
              <h2>六本木駅から、<br />徒歩1分。</h2>
              <p className="address">{store.address}</p>
              <p>
                東京メトロ日比谷線・都営地下鉄大江戸線<br />「六本木駅」3番出口より徒歩1分
              </p>
              <div className="accessActions">
                <a className="button buttonGold" href={store.maps} target="_blank" rel="noreferrer">Googleマップで開く <Arrow /></a>
                <a className="button buttonGhost" href="tel:0364555155">店舗へ電話する</a>
              </div>
            </div>
            <div className="locationCard" aria-label="所在地：六本木6丁目1番6号 ザクセンビル6階">
              <span className="locationTop">MINATO CITY · TOKYO</span>
              <div className="locationStation"><i /> ROPPONGI</div>
              <strong>6 — 1 — 6</strong>
              <p>ROPPONGI<br />SACHSEN BUILDING 6F</p>
              <small>EXIT 3 / 1 MINUTE WALK</small>
            </div>
          </div>
        </section>

        <section className="faqSection section wrap" id="faq">
          <div className="sectionLabel">
            <span>05</span>
            <p>FAQ</p>
          </div>
          <div className="sectionHeading">
            <p className="eyebrow">BEFORE YOUR VISIT</p>
            <h2>よくある質問</h2>
          </div>
          <div className="faqList">
            {faqs.map(([question, answer], index) => (
              <details key={question} open={index === 0}>
                <summary><span>{String(index + 1).padStart(2, "0")}</span>{question}<i /></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="englishSection section" id="english" lang="en">
          <div className="wrap">
            <div className="sectionLabel sectionLabelLight">
              <span>06</span>
              <p>ENGLISH GUIDE</p>
            </div>
            <div className="englishHero">
              <div>
                <p className="eyebrow">ROPPONGI TEPPANYAKI &amp; CHARCOAL GRILL</p>
                <h2>Teppanyaki<br />Sumiyaki Saito</h2>
              </div>
              <p>
                Teppanyaki Sumiyaki Saito is a teppanyaki and charcoal-grill restaurant in Roppongi, Tokyo. The restaurant serves selected Kuroge Wagyu, seafood chosen at the market, and seasonal vegetables, prepared on a teppan grill or over Binchotan charcoal.
              </p>
            </div>

            <dl className="englishInfo">
              <div><dt>CUISINE</dt><dd>Japanese teppanyaki, charcoal-grilled Wagyu and seafood</dd></div>
              <div><dt>ADDRESS</dt><dd>Sachsen Building 6F, 6-1-6 Roppongi, Minato-ku, Tokyo 106-0032</dd></div>
              <div><dt>ACCESS</dt><dd>One-minute walk from Exit 3 of Roppongi Station on the Tokyo Metro Hibiya Line and Toei Oedo Line</dd></div>
              <div><dt>HOURS</dt><dd>6:00 p.m.–11:30 p.m. (last food order 10:15 p.m.)</dd></div>
              <div><dt>CLOSED</dt><dd>Sundays. Please contact the restaurant regarding public holidays or temporary closures.</dd></div>
              <div><dt>RESERVATION</dt><dd><a href={store.reserve} target="_blank" rel="noreferrer">Book through TableCheck <Arrow /></a> or call <a href="tel:+81364555155">+81-3-6455-5155</a></dd></div>
              <div><dt>SEATING</dt><dd>Counter seats, table seats and private rooms. Conditions may apply to private-room bookings.</dd></div>
              <div><dt>LANGUAGE MENU</dt><dd>The official FAQ states that foreign-language menus are available. Please ask the restaurant which languages are currently offered.</dd></div>
            </dl>
          </div>
        </section>

        <section className="linksSection section wrap" id="links">
          <div className="sectionLabel">
            <span>07</span>
            <p>OFFICIAL LINKS</p>
          </div>
          <div className="sectionHeading splitHeading">
            <div>
              <p className="eyebrow">PLAN YOUR VISIT</p>
              <h2>公式・予約リンク</h2>
            </div>
          </div>
          <div className="linkGrid">
            <a href={store.official} target="_blank" rel="noreferrer"><span>公式サイト<small>OFFICIAL WEBSITE</small></span><Arrow /></a>
            <a href={store.reserve} target="_blank" rel="noreferrer"><span>TableCheck予約<small>ONLINE RESERVATION</small></span><Arrow /></a>
            <a href={store.instagram} target="_blank" rel="noreferrer"><span>Instagram<small>OFFICIAL SOCIAL</small></span><Arrow /></a>
            <a href={store.facebook} target="_blank" rel="noreferrer"><span>Facebook<small>OFFICIAL SOCIAL</small></span><Arrow /></a>
            <a href={store.tabelog} target="_blank" rel="noreferrer"><span>食べログ<small>RESTAURANT GUIDE</small></span><Arrow /></a>
            <a href={store.hotpepper} target="_blank" rel="noreferrer"><span>ホットペッパーグルメ<small>RESTAURANT GUIDE</small></span><Arrow /></a>
          </div>
        </section>

        <section className="keywordsSection wrap" aria-label="関連する検索語">
          <details>
            <summary>関連する検索キーワード / Related searches <i /></summary>
            <div className="keywordColumns">
              <div><h2>日本語の関連検索語</h2><p>{jpKeywords.join(" / ")}</p></div>
              <div lang="en"><h2>Related searches in English</h2><p>{enKeywords.join(" / ")}</p></div>
            </div>
          </details>
        </section>
      </main>

      <footer className="footer">
        <div className="footerTop wrap">
          <div>
            <p className="footerName">鉄板焼 炭焼<br /><b>さいとう</b></p>
            <p className="footerEnglish">TEPPANYAKI SUMIYAKI SAITO</p>
          </div>
          <div className="footerContact">
            <p>{store.address}</p>
            <a href="tel:0364555155">{store.phone}</a>
            <small>18:00〜23:30（L.O.22:15）／日曜定休</small>
          </div>
          <div className="footerActions">
            <a href={store.reserve} target="_blank" rel="noreferrer">予約 <Arrow /></a>
            <a href={store.maps} target="_blank" rel="noreferrer">地図 <Arrow /></a>
            <a href={store.official} target="_blank" rel="noreferrer">公式サイト <Arrow /></a>
          </div>
        </div>
        <div className="footerBottom wrap">
          <p>鉄板焼 炭焼 さいとう｜Teppanyaki Restaurant</p>
          <a href="#top">PAGE TOP ↑</a>
        </div>
      </footer>
    </>
  );
}
