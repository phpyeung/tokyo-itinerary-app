export type MealType = "Lunch" | "Dinner";
export type ReservationStatus = "Reserve" | "Walk-in" | "Flexible" | "Disney";

export type ItineraryLink = {
  label: string;
  href: string;
};

export type ItineraryItem = {
  id: string;
  date: string;
  weekday: string;
  dayLabel: string;
  meal: MealType;
  restaurant: string;
  cuisine: string;
  area: string;
  status: ReservationStatus;
  featured?: boolean;
  note: string;
  detail?: string;
  links: ItineraryLink[];
};

export const itinerary: ItineraryItem[] = [
  {
    id: "2026-08-27-dinner",
    date: "2026-08-27",
    weekday: "Thu",
    dayLabel: "Aug 27",
    meal: "Dinner",
    restaurant: "Easy meal near hotel",
    cuisine: "To decide",
    area: "Hotel area",
    status: "Flexible",
    note: "Not selected yet",
    detail: "Keep this flexible after landing.",
    links: [],
  },
  {
    id: "2026-08-28-lunch",
    date: "2026-08-28",
    weekday: "Fri",
    dayLabel: "Aug 28",
    meal: "Lunch",
    restaurant: "Tsukiji grazing",
    cuisine: "Market snacks",
    area: "Tsukiji",
    status: "Walk-in",
    note: "Walk-in",
    detail: "No reservation needed.",
    links: [],
  },
  {
    id: "2026-08-28-dinner",
    date: "2026-08-28",
    weekday: "Fri",
    dayLabel: "Aug 28",
    meal: "Dinner",
    restaurant: "回転寿司 根室花まる 銀座店",
    cuisine: "Premium kaiten sushi",
    area: "Ginza",
    status: "Walk-in",
    featured: true,
    note: "Family-friendly conveyor-belt sushi",
    detail: "Children and strollers welcome; child chairs and child-friendly dishes listed. Premium-feeling conveyor-belt sushi in Ginza when you need flexibility over reservations.",
    links: [
      {
        label: "Tabelog",
        href: "https://tabelog.com/en/tokyo/A1301/A130101/13193771/",
      },
    ],
  },
  {
    id: "2026-08-29-lunch",
    date: "2026-08-29",
    weekday: "Sat",
    dayLabel: "Aug 29",
    meal: "Lunch",
    restaurant: "地鶏専門店 鳥一筋 池袋店",
    cuisine: "Jidori / Yakitori",
    area: "Ikebukuro",
    status: "Reserve",
    featured: true,
    note: "CONFIRMED 5CAQ38YYKM",
    detail: "13:00, party of 4. Seat-only (席のみ). Kids allowed: 乳児・未就学児・小学生. Smoking: 分煙 (separated smoking area) - request 禁煙 table on arrival. Contact: 03-3551-8577, phpyeung@gmail.com, ヤング ポール.",
    links: [
      {
        label: "Tabelog reservation",
        href: "https://tabelog.com/tokyo/A1305/A130501/13316832/",
      },
    ],
  },
  {
    id: "2026-08-29-dinner",
    date: "2026-08-29",
    weekday: "Sat",
    dayLabel: "Aug 29",
    meal: "Dinner",
    restaurant: "cossott'e SP",
    cuisine: "Yakiniku",
    area: "Azabu-juban",
    status: "Reserve",
    featured: true,
    note: "CONFIRMED - Booked on TableCheck",
    detail: "Party of 4. Confirmed reservation via TableCheck (no confirmation code provided). Contact: 03-3551-8577, phpyeung@gmail.com, ヤング ポール.",
    links: [
      {
        label: "TableCheck",
        href: "https://www.tablecheck.com/en/cossotte-sp",
      },
      {
        label: "Tabelog",
        href: "https://tabelog.com/en/tokyo/A1307/A130701/13154338/",
      },
    ],
  },
  {
    id: "2026-08-30-lunch",
    date: "2026-08-30",
    weekday: "Sun",
    dayLabel: "Aug 30",
    meal: "Lunch",
    restaurant: "銀座 八五",
    cuisine: "Ramen",
    area: "Ginza",
    status: "Walk-in",
    featured: true,
    note: "NOT BOOKED - sold out; walk-in alternatives",
    detail:
      "Aug 30 date was sold out. Restaurant does not accept elementary-age or younger children. Use walk-in backups instead. Reservations normally open Saturday 9:00 a.m. JST for the following Tue-Sun; ¥500/person reservation fee.",
    links: [
      {
        label: "TableCheck (sold out)",
        href: "https://www.tablecheck.com/ja/shops/ginza-hachigou/reserve",
      },
      {
        label: "Tabelog",
        href: "https://tabelog.com/tokyo/A1301/A130101/13228602/",
      },
    ],
  },
  {
    id: "2026-08-30-dinner",
    date: "2026-08-30",
    weekday: "Sun",
    dayLabel: "Aug 30",
    meal: "Dinner",
    restaurant: "すし土風炉 銀座一丁目店",
    cuisine: "Sushi",
    area: "Ginza-itchome",
    status: "Reserve",
    featured: true,
    note: "CONFIRMED T6359WNLW5",
    detail: "18:00, party of 4. テーブル席個室/禁煙, seat-only (席のみ). Family-friendly: 子供可 (乳児・未就学児・小学生), お子様メニュー, ベビーカー可, 全席禁煙. No cancellation fee for seat-only; 2-hour stay. Contact: 03-3551-8577, phpyeung@gmail.com, ヤング ポール.",
    links: [
      {
        label: "Tabelog reservation",
        href: "https://tabelog.com/tokyo/A1301/A130101/13014902/",
      },
    ],
  },
  {
    id: "2026-08-31-lunch",
    date: "2026-08-31",
    weekday: "Mon",
    dayLabel: "Aug 31",
    meal: "Lunch",
    restaurant: "晶",
    cuisine: "Sushi",
    area: "Toyosu / Market area",
    status: "Reserve",
    featured: true,
    note: "CONFIRMED CZ4S6XWNFJ",
    detail: "14:00, party of 4. カウンター/禁煙. Course required: 「【14時限定・席数限定】板長おまかせ特別予約プラン◆選べる一杯付き」 ¥15,000/person. Same-day cancellation is 100% of course price. Contact: 03-3551-8577, phpyeung@gmail.com, ヤング ポール.",
    links: [
      {
        label: "Tabelog reservation",
        href: "https://tabelog.com/tokyo/A1313/A131307/13204803/",
      },
    ],
  },
  {
    id: "2026-08-31-dinner",
    date: "2026-08-31",
    weekday: "Mon",
    dayLabel: "Aug 31",
    meal: "Dinner",
    restaurant: "Odaiba casual Japanese",
    cuisine: "Casual Japanese",
    area: "Odaiba",
    status: "Flexible",
    note: "Specific restaurant not selected yet",
    links: [],
  },
  {
    id: "2026-09-01-lunch",
    date: "2026-09-01",
    weekday: "Tue",
    dayLabel: "Sep 1",
    meal: "Lunch",
    restaurant: "Asakusa soba/tempura",
    cuisine: "Soba / Tempura",
    area: "Asakusa",
    status: "Flexible",
    note: "Specific restaurant not selected yet",
    links: [],
  },
  {
    id: "2026-09-01-dinner",
    date: "2026-09-01",
    weekday: "Tue",
    dayLabel: "Sep 1",
    meal: "Dinner",
    restaurant: "とんかつ はせ川",
    cuisine: "Tonkatsu",
    area: "Ryogoku",
    status: "Reserve",
    featured: true,
    note: "CONFIRMED 2V898M79A2",
    detail:
      "18:00, party of 4. テーブル席/禁煙, seat-only (席のみ). Contact: 03-3551-8577, phpyeung@gmail.com, ヤング ポール.",
    links: [
      {
        label: "Tabelog reservation",
        href: "https://tabelog.com/tokyo/A1312/A131201/13019126/",
      },
    ],
  },
  {
    id: "2026-09-02-lunch",
    date: "2026-09-02",
    weekday: "Wed",
    dayLabel: "Sep 2",
    meal: "Lunch",
    restaurant: "Tokyo Disneyland",
    cuisine: "Disney dining",
    area: "Tokyo Disneyland",
    status: "Disney",
    note: "Priority Seating / Mobile Order",
    detail: "Use Disney systems rather than Tabelog.",
    links: [
      {
        label: "Disney restaurants",
        href: "https://www.tokyodisneyresort.jp/tdl/restaurant/",
      },
    ],
  },
  {
    id: "2026-09-02-dinner",
    date: "2026-09-02",
    weekday: "Wed",
    dayLabel: "Sep 2",
    meal: "Dinner",
    restaurant: "Tokyo Disneyland",
    cuisine: "Disney dining",
    area: "Tokyo Disneyland",
    status: "Disney",
    note: "Official Disney reservation system",
    detail: "Same official Disney restaurant reservation and information flow.",
    links: [
      {
        label: "Disney reservations/info",
        href: "https://www.tokyodisneyresort.jp/tdl/restaurant/",
      },
    ],
  },
  {
    id: "2026-09-03-lunch",
    date: "2026-09-03",
    weekday: "Thu",
    dayLabel: "Sep 3",
    meal: "Lunch",
    restaurant: "日本橋海鮮丼 つじ半 アークヒルズ店",
    cuisine: "Kaisen don",
    area: "Ark Hills · Roppongi-itchome",
    status: "Walk-in",
    featured: true,
    note: "Walk-in only",
    detail:
      "Convenient before YAKITORI Moe dinner in the Azabu/Roppongi area. Reservations are not accepted; Ark Mori Building 3F, 20 seats.",
    links: [
      {
        label: "Ark Hills",
        href: "https://www.arkhills.com/gourmet_shops/0077.html",
      },
      {
        label: "Tabelog",
        href: "https://tabelog.com/en/tokyo/A1307/A130701/13219778/",
      },
    ],
  },
  {
    id: "2026-09-03-dinner",
    date: "2026-09-03",
    weekday: "Thu",
    dayLabel: "Sep 3",
    meal: "Dinner",
    restaurant: "YAKITORI Moe",
    cuisine: "Yakitori",
    area: "Azabu / Roppongi",
    status: "Reserve",
    featured: true,
    note: "TableCheck reserve",
    detail: "Credit card required to hold booking. Guests under 18 are not permitted.",
    links: [
      {
        label: "Book on TableCheck",
        href: "https://www.tablecheck.com/en/shops/yakitori-moe/reserve",
      },
      {
        label: "Tabelog",
        href: "https://tabelog.com/en/tokyo/A1307/A130701/13004437/",
      },
    ],
  },
  {
    id: "2026-09-04-lunch",
    date: "2026-09-04",
    weekday: "Fri",
    dayLabel: "Sep 4",
    meal: "Lunch",
    restaurant: "Ramen GINZA TON BOX 銀座本店",
    cuisine: "Ramen",
    area: "Ginza",
    status: "Walk-in",
    featured: true,
    note: "Walk-in only",
    detail: "Reservations unavailable. Only 7 counter seats, so go near opening.",
    links: [
      {
        label: "Tabelog",
        href: "https://tabelog.com/en/tokyo/A1301/A130101/13314569/",
      },
    ],
  },
];

export const statusOrder: ReservationStatus[] = [
  "Reserve",
  "Walk-in",
  "Flexible",
  "Disney",
];
