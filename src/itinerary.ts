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
    restaurant: "麺 銀座おのでら 東銀座店",
    area: "Higashi-ginza",
    status: "Walk-in",
    featured: true,
    note: "No reservations",
    detail: "Tabelog lists this ramen counter as reservation unavailable.",
    links: [
      {
        label: "Tabelog",
        href: "https://tabelog.com/tokyo/A1301/A130101/13315560/",
      },
    ],
  },
  {
    id: "2026-08-29-lunch",
    date: "2026-08-29",
    weekday: "Sat",
    dayLabel: "Aug 29",
    meal: "Lunch",
    restaurant: "Ikebukuro udon/soba",
    area: "Ikebukuro",
    status: "Flexible",
    note: "Specific restaurant not selected yet",
    links: [],
  },
  {
    id: "2026-08-29-dinner",
    date: "2026-08-29",
    weekday: "Sat",
    dayLabel: "Aug 29",
    meal: "Dinner",
    restaurant: "cossott'e SP",
    area: "Azabu-juban",
    status: "Reserve",
    featured: true,
    note: "Reserve",
    detail: "Direct TableCheck booking available.",
    links: [
      {
        label: "Book on TableCheck",
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
    area: "Ginza",
    status: "Reserve",
    featured: true,
    note: "TableCheck only",
    detail:
      "Reservations open Saturday 9:00 a.m. JST for the following Tue-Sun; ¥500/person reservation fee.",
    links: [
      {
        label: "Book on TableCheck",
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
    restaurant: "寿司 鮪家（つなや）",
    area: "Ebisu",
    status: "Reserve",
    featured: true,
    note: "Reserve on Tabelog",
    detail: "Online booking is supported.",
    links: [
      {
        label: "Tabelog reservation",
        href: "https://tabelog.com/tokyo/A1303/A130302/13197313/",
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
    area: "Toyosu / Market area",
    status: "Reserve",
    featured: true,
    note: "Reserve on Tabelog",
    detail: "Tabelog online reservations are supported; phone is also listed.",
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
    area: "Ryogoku",
    status: "Reserve",
    note: "Reserve dinner",
    detail:
      "Dinner reservations are accepted; lunch reservations are not accepted. Calling may work if online is full.",
    links: [
      {
        label: "Tabelog",
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
    restaurant: "Omotesando Japanese/unagi",
    area: "Omotesando",
    status: "Flexible",
    note: "Specific restaurant not selected yet",
    links: [],
  },
  {
    id: "2026-09-03-dinner",
    date: "2026-09-03",
    weekday: "Thu",
    dayLabel: "Sep 3",
    meal: "Dinner",
    restaurant: "YAKITORI Moe",
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
