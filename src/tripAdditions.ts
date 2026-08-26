import type { MealType } from "./itinerary";

export type Attraction = {
  title: string;
  time: string;
  area: string;
  note: string;
  booking?: "Book" | "Wait" | "Flexible" | "Weather";
  href?: string;
};

export type RestaurantSuggestion = {
  name: string;
  cuisine: string;
  area: string;
  scoreLabel: string;
  familyNote: string;
  reason: string;
  href: string;
  exception?: boolean;
};

export type RestaurantSuggestionSet = {
  date: string;
  meal: MealType;
  context: string;
  options: RestaurantSuggestion[];
};

const ginzaRamen = [
  {
    name: "Ginza Kagari Honten",
    cuisine: "Ramen",
    area: "Ginza",
    scoreLabel: "Tabelog 3.66",
    familyNote: "Children welcome; compact but casual ramen.",
    reason: "Easy Ginza fallback for chicken paitan ramen near the hotel zone.",
    href: "https://tabelog.com/en/tokyo/A1301/A130101/13230021/",
  },
  {
    name: "Sora no Iro Ginza Honten",
    cuisine: "Ramen",
    area: "Shintomicho / Ginza",
    scoreLabel: "Tabelog 3.61",
    familyNote: "Children and strollers welcome; multilingual support listed.",
    reason: "Useful near Premium Apart MONday Ginza East and good for a low-friction first meal.",
    href: "https://tabelog.com/en/tokyo/A1301/A130101/13314476/",
  },
];

const ginzaPlus = [
  {
    name: "むぎとオリーブ 銀座本店",
    cuisine: "Ramen",
    area: "Higashi-ginza",
    scoreLabel: "Tabelog 3.76",
    familyNote: "Small counter shop; best for older kids who can sit through a queue.",
    reason: "Clam-forward ramen close to Ginza, useful when you want a light Japanese dinner.",
    href: "https://tabelog.com/en/tokyo/A1301/A130101/13164932/",
  },
  {
    name: "Soba Sasuga",
    cuisine: "Soba",
    area: "Higashi-ginza",
    scoreLabel: "Tabelog 3.67",
    familyNote: "Children welcome; reservation path available.",
    reason: "Polished soba close to the apartment area and a strong final-lunch candidate.",
    href: "https://tabelog.com/en/tokyo/A1301/A130101/13002488/",
  },
];

const ginzaUnagiRice = [
  {
    name: "TAKAHASHIYA Ginza ten",
    cuisine: "Unagi",
    area: "Higashi-ginza",
    scoreLabel: "Tabelog 3.75",
    familyNote: "Children and strollers welcome; unadon and unaju sets listed.",
    reason: "Closest polished unagi rice option to the apartment and Kabukiza side of Ginza.",
    href: "https://tabelog.com/en/tokyo/A1301/A130101/13262334/",
  },
  {
    name: "Sumiyaki Unafuji Yuurakuchou ten",
    cuisine: "Unagi",
    area: "Yurakucho / Shimbashi",
    scoreLabel: "Tabelog 3.69",
    familyNote: "Children welcome; larger room and private-room options listed.",
    reason: "Strong hitsumabushi/eel rice bowl fallback on the Ginza-Shimbashi edge.",
    href: "https://tabelog.com/en/tokyo/A1301/A130103/13250032/",
  },
  {
    name: "Unagi Hashimoto",
    cuisine: "Unagi",
    area: "Nihonbashi / Tokyo Station",
    scoreLabel: "Tabelog 3.77",
    familyNote: "Children welcome; table, raised-floor, and private-room seating listed.",
    reason: "Best-score unagi rice option within a short taxi/train hop if Ginza is full.",
    href: "https://tabelog.com/en/tokyo/A1302/A130202/13011474/",
  },
];

const requestedGinzaPicks = [
  {
    name: "HONO Wagyu Teppan Ginza 鉄板焼 炎 銀座",
    cuisine: "Teppanyaki",
    area: "Ginza",
    scoreLabel: "Requested pick - Tabelog 3.09",
    familyNote: "Lunch accepts preschool and elementary children; dinner is middle-school+.",
    reason: "Best fit on the Tsukiji/Ginza day as a reserved teppanyaki lunch after the morning market.",
    href: "https://tabelog.com/en/tokyo/A1301/A130101/13314108/",
    exception: true,
  },
  {
    name: "Sushi Umezawa",
    cuisine: "Sushi",
    area: "Hatchobori / Shintomicho",
    scoreLabel: "Requested pick - Tabelog 3.55",
    familyNote: "Children welcome; evening is best for kids who can sit through and eat the same course.",
    reason: "About a 4-minute walk from Shintomicho Station, making it a convenient near-hotel sushi option after the Tsukiji/Ginza day.",
    href: "https://tabelog.com/en/tokyo/A1302/A130203/13254458/",
    exception: true,
  },
  {
    name: "Men Ginza Onodera Higashi ginza ten",
    cuisine: "Ramen",
    area: "Higashi-ginza",
    scoreLabel: "Requested pick - Tabelog 3.48",
    familyNote: "Children welcome; counter and table seating listed, with stroller parking outside.",
    reason: "Walk-in ramen option near Ginza/Higashi-ginza for the first dinner after hotel check-in.",
    href: "https://tabelog.com/en/tokyo/A1301/A130101/13315560/",
    exception: true,
  },
  {
    name: "Tsukiji Kaisen no Don",
    cuisine: "Kaisen don",
    area: "Tokyo Station / Gransta Tokyo",
    scoreLabel: "Requested pick - Tabelog 3.28",
    familyNote: "No reservations; fast seafood rice bowls inside Tokyo Station.",
    reason: "Convenient on the Tsukiji/Ginza day if you end up shopping or transferring through Tokyo Station.",
    href: "https://tabelog.com/en/tokyo/A1302/A130201/13296526/",
    exception: true,
  },
];

const shintomichoNearHotel = [
  {
    name: "BROZERS' Shintomi chou ten",
    cuisine: "Burger",
    area: "Shintomicho",
    scoreLabel: "Tabelog 3.56",
    familyNote: "Children, kids menu, and strollers welcome; open until 21:30.",
    reason: "About a 3-minute walk from Shintomicho Station, useful for an easy first-night meal near Premium Apart MONday Ginza East.",
    href: "https://tabelog.com/en/tokyo/A1313/A131301/13144295/",
  },
];

const ginzaDinnerVariety = [
  {
    name: "Yakitori Tsukiya",
    cuisine: "Yakitori",
    area: "Ginza",
    scoreLabel: "Tabelog 3.56",
    familyNote: "Children welcome from preschool age; kids menu listed.",
    reason: "A polished yakitori backup in Ginza when you want a reservable chicken-skewer dinner.",
    href: "https://tabelog.com/en/tokyo/A1301/A130101/13257365/",
  },
  {
    name: "Miyashin",
    cuisine: "Yakitori",
    area: "Ginza Corridor",
    scoreLabel: "Tabelog 3.48",
    familyNote: "Children welcome; non-smoking with private-room options.",
    reason: "Classic Ginza Corridor yakitori when you want something more traditional than ramen.",
    href: "https://tabelog.com/en/tokyo/A1301/A130101/13120595/",
  },
  {
    name: "Ushigoro Ginza",
    cuisine: "Yakiniku",
    area: "Ginza-itchome",
    scoreLabel: "Tabelog 3.69",
    familyNote: "Children welcome; private rooms available.",
    reason: "Strong Ginza yakiniku option for a planned dinner close to the apartment.",
    href: "https://tabelog.com/en/tokyo/A1301/A130101/13263391/",
  },
  {
    name: "Ushigoro Bambina Ginza",
    cuisine: "Yakiniku",
    area: "Ginza",
    scoreLabel: "Tabelog 3.55",
    familyNote: "Babies, preschoolers, elementary children, and strollers welcome.",
    reason: "More casual Wagyu/yakiniku backup with private rooms and longer dinner hours.",
    href: "https://tabelog.com/en/tokyo/A1301/A130101/13200116/",
  },
  {
    name: "Ginza Sato Yosuke",
    cuisine: "Udon",
    area: "Ginza",
    scoreLabel: "Tabelog 3.55",
    familyNote: "Children welcome; Inaniwa udon is an easy family fallback.",
    reason: "Good non-ramen noodle choice when the night needs to be simple and central.",
    href: "https://tabelog.com/en/tokyo/A1301/A130101/13033146/",
  },
  {
    name: "Rare Ten-don Ginza Mitsuyoshi Ginza honten",
    cuisine: "Tempura",
    area: "Ginza",
    scoreLabel: "Tabelog 3.48",
    familyNote: "Children welcome; casual tempura rice bowls with online reservation path.",
    reason: "Best fit for a family tempura option without committing to a long omakase counter.",
    href: "https://tabelog.com/en/tokyo/A1301/A130101/13285959/",
  },
  {
    name: "Tempura Yama no Ue Ginza",
    cuisine: "Tempura",
    area: "GINZA SIX / Higashi-ginza",
    scoreLabel: "Tabelog 3.69",
    familyNote: "Reservable, refined tempura; better for older kids who can sit through a course.",
    reason: "Premium tempura choice in GINZA SIX when you want a higher-end dinner.",
    href: "https://tabelog.com/en/tokyo/A1301/A130101/13207702/",
  },
  {
    name: "Kaiten Zushi Nemuro Hanamaru Ginza ten",
    cuisine: "Premium kaiten sushi",
    area: "Ginza",
    scoreLabel: "Tabelog 3.45",
    familyNote: "Children and strollers welcome; child chairs and child-friendly dishes listed.",
    reason: "Premium-feeling conveyor-belt sushi in Ginza when you need flexibility over reservations.",
    href: "https://tabelog.com/en/tokyo/A1301/A130101/13193771/",
  },
];

const nihonbashi = [
  {
    name: "Nanba Sennichimae Kamatake Udon Yaesu North Exit",
    cuisine: "Udon",
    area: "Tokyo Station",
    scoreLabel: "Tabelog 3.72",
    familyNote: "Children welcome; inexpensive and fast.",
    reason: "Very convenient before or after Character Street.",
    href: "https://tabelog.com/en/tokyo/A1302/A130201/13156494/",
  },
  {
    name: "Inaniwa Udon to Meshi Kaneko Hannosuke Coredo Muromachi",
    cuisine: "Udon",
    area: "COREDO Muromachi",
    scoreLabel: "Tabelog 3.63",
    familyNote: "Children welcome; udon and rice sets work well for families.",
    reason: "Matches the attached plan's Nihonbashi lunch idea.",
    href: "https://tabelog.com/en/tokyo/A1302/A130202/13193074/",
  },
  {
    name: "Tamacho Honten Yaesu Ten",
    cuisine: "Udon",
    area: "Tokyo Station / Yaesu",
    scoreLabel: "Tabelog 3.63",
    familyNote: "Children welcome; simple udon/regional food setting.",
    reason: "Good station-area fallback if Nihonbashi gets too wet or crowded.",
    href: "https://tabelog.com/en/tokyo/A1302/A130201/13015841/",
  },
];

const nihonbashiDinner = [
  {
    name: "Tamai Honten",
    cuisine: "Anago rice",
    area: "Nihonbashi",
    scoreLabel: "Tabelog 3.61",
    familyNote: "Children welcome; evening seats can be reserved.",
    reason: "Classic anago box meal near Nihonbashi/Tokyo Station.",
    href: "https://tabelog.com/en/tokyo/A1302/A130202/13019904/",
  },
  nihonbashi[1],
  nihonbashi[0],
];

const ikebukuroLunch = [
  {
    name: "Japanese Ramen Gokan",
    cuisine: "Ramen",
    area: "Ikebukuro",
    scoreLabel: "Tabelog 3.96",
    familyNote: "Children welcome; ramen counter, expect queues.",
    reason: "High-scoring ramen close enough to Sunshine City for a serious lunch.",
    href: "https://tabelog.com/en/tokyo/A1305/A130501/13284009/",
  },
  {
    name: "Menya Hulu-lu",
    cuisine: "Ramen",
    area: "Ikebukuro",
    scoreLabel: "Tabelog 3.76",
    familyNote: "Children welcome; casual ramen shop.",
    reason: "Good non-shopping lunch when Sunshine City food courts feel too generic.",
    href: "https://tabelog.com/en/tokyo/A1305/A130501/13136428/",
  },
  {
    name: "Karashibi Miso Ramen Kikanbo Ikebukuro",
    cuisine: "Ramen",
    area: "Ikebukuro",
    scoreLabel: "Tabelog 3.64",
    familyNote: "Children welcome, but spicy; order carefully for kids.",
    reason: "Strong rainy-day ramen option for adults who want spice.",
    href: "https://tabelog.com/en/tokyo/A1305/A130501/13171114/",
  },
];

const ikebukuroDinner = [
  ikebukuroLunch[1],
  {
    name: "Shinjiko Shijimi Chuka Soba Kohaku Ikebukuro ten",
    cuisine: "Ramen",
    area: "Ikebukuro",
    scoreLabel: "Tabelog 3.74",
    familyNote: "Children welcome; non-smoking ramen shop with full-day hours.",
    reason: "Higher-scoring Ikebukuro ramen fallback that clears the >3.6 filter.",
    href: "https://tabelog.com/en/tokyo/A1305/A130501/13283190/",
  },
  ikebukuroLunch[0],
];

const toyosuLunch = [
  {
    name: "Daiwa Sushi",
    cuisine: "Sushi",
    area: "Toyosu Market",
    scoreLabel: "Tabelog 3.63",
    familyNote: "Children welcome; counter only, go early.",
    reason: "Classic market sushi right after teamLab if the kids can handle a queue.",
    href: "https://tabelog.com/en/tokyo/A1313/A131307/13227265/",
  },
  {
    name: "Sushi Dai",
    cuisine: "Sushi",
    area: "Toyosu Market",
    scoreLabel: "Tabelog 3.64",
    familyNote: "Children welcome; very early reservation-at-store flow.",
    reason: "Another serious Toyosu sushi pick before Odaiba.",
    href: "https://tabelog.com/en/tokyo/A1313/A131307/13227096/",
  },
  ginzaPlus[1],
];

const asakusaLunch = [
  {
    name: "Namiki Yabu Soba",
    cuisine: "Soba",
    area: "Asakusa",
    scoreLabel: "Tabelog 3.67",
    familyNote: "Traditional soba; better for kids comfortable with simple noodles.",
    reason: "Classic soba near Senso-ji before Skytree.",
    href: "https://tabelog.com/en/tokyo/A1311/A131102/13003650/",
  },
  {
    name: "Edo Soba Hosokawa",
    cuisine: "Soba",
    area: "Ryogoku",
    scoreLabel: "Tabelog 3.66",
    familyNote: "Quiet soba setting; best for older kids.",
    reason: "Useful bridge between Skytree/Ryogoku and the Hasegawa dinner area.",
    href: "https://tabelog.com/en/tokyo/A1312/A131201/13002967/",
  },
  {
    name: "Sushi Hisaichi",
    cuisine: "Sushi",
    area: "Asakusa",
    scoreLabel: "Tabelog 3.68",
    familyNote: "Children welcome; expensive, reserve for a calmer sushi meal.",
    reason: "Premium backup if the family wants sushi instead of soba/tempura.",
    href: "https://tabelog.com/en/tokyo/A1311/A131102/13021324/",
  },
];

const asakusaDinner = [
  asakusaLunch[1],
  {
    name: "Asakusa ASA Tora",
    cuisine: "Seafood izakaya",
    area: "Asakusa",
    scoreLabel: "Tabelog 3.65",
    familyNote: "Izakaya-style seafood; check smoking/seating before going with kids.",
    reason: "Good if you stay around Asakusa rather than committing to tonkatsu.",
    href: "https://tabelog.com/en/tokyo/A1311/A131102/13259649/",
  },
  asakusaLunch[0],
];

const omotesandoLunch = [
  {
    name: "Teuchi Udon Iwashiya Aoyama",
    cuisine: "Udon",
    area: "Aoyama-itchome / Omotesando side",
    scoreLabel: "Tabelog 3.66",
    familyNote: "Children welcome; inexpensive Sanuki udon.",
    reason: "Easy family lunch after Meiji Shrine/Omotesando walking.",
    href: "https://tabelog.com/en/tokyo/A1306/A130603/13224471/",
  },
  {
    name: "Teuchi Shimada",
    cuisine: "Soba / Udon",
    area: "Omotesando",
    scoreLabel: "Tabelog 3.62",
    familyNote: "Children welcome; lunch is more family-friendly than late izakaya hours.",
    reason: "Soba/udon choice right in the Omotesando corridor.",
    href: "https://tabelog.com/en/tokyo/A1306/A130602/13006991/",
  },
  {
    name: "Men Ginza Onodera Honten",
    cuisine: "Ramen",
    area: "Omotesando",
    scoreLabel: "Tabelog 3.64",
    familyNote: "Children welcome; casual ramen near Omotesando.",
    reason: "Good noodle stop that also fits the app's existing Onodera theme.",
    href: "https://tabelog.com/en/tokyo/A1306/A130602/13295645/",
  },
];

const omotesandoDinner = [
  {
    name: "tonkatsu.jp Omotesando",
    cuisine: "Tonkatsu",
    area: "Omotesando",
    scoreLabel: "Tabelog 3.70",
    familyNote: "Children welcome; tonkatsu specialist.",
    reason: "Family-friendly replacement if YAKITORI Moe's under-18 rule does not work.",
    href: "https://tabelog.com/en/tokyo/A1306/A130602/13264557/",
  },
  {
    name: "Pretty Pork Factory & Katsu Puripo",
    cuisine: "Tonkatsu",
    area: "Meiji-jingumae",
    scoreLabel: "Tabelog 3.74",
    familyNote: "Children welcome; pricier pork-focused meal.",
    reason: "Close to Harajuku/Shibuya and easier with kids than adult-only yakitori.",
    href: "https://tabelog.com/en/tokyo/A1306/A130601/13295369/",
  },
  omotesandoLunch[1],
];

const disneyFamily = [
  {
    name: "Chinese Restaurant Dynasty Hilton Tokyo Bay",
    cuisine: "Chinese",
    area: "Bayside Station",
    scoreLabel: "Tabelog 3.64",
    familyNote: "Children welcome; kids set listed by Hilton.",
    reason: "The closest strong Tabelog-score family option near the resort hotels.",
    href: "https://tabelog.com/en/chiba/A1202/A120203/12000220/",
  },
  {
    name: "Restaurant Hokusai",
    cuisine: "Japanese",
    area: "Tokyo Disneyland",
    scoreLabel: "Disney official pick",
    familyNote: "Children welcome; kids menu, stroller support, and Priority Seating.",
    reason: "Best Japanese-style in-park family option when staying inside Disneyland.",
    href: "https://www.tokyodisneyresort.jp/tdl/restaurant/detail/336/",
    exception: true,
  },
  {
    name: "Sherwood Garden Restaurant",
    cuisine: "Buffet",
    area: "Tokyo Disneyland Hotel",
    scoreLabel: "Disney official pick",
    familyNote: "Children's menus and lower child buffet counter listed by Disney.",
    reason: "Good sit-down buffet backup just outside the park gates.",
    href: "https://www.tokyodisneyresort.jp/en/hotel/tdh/restaurant/sherwood",
    exception: true,
  },
];

export const attractionsByDate: Record<string, Attraction[]> = {
  "2026-08-27": [
    { title: "Arrive at Haneda", time: "15:40", area: "HND", note: "Land, transfer, and keep the evening light.", booking: "Flexible" },
    { title: "Premium Apart MONday Ginza East", time: "Check-in", area: "Shintomicho", note: "Check in and reset before dinner.", booking: "Flexible" },
    { title: "Ginza neighborhood dinner", time: "Evening", area: "Ginza / Shintomicho", note: "Stay close to the apartment for a low-pressure first meal.", booking: "Flexible" },
    { title: "Convenience store supply run", time: "Night", area: "Shintomicho", note: "Pick up water, breakfast snacks, and transit-card backup cash.", booking: "Flexible" },
  ],
  "2026-08-28": [
    { title: "teamLab Planets", time: "Morning", area: "Toyosu", note: "Timed-ticket digital art museum; book in advance. Toyosu is near Tsukiji for grazing lunch.", href: "https://teamlabplanets.dmm.com/en", booking: "Book" },
    { title: "Tsukiji / Toyosu lunch area", time: "Midday", area: "Tsukiji / Toyosu", note: "Walk Tsukiji Outer Market for grilled seafood, tamagoyaki, and snacks after teamLab.", booking: "Flexible" },
    { title: "Hotel rest", time: "Afternoon", area: "Shintomicho", note: "Return to the apartment for a real jet-lag break after the morning.", booking: "Flexible" },
    { title: "Ginza sunset walk", time: "Evening", area: "Ginza", note: "Easy dusk stroll through Ginza before dinner at 麺 銀座おのでら in Higashi-ginza.", booking: "Flexible" },
  ],
  "2026-08-29": [
    { title: "Ikebukuro / Sunshine City", time: "Morning", area: "Ikebukuro", note: "Pokemon Center, shopping, or indoor activities; lunch nearby.", booking: "Flexible" },
    { title: "Doraemon Exhibition", time: "Midday", area: "Ikebukuro area", note: "Use this as the main kid-friendly anchor; confirm the exact venue and ticket window before locking it.", booking: "Flexible" },
    { title: "Shopping / indoor activities", time: "Afternoon", area: "Ikebukuro", note: "Keep this flexible for weather, crowds, and energy level.", booking: "Flexible" },
    { title: "Alternative: Sanrio Puroland", time: "10:00-15:00 option", area: "Tama Center", note: "Optional substitute for Ikebukuro day if kids prefer. Note: dinner is in Azabu-juban (long transit).", href: "https://www.puroland.jp/language/", booking: "Book" },
  ],
  "2026-08-30": [
    { title: "Ginza shopping", time: "Morning", area: "Ginza", note: "Stay close to the apartment area before the 銀座 八五 ramen lunch reservation.", booking: "Flexible" },
    { title: "Tokyo Station / Character Street", time: "Afternoon option", area: "Tokyo Station", note: "Pokemon, Ghibli, Snoopy character goods; close to Ginza and Ebisu.", booking: "Flexible" },
    { title: "Shibuya / Harajuku", time: "Afternoon option", area: "Shibuya", note: "Shopping and youth culture between lunch and dinner; Ebisu is one stop south of Shibuya.", booking: "Flexible" },
  ],
  "2026-08-31": [
    { title: "Toyosu Market morning", time: "Morning", area: "Toyosu", note: "Explore the market area before the reserved 晶 sushi lunch.", booking: "Flexible" },
    { title: "晶 sushi lunch", time: "Midday", area: "Toyosu Market area", note: "Reserved lunch at 晶 near Toyosu Market; fresh sushi close to the source.", booking: "Flexible" },
    { title: "Odaiba afternoon", time: "Afternoon", area: "Odaiba", note: "DiverCity Tokyo Plaza, Gundam statue, teamLab Borderless, or waterfront walk after lunch.", booking: "Flexible" },
    { title: "Odaiba casual dinner", time: "Evening", area: "Odaiba", note: "Flexible casual Japanese dinner in Odaiba before returning to hotel.", booking: "Flexible" },
  ],
  "2026-09-01": [
    { title: "Asakusa morning", time: "Morning", area: "Asakusa", note: "Senso-ji Temple, Nakamise shopping street, traditional Tokyo atmosphere.", href: "https://www.senso-ji.jp/english/", booking: "Flexible" },
    { title: "Asakusa lunch", time: "Midday", area: "Asakusa", note: "Soba or tempura near Senso-ji before moving to Skytree.", booking: "Flexible" },
    { title: "Tokyo Skytree", time: "Afternoon", area: "Oshiage", note: "Observation deck or Skytree Town shopping; short trip from Asakusa.", href: "https://www.tokyo-skytree.jp/en/", booking: "Flexible" },
    { title: "Ryogoku / Sumida area", time: "Late afternoon", area: "Ryogoku", note: "Sumo district atmosphere before とんかつ はせ川 dinner reservation.", booking: "Flexible" },
  ],
  "2026-09-02": [
    { title: "Tokyo Disneyland", time: "Full day", area: "Maihama", note: "Full park day; buy official date-specific tickets in advance.", href: "https://www.tokyodisneyresort.jp/en/tdl/", booking: "Book" },
    { title: "Disney app / Priority Seating", time: "During park day", area: "Tokyo Disneyland", note: "Use the official Disney app for restaurant seating, mobile order, passes, and schedule checks.", href: "https://www.tokyodisneyresort.jp/en/tdl/restaurant/", booking: "Book" },
  ],
  "2026-09-03": [
    { title: "Roppongi / Azabu area", time: "Morning", area: "Roppongi", note: "Ark Hills area before つじ半 lunch; Mori Art Museum or Roppongi Hills shopping.", booking: "Flexible" },
    { title: "つじ半 lunch", time: "Midday", area: "Ark Hills", note: "Walk-in kaisen don at Ark Mori Building 3F before staying in the area.", booking: "Flexible" },
    { title: "Azabu-juban shopping", time: "Afternoon", area: "Azabu-juban", note: "Relaxed neighborhood walk and shops before YAKITORI Moe dinner.", booking: "Flexible" },
    { title: "Optional (skipped): Yokohama", time: "Full day", area: "Yokohama", note: "Shin-Yokohama Ramen Museum, Minato Mirai, Cosmo Clock 21 - too far from Azabu dinner, consider skipping.", booking: "Weather" },
  ],
  "2026-09-04": [
    { title: "Slow Ginza morning", time: "Morning", area: "Ginza", note: "Keep the last day close to the hotel and luggage.", booking: "Flexible" },
    { title: "Final shopping and hotel pickup", time: "Early afternoon", area: "Ginza / Shintomicho", note: "Do any last errands, collect luggage, and leave buffer for Haneda.", booking: "Flexible" },
    { title: "Depart Haneda", time: "18:05", area: "HND", note: "Build in airport buffer after lunch.", booking: "Flexible" },
  ],
};

export const restaurantSuggestionSets: RestaurantSuggestionSet[] = [
  { date: "2026-08-27", meal: "Lunch", context: "Unagi rice choices near Ginza after landing", options: ginzaUnagiRice },
  { date: "2026-08-27", meal: "Dinner", context: "Verified Ginza backups plus near-hotel Shintomicho arrival options and requested Onodera ramen", options: [ginzaPlus[0], ginzaRamen[0], ginzaPlus[1], ginzaRamen[1], shintomichoNearHotel[0], requestedGinzaPicks[2]] },
  { date: "2026-08-28", meal: "Lunch", context: "Sit-down backups around Tsukiji/Toyosu and Ginza after teamLab and market grazing, plus requested picks", options: [ginzaPlus[1], ginzaRamen[0], ginzaRamen[1], requestedGinzaPicks[0], requestedGinzaPicks[3]] },
  { date: "2026-08-28", meal: "Dinner", context: "Ginza and near-hotel dinner backups after teamLab and Tsukiji day", options: [ginzaPlus[0], ginzaRamen[0], ginzaPlus[1], requestedGinzaPicks[1]] },
  { date: "2026-08-29", meal: "Lunch", context: "Ikebukuro options near Sunshine City", options: ikebukuroLunch },
  { date: "2026-08-29", meal: "Dinner", context: "Casual Ikebukuro dinner options plus Ginza yakiniku and udon backups", options: [...ikebukuroDinner, ginzaDinnerVariety[2], ginzaDinnerVariety[4]] },
  { date: "2026-08-30", meal: "Lunch", context: "Ginza area backups near 銀座 八五 reservation", options: nihonbashi },
  { date: "2026-08-30", meal: "Dinner", context: "Ebisu dinner area backups plus Shibuya and Ginza options after 寿司 鮪家", options: [...nihonbashiDinner, ginzaDinnerVariety[0], ginzaDinnerVariety[7]] },
  { date: "2026-08-31", meal: "Lunch", context: "Toyosu Market area sushi and backups before Odaiba afternoon", options: toyosuLunch },
  { date: "2026-08-31", meal: "Dinner", context: "Odaiba return-route options toward Ginza/Nihonbashi plus tempura and yakiniku", options: [nihonbashiDinner[0], ginzaRamen[1], ginzaPlus[0], ginzaDinnerVariety[5], ginzaDinnerVariety[3]] },
  { date: "2026-09-01", meal: "Lunch", context: "Asakusa / Skytree / Ryogoku lunch backups", options: asakusaLunch },
  { date: "2026-09-01", meal: "Dinner", context: "Backups around Asakusa/Ryogoku after Skytree day, plus Ginza yakitori and udon", options: [...asakusaDinner, ginzaDinnerVariety[1], ginzaDinnerVariety[4]] },
  { date: "2026-09-02", meal: "Lunch", context: "Disney-day family choices", options: disneyFamily },
  { date: "2026-09-02", meal: "Dinner", context: "Disney dinner and resort-hotel backups plus Ginza unagi and premium kaiten sushi", options: [disneyFamily[1], disneyFamily[2], disneyFamily[0], ginzaUnagiRice[1], ginzaDinnerVariety[7]] },
  { date: "2026-09-03", meal: "Lunch", context: "Ark Hills and Roppongi area lunch backups near つじ半", options: omotesandoLunch },
  { date: "2026-09-03", meal: "Dinner", context: "Family-friendly backups because YAKITORI Moe is adults-only, with Ginza yakiniku and premium tempura", options: [...omotesandoDinner, ginzaDinnerVariety[2], ginzaDinnerVariety[6]] },
  { date: "2026-09-04", meal: "Lunch", context: "Final lunch near Ginza before luggage pickup", options: [ginzaPlus[1], ginzaRamen[0], ginzaRamen[1]] },
  { date: "2026-09-04", meal: "Dinner", context: "Pre-flight backups only if you eat before Haneda, with ramen, yakitori, and udon near Ginza", options: [ginzaRamen[0], ginzaPlus[0], ginzaRamen[1], ginzaDinnerVariety[0], ginzaDinnerVariety[4]] },
];
