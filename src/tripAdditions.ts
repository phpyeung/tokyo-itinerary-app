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
    area: "Ginza",
    scoreLabel: "Tabelog 3.66",
    familyNote: "Children welcome; compact but casual ramen.",
    reason: "Easy Ginza fallback for chicken paitan ramen near the hotel zone.",
    href: "https://tabelog.com/en/tokyo/A1301/A130101/13053200/",
  },
  {
    name: "Sora no Iro Ginza Honten",
    area: "Shintomicho / Ginza",
    scoreLabel: "Tabelog 3.61",
    familyNote: "Children and strollers welcome; multilingual support listed.",
    reason: "Useful near Premium Apart MONday Ginza East and good for a low-friction first meal.",
    href: "https://tabelog.com/en/tokyo/A1301/A130101/13314476/",
  },
  {
    name: "支那麺 はしご 本店",
    area: "Ginza",
    scoreLabel: "Tabelog 3.70",
    familyNote: "Children allowed; counter seating, so best for older kids.",
    reason: "Reliable late-running Ginza noodle option with rice and mild spice adjustment.",
    href: "https://tabelog.com/tokyo/A1301/A130101/13092185/",
  },
];

const ginzaPlus = [
  {
    name: "むぎとオリーブ 銀座本店",
    area: "Higashi-ginza",
    scoreLabel: "Tabelog 3.76",
    familyNote: "Small counter shop; best for older kids who can sit through a queue.",
    reason: "Clam-forward ramen close to Ginza, useful when you want a light Japanese dinner.",
    href: "https://tabelog.com/en/tokyo/A1301/A130101/13164932/",
  },
  {
    name: "Soba Sasuga",
    area: "Higashi-ginza",
    scoreLabel: "Tabelog 3.67",
    familyNote: "Children welcome; reservation path available.",
    reason: "Polished soba close to the apartment area and a strong final-lunch candidate.",
    href: "https://tabelog.com/en/tokyo/A1301/A130101/13002488/",
  },
  {
    name: "Soba Kaiseki Tsukiji Bunkajin Kaza",
    area: "Tsukiji / Higashi-ginza",
    scoreLabel: "Tabelog 3.65",
    familyNote: "Quiet soba-kappo; better for older kids than toddlers.",
    reason: "Good seated alternative when Tsukiji grazing needs a calmer backup.",
    href: "https://tabelog.com/en/tokyo/A1301/A130101/13021067/",
  },
];

const nihonbashi = [
  {
    name: "Nanba Sennichimae Kamatake Udon Yaesu North Exit",
    area: "Tokyo Station",
    scoreLabel: "Tabelog 3.72",
    familyNote: "Children welcome; inexpensive and fast.",
    reason: "Very convenient before or after Character Street.",
    href: "https://tabelog.com/en/tokyo/A1302/A130201/13192013/",
  },
  {
    name: "Inaniwa Udon to Meshi Kaneko Hannosuke Coredo Muromachi",
    area: "COREDO Muromachi",
    scoreLabel: "Tabelog 3.63",
    familyNote: "Children welcome; udon and rice sets work well for families.",
    reason: "Matches the attached plan's Nihonbashi lunch idea.",
    href: "https://tabelog.com/en/tokyo/A1302/A130202/13193074/",
  },
  {
    name: "Tamacho Honten Yaesu Ten",
    area: "Tokyo Station / Yaesu",
    scoreLabel: "Tabelog 3.63",
    familyNote: "Children welcome; simple udon/regional food setting.",
    reason: "Good station-area fallback if Nihonbashi gets too wet or crowded.",
    href: "https://tabelog.com/en/tokyo/A1302/A130201/13006439/",
  },
];

const nihonbashiDinner = [
  {
    name: "Tamai Honten",
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
    area: "Ikebukuro",
    scoreLabel: "Tabelog 3.96",
    familyNote: "Children welcome; ramen counter, expect queues.",
    reason: "High-scoring ramen close enough to Sunshine City for a serious lunch.",
    href: "https://tabelog.com/en/tokyo/A1305/A130501/13284045/",
  },
  {
    name: "Menya Hulu-lu",
    area: "Ikebukuro",
    scoreLabel: "Tabelog 3.76",
    familyNote: "Children welcome; casual ramen shop.",
    reason: "Good non-shopping lunch when Sunshine City food courts feel too generic.",
    href: "https://tabelog.com/en/tokyo/A1305/A130501/13136428/",
  },
  {
    name: "Karashibi Miso Ramen Kikanbo Ikebukuro",
    area: "Ikebukuro",
    scoreLabel: "Tabelog 3.64",
    familyNote: "Children welcome, but spicy; order carefully for kids.",
    reason: "Strong rainy-day ramen option for adults who want spice.",
    href: "https://tabelog.com/en/tokyo/A1305/A130501/13215788/",
  },
];

const ikebukuroDinner = [
  ikebukuroLunch[1],
  {
    name: "Mutekiya",
    area: "Ikebukuro",
    scoreLabel: "Tabelog 3.61",
    familyNote: "Children welcome; 17 counter seats, no reservations.",
    reason: "Classic Ikebukuro ramen fallback with long hours.",
    href: "https://tabelog.com/en/tokyo/A1305/A130501/13003927/",
  },
  ikebukuroLunch[0],
];

const toyosuLunch = [
  {
    name: "Daiwa Sushi",
    area: "Toyosu Market",
    scoreLabel: "Tabelog 3.63",
    familyNote: "Children welcome; counter only, go early.",
    reason: "Classic market sushi right after teamLab if the kids can handle a queue.",
    href: "https://tabelog.com/en/tokyo/A1313/A131307/13227265/",
  },
  {
    name: "Sushi Dai",
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
    area: "Asakusa",
    scoreLabel: "Tabelog 3.67",
    familyNote: "Traditional soba; better for kids comfortable with simple noodles.",
    reason: "Classic soba near Senso-ji before Skytree.",
    href: "https://tabelog.com/en/tokyo/A1311/A131102/13003650/",
  },
  {
    name: "Edo Soba Hosokawa",
    area: "Ryogoku",
    scoreLabel: "Tabelog 3.66",
    familyNote: "Quiet soba setting; best for older kids.",
    reason: "Useful bridge between Skytree/Ryogoku and the Hasegawa dinner area.",
    href: "https://tabelog.com/en/tokyo/A1312/A131201/13017934/",
  },
  {
    name: "Sushi Hisaichi",
    area: "Asakusa",
    scoreLabel: "Tabelog 3.68",
    familyNote: "Children welcome; expensive, reserve for a calmer sushi meal.",
    reason: "Premium backup if the family wants sushi instead of soba/tempura.",
    href: "https://tabelog.com/en/tokyo/A1311/A131102/13003716/",
  },
];

const asakusaDinner = [
  asakusaLunch[1],
  {
    name: "Asakusa ASA Tora",
    area: "Asakusa",
    scoreLabel: "Tabelog 3.65",
    familyNote: "Izakaya-style seafood; check smoking/seating before going with kids.",
    reason: "Good if you stay around Asakusa rather than committing to tonkatsu.",
    href: "https://tabelog.com/en/tokyo/A1311/A131102/13206068/",
  },
  asakusaLunch[0],
];

const omotesandoLunch = [
  {
    name: "Teuchi Udon Iwashiya Aoyama",
    area: "Aoyama-itchome / Omotesando side",
    scoreLabel: "Tabelog 3.66",
    familyNote: "Children welcome; inexpensive Sanuki udon.",
    reason: "Easy family lunch after Meiji Shrine/Omotesando walking.",
    href: "https://tabelog.com/en/tokyo/A1306/A130603/13147426/",
  },
  {
    name: "Teuchi Shimada",
    area: "Omotesando",
    scoreLabel: "Tabelog 3.62",
    familyNote: "Children welcome; lunch is more family-friendly than late izakaya hours.",
    reason: "Soba/udon choice right in the Omotesando corridor.",
    href: "https://tabelog.com/en/tokyo/A1306/A130602/13007364/",
  },
  {
    name: "Men Ginza Onodera Honten",
    area: "Omotesando",
    scoreLabel: "Tabelog 3.64",
    familyNote: "Children welcome; casual ramen near Omotesando.",
    reason: "Good noodle stop that also fits the app's existing Onodera theme.",
    href: "https://tabelog.com/en/tokyo/A1306/A130602/13296296/",
  },
];

const omotesandoDinner = [
  {
    name: "tonkatsu.jp Omotesando",
    area: "Omotesando",
    scoreLabel: "Tabelog 3.70",
    familyNote: "Children welcome; tonkatsu specialist.",
    reason: "Family-friendly replacement if YAKITORI Moe's under-18 rule does not work.",
    href: "https://tabelog.com/en/tokyo/A1306/A130602/13258372/",
  },
  {
    name: "Pretty Pork Factory & Katsu Puripo",
    area: "Meiji-jingumae",
    scoreLabel: "Tabelog 3.74",
    familyNote: "Children welcome; pricier pork-focused meal.",
    reason: "Close to Harajuku/Shibuya and easier with kids than adult-only yakitori.",
    href: "https://tabelog.com/en/tokyo/A1306/A130601/13273610/",
  },
  omotesandoLunch[1],
];

const disneyFamily = [
  {
    name: "Chinese Restaurant Dynasty Hilton Tokyo Bay",
    area: "Bayside Station",
    scoreLabel: "Tabelog 3.64",
    familyNote: "Children welcome; kids set listed by Hilton.",
    reason: "The closest strong Tabelog-score family option near the resort hotels.",
    href: "https://tabelog.com/en/chiba/A1202/A120203/12000220/",
  },
  {
    name: "Restaurant Hokusai",
    area: "Tokyo Disneyland",
    scoreLabel: "Disney official pick",
    familyNote: "Children welcome; kids menu, stroller support, and Priority Seating.",
    reason: "Best Japanese-style in-park family option when staying inside Disneyland.",
    href: "https://www.tokyodisneyresort.jp/tdl/restaurant/detail/336/",
    exception: true,
  },
  {
    name: "Sherwood Garden Restaurant",
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
    { title: "Premium Apart MONday Ginza East", time: "Check-in", area: "Shintomicho", note: "Settle in before a low-pressure Ginza walk.", booking: "Flexible" },
    { title: "Ginza / Shintomicho evening walk", time: "Evening", area: "Ginza", note: "Easy first-night orientation near the apartment.", booking: "Flexible" },
  ],
  "2026-08-28": [
    { title: "Tsukiji Outer Market", time: "07:30-10:00", area: "Tsukiji", note: "Snack early; use this as a grazing day rather than a heavy reservation.", href: "https://www.tsukiji.or.jp/english/", booking: "Flexible" },
    { title: "Tsukiji Hongwanji", time: "Morning", area: "Tsukiji", note: "Indoor-friendly temple stop after the market.", booking: "Flexible" },
    { title: "Ginza / Tokyo Station", time: "Afternoon", area: "Ginza / Marunouchi", note: "Department stores and station shops work well if showers start.", booking: "Flexible" },
  ],
  "2026-08-29": [
    { title: "Sunshine City", time: "Late morning", area: "Ikebukuro", note: "Rainy-weekend indoor base for shopping and entertainment.", href: "https://sunshinecity.jp/en/", booking: "Flexible" },
    { title: "Pokemon Center Mega Tokyo", time: "Midday", area: "Ikebukuro", note: "Main kid-friendly anchor for the day.", booking: "Flexible" },
    { title: "Ikebukuro arcades and shops", time: "Afternoon", area: "Ikebukuro", note: "Keep the pace flexible around jet lag and weather.", booking: "Flexible" },
  ],
  "2026-08-30": [
    { title: "Tokyo Station", time: "Morning", area: "Marunouchi", note: "Start indoors around the station complex.", booking: "Flexible" },
    { title: "Tokyo Character Street", time: "Late morning", area: "Tokyo Station", note: "Good rainy-day shopping with kids.", href: "https://www.tokyoeki-1bangai.co.jp/en/shop/?area=area03", booking: "Flexible" },
    { title: "Nihonbashi / COREDO Muromachi", time: "Afternoon", area: "Nihonbashi", note: "Indoor/outdoor old-Tokyo walk with food and shops nearby.", booking: "Flexible" },
  ],
  "2026-08-31": [
    { title: "teamLab Planets", time: "09:00-09:30", area: "Toyosu", note: "Buy this timed ticket; the official store allows limited changes when available.", href: "https://teamlabplanets.dmm.com/en", booking: "Book" },
    { title: "Toyosu lunch", time: "~11:15", area: "Toyosu", note: "Eat after teamLab before crossing to Odaiba.", booking: "Flexible" },
    { title: "DiverCity / Gundam Base / Unicorn Gundam", time: "Afternoon", area: "Odaiba", note: "This is the dedicated Odaiba day.", href: "https://www.divercity-tokyo.com/en/", booking: "Flexible" },
  ],
  "2026-09-01": [
    { title: "Senso-ji and Nakamise", time: "08:00", area: "Asakusa", note: "Start early before the large tour-group crowds.", href: "https://www.senso-ji.jp/english/", booking: "Flexible" },
    { title: "Tokyo Skytree / Solamachi", time: "Late morning", area: "Oshiage", note: "Good indoor backup if the weather turns.", href: "https://www.tokyo-skytree.jp/en/", booking: "Flexible" },
    { title: "Ryogoku", time: "Late afternoon", area: "Ryogoku", note: "Geographically sensible move before Tonkatsu Hasegawa dinner.", booking: "Flexible" },
  ],
  "2026-09-02": [
    { title: "Tokyo Disneyland", time: "Full day", area: "Maihama", note: "Buy official tickets and keep Sep 3 as the weather-swap backup.", href: "https://www.tokyodisneyresort.jp/en/tdl/", booking: "Book" },
    { title: "Priority Seating / Mobile Order", time: "During park day", area: "Tokyo Disneyland", note: "Use Disney systems instead of Tabelog for in-park dining.", href: "https://www.tokyodisneyresort.jp/en/tdl/restaurant/", booking: "Book" },
  ],
  "2026-09-03": [
    { title: "Meiji Shrine", time: "08:30", area: "Harajuku", note: "Early start keeps the shrine calm and cooler.", href: "https://www.meijijingu.or.jp/en/", booking: "Flexible" },
    { title: "Harajuku / Omotesando / Shibuya", time: "10:30 onward", area: "West Tokyo", note: "Moved off the rainy weekend for lower crowds.", booking: "Flexible" },
    { title: "Shibuya Sky", time: "16:30-17:00", area: "Shibuya", note: "Wait for credible weather before buying; skip if cloudy or rainy.", href: "https://www.shibuya-scramble-square.com/sky/", booking: "Weather" },
  ],
  "2026-09-04": [
    { title: "Slow Ginza morning", time: "Morning", area: "Ginza", note: "Keep the last day close to the hotel and luggage.", booking: "Flexible" },
    { title: "Hotel luggage pickup", time: "After lunch", area: "Shintomicho", note: "Leave for Haneda around 14:00.", booking: "Flexible" },
    { title: "Depart Haneda", time: "18:05", area: "HND", note: "Build in airport buffer after lunch.", booking: "Flexible" },
  ],
};

export const restaurantSuggestionSets: RestaurantSuggestionSet[] = [
  { date: "2026-08-27", meal: "Lunch", context: "Optional after landing or if you need food before check-in", options: ginzaRamen },
  { date: "2026-08-27", meal: "Dinner", context: "Easy first-night Japanese near Ginza/Shintomicho", options: [ginzaRamen[1], ginzaRamen[2], ginzaPlus[0]] },
  { date: "2026-08-28", meal: "Lunch", context: "Sit-down backups around Tsukiji/Ginza after grazing", options: [ginzaPlus[2], ginzaRamen[0], ginzaRamen[1]] },
  { date: "2026-08-28", meal: "Dinner", context: "Ginza dinner backups after a light Tsukiji day", options: [ginzaPlus[0], ginzaRamen[2], ginzaPlus[1]] },
  { date: "2026-08-29", meal: "Lunch", context: "Ikebukuro options near Sunshine City", options: ikebukuroLunch },
  { date: "2026-08-29", meal: "Dinner", context: "Casual Ikebukuro dinner options", options: ikebukuroDinner },
  { date: "2026-08-30", meal: "Lunch", context: "Tokyo Station / Nihonbashi family-friendly picks", options: nihonbashi },
  { date: "2026-08-30", meal: "Dinner", context: "Nihonbashi or Tokyo Station dinner backups", options: nihonbashiDinner },
  { date: "2026-08-31", meal: "Lunch", context: "After teamLab before Odaiba", options: toyosuLunch },
  { date: "2026-08-31", meal: "Dinner", context: "Odaiba return-route options toward Ginza/Nihonbashi", options: [nihonbashiDinner[0], ginzaRamen[1], ginzaPlus[0]] },
  { date: "2026-09-01", meal: "Lunch", context: "Asakusa / Skytree / Ryogoku lunch backups", options: asakusaLunch },
  { date: "2026-09-01", meal: "Dinner", context: "Backups around Asakusa/Ryogoku if Hasegawa changes", options: asakusaDinner },
  { date: "2026-09-02", meal: "Lunch", context: "Disney-day family choices", options: disneyFamily },
  { date: "2026-09-02", meal: "Dinner", context: "Disney dinner and resort-hotel backups", options: [disneyFamily[1], disneyFamily[2], disneyFamily[0]] },
  { date: "2026-09-03", meal: "Lunch", context: "Meiji Shrine / Omotesando / Shibuya lunch backups", options: omotesandoLunch },
  { date: "2026-09-03", meal: "Dinner", context: "Family-friendly backups because YAKITORI Moe is adults-only", options: omotesandoDinner },
  { date: "2026-09-04", meal: "Lunch", context: "Final lunch near Ginza before luggage pickup", options: [ginzaPlus[1], ginzaRamen[0], ginzaRamen[1]] },
  { date: "2026-09-04", meal: "Dinner", context: "Pre-flight backups only if you eat before Haneda", options: [ginzaRamen[2], ginzaPlus[0], ginzaRamen[0]] },
];
