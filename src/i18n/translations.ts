export type Language = "en" | "vi" | "zh" | "ko" | "ja";

export const languageLabels: Record<Language, string> = {
  en: "EN",
  vi: "VI",
  zh: "中文",
  ko: "한국어",
  ja: "日本語",
};

type TranslationKeys = {
  nav: { tours: string; routes: string; about: string; contact: string; bookNow: string; groupTours: string };
  hero: { tagline: string; headline1: string; headline2: string; subtitle: string; bookTour: string; viewRoutes: string };
  categories: { motorbike: string; dirtbike: string; bigbike: string; offroad: string; jungleTrail: string; mountainPass: string };
  tourGrid: { tag: string; heading: string; bookNow: string };
  features: { years: string; routes: string; guides: string; gear: string };
  featured: { badge: string; name1: string; name2: string; desc: string; elevation: string; distance: string; terrain: string; difficulty: string; bookRoute: string };
  testimonials: { tag: string; heading: string };
  cta: { heading1: string; heading2: string; subtitle: string; placeholder: string; button: string };
  footer: { explore: string; allTours: string; featuredRoutes: string; customTrips: string; groupRides: string; info: string; aboutUs: string; ourBikes: string; safetyGear: string; faqs: string; connect: string; tagline: string; copyright: string; locations: string };
  groupTours: { tag: string; heading: string; subtitle: string; bookGroup: string; exploreTours: string; perPerson: string; minRiders: string; nextDate: string; viewDetails: string };
};

const translations: Record<Language, TranslationKeys> = {
  en: {
    nav: { tours: "Tours", routes: "Routes", about: "About", contact: "Contact", bookNow: "BOOK NOW", groupTours: "Group Tours" },
    hero: { tagline: "// Adventure awaits beyond the pavement", headline1: "RIDE WHERE", headline2: "ROADS END", subtitle: "Guided motorbike tours through Southeast Asia's most untamed trails, mountain passes, and jungle routes.", bookTour: "BOOK A TOUR", viewRoutes: "VIEW ROUTES" },
    categories: { motorbike: "Motorbike", dirtbike: "Dirtbike", bigbike: "Bigbike", offroad: "Offroad", jungleTrail: "Jungle Trail", mountainPass: "Mountain Pass" },
    tourGrid: { tag: "// SELECT YOUR ROUTE", heading: "OUR TOURS", bookNow: "BOOK NOW →" },
    features: { years: "Years Experience", routes: "Routes Mapped", guides: "Local Guides", gear: "Gear Included" },
    featured: { badge: "★ SIGNATURE ROUTE", name1: "CANYON", name2: "RIVER RUN", desc: "Cross rivers, navigate canyon walls, and camp under stars on this legendary 6-day expedition through untouched wilderness.", elevation: "Elevation", distance: "Distance", terrain: "Terrain", difficulty: "Difficulty", bookRoute: "BOOK THIS ROUTE" },
    testimonials: { tag: "// RIDER STORIES", heading: "FROM THE TRAIL" },
    cta: { heading1: "YOUR NEXT ADVENTURE", heading2: "STARTS HERE", subtitle: "Drop your email. We'll send you route intel, rider stories, and exclusive deals.", placeholder: "your@email.com", button: "GET A QUOTE" },
    footer: { explore: "Explore", allTours: "All Tours", featuredRoutes: "Featured Routes", customTrips: "Custom Trips", groupRides: "Group Rides", info: "Info", aboutUs: "About Us", ourBikes: "Our Bikes", safetyGear: "Safety & Gear", faqs: "FAQs", connect: "Connect", tagline: "// BUILT FOR THOSE WHO RIDE BEYOND", copyright: "© 2026 WILDTRACK MOTO TOURS. ALL RIGHTS RESERVED.", locations: "SAIGON / DA NANG / HA NOI" },
    groupTours: { tag: "// RIDE TOGETHER", heading: "GROUP TOURS", subtitle: "Join fellow riders on our most popular routes. Group discounts, shared campfires, unforgettable bonds.", bookGroup: "BOOK A GROUP", exploreTours: "EXPLORE ALL TOURS", perPerson: "/person", minRiders: "Min riders", nextDate: "Next date", viewDetails: "VIEW DETAILS →" },
  },
  vi: {
    nav: { tours: "Tour", routes: "Lộ Trình", about: "Giới Thiệu", contact: "Liên Hệ", bookNow: "ĐẶT NGAY", groupTours: "Tour Nhóm" },
    hero: { tagline: "// Cuộc phiêu lưu chờ đón bạn", headline1: "LÁI XE NƠI", headline2: "ĐƯỜNG TẬN", subtitle: "Tour xe máy có hướng dẫn qua những cung đường hoang dã nhất Đông Nam Á.", bookTour: "ĐẶT TOUR", viewRoutes: "XEM LỘ TRÌNH" },
    categories: { motorbike: "Xe Máy", dirtbike: "Xe Địa Hình", bigbike: "Mô Tô", offroad: "Đường Rừng", jungleTrail: "Đường Rừng", mountainPass: "Đèo Núi" },
    tourGrid: { tag: "// CHỌN LỘ TRÌNH", heading: "CÁC TOUR", bookNow: "ĐẶT NGAY →" },
    features: { years: "Năm Kinh Nghiệm", routes: "Lộ Trình", guides: "Hướng Dẫn Viên", gear: "Trang Bị Đầy Đủ" },
    featured: { badge: "★ LỘ TRÌNH ĐẶC BIỆT", name1: "VƯỢT", name2: "THUNG LŨNG", desc: "Vượt sông, chinh phục vách đá và cắm trại dưới bầu trời sao trong chuyến thám hiểm 6 ngày.", elevation: "Độ Cao", distance: "Khoảng Cách", terrain: "Địa Hình", difficulty: "Độ Khó", bookRoute: "ĐẶT TOUR NÀY" },
    testimonials: { tag: "// CÂU CHUYỆN TAY LÁI", heading: "TỪ CUNG ĐƯỜNG" },
    cta: { heading1: "CUỘC PHIÊU LƯU TIẾP THEO", heading2: "BẮT ĐẦU TỪ ĐÂY", subtitle: "Để lại email. Chúng tôi sẽ gửi thông tin lộ trình và ưu đãi.", placeholder: "email@cuaban.com", button: "NHẬN BÁO GIÁ" },
    footer: { explore: "Khám Phá", allTours: "Tất Cả Tour", featuredRoutes: "Lộ Trình Nổi Bật", customTrips: "Tour Tùy Chỉnh", groupRides: "Nhóm Đi", info: "Thông Tin", aboutUs: "Về Chúng Tôi", ourBikes: "Xe Của Chúng Tôi", safetyGear: "An Toàn & Trang Bị", faqs: "Câu Hỏi", connect: "Kết Nối", tagline: "// DÀNH CHO NHỮNG AI LÁI XA HƠN", copyright: "© 2026 WILDTRACK MOTO TOURS. MỌI QUYỀN ĐƯỢC BẢO LƯU.", locations: "SÀI GÒN / ĐÀ NẴNG / HÀ NỘI" },
    groupTours: { tag: "// CÙNG NHAU LÁI", heading: "TOUR NHÓM", subtitle: "Tham gia cùng các tay lái trên những cung đường phổ biến nhất. Giảm giá nhóm, lửa trại, kỷ niệm khó quên.", bookGroup: "ĐẶT NHÓM", exploreTours: "XEM TẤT CẢ TOUR", perPerson: "/người", minRiders: "Tối thiểu", nextDate: "Ngày tiếp", viewDetails: "XEM CHI TIẾT →" },
  },
  zh: {
    nav: { tours: "旅程", routes: "路线", about: "关于", contact: "联系", bookNow: "立即预订", groupTours: "团体游" },
    hero: { tagline: "// 冒险在路的尽头等待", headline1: "骑行到", headline2: "路的尽头", subtitle: "穿越东南亚最原始的山路、丛林和山口的摩托车导游之旅。", bookTour: "预订旅程", viewRoutes: "查看路线" },
    categories: { motorbike: "摩托车", dirtbike: "越野车", bigbike: "大排量", offroad: "越野", jungleTrail: "丛林小径", mountainPass: "山口" },
    tourGrid: { tag: "// 选择你的路线", heading: "我们的旅程", bookNow: "立即预订 →" },
    features: { years: "年经验", routes: "条路线", guides: "专业向导", gear: "全套装备" },
    featured: { badge: "★ 招牌路线", name1: "峡谷", name2: "河流穿越", desc: "穿越河流、攀越峡谷、在星空下露营，6天穿越原始荒野的传奇探险。", elevation: "海拔", distance: "距离", terrain: "地形", difficulty: "难度", bookRoute: "预订此路线" },
    testimonials: { tag: "// 骑手故事", heading: "来自旅途" },
    cta: { heading1: "你的下一次冒险", heading2: "从这里开始", subtitle: "留下邮箱，我们将发送路线情报和独家优惠。", placeholder: "your@email.com", button: "获取报价" },
    footer: { explore: "探索", allTours: "所有旅程", featuredRoutes: "精选路线", customTrips: "定制行程", groupRides: "团体骑行", info: "信息", aboutUs: "关于我们", ourBikes: "我们的车", safetyGear: "安全装备", faqs: "常见问题", connect: "联系", tagline: "// 为敢于骑行的人而生", copyright: "© 2026 WILDTRACK 摩托旅行。保留所有权利。", locations: "胡志明 / 岘港 / 河内" },
    groupTours: { tag: "// 一起骑行", heading: "团体游", subtitle: "与骑友一起征服最热门路线。团体折扣、篝火夜话、难忘回忆。", bookGroup: "预订团体", exploreTours: "浏览所有旅程", perPerson: "/人", minRiders: "最少人数", nextDate: "下次出发", viewDetails: "查看详情 →" },
  },
  ko: {
    nav: { tours: "투어", routes: "루트", about: "소개", contact: "문의", bookNow: "예약하기", groupTours: "그룹 투어" },
    hero: { tagline: "// 포장도로 너머의 모험", headline1: "길이 끝나는", headline2: "곳으로", subtitle: "동남아시아의 가장 거친 산길, 정글, 고갯길을 달리는 오토바이 가이드 투어.", bookTour: "투어 예약", viewRoutes: "루트 보기" },
    categories: { motorbike: "오토바이", dirtbike: "더트바이크", bigbike: "빅바이크", offroad: "오프로드", jungleTrail: "정글 트레일", mountainPass: "산길" },
    tourGrid: { tag: "// 루트를 선택하세요", heading: "투어 목록", bookNow: "예약하기 →" },
    features: { years: "년 경험", routes: "개 루트", guides: "전문 가이드", gear: "장비 포함" },
    featured: { badge: "★ 시그니처 루트", name1: "캐니언", name2: "리버 런", desc: "강을 건너고, 협곡을 탐험하고, 별빛 아래 캠핑하는 6일간의 전설적인 원정.", elevation: "해발", distance: "거리", terrain: "지형", difficulty: "난이도", bookRoute: "이 루트 예약" },
    testimonials: { tag: "// 라이더 이야기", heading: "트레일에서" },
    cta: { heading1: "다음 모험이", heading2: "여기서 시작됩니다", subtitle: "이메일을 남겨주세요. 루트 정보와 특별 혜택을 보내드립니다.", placeholder: "your@email.com", button: "견적 받기" },
    footer: { explore: "탐색", allTours: "전체 투어", featuredRoutes: "추천 루트", customTrips: "맞춤 여행", groupRides: "그룹 라이딩", info: "정보", aboutUs: "소개", ourBikes: "바이크", safetyGear: "안전 장비", faqs: "FAQ", connect: "연결", tagline: "// 더 멀리 달리는 이들을 위해", copyright: "© 2026 WILDTRACK 모토 투어. 모든 권리 보유.", locations: "사이공 / 다낭 / 하노이" },
    groupTours: { tag: "// 함께 달리기", heading: "그룹 투어", subtitle: "인기 루트에서 동료 라이더와 함께하세요. 그룹 할인, 캠프파이어, 잊지 못할 추억.", bookGroup: "그룹 예약", exploreTours: "전체 투어 보기", perPerson: "/인", minRiders: "최소 인원", nextDate: "다음 날짜", viewDetails: "상세 보기 →" },
  },
  ja: {
    nav: { tours: "ツアー", routes: "ルート", about: "概要", contact: "お問合せ", bookNow: "今すぐ予約", groupTours: "グループツアー" },
    hero: { tagline: "// 舗装路の先に冒険が待つ", headline1: "道が終わる", headline2: "場所へ", subtitle: "東南アジアの未開の山道、ジャングル、峠を駆け抜けるバイクガイドツアー。", bookTour: "ツアー予約", viewRoutes: "ルートを見る" },
    categories: { motorbike: "バイク", dirtbike: "ダートバイク", bigbike: "ビッグバイク", offroad: "オフロード", jungleTrail: "ジャングル", mountainPass: "山岳峠" },
    tourGrid: { tag: "// ルートを選べ", heading: "ツアー一覧", bookNow: "予約する →" },
    features: { years: "年の経験", routes: "ルート", guides: "専門ガイド", gear: "装備込み" },
    featured: { badge: "★ シグネチャールート", name1: "キャニオン", name2: "リバーラン", desc: "川を渡り、渓谷を進み、満天の星の下でキャンプする6日間の伝説的な遠征。", elevation: "標高", distance: "距離", terrain: "地形", difficulty: "難易度", bookRoute: "このルートを予約" },
    testimonials: { tag: "// ライダーの声", heading: "トレイルから" },
    cta: { heading1: "次の冒険が", heading2: "ここから始まる", subtitle: "メールを登録して、ルート情報と限定オファーを受け取ろう。", placeholder: "your@email.com", button: "見積もりを取得" },
    footer: { explore: "探索", allTours: "全ツアー", featuredRoutes: "おすすめルート", customTrips: "カスタムトリップ", groupRides: "グループライド", info: "情報", aboutUs: "私たちについて", ourBikes: "バイク紹介", safetyGear: "安全装備", faqs: "よくある質問", connect: "つながる", tagline: "// さらに遠くへ走る者のために", copyright: "© 2026 WILDTRACK モトツアー。全著作権所有。", locations: "サイゴン / ダナン / ハノイ" },
    groupTours: { tag: "// 一緒に走ろう", heading: "グループツアー", subtitle: "人気ルートで仲間と走ろう。グループ割引、焚き火、忘れられない絆。", bookGroup: "グループ予約", exploreTours: "全ツアーを見る", perPerson: "/人", minRiders: "最少人数", nextDate: "次回出発", viewDetails: "詳細を見る →" },
  },
};

export default translations;
