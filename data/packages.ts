export type Difficulty =
  | "Easy"
  | "Easy–Moderate"
  | "Moderate"
  | "Challenging"
  | "Expert"
  | "Intermediate"
  | "Beginner"
  | "E-MTB";
export type Category = "trekking" | "mtb";

export interface ItineraryDay {
  day: string;
  name: string;
  altitude: string;
  walk: string;
  accommodation: string;
  description: string;
}

export interface ElevationPoint {
  day: string;
  label: string;
  altitude: number;
}

export interface Package {
  slug: string;
  category: Category;
  name: string;
  tagline: string;
  heroImage: string;
  galleryImages: { src: string; caption: string }[];
  difficulty: Difficulty;
  duration: string;
  durationDays: number;
  maxAltitude: string;
  maxAltitudeM: number;
  distance: string;
  groupSize: string;
  dailyWalk: string;
  priceFrom: number;
  pricePremium?: number;
  priceGold?: number;
  elevationGain: string;
  startEnd: string;
  trailStart: string;
  accommodation: string;
  meals: string;
  guideRatio: string;
  permits: string;
  overview: string[];
  highlights: { title: string; desc: string }[];
  included: string[];
  excluded: string[];
  gear: { category: string; items: string[] }[];
  itinerary: ItineraryDay[];
  elevation: ElevationPoint[];
  bestMonths: { month: string; status: "best" | "ok" | "off" }[];
  mapRoutePoints: {
    name: string;
    altitude: string;
    x: number;
    y: number;
    isHighlight?: boolean;
  }[];
  similarPackages: string[];
}

export const packages: Package[] = [
  // ─────────────────────────────────────────
  // TREKKING
  // ─────────────────────────────────────────
  {
    slug: "everest-base-camp",
    category: "trekking",
    name: "Everest Base Camp",
    tagline:
      "Stand at the foot of the world's highest peak. 14 days through Sherpa culture, ancient monasteries, and glacial valleys — culminating at 5,364m on the Khumbu Glacier.",
    heroImage:
      "https://plus.unsplash.com/premium_photo-1697729944636-0b630fe30ad6?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXZlcmVzdCUyMGJhc2UlMjBjYW1wJTIwdHJla3xlbnwwfHwwfHx8MA%3D%3D",
    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&q=80",
        caption: "Khumbu Valley approach",
      },
      {
        src: "https://images.unsplash.com/photo-1516939884455-1445c8652f83?w=800&q=80",
        caption: "Namche Bazaar, 3,440m",
      },
      {
        src: "https://images.unsplash.com/photo-1526080652727-5b77f74eacd2?w=800&q=80",
        caption: "Tengboche Monastery at dawn",
      },
      {
        src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
        caption: "Himalayan giants from the trail",
      },
      {
        src: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&q=80",
        caption: "Prayer flags, Everest Base Camp",
      },
    ],
    difficulty: "Challenging",
    duration: "14 Days",
    durationDays: 14,
    maxAltitude: "5,545m",
    maxAltitudeM: 5545,
    distance: "130 km",
    groupSize: "Max 12",
    dailyWalk: "5–7 hrs",
    priceFrom: 1599,
    pricePremium: 2100,
    priceGold: 2800,
    elevationGain: "+4,685m",
    startEnd: "Kathmandu",
    trailStart: "Lukla (2,860m)",
    accommodation: "Teahouses / Lodges",
    meals: "Breakfast + Dinner",
    guideRatio: "1:6 max",
    permits: "Sagarmatha NP + TIMS",
    overview: [
      "No trekking destination on Earth carries the mythic weight of **Everest Base Camp**. The journey begins with a heart-stopping mountain flight into Lukla airport (2,860m) and builds steadily through the legendary Sherpa villages of **Namche Bazaar, Tengboche**, and Dingboche before reaching the base of the world's highest peak at 5,364m.",
      "What most itineraries don't tell you: **Kala Patthar (5,545m)**, not EBC itself, is where you get the finest views of Everest's summit. EBC at 5,364m is a rocky glacier — impressive for its history but photographically dominated by Kala Patthar's panorama.",
      "Our route is paced specifically for acclimatisation, with strategically placed rest days in Namche and Dingboche. Every detail — from teahouse selection to guide-to-trekker ratios — reflects 18 years of running this route. **Your guide has walked this trail hundreds of times.** It shows.",
    ],
    highlights: [
      {
        title: "Thrilling Lukla Flight",
        desc: "One of the world's most spectacular mountain approaches — a 35-minute flight over the Himalayas into a cliff-edge runway.",
      },
      {
        title: "Namche Bazaar",
        desc: "The Sherpa capital at 3,440m. Rest day for acclimatisation, the famous Saturday market, Everest panorama viewpoint, and the Edmund Hillary museum.",
      },
      {
        title: "Tengboche Monastery",
        desc: "The most atmospheric monastery in the Khumbu, framed by Ama Dablam, Everest, and Lhotse. Morning puja ceremony if timing is right.",
      },
      {
        title: "Khumbu Glacier Walk",
        desc: "Trek directly on Nepal's longest glacier, crossing crevasses on ladders, surrounded by towering ice seracs.",
      },
      {
        title: "Everest Base Camp (5,364m)",
        desc: "Stand where mountaineering legends began their ascent. Prayer flags, the Khumbu Icefall, and 8,000m giants surround you.",
      },
      {
        title: "Sunrise from Kala Patthar",
        desc: "5:00 AM. The sky turns gold behind Everest's summit pyramid. No photo does it justice. This is the moment people fly halfway around the world for.",
      },
      {
        title: "Sherpa Culture & Homestays",
        desc: "Evening chai with Sherpa families, mani walls, prayer wheels, and festivals. Our guides are Namche-born — the cultural depth is real.",
      },
      {
        title: "Ama Dablam Views",
        desc: "Considered the world's most beautiful mountain by many alpinists. Its dramatic needle towers over the trail from Namche to Dingboche.",
      },
    ],
    included: [
      "All accommodation — teahouses & lodges throughout",
      "All meals: breakfast and dinner on the trail",
      "Kathmandu–Lukla–Kathmandu flights (both ways)",
      "Licensed, English-speaking Sherpa guide",
      "Porter (1 per 2 trekkers, 15kg limit)",
      "All required permits (Sagarmatha NP + Khumbu)",
      "TIMS trekking card",
      "First aid kit + pulse oximeter + altitude medication",
      "Pre-trek briefing in Kathmandu",
      "Airport transfers in Kathmandu",
      "Rad Travels trek duffel bag",
    ],
    excluded: [
      "International flights to/from Kathmandu",
      "Nepal visa (approx. $50 on arrival)",
      "Travel & rescue insurance (mandatory)",
      "Lunches on the trail",
      "Hot showers, battery charging, wi-fi (extra at teahouses)",
      "Personal gear and equipment",
      "Tips for guides and porters (customary)",
      "Helicopter evacuation (covered by insurance)",
    ],
    gear: [
      {
        category: "🧥 Clothing",
        items: [
          "Down jacket (-15°C or warmer)",
          "Waterproof outer shell",
          "Thermal base layers ×3",
          "Fleece mid-layer",
          "Trekking pants ×2",
          "Warm hat + balaclava",
          "Buff / neck gaiter",
          "Waterproof gloves",
        ],
      },
      {
        category: "👟 Footwear",
        items: [
          "Waterproof trekking boots (broken in!)",
          "Camp sandals / crocs",
          "Wool socks ×4–5",
          "Gaiters (optional)",
          "Trekking poles (strongly advised)",
        ],
      },
      {
        category: "🎒 Essentials",
        items: [
          "Daypack 25–35L",
          "Sleeping bag liner",
          "Headlamp + spare batteries",
          "Sunscreen SPF 50+",
          "Glacier sunglasses (UV400)",
          "Water bottles + purification",
          "Blister kit, personal meds",
          "Cash USD / NPR",
        ],
      },
    ],
    itinerary: [
      {
        day: "Day 1",
        name: "Fly Kathmandu → Lukla → Phakding",
        altitude: "2,610m",
        walk: "3h / 8km",
        accommodation: "Teahouse",
        description:
          "**The adventure begins with a bang.** A 35-minute mountain flight over spectacular Himalayan terrain lands you at Lukla's famous cliff-edge airport. Trek down through pine and rhododendron forest along the Dudh Kosi river to reach the small village of Phakding for your first night.",
      },
      {
        day: "Day 2",
        name: "Phakding → Namche Bazaar",
        altitude: "3,440m",
        walk: "5h / 11km",
        accommodation: "Guesthouse",
        description:
          "The trail climbs through dense forest, crossing the Dudh Kosi on several suspension bridges. The final ascent to Namche is steep but rewarded with your first **clear views of Everest and Ama Dablam**. Namche Bazaar is the gateway to the Khumbu — a colourful Sherpa town built into a horseshoe-shaped bowl.",
      },
      {
        day: "Day 3",
        name: "Namche Bazaar — Acclimatisation Day",
        altitude: "3,440m",
        walk: "3h hike + rest",
        accommodation: "Guesthouse",
        description:
          "A crucial rest day. We hike up to the **Everest viewpoint** (3,880m) for your first close look at the great peak, then back down. Visit the Sherpa Culture Museum and the Saturday market if your timing is right. This day is medically important — don't skip it.",
      },
      {
        day: "Day 4",
        name: "Namche → Tengboche",
        altitude: "3,860m",
        walk: "5h / 9km",
        accommodation: "Lodge",
        description:
          "One of the trail's finest days. Contour above the valley through forests of birch and rhododendron, with **constant views of Ama Dablam's dramatic spire**. Tengboche's hilltop monastery — the largest in the Khumbu — sits in one of the most spectacularly situated spots in the Himalayas.",
      },
      {
        day: "Day 5",
        name: "Tengboche → Dingboche",
        altitude: "4,360m",
        walk: "5h / 11km",
        accommodation: "Teahouse",
        description:
          "Descend through the Imja Khola valley and climb into the wider upper Khumbu. The landscape becomes starker and more alpine. Dingboche sits on an open plateau with **commanding views of Lhotse, Island Peak, and Makalu**.",
      },
      {
        day: "Day 6",
        name: "Dingboche — Acclimatisation Day",
        altitude: "4,360m",
        walk: "4h hike + rest",
        accommodation: "Teahouse",
        description:
          "Acclimatisation hike to the Nangkartshang Peak ridge (5,050m). **360° views of four 8,000m peaks** — Everest, Lhotse, Makalu and Cho Oyu — on a clear day. Rest afternoon, large meal, early bed.",
      },
      {
        day: "Day 7",
        name: "Dingboche → Lobuche",
        altitude: "4,940m",
        walk: "5h / 10km",
        accommodation: "Teahouse",
        description:
          "The trail climbs steadily through the Khumbu Valley, passing the **Thukla memorial stupa** honouring climbers lost on Everest. Views of the Khumbu Glacier emerge as you approach Lobuche.",
      },
      {
        day: "Day 8",
        name: "Lobuche → Gorak Shep → EBC",
        altitude: "5,364m",
        walk: "7h / 14km",
        accommodation: "Teahouse",
        description:
          "The big day. A challenging morning walk to **Gorak Shep**, drop your bags, and push on to Everest Base Camp. Walk on the Khumbu Glacier, surrounded by the Khumbu Icefall and the hulking mass of Nuptse. Return to Gorak Shep for the night.",
      },
      {
        day: "Day 9",
        name: "Kala Patthar Sunrise → Pheriche",
        altitude: "4,280m",
        walk: "7h",
        accommodation: "Teahouse",
        description:
          "Wake at 4:30 AM. Headlamps on. Climb Kala Patthar as the sky turns to fire — **the finest view of Everest's summit on the entire trek**. Descend all the way to Pheriche, enjoying legs that finally feel the elevation getting easier.",
      },
      {
        day: "Day 10",
        name: "Pheriche → Namche Bazaar",
        altitude: "3,440m",
        walk: "6h / 16km",
        accommodation: "Guesthouse",
        description:
          "A long descent day back to Namche. The change in landscape as you drop altitude is remarkable — from arid scree to lush pine forest in a single afternoon. **Celebrate tonight in Namche** with a well-earned Everest beer.",
      },
      {
        day: "Day 11",
        name: "Namche → Lukla",
        altitude: "2,860m",
        walk: "6h / 19km",
        accommodation: "Teahouse",
        description:
          "The final walking day. The trail back to Lukla is familiar but still beautiful. Last suspension bridges, last views of the peaks, last teahouse dal bhat. **Pack bags for tomorrow's flight** and share stories over dinner.",
      },
      {
        day: "Day 12",
        name: "Fly Lukla → Kathmandu",
        altitude: "1,400m",
        walk: "Flight + transfer",
        accommodation: "Hotel",
        description:
          "Early morning flight back to Kathmandu. Arrive by late morning. **Celebration dinner** in Thamel this evening — our treat. Transfer to your hotel included.",
      },
      {
        day: "Day 13",
        name: "Free Day in Kathmandu",
        altitude: "1,400m",
        walk: "Flexible",
        accommodation: "Hotel",
        description:
          "A buffer day for weather delays and optional sightseeing. Visit Boudhanath Stupa, Pashupatinath, or Swayambhunath. **Trek certificate and debrief** with your guide this morning.",
      },
      {
        day: "Day 14",
        name: "Departure Day",
        altitude: "1,400m",
        walk: "Airport transfer",
        accommodation: "—",
        description:
          "Rad Travels arranges your airport transfer. You leave Nepal changed — **14 days, 130km, 5,545 metres, and memories for life.**",
      },
    ],
    elevation: [
      { day: "D1", label: "Phakding", altitude: 2610 },
      { day: "D2", label: "Namche", altitude: 3440 },
      { day: "D3", label: "Namche REST", altitude: 3440 },
      { day: "D4", label: "Tengboche", altitude: 3860 },
      { day: "D5", label: "Dingboche", altitude: 4360 },
      { day: "D6", label: "Dingboche REST", altitude: 4360 },
      { day: "D7", label: "Lobuche", altitude: 4940 },
      { day: "D8", label: "Gorak Shep", altitude: 5160 },
      { day: "D9", label: "Kala Patthar", altitude: 5545 },
      { day: "D10", label: "Pheriche", altitude: 4280 },
      { day: "D11", label: "Namche", altitude: 3440 },
      { day: "D12", label: "Lukla", altitude: 2860 },
      { day: "D13", label: "Kathmandu", altitude: 1400 },
      { day: "D14", label: "Departure", altitude: 1400 },
    ],
    bestMonths: [
      { month: "Jan", status: "off" },
      { month: "Feb", status: "off" },
      { month: "Mar", status: "best" },
      { month: "Apr", status: "best" },
      { month: "May", status: "best" },
      { month: "Jun", status: "off" },
      { month: "Jul", status: "off" },
      { month: "Aug", status: "off" },
      { month: "Sep", status: "ok" },
      { month: "Oct", status: "best" },
      { month: "Nov", status: "best" },
      { month: "Dec", status: "off" },
    ],
    mapRoutePoints: [
      { name: "Lukla", altitude: "2,860m", x: 80, y: 230 },
      { name: "Phakding", altitude: "2,610m", x: 150, y: 245 },
      { name: "Namche", altitude: "3,440m", x: 210, y: 200 },
      { name: "Tengboche", altitude: "3,860m", x: 280, y: 175 },
      { name: "Dingboche", altitude: "4,360m", x: 340, y: 148 },
      { name: "Lobuche", altitude: "4,940m", x: 390, y: 118 },
      { name: "Gorak Shep", altitude: "5,160m", x: 430, y: 95 },
      { name: "EBC", altitude: "5,364m", x: 460, y: 75, isHighlight: true },
    ],
    similarPackages: [
      "annapurna-circuit",
      "manaslu-circuit",
      "upper-mustang-mtb",
    ],
  },

  // ─── ANNAPURNA CIRCUIT ───
  {
    slug: "annapurna-circuit",
    category: "trekking",
    name: "Annapurna Circuit",
    tagline:
      "Nepal's most iconic loop. Cross Thorong La Pass at 5,416m, soak in Tatopani's hot springs, and walk through the apple orchards of Marpha with three 8,000m peaks on the horizon.",
    heroImage:
      "https://www.muchbetteradventures.com/magazine/content/images/2025/10/Annapurna-Circuit-6-1600x1067--1-.jpeg",
    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=1200&q=80",
        caption: "Annapurna massif at sunrise",
      },
      {
        src: "https://images.unsplash.com/photo-1565073624497-7144969f5c9b?w=800&q=80",
        caption: "Thorong La Pass, 5,416m",
      },
      {
        src: "https://images.unsplash.com/photo-1553073520-80b5ad5ec870?w=800&q=80",
        caption: "Marpha village, Lower Mustang",
      },
      {
        src: "https://images.unsplash.com/photo-1598948485421-1c5b9d93fd13?w=800&q=80",
        caption: "Manang valley teahouse",
      },
      {
        src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
        caption: "Dhaulagiri from the circuit trail",
      },
    ],
    difficulty: "Moderate",
    duration: "16 Days",
    durationDays: 16,
    maxAltitude: "5,416m",
    maxAltitudeM: 5416,
    distance: "160–230 km",
    groupSize: "Max 14",
    dailyWalk: "5–8 hrs",
    priceFrom: 1200,
    pricePremium: 1700,
    priceGold: 2300,
    elevationGain: "+5,300m",
    startEnd: "Kathmandu / Pokhara",
    trailStart: "Besisahar (760m)",
    accommodation: "Teahouses / Guesthouses",
    meals: "Breakfast + Dinner",
    guideRatio: "1:7 max",
    permits: "ACAP + TIMS",
    overview: [
      "The **Annapurna Circuit** is one of the world's greatest long-distance treks, encircling the entire Annapurna massif through an astonishing diversity of landscapes — from subtropical lowlands and bamboo forests to high-altitude desert and the wind-scoured plateau of Mustang.",
      "The centerpiece is the **Thorong La Pass at 5,416m**, a gruelling but unforgettable crossing that divides the lush Marsyangdi valley from the stark Tibetan-influenced world of Upper Mustang. Most trekkers cross before dawn to avoid afternoon winds.",
      "The circuit rewards patience — Manang's cows, Marpha's brandy-soaked apple orchards, Tatopani's geothermal hot springs, and the sheer scale of **Dhaulagiri (8,167m) and Annapurna I (8,091m)** dominating the skyline throughout.",
    ],
    highlights: [
      {
        title: "Thorong La Pass (5,416m)",
        desc: "Nepal's most famous high pass. A long, cold pre-dawn start rewards you with one of the great mountain crossing experiences — and a dramatic descent to Muktinath.",
      },
      {
        title: "Muktinath Temple",
        desc: "Sacred to both Hindus and Buddhists, this ancient temple at 3,800m is one of Nepal's most revered pilgrimage sites. The eternal flame burning on water is genuinely eerie.",
      },
      {
        title: "Marpha & Apple Orchards",
        desc: "The most picturesque village in Mustang — whitewashed walls, apple trees, and the world's best local apple brandy. Allow time to wander.",
      },
      {
        title: "Tatopani Hot Springs",
        desc: "Natural geothermal springs on the trail. After crossing Thorong La, there is nothing — nothing — more satisfying than sliding into hot water with Annapurna views.",
      },
      {
        title: "Three 8,000m Peaks",
        desc: "Dhaulagiri, Manaslu, and Annapurna I are all visible from the trail at various points. The circuit crosses between two entirely different Nepal mountain worlds.",
      },
      {
        title: "Poon Hill Optional",
        desc: "Many trekkers add the classic Poon Hill sunrise detour at the end of the circuit — adding 2 days and the most photographed Himalayan view in existence.",
      },
      {
        title: "Upper Mustang Transition",
        desc: "Crossing Thorong La is like stepping through a portal — from lush green Marsyangdi to the ochre, wind-carved canyon world of Upper Mustang.",
      },
      {
        title: "Manang Acclimatisation",
        desc: "Two nights in charming Manang village (3,500m) with side hikes to Gangapurna glacier lake and Ice Lake (4,600m).",
      },
    ],
    included: [
      "All teahouse accommodation throughout",
      "Breakfast and dinner daily on the trail",
      "Licensed English-speaking guide",
      "Porter (1 per 2 trekkers)",
      "ACAP permit + TIMS card",
      "Kathmandu/Pokhara airport transfers",
      "First aid kit + altitude medication",
      "Pre-trek briefing and route map",
    ],
    excluded: [
      "International flights to Nepal",
      "Nepal visa (~$50)",
      "Travel & rescue insurance (required)",
      "Lunches and personal drinks",
      "Hot showers and wifi at teahouses (paid extra)",
      "Tips for guides and porters",
      "Personal trekking gear",
    ],
    gear: [
      {
        category: "🧥 Clothing",
        items: [
          "Down jacket",
          "Waterproof shell",
          "Thermal layers ×3",
          "Fleece mid-layer",
          "Warm hat & gloves",
          "Sunhat for lower valleys",
        ],
      },
      {
        category: "👟 Footwear",
        items: [
          "Broken-in waterproof boots",
          "Sandals for camp",
          "Wool socks ×4",
          "Trekking poles",
        ],
      },
      {
        category: "🎒 Essentials",
        items: [
          "Daypack 28–35L",
          "Sleeping bag liner",
          "Sunscreen SPF 50+",
          "Glacier sunglasses",
          "Water purification",
          "Cash NPR/USD",
        ],
      },
    ],
    itinerary: [
      {
        day: "Day 1",
        name: "Kathmandu → Besisahar → Bulbule",
        altitude: "840m",
        walk: "Drive + 2h walk",
        accommodation: "Guesthouse",
        description:
          "Drive from Kathmandu to Besisahar (approx. 7 hours) through rolling green hills. Begin the trek with a short walk to Bulbule alongside the Marsyangdi river.",
      },
      {
        day: "Day 2",
        name: "Bulbule → Jagat",
        altitude: "1,300m",
        walk: "6h / 20km",
        accommodation: "Teahouse",
        description:
          "The trail winds through Gurung villages, terraced rice fields, and through the dramatic Marsyangdi gorge. Waterfalls cascade off the canyon walls on either side.",
      },
      {
        day: "Day 3",
        name: "Jagat → Dharapani",
        altitude: "1,860m",
        walk: "6h / 19km",
        accommodation: "Teahouse",
        description:
          "**Enter the Manaslu Conservation Area.** The valley narrows dramatically, the vegetation becomes denser, and the first Tibetan-style villages appear. Superb views of Manaslu (8,163m) begin.",
      },
      {
        day: "Day 4",
        name: "Dharapani → Chame",
        altitude: "2,670m",
        walk: "5h / 18km",
        accommodation: "Guesthouse",
        description:
          "Chame is the administrative centre of Manang district — the first sizeable town on the trek. Hot springs nearby and the first jaw-dropping close-up views of **Annapurna II (7,937m)**.",
      },
      {
        day: "Day 5",
        name: "Chame → Pisang",
        altitude: "3,200m",
        walk: "5h / 14km",
        accommodation: "Lodge",
        description:
          "The route splits at Pisang — Upper Pisang is the more scenic high route recommended for acclimatisation. **Spectacular views of Annapurna III and Gangapurna** above the village.",
      },
      {
        day: "Day 6",
        name: "Pisang → Manang",
        altitude: "3,500m",
        walk: "5h / 16km",
        accommodation: "Guesthouse",
        description:
          "Trek through Humde (altitude 3,325m), one of Nepal's most remote airstrips, and up to **Manang — the last major village before Thorong La**. The landscape shifts dramatically to an arid Tibetan plateau.",
      },
      {
        day: "Day 7",
        name: "Manang — Acclimatisation Day",
        altitude: "3,500m",
        walk: "Hike to 4,600m",
        accommodation: "Guesthouse",
        description:
          "Rest day in Manang with an acclimatisation hike to **Ice Lake (4,600m)** — one of the most stunning viewpoints on the entire circuit, looking directly at Gangapurna, Annapurna III, and Tilicho Peak.",
      },
      {
        day: "Day 8",
        name: "Manang → Yak Kharka",
        altitude: "4,018m",
        walk: "4h / 10km",
        accommodation: "Teahouse",
        description:
          "A short but important ascent day. The trail is barren and windy, with only yaks for company. **Altitude awareness is critical here.** Walk slowly, drink lots of water, and eat well.",
      },
      {
        day: "Day 9",
        name: "Yak Kharka → Thorong Phedi",
        altitude: "4,450m",
        walk: "3h / 6km",
        accommodation: "Teahouse",
        description:
          "Short walk to the base camp for the pass crossing. **Thorong Phedi High Camp** (4,925m) is an option for shorter next-day ascent. Early dinner and bed by 8 PM — tomorrow starts at 3 AM.",
      },
      {
        day: "Day 10",
        name: "Thorong La Pass → Muktinath",
        altitude: "3,800m",
        walk: "8h / 16km",
        accommodation: "Lodge",
        description:
          "**The defining day.** Pre-dawn start in the cold and dark, climbing steeply for 3–4 hours to Thorong La (5,416m). Flags, views, altitude euphoria. Then a long descent through rocky terrain to Muktinath and its sacred temple.",
      },
      {
        day: "Day 11",
        name: "Muktinath → Marpha",
        altitude: "2,670m",
        walk: "5h / 22km",
        accommodation: "Lodge",
        description:
          "Descend through the stunning Kaligandaki Gorge — the world's deepest valley — through Kagbeni and Jomsom. Arrive at **Marpha, the apple capital of Nepal**, for brandy, cider, and the best dal bhat of the trip.",
      },
      {
        day: "Day 12",
        name: "Marpha → Tatopani",
        altitude: "1,190m",
        walk: "6h / 28km",
        accommodation: "Lodge",
        description:
          "A long descending day through increasingly lush vegetation. Arrive in **Tatopani** — meaning 'hot water' in Nepali — and spend the evening soaking in geothermal pools with Annapurna South above.",
      },
      {
        day: "Day 13",
        name: "Tatopani → Ghorepani",
        altitude: "2,860m",
        walk: "7h / 14km",
        accommodation: "Teahouse",
        description:
          "A sustained climb back into rhododendron forest. **Ghorepani** is the gateway to Poon Hill — the trail here is alive with birdsong, prayer flags, and the scent of rhododendron blossom in spring.",
      },
      {
        day: "Day 14",
        name: "Poon Hill Sunrise → Nayapul",
        altitude: "1,070m",
        walk: "6h + sunrise",
        accommodation: "Lodge",
        description:
          "4:30 AM wake-up for the famous **Poon Hill sunrise** (3,210m) — arguably Nepal's most photographed view. Then descend all the way to Nayapul for a drive back to Pokhara.",
      },
      {
        day: "Day 15",
        name: "Drive Pokhara → Kathmandu",
        altitude: "1,400m",
        walk: "Drive or flight",
        accommodation: "Hotel",
        description:
          "Return to Kathmandu by tourist bus (7 hours, scenic) or 25-minute domestic flight. **Celebration dinner** this evening in Thamel — trek certificates presented.",
      },
      {
        day: "Day 16",
        name: "Departure Day",
        altitude: "1,400m",
        walk: "Airport transfer",
        accommodation: "—",
        description:
          "Airport transfer included. You've completed one of the world's great treks — **16 days, 160–230km, 5,416 metres, two entirely different Nepals.**",
      },
    ],
    elevation: [
      { day: "D1", label: "Bulbule", altitude: 840 },
      { day: "D2", label: "Jagat", altitude: 1300 },
      { day: "D3", label: "Dharapani", altitude: 1860 },
      { day: "D4", label: "Chame", altitude: 2670 },
      { day: "D5", label: "Pisang", altitude: 3200 },
      { day: "D6", label: "Manang", altitude: 3500 },
      { day: "D7", label: "Manang REST", altitude: 3500 },
      { day: "D8", label: "Yak Kharka", altitude: 4018 },
      { day: "D9", label: "Thorong Phedi", altitude: 4450 },
      { day: "D10", label: "Thorong La", altitude: 5416 },
      { day: "D11", label: "Marpha", altitude: 2670 },
      { day: "D12", label: "Tatopani", altitude: 1190 },
      { day: "D13", label: "Ghorepani", altitude: 2860 },
      { day: "D14", label: "Poon Hill", altitude: 3210 },
      { day: "D15", label: "Pokhara", altitude: 827 },
      { day: "D16", label: "Kathmandu", altitude: 1400 },
    ],
    bestMonths: [
      { month: "Jan", status: "off" },
      { month: "Feb", status: "ok" },
      { month: "Mar", status: "best" },
      { month: "Apr", status: "best" },
      { month: "May", status: "best" },
      { month: "Jun", status: "off" },
      { month: "Jul", status: "off" },
      { month: "Aug", status: "off" },
      { month: "Sep", status: "ok" },
      { month: "Oct", status: "best" },
      { month: "Nov", status: "best" },
      { month: "Dec", status: "ok" },
    ],
    mapRoutePoints: [
      { name: "Besisahar", altitude: "760m", x: 60, y: 250 },
      { name: "Chame", altitude: "2,670m", x: 140, y: 210 },
      { name: "Manang", altitude: "3,500m", x: 240, y: 175 },
      {
        name: "Thorong La",
        altitude: "5,416m",
        x: 320,
        y: 80,
        isHighlight: true,
      },
      { name: "Muktinath", altitude: "3,800m", x: 390, y: 155 },
      { name: "Marpha", altitude: "2,670m", x: 420, y: 205 },
      { name: "Tatopani", altitude: "1,190m", x: 460, y: 245 },
      { name: "Ghorepani", altitude: "2,860m", x: 410, y: 190 },
    ],
    similarPackages: [
      "everest-base-camp",
      "manaslu-circuit",
      "annapurna-base-camp",
    ],
  },

  // ─── MANASLU CIRCUIT ───
  {
    slug: "manaslu-circuit",
    category: "trekking",
    name: "Manaslu Circuit",
    tagline:
      "Remote, raw, spectacular. Circle the 8th-highest peak on Earth through ancient Buddhist villages, rhododendron forests, and the dramatic Larkya La Pass at 5,160m.",
    heroImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUMTp7q2fUgkg_AdAzINzUjKXkS5FHedxMYxcBbiPK9w&s=10",
    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=1200&q=80",
        caption: "Manaslu massif from the trail",
      },
      {
        src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
        caption: "High camp before Larkya La",
      },
      {
        src: "https://images.unsplash.com/photo-1526080652727-5b77f74eacd2?w=800&q=80",
        caption: "Ancient monastery, Nubri valley",
      },
      {
        src: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&q=80",
        caption: "Prayer flags above Samagaon",
      },
      {
        src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
        caption: "Larkya La Pass, 5,160m",
      },
    ],
    difficulty: "Challenging",
    duration: "14 Days",
    durationDays: 14,
    maxAltitude: "5,160m",
    maxAltitudeM: 5160,
    distance: "177 km",
    groupSize: "Max 10",
    dailyWalk: "6–8 hrs",
    priceFrom: 1599,
    pricePremium: 2200,
    priceGold: 3000,
    elevationGain: "+5,600m",
    startEnd: "Kathmandu",
    trailStart: "Soti Khola (700m)",
    accommodation: "Basic Teahouses",
    meals: "Breakfast + Dinner",
    guideRatio: "1:5 max",
    permits: "Manaslu Restricted Area Permit + MCAP + ACAP + TIMS",
    overview: [
      "Unlike the more commercialised Everest and Annapurna routes, **the Manaslu Circuit remains authentically wild**. Circumnavigating Mt. Manaslu (8,163m) — the world's 8th highest peak — through the Nubri and Tsum valleys, this trek feels like a journey back decades in time.",
      "The route traverses everything from the lush subtropical lowlands of Soti Khola to **rhododendron forests bursting with colour in spring**, high-altitude meadows, and the stark rocky world approaching Larkya La (5,160m). Fewer than 10% of Nepal trekkers do this circuit.",
      "As a **restricted area trek**, special permits are required and trekkers must be accompanied by a licensed guide at all times. This has preserved its extraordinary cultural integrity — the Tibetan-influenced villages of Samagaon and Samdo feel genuinely untouched.",
    ],
    highlights: [
      {
        title: "Larkya La Pass (5,160m)",
        desc: "The circuit's high point and greatest challenge. A long, cold pre-dawn crossing with views of Manaslu, Cheo Himal, and Hinang Chuli filling the horizon.",
      },
      {
        title: "Birendra Lake",
        desc: "A stunning glacial lake at 3,500m in the shadow of Manaslu, created by a 1998 glacial lake outburst flood. One of Nepal's most dramatic landscapes.",
      },
      {
        title: "Samagaon Village",
        desc: "A genuinely Tibetan village at 3,530m with an important gompa, yak herders, and close-up views of Manaslu's south face. Our acclimatisation base.",
      },
      {
        title: "Restricted Area Culture",
        desc: "The permit system has protected Nubri valley's Tibetan Buddhist culture from mass tourism. The religious art, dress, and daily life here are extraordinary.",
      },
      {
        title: "Rhododendron Forests",
        desc: "In spring (March–April), the lower sections of the trail pass through some of Nepal's finest rhododendron forests — crimson, pink, and white blossoms for kilometres.",
      },
      {
        title: "Crossing Into Annapurna",
        desc: "The Manaslu and Annapurna Conservation Areas connect at Dharapani, offering the option to extend directly onto the Annapurna Circuit — two great treks, one epic journey.",
      },
    ],
    included: [
      "All teahouse accommodation on the trail",
      "Breakfast and dinner daily",
      "Licensed guide (mandatory for restricted area)",
      "Porter service",
      "All required permits: Manaslu RAP, MCAP, ACAP, TIMS",
      "First aid kit + altitude meds",
      "Kathmandu transfers",
      "Pre-trek briefing",
    ],
    excluded: [
      "International flights",
      "Nepal visa",
      "Travel & rescue insurance (mandatory)",
      "Lunches on the trail",
      "Teahouse extras (hot shower, wifi, charging)",
      "Tips for guides and porters",
      "Personal gear",
    ],
    gear: [
      {
        category: "🧥 Clothing",
        items: [
          "Heavy down jacket",
          "Waterproof shell",
          "Thermal layers ×4",
          "Fleece",
          "Warm gloves + balaclava",
          "Trekking pants ×2",
        ],
      },
      {
        category: "👟 Footwear",
        items: [
          "High-ankle waterproof boots",
          "Gaiters (useful)",
          "Warm socks ×5",
          "Trekking poles (essential)",
        ],
      },
      {
        category: "🎒 Essentials",
        items: [
          "Daypack 30–35L",
          "Sleeping bag -10°C",
          "Headlamp",
          "SPF 60 sunscreen",
          "Glacier glasses",
          "Water purification",
          "Cash USD/NPR",
        ],
      },
    ],
    itinerary: [
      {
        day: "Day 1",
        name: "Kathmandu → Soti Khola Drive → Maccha Khola",
        altitude: "930m",
        walk: "Drive + 2h",
        accommodation: "Teahouse",
        description:
          "An early drive from Kathmandu (approx. 8 hours) to **Soti Khola**, the official start of the Manaslu Circuit trek. A short afternoon walk along the Budhi Gandaki river to Maccha Khola.",
      },
      {
        day: "Day 2",
        name: "Maccha Khola → Jagat",
        altitude: "1,340m",
        walk: "6h / 22km",
        accommodation: "Teahouse",
        description:
          "The trail is demanding from day one — river crossings, rocky sections, and dense jungle. **Permit checkpoint at Jagat** marks the boundary of the Manaslu restricted zone.",
      },
      {
        day: "Day 3",
        name: "Jagat → Deng",
        altitude: "1,800m",
        walk: "6h / 18km",
        accommodation: "Teahouse",
        description:
          "Deep in the Budhi Gandaki gorge — some sections require careful footwork on narrow cliff paths. The first **Tibetan-style mani walls** appear as you climb towards the Tibetan plateau influence zone.",
      },
      {
        day: "Day 4",
        name: "Deng → Namrung",
        altitude: "2,630m",
        walk: "6h / 16km",
        accommodation: "Teahouse",
        description:
          "Altitude begins in earnest. The vegetation shifts from subtropical to temperate forest — oak, maple, and the first rhododendrons. **Views of Sringi Himal** open as you gain height.",
      },
      {
        day: "Day 5",
        name: "Namrung → Samagaon",
        altitude: "3,530m",
        walk: "7h / 20km",
        accommodation: "Lodge",
        description:
          "A long day through **Lho village** (3,180m), one of the most scenic on the circuit, with Manaslu's massive south face dominating the view. Samagaon is a key acclimatisation stop — the gompa here is 400 years old.",
      },
      {
        day: "Day 6",
        name: "Samagaon — Acclimatisation & Birendra Lake",
        altitude: "3,530m",
        walk: "5h hike",
        accommodation: "Lodge",
        description:
          "Hike up to **Birendra Tal** (3,500m) — a stunning glacial lake created by an ice avalanche from Manaslu. Views directly up to the mountain's base camp route. Return to Samagaon for the night.",
      },
      {
        day: "Day 7",
        name: "Samagaon → Samdo",
        altitude: "3,860m",
        walk: "4h / 10km",
        accommodation: "Teahouse",
        description:
          "A short but important altitude gain day. **Samdo** sits on the Tibetan border and is one of the most authentically Tibetan villages on the entire circuit. Excellent close-up views of Manaslu North.",
      },
      {
        day: "Day 8",
        name: "Samdo → Dharamsala (Larkya Base Camp)",
        altitude: "4,460m",
        walk: "4h / 12km",
        accommodation: "Basic Shelter",
        description:
          "The final camp before the pass. **Dharamsala** consists of a few basic stone shelters at the base of the Larkya La. Dinner early, sleep by 7 PM — tomorrow starts at 3 AM.",
      },
      {
        day: "Day 9",
        name: "Larkya La → Bimtang",
        altitude: "3,590m",
        walk: "9h / 18km",
        accommodation: "Teahouse",
        description:
          "**The biggest day of the trek.** The pass crossing involves 5+ hours of ascent through snow and scree in the dark, then a long descent. Views from the top — Manaslu, Cheo Himal, Himlung Himal — are absolutely extraordinary.",
      },
      {
        day: "Day 10",
        name: "Bimtang → Dharapani",
        altitude: "1,860m",
        walk: "7h / 22km",
        accommodation: "Guesthouse",
        description:
          "Descend through increasingly lush forest, leaving the restricted zone behind. **Dharapani** is the junction with the Annapurna Circuit — the transition between two entirely different trekking worlds.",
      },
      {
        day: "Day 11",
        name: "Dharapani → Besisahar → Drive to Kathmandu",
        altitude: "760m",
        walk: "3h + drive",
        accommodation: "Hotel",
        description:
          "Short walk down to **Besisahar** for the drive back to Kathmandu (approx. 5 hours). Arrive in Kathmandu for a well-earned rest, hot shower, and celebration dinner.",
      },
      {
        day: "Day 12",
        name: "Free Day in Kathmandu",
        altitude: "1,400m",
        walk: "Flexible",
        accommodation: "Hotel",
        description:
          "Rest, sightseeing, or equipment shopping in Thamel. **Trek certificate ceremony** and debrief with your guide. Massage strongly recommended.",
      },
      {
        day: "Day 13",
        name: "Free Day / Buffer Day",
        altitude: "1,400m",
        walk: "Flexible",
        accommodation: "Hotel",
        description:
          "Buffer day for any weather or logistical delays on the circuit. Can be used for a day trip to Bhaktapur or Patan — two of the most beautiful medieval cities in Asia.",
      },
      {
        day: "Day 14",
        name: "Departure Day",
        altitude: "1,400m",
        walk: "Airport transfer",
        accommodation: "—",
        description:
          "Airport transfer included. You've completed one of Nepal's last great wilderness circuits — **14 days, 177km, and a mountain kingdom most trekkers will never see.**",
      },
    ],
    elevation: [
      { day: "D1", label: "Maccha Khola", altitude: 930 },
      { day: "D2", label: "Jagat", altitude: 1340 },
      { day: "D3", label: "Deng", altitude: 1800 },
      { day: "D4", label: "Namrung", altitude: 2630 },
      { day: "D5", label: "Samagaon", altitude: 3530 },
      { day: "D6", label: "Birendra Lake", altitude: 3500 },
      { day: "D7", label: "Samdo", altitude: 3860 },
      { day: "D8", label: "Dharamsala", altitude: 4460 },
      { day: "D9", label: "Larkya La", altitude: 5160 },
      { day: "D10", label: "Bimtang", altitude: 3590 },
      { day: "D11", label: "Besisahar", altitude: 760 },
      { day: "D12", label: "Kathmandu", altitude: 1400 },
      { day: "D13", label: "Kathmandu", altitude: 1400 },
      { day: "D14", label: "Departure", altitude: 1400 },
    ],
    bestMonths: [
      { month: "Jan", status: "off" },
      { month: "Feb", status: "off" },
      { month: "Mar", status: "best" },
      { month: "Apr", status: "best" },
      { month: "May", status: "best" },
      { month: "Jun", status: "off" },
      { month: "Jul", status: "off" },
      { month: "Aug", status: "off" },
      { month: "Sep", status: "ok" },
      { month: "Oct", status: "best" },
      { month: "Nov", status: "best" },
      { month: "Dec", status: "off" },
    ],
    mapRoutePoints: [
      { name: "Soti Khola", altitude: "700m", x: 60, y: 260 },
      { name: "Jagat", altitude: "1,340m", x: 130, y: 230 },
      { name: "Namrung", altitude: "2,630m", x: 200, y: 195 },
      { name: "Samagaon", altitude: "3,530m", x: 280, y: 158 },
      { name: "Samdo", altitude: "3,860m", x: 340, y: 140 },
      {
        name: "Larkya La",
        altitude: "5,160m",
        x: 390,
        y: 85,
        isHighlight: true,
      },
      { name: "Bimtang", altitude: "3,590m", x: 450, y: 150 },
      { name: "Dharapani", altitude: "1,860m", x: 520, y: 218 },
    ],
    similarPackages: [
      "everest-base-camp",
      "annapurna-circuit",
      "upper-mustang-mtb",
    ],
  },

  // ─── LANGTANG ───
  {
    slug: "langtang-valley",
    category: "trekking",
    name: "Langtang Valley",
    tagline:
      "The closest Himalayan trek from Kathmandu — dense forest, Tamang culture, and stunning glaciers. Perfect first Himalayan adventure with fewer crowds and raw natural beauty.",
    heroImage:
      "hhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL-goJowVfht30FTpje62ontg-a21mwbbq16daETG1CA&s=10",
    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1565073624497-7144969f5c9b?w=1200&q=80",
        caption: "Langtang Valley from above",
      },
      {
        src: "https://images.unsplash.com/photo-1526080652727-5b77f74eacd2?w=800&q=80",
        caption: "Kyanjin Gompa monastery",
      },
      {
        src: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&q=80",
        caption: "Tserko Ri summit view",
      },
      {
        src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
        caption: "Langtang Lirung from the valley",
      },
      {
        src: "https://images.unsplash.com/photo-1516939884455-1445c8652f83?w=800&q=80",
        caption: "Tamang village on the trail",
      },
    ],
    difficulty: "Easy–Moderate",
    duration: "10 Days",
    durationDays: 10,
    maxAltitude: "4,773m",
    maxAltitudeM: 4773,
    distance: "65 km",
    groupSize: "Max 16",
    dailyWalk: "4–6 hrs",
    priceFrom: 850,
    pricePremium: 1200,
    priceGold: 1700,
    elevationGain: "+3,200m",
    startEnd: "Kathmandu",
    trailStart: "Syabrubesi (1,462m)",
    accommodation: "Teahouses / Lodges",
    meals: "Breakfast + Dinner",
    guideRatio: "1:8 max",
    permits: "Langtang National Park + TIMS",
    overview: [
      "Just 3 hours north of Kathmandu, **Langtang Valley** offers a profoundly Himalayan experience without the crowds or cost of the Everest and Annapurna regions. The valley is nestled against the Tibetan border, hemmed in by the Langtang Himal and Jugal Himal ranges.",
      "The trek has deep emotional resonance — Langtang village was largely destroyed by the 2015 earthquake, and the rebuilt village and memorial stupa are moving testaments to the resilience of the **Tamang people**, whose culture, festivals, and hospitality dominate the lower trail.",
      "The high point — **Tserko Ri (4,773m)** — offers one of the finest panoramas in Nepal: Langtang Lirung (7,246m), Dorje Lakpa, Shishapangma (Tibet), and the entire Langtang chain laid out before you.",
    ],
    highlights: [
      {
        title: "Kyanjin Gompa",
        desc: "The ancient monastery at 3,817m at the head of the valley — the spiritual heart of Langtang. The small cheese factory here is a highlight.",
      },
      {
        title: "Tserko Ri Summit (4,773m)",
        desc: "The optional but unmissable high point. A 3–4 hour climb from Kyanjin rewards with a 360° panorama of Langtang Lirung, Shishapangma, and the entire range.",
      },
      {
        title: "Langtang Village Memorial",
        desc: "The rebuilt village and earthquake memorial are a deeply moving stop. The Tamang community's recovery and resilience is extraordinary.",
      },
      {
        title: "Yak Cheese Factory",
        desc: "Kyanjin is famous for its small cheese factory producing hard mountain cheese. Sampling it here with butter tea is a genuine cultural moment.",
      },
      {
        title: "Tamang Culture",
        desc: "The lower trail passes through Tamang villages — distinct from Sherpa culture in language, dress, and festivals. Our guides are often Tamang themselves.",
      },
      {
        title: "Close to Kathmandu",
        desc: "Just 3 hours by bus to the trailhead — perfect for tight itineraries. Can be done in 8–10 days comfortably.",
      },
    ],
    included: [
      "All teahouse accommodation",
      "Breakfast and dinner daily",
      "Licensed English-speaking guide",
      "Porter (1 per 2 trekkers)",
      "Langtang National Park permit + TIMS",
      "Airport/bus station transfers in Kathmandu",
      "First aid + altitude meds",
    ],
    excluded: [
      "International flights",
      "Nepal visa",
      "Travel & rescue insurance",
      "Lunches on trail",
      "Personal expenses at teahouses",
      "Tips",
      "Personal gear",
    ],
    gear: [
      {
        category: "🧥 Clothing",
        items: [
          "Down jacket",
          "Rain jacket",
          "Thermal base layers ×2",
          "Fleece",
          "Warm hat & gloves",
        ],
      },
      {
        category: "👟 Footwear",
        items: [
          "Waterproof trekking boots",
          "Camp shoes",
          "Wool socks ×3",
          "Trekking poles",
        ],
      },
      {
        category: "🎒 Essentials",
        items: [
          "Daypack 25–30L",
          "Sleeping bag liner",
          "Sunscreen",
          "Sunglasses",
          "Water purification",
          "Cash NPR",
        ],
      },
    ],
    itinerary: [
      {
        day: "Day 1",
        name: "Kathmandu → Syabrubesi",
        altitude: "1,462m",
        walk: "Drive 3–4h",
        accommodation: "Guesthouse",
        description:
          "Early morning drive through the rolling Nepalese countryside to **Syabrubesi** — a charming town on the Bhote Koshi river, gateway to the Langtang valley.",
      },
      {
        day: "Day 2",
        name: "Syabrubesi → Lama Hotel",
        altitude: "2,480m",
        walk: "5h / 11km",
        accommodation: "Teahouse",
        description:
          "Trek through dense forest teeming with birds and monkeys, crossing suspension bridges over the roaring Langtang Khola. **Lama Hotel** is a collection of lodges in a river clearing.",
      },
      {
        day: "Day 3",
        name: "Lama Hotel → Langtang Village",
        altitude: "3,430m",
        walk: "5h / 13km",
        accommodation: "Lodge",
        description:
          "Emerge from the forest into the open Langtang valley. The **rebuilt Langtang village** and its earthquake memorial are a moving stop. Excellent views of Langtang Lirung begin.",
      },
      {
        day: "Day 4",
        name: "Langtang → Kyanjin Gompa",
        altitude: "3,817m",
        walk: "3h / 7km",
        accommodation: "Lodge",
        description:
          "Short walk to **Kyanjin Gompa**, the ancient monastery complex at the head of the valley. Visit the gompa and the famous yak cheese factory. Afternoon hike options available.",
      },
      {
        day: "Day 5",
        name: "Kyanjin — Acclimatisation & Tserko Ri",
        altitude: "4,773m",
        walk: "6h return",
        accommodation: "Lodge",
        description:
          "Summit **Tserko Ri (4,773m)** — a steep 3–4 hour ascent from Kyanjin, rewarded with one of Nepal's finest mountain panoramas. Langtang Lirung, Shishapangma, and the entire chain visible on clear days.",
      },
      {
        day: "Day 6",
        name: "Kyanjin → Lama Hotel",
        altitude: "2,480m",
        walk: "6h / 20km",
        accommodation: "Teahouse",
        description:
          "Begin the descent. The valley views improve as you retrace your steps through the forests. The river crossings feel familiar, the forest a little gentler.",
      },
      {
        day: "Day 7",
        name: "Lama Hotel → Syabrubesi",
        altitude: "1,462m",
        walk: "5h / 11km",
        accommodation: "Guesthouse",
        description:
          "Return to Syabrubesi through the last of the forest. **Hot shower, celebratory meal**, and an early night before the drive back.",
      },
      {
        day: "Day 8",
        name: "Drive Syabrubesi → Kathmandu",
        altitude: "1,400m",
        walk: "Drive",
        accommodation: "Hotel",
        description:
          "Morning drive back to Kathmandu (3–4 hours). Afternoon free for Thamel exploring, souvenir shopping, or rest.",
      },
      {
        day: "Day 9",
        name: "Free Day in Kathmandu",
        altitude: "1,400m",
        walk: "Flexible",
        accommodation: "Hotel",
        description:
          "Optional sightseeing — Boudhanath, Pashupatinath, or Patan Durbar Square. **Trek certificate ceremony** with your guide.",
      },
      {
        day: "Day 10",
        name: "Departure Day",
        altitude: "1,400m",
        walk: "Airport transfer",
        accommodation: "—",
        description:
          "Airport transfer included. **10 days, 65km, and the closest Himalayan wilderness to Kathmandu** — done beautifully.",
      },
    ],
    elevation: [
      { day: "D1", label: "Syabrubesi", altitude: 1462 },
      { day: "D2", label: "Lama Hotel", altitude: 2480 },
      { day: "D3", label: "Langtang", altitude: 3430 },
      { day: "D4", label: "Kyanjin", altitude: 3817 },
      { day: "D5", label: "Tserko Ri", altitude: 4773 },
      { day: "D6", label: "Lama Hotel", altitude: 2480 },
      { day: "D7", label: "Syabrubesi", altitude: 1462 },
      { day: "D8", label: "Kathmandu", altitude: 1400 },
      { day: "D9", label: "Kathmandu", altitude: 1400 },
      { day: "D10", label: "Departure", altitude: 1400 },
    ],
    bestMonths: [
      { month: "Jan", status: "ok" },
      { month: "Feb", status: "ok" },
      { month: "Mar", status: "best" },
      { month: "Apr", status: "best" },
      { month: "May", status: "best" },
      { month: "Jun", status: "off" },
      { month: "Jul", status: "off" },
      { month: "Aug", status: "off" },
      { month: "Sep", status: "ok" },
      { month: "Oct", status: "best" },
      { month: "Nov", status: "best" },
      { month: "Dec", status: "ok" },
    ],
    mapRoutePoints: [
      { name: "Syabrubesi", altitude: "1,462m", x: 80, y: 250 },
      { name: "Lama Hotel", altitude: "2,480m", x: 180, y: 200 },
      { name: "Langtang", altitude: "3,430m", x: 290, y: 155 },
      { name: "Kyanjin Gompa", altitude: "3,817m", x: 380, y: 130 },
      {
        name: "Tserko Ri",
        altitude: "4,773m",
        x: 430,
        y: 80,
        isHighlight: true,
      },
    ],
    similarPackages: [
      "everest-base-camp",
      "annapurna-base-camp",
      "sarangkot-sunrise-ride",
    ],
  },

  // ─── ANNAPURNA BASE CAMP ───
  {
    slug: "annapurna-base-camp",
    category: "trekking",
    name: "Annapurna Base Camp",
    tagline:
      "Step into the sanctuary — a natural amphitheatre of snowy giants. Sunrise painting Annapurna South gold is one of Nepal's most moving moments.",
    heroImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo_7HkwjMACJPREldUjpt59iVCLZmJrPB47nBtynwrpSsajo9KUWhXVFv6&s=10",
    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1598948485421-1c5b9d93fd13?w=1200&q=80",
        caption: "Annapurna Base Camp sanctuary",
      },
      {
        src: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800&q=80",
        caption: "Annapurna South at sunrise",
      },
      {
        src: "https://images.unsplash.com/photo-1553073520-80b5ad5ec870?w=800&q=80",
        caption: "Chhomrong village viewpoint",
      },
      {
        src: "https://images.unsplash.com/photo-1565073624497-7144969f5c9b?w=800&q=80",
        caption: "Modi Khola valley trail",
      },
      {
        src: "https://images.unsplash.com/photo-1526080652727-5b77f74eacd2?w=800&q=80",
        caption: "Machhapuchhre (Fishtail) up close",
      },
    ],
    difficulty: "Moderate",
    duration: "13 Days",
    durationDays: 13,
    maxAltitude: "4,130m",
    maxAltitudeM: 4130,
    distance: "115 km",
    groupSize: "Max 14",
    dailyWalk: "5–7 hrs",
    priceFrom: 900,
    pricePremium: 1350,
    priceGold: 1900,
    elevationGain: "+3,350m",
    startEnd: "Kathmandu / Pokhara",
    trailStart: "Nayapul (1,070m)",
    accommodation: "Teahouses / Lodges",
    meals: "Breakfast + Dinner",
    guideRatio: "1:7 max",
    permits: "ACAP + TIMS",
    overview: [
      "**Annapurna Base Camp (4,130m)** sits in a natural glacier bowl — a 360° amphitheatre of Himalayan peaks that trekkers call 'the sanctuary'. Annapurna South, Hiunchuli, Machhapuchhre, Annapurna I, and Gangapurna surround you completely.",
      "The trail climbs through Gurung and Magar villages, bamboo and rhododendron forest, and the steep walls of the **Modi Khola gorge** before opening dramatically into the sanctuary. The transition from forest to glacier world in a single afternoon is genuinely unforgettable.",
      "At a max altitude of 4,130m, this is one of Nepal's most accessible high-altitude treks — no acclimatisation rest days required, suitable for trekkers with reasonable fitness and no high-altitude experience.",
    ],
    highlights: [
      {
        title: "The Annapurna Sanctuary",
        desc: "A natural glacial bowl entirely encircled by 7,000m+ peaks. The silence, scale, and light in the sanctuary are extraordinary — unlike anywhere else on Earth.",
      },
      {
        title: "Machhapuchhre (Fishtail)",
        desc: "The sacred 'Fishtail Peak' (6,993m) dominates the trail for days. It has never been summited and remains Nepal's most spiritually significant unclimbed mountain.",
      },
      {
        title: "Chhomrong Village",
        desc: "Perched on a spectacular ridgeline at 2,170m, the Gurung village of Chhomrong has the finest viewpoint on the lower trail and excellent teahouses.",
      },
      {
        title: "Sunrise at Base Camp",
        desc: "Wake before dawn in the sanctuary. Watch alpenglow paint Annapurna South and Hiunchuli gold and pink. This is why people come.",
      },
      {
        title: "Modi Khola Gorge",
        desc: "The narrow gorge carved by the Modi river — one of Nepal's most dramatic natural features, with near-vertical 3,000m walls on either side.",
      },
      {
        title: "Rhododendron Season",
        desc: "In spring, the trail from Chhomrong to the sanctuary passes through Nepal's finest rhododendron forest — a tunnel of crimson and white blossoms.",
      },
    ],
    included: [
      "All teahouse accommodation",
      "Breakfast and dinner on the trail",
      "Licensed English-speaking guide",
      "Porter service",
      "ACAP permit + TIMS card",
      "Kathmandu/Pokhara transfers",
      "First aid + altitude meds",
    ],
    excluded: [
      "International flights",
      "Nepal visa",
      "Travel insurance",
      "Lunches",
      "Personal teahouse expenses",
      "Tips",
      "Personal gear",
    ],
    gear: [
      {
        category: "🧥 Clothing",
        items: [
          "Down jacket",
          "Rain jacket",
          "Thermals ×2",
          "Fleece",
          "Warm hat & gloves",
        ],
      },
      {
        category: "👟 Footwear",
        items: [
          "Waterproof boots",
          "Camp shoes",
          "Wool socks ×3–4",
          "Trekking poles",
        ],
      },
      {
        category: "🎒 Essentials",
        items: [
          "Daypack 25–30L",
          "Sleeping bag liner",
          "Sunscreen SPF 50+",
          "Sunglasses",
          "Water purification",
          "Cash NPR",
        ],
      },
    ],
    itinerary: [
      {
        day: "Day 1",
        name: "Fly/Drive to Pokhara",
        altitude: "827m",
        walk: "Transfer",
        accommodation: "Hotel",
        description:
          "Fly or take a tourist bus to beautiful lakeside Pokhara (25-min flight or 6-7 hr drive). Evening briefing with your guide.",
      },
      {
        day: "Day 2",
        name: "Drive Nayapul → Trek to Tikhedhunga",
        altitude: "1,480m",
        walk: "3h / 8km",
        accommodation: "Teahouse",
        description:
          "Drive to Nayapul (1 hour) and begin the trek along the Modi Khola. First Gurung villages, terraced fields, and great views of Annapurna South ahead.",
      },
      {
        day: "Day 3",
        name: "Tikhedhunga → Ghorepani",
        altitude: "2,860m",
        walk: "6h / 13km",
        accommodation: "Lodge",
        description:
          "A demanding ascent — 3,000+ steps through rhododendron forest to Ghorepani. **Hard day, huge reward.** The village sits in a clearing with views in all directions.",
      },
      {
        day: "Day 4",
        name: "Poon Hill Sunrise → Tadapani",
        altitude: "2,610m",
        walk: "6h + sunrise",
        accommodation: "Teahouse",
        description:
          "4:30 AM for the famous **Poon Hill (3,210m) sunrise** over Annapurna and Dhaulagiri. Then descend to Tadapani through the finest rhododendron forest on the trail.",
      },
      {
        day: "Day 5",
        name: "Tadapani → Chhomrong",
        altitude: "2,170m",
        walk: "5h / 12km",
        accommodation: "Lodge",
        description:
          "Trek to **Chhomrong**, the last large Gurung village before the sanctuary. Spectacular viewpoint above the Modi Khola gorge. Permit check here for the sanctuary entry.",
      },
      {
        day: "Day 6",
        name: "Chhomrong → Bamboo",
        altitude: "2,310m",
        walk: "5h / 10km",
        accommodation: "Teahouse",
        description:
          "Descend steeply to Chhomrong Khola then climb into the Modi Khola gorge. The trail enters bamboo and rhododendron forest — the sanctuary atmosphere begins.",
      },
      {
        day: "Day 7",
        name: "Bamboo → Deurali",
        altitude: "3,230m",
        walk: "5h / 10km",
        accommodation: "Teahouse",
        description:
          "The gorge closes in around the trail. Pass through Himalayan (2,920m) and Hinku Cave before emerging at **Deurali**, where the first glacial views appear.",
      },
      {
        day: "Day 8",
        name: "Deurali → Annapurna Base Camp",
        altitude: "4,130m",
        walk: "4h / 8km",
        accommodation: "Teahouse",
        description:
          "**The moment the valley opens into the sanctuary.** The walls fall away and suddenly Annapurna South, Hiunchuli, and Machhapuchhre fill your entire field of vision. Walking into base camp is a genuinely emotional experience.",
      },
      {
        day: "Day 9",
        name: "ABC Sunrise → Descent to Bamboo",
        altitude: "2,310m",
        walk: "7h",
        accommodation: "Teahouse",
        description:
          "Wake early for **sunrise in the sanctuary** — alpenglow on all ten surrounding peaks. Then begin the long descent back down the Modi gorge to Bamboo.",
      },
      {
        day: "Day 10",
        name: "Bamboo → Jhinu Danda",
        altitude: "1,760m",
        walk: "5h",
        accommodation: "Lodge",
        description:
          "Descend through Sinuwa and Chhomrong to Jhinu Danda — home to **natural hot springs** on the Modi Khola riverbank. A perfect end to the trek.",
      },
      {
        day: "Day 11",
        name: "Jhinu → Nayapul → Pokhara",
        altitude: "827m",
        walk: "3h + drive",
        accommodation: "Hotel",
        description:
          "Final short walk to Nayapul, then drive back to Pokhara. **Celebration dinner** on Phewa Lake this evening.",
      },
      {
        day: "Day 12",
        name: "Pokhara Free Day / Drive or Fly to KTM",
        altitude: "1,400m",
        walk: "Transfer",
        accommodation: "Hotel",
        description:
          "Morning in Pokhara, then travel to Kathmandu. Optional Pokhara activities — paragliding, boating on Phewa Lake, or simply resting.",
      },
      {
        day: "Day 13",
        name: "Departure Day",
        altitude: "1,400m",
        walk: "Airport transfer",
        accommodation: "—",
        description:
          "Airport transfer from Kathmandu. **13 days, 115km, the Annapurna Sanctuary — and a view you'll describe for the rest of your life.**",
      },
    ],
    elevation: [
      { day: "D1", label: "Pokhara", altitude: 827 },
      { day: "D2", label: "Tikhedhunga", altitude: 1480 },
      { day: "D3", label: "Ghorepani", altitude: 2860 },
      { day: "D4", label: "Tadapani", altitude: 2610 },
      { day: "D5", label: "Chhomrong", altitude: 2170 },
      { day: "D6", label: "Bamboo", altitude: 2310 },
      { day: "D7", label: "Deurali", altitude: 3230 },
      { day: "D8", label: "ABC", altitude: 4130 },
      { day: "D9", label: "Bamboo", altitude: 2310 },
      { day: "D10", label: "Jhinu", altitude: 1760 },
      { day: "D11", label: "Pokhara", altitude: 827 },
      { day: "D12", label: "Kathmandu", altitude: 1400 },
      { day: "D13", label: "Departure", altitude: 1400 },
    ],
    bestMonths: [
      { month: "Jan", status: "off" },
      { month: "Feb", status: "ok" },
      { month: "Mar", status: "best" },
      { month: "Apr", status: "best" },
      { month: "May", status: "best" },
      { month: "Jun", status: "off" },
      { month: "Jul", status: "off" },
      { month: "Aug", status: "off" },
      { month: "Sep", status: "ok" },
      { month: "Oct", status: "best" },
      { month: "Nov", status: "best" },
      { month: "Dec", status: "ok" },
    ],
    mapRoutePoints: [
      { name: "Nayapul", altitude: "1,070m", x: 70, y: 255 },
      { name: "Ghorepani", altitude: "2,860m", x: 150, y: 190 },
      { name: "Chhomrong", altitude: "2,170m", x: 250, y: 215 },
      { name: "Deurali", altitude: "3,230m", x: 340, y: 160 },
      { name: "ABC", altitude: "4,130m", x: 410, y: 110, isHighlight: true },
    ],
    similarPackages: ["annapurna-circuit", "langtang-valley", "poon-hill"],
  },

  // ─── POON HILL ───
  {
    slug: "poon-hill",
    category: "trekking",
    name: "Poon Hill Express",
    tagline:
      "Nepal's most famous short trek. Panoramic sunrise views of Annapurna, Dhaulagiri and Machhapuchhre — accessible to all ages, all fitness levels. Your first Himalayan memory.",
    heroImage:
      "https://images.unsplash.com/photo-1553073520-80b5ad5ec870?w=2000&q=85",
    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1553073520-80b5ad5ec870?w=1200&q=80",
        caption: "Poon Hill sunrise panorama",
      },
      {
        src: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800&q=80",
        caption: "Rhododendron forests in bloom",
      },
      {
        src: "https://images.unsplash.com/photo-1598948485421-1c5b9d93fd13?w=800&q=80",
        caption: "Ghorepani village teahouses",
      },
      {
        src: "https://images.unsplash.com/photo-1565073624497-7144969f5c9b?w=800&q=80",
        caption: "Annapurna range at golden hour",
      },
      {
        src: "https://images.unsplash.com/photo-1526080652727-5b77f74eacd2?w=800&q=80",
        caption: "Prayer flags on the summit",
      },
    ],
    difficulty: "Easy",
    duration: "5 Days",
    durationDays: 5,
    maxAltitude: "3,210m",
    maxAltitudeM: 3210,
    distance: "42 km",
    groupSize: "Max 18",
    dailyWalk: "4–6 hrs",
    priceFrom: 420,
    pricePremium: 620,
    priceGold: 900,
    elevationGain: "+2,140m",
    startEnd: "Kathmandu / Pokhara",
    trailStart: "Nayapul (1,070m)",
    accommodation: "Teahouses",
    meals: "Breakfast + Dinner",
    guideRatio: "1:10 max",
    permits: "ACAP + TIMS",
    overview: [
      "**Poon Hill (3,210m)** is Nepal's most visited viewpoint — and for good reason. The pre-dawn climb from Ghorepani delivers one of the world's great sunrise panoramas: Dhaulagiri (8,167m), Annapurna South, Machhapuchhre, Hiunchuli, and Nilgiri lined up across the horizon as the sky ignites.",
      "At just 5 days and a maximum altitude of 3,210m, this trek is genuinely accessible to fit beginners with no altitude experience. The trail passes through some of Nepal's most beautiful rhododendron and oak forest — extraordinary in spring.",
      "It's also the **perfect introduction to Nepali teahouse culture** — evenings around wood stoves, dal bhat dinners, and conversations with trekkers from every corner of the world.",
    ],
    highlights: [
      {
        title: "Poon Hill Sunrise",
        desc: "Nepal's most famous moment. A 45-minute climb by headlamp delivers 14 Himalayan peaks — including Dhaulagiri and the Annapurna range — lit up gold at dawn.",
      },
      {
        title: "Ghorepani Village",
        desc: "A lively teahouse village in a rhododendron clearing at 2,860m. Great food, warm hosts, and the gateway to Poon Hill.",
      },
      {
        title: "Rhododendron Forest",
        desc: "The best rhododendron forest in Nepal. In March and April the trail from Tikhedhunga to Ghorepani is a corridor of red, pink, and white blooms.",
      },
      {
        title: "Gurung Villages",
        desc: "Tikhedhunga and Ulleri are traditional Gurung settlements with stone-paved paths, carved windows, and genuine Nepali hospitality.",
      },
    ],
    included: [
      "All teahouse accommodation",
      "Breakfast and dinner on the trail",
      "Licensed English-speaking guide",
      "Porter (1 per 2 trekkers)",
      "ACAP permit + TIMS card",
      "Pokhara airport transfer",
    ],
    excluded: [
      "International flights",
      "Nepal visa",
      "Travel insurance",
      "Lunches",
      "Tips",
      "Personal gear",
    ],
    gear: [
      {
        category: "🧥 Clothing",
        items: [
          "Warm jacket",
          "Rain jacket",
          "Thermals ×2",
          "Warm hat & gloves",
        ],
      },
      {
        category: "👟 Footwear",
        items: [
          "Waterproof boots",
          "Wool socks ×3",
          "Trekking poles (optional)",
        ],
      },
      {
        category: "🎒 Essentials",
        items: [
          "Daypack 20–25L",
          "Headlamp",
          "Sunscreen",
          "Water bottle",
          "Cash NPR",
        ],
      },
    ],
    itinerary: [
      {
        day: "Day 1",
        name: "Pokhara → Nayapul → Tikhedhunga",
        altitude: "1,480m",
        walk: "1h drive + 3h",
        accommodation: "Teahouse",
        description:
          "Drive from Pokhara to Nayapul (1 hour) and begin the easy walk along the Modi Khola through Birethanti to Tikhedhunga. First glimpses of Annapurna South ahead.",
      },
      {
        day: "Day 2",
        name: "Tikhedhunga → Ghorepani",
        altitude: "2,860m",
        walk: "5–6h",
        accommodation: "Lodge",
        description:
          "The famous 3,300-step climb through rhododendron forest. **Hard but beautiful.** Ghorepani rewards with superb views and a warm teahouse fire.",
      },
      {
        day: "Day 3",
        name: "Poon Hill Sunrise → Tadapani",
        altitude: "2,610m",
        walk: "5h + sunrise",
        accommodation: "Teahouse",
        description:
          "4:30 AM start for **Poon Hill**. The panorama of 14 peaks at sunrise is extraordinary. Descend via Deurali to Tadapani through spectacular rhododendron and oak forest.",
      },
      {
        day: "Day 4",
        name: "Tadapani → Ghandruk → Nayapul → Pokhara",
        altitude: "827m",
        walk: "5h + drive",
        accommodation: "Hotel",
        description:
          "Descend through **Ghandruk** — the most beautiful Gurung village in Nepal, perched above the Modi gorge — and continue down to Nayapul for the drive back to Pokhara.",
      },
      {
        day: "Day 5",
        name: "Pokhara / Departure",
        altitude: "827m",
        walk: "Flexible",
        accommodation: "—",
        description:
          "Morning in Pokhara lakeside, then transfer to your airport or onward transport. **5 days, Nepal's most beautiful sunrise, done.**",
      },
    ],
    elevation: [
      { day: "D1", label: "Tikhedhunga", altitude: 1480 },
      { day: "D2", label: "Ghorepani", altitude: 2860 },
      { day: "D3", label: "Poon Hill", altitude: 3210 },
      { day: "D4", label: "Nayapul", altitude: 1070 },
      { day: "D5", label: "Pokhara", altitude: 827 },
    ],
    bestMonths: [
      { month: "Jan", status: "ok" },
      { month: "Feb", status: "ok" },
      { month: "Mar", status: "best" },
      { month: "Apr", status: "best" },
      { month: "May", status: "ok" },
      { month: "Jun", status: "off" },
      { month: "Jul", status: "off" },
      { month: "Aug", status: "off" },
      { month: "Sep", status: "ok" },
      { month: "Oct", status: "best" },
      { month: "Nov", status: "best" },
      { month: "Dec", status: "ok" },
    ],
    mapRoutePoints: [
      { name: "Nayapul", altitude: "1,070m", x: 80, y: 260 },
      { name: "Tikhedhunga", altitude: "1,480m", x: 170, y: 238 },
      { name: "Ghorepani", altitude: "2,860m", x: 280, y: 175 },
      {
        name: "Poon Hill",
        altitude: "3,210m",
        x: 330,
        y: 148,
        isHighlight: true,
      },
      { name: "Tadapani", altitude: "2,610m", x: 390, y: 192 },
    ],
    similarPackages: [
      "annapurna-base-camp",
      "langtang-valley",
      "sarangkot-sunrise-ride",
    ],
  },

  // ─────────────────────────────────────────
  // MTB
  // ─────────────────────────────────────────
  {
    slug: "upper-mustang-mtb",
    category: "mtb",
    name: "Upper Mustang Descent",
    tagline:
      "The crown jewel of Nepal MTB. Muktinath to Pokhara through the world's deepest gorge, ancient cave monasteries, and Tibetan high-altitude desert — 200km of pure riding.",
    heroImage:
      "https://images.unsplash.com/photo-1571732154690-f6d1c3e5178a?w=2000&q=85",
    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1571732154690-f6d1c3e5178a?w=1200&q=80",
        caption: "Mustang canyon descent",
      },
      {
        src: "https://images.unsplash.com/photo-1558980664-10e7170b5df9?w=800&q=80",
        caption: "Kaligandaki gorge singletrack",
      },
      {
        src: "https://images.unsplash.com/photo-1594819047050-99defca82545?w=800&q=80",
        caption: "Lo Manthang fortress, Upper Mustang",
      },
      {
        src: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80",
        caption: "Rider above Jomsom",
      },
      {
        src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
        caption: "High desert trail, 3,500m",
      },
    ],
    difficulty: "Expert",
    duration: "12 Days",
    durationDays: 12,
    maxAltitude: "3,760m",
    maxAltitudeM: 3760,
    distance: "200 km riding",
    groupSize: "Max 8",
    dailyWalk: "4–6h riding",
    priceFrom: 2400,
    pricePremium: 3200,
    priceGold: 4500,
    elevationGain: "+2,800m / -5,200m",
    startEnd: "Pokhara",
    trailStart: "Muktinath (3,760m) by jeep",
    accommodation: "Guesthouses / Teahouses",
    meals: "Breakfast + Dinner",
    guideRatio: "1:4 max",
    permits: "Mustang Restricted Area Permit + ACAP",
    overview: [
      "**Upper Mustang is made for mountain biking.** The jeep to Muktinath takes the suffering out of the climb, and what's left is 200km of pure descent — through the world's deepest gorge, past ancient cave monasteries, and into the subtropical lowlands of the Pokhara valley.",
      "The Kaligandaki gorge cuts between **Dhaulagiri (8,167m) and Annapurna I (8,091m)** — the two highest points of any gorge on Earth. Riding through it at speed, with wind at your back and canyon walls rising thousands of metres on either side, is one of the great riding experiences on the planet.",
      "As a restricted area, the Upper Mustang permit system has preserved one of the most authentic Tibetan Buddhist landscapes outside of Tibet. **Lo Manthang** — the ancient walled capital — is the cultural highlight of the route. Full-suspension bikes are mandatory.",
    ],
    highlights: [
      {
        title: "Muktinath to Jomsom",
        desc: "The classic opening day — 51km of descending from 3,760m to 2,715m through ancient trade routes, Marpha's apple orchards, and Tukuche's whitewashed courtyards.",
      },
      {
        title: "Kaligandaki Gorge",
        desc: "The world's deepest gorge by vertical measurement. Ride the floor of a canyon with Dhaulagiri and Annapurna at its walls — barely comprehensible from a bicycle saddle.",
      },
      {
        title: "Lo Manthang Fortress",
        desc: "The medieval walled capital of the Kingdom of Lo — entirely intact, entirely Tibetan, and extraordinary in every detail. A rest day here is mandatory.",
      },
      {
        title: "Ancient Cave Monasteries",
        desc: "Upper Mustang is riddled with 3,000-year-old cave dwellings and sky caves carved into canyon walls. The Luri and Ghyakar caves contain irreplaceable Buddhist murals.",
      },
      {
        title: "High Desert Singletrack",
        desc: "The ridge trails above Kagbeni offer 20km of high-altitude desert singletrack with 360° views — the most technically challenging and most rewarding sections of the route.",
      },
      {
        title: "Tatopani Hot Springs",
        desc: "Natural geothermal springs at the end of the Kaligandaki descent. After 5 hard riding days, soaking in hot springs with Annapurna views is exactly what's needed.",
      },
    ],
    included: [
      "All accommodation — guesthouses and teahouses",
      "Breakfast and dinner on the route",
      "Expert local MTB guide",
      "Support vehicle (jeep) throughout",
      "Scott Genius or Trek full-suspension bike (or bring your own)",
      "Helmet + gloves + knee/elbow pads provided",
      "Mustang Restricted Area Permit + ACAP",
      "Muktinath jeep transfer from Pokhara",
      "Bike workshop support throughout",
      "First aid kit + emergency evacuation plan",
    ],
    excluded: [
      "International flights",
      "Nepal visa",
      "Travel & rescue insurance (mandatory)",
      "Lunches on the route",
      "Personal riding gear beyond what's provided",
      "Tips for guide and support team",
      "Alcohol and personal drinks",
    ],
    gear: [
      {
        category: "🚵 MTB Gear",
        items: [
          "Full-face or trail helmet",
          "Gloves",
          "Knee and shin pads",
          "MTB shoes or stiff-soled trainers",
          "Padded MTB shorts",
          "Eye protection / goggles",
        ],
      },
      {
        category: "🧥 Clothing",
        items: [
          "Wind/rain jacket (essential)",
          "Thermal base layer for mornings",
          "Light down jacket for high camp",
          "Warm hat + buff",
        ],
      },
      {
        category: "🎒 Essentials",
        items: [
          "Riding backpack 10–15L",
          "Sunscreen SPF 60+",
          "Hydration system",
          "Energy snacks",
          "Cash USD/NPR",
          "Basic tool kit (if bringing own bike)",
        ],
      },
    ],
    itinerary: [
      {
        day: "Day 1",
        name: "Arrive Pokhara — Bike Fit & Briefing",
        altitude: "827m",
        walk: "Test ride 1–2h",
        accommodation: "Hotel",
        description:
          "Arrive in Pokhara and meet the Rad Travels MTB team. **Bike fitting, suspension tuning**, and full safety briefing. Test ride around Phewa Lake area. Briefing on the Mustang permit zone and riding safety protocols.",
      },
      {
        day: "Day 2",
        name: "Drive Pokhara → Jomsom → Muktinath",
        altitude: "3,760m",
        walk: "Jeep transfer",
        accommodation: "Guesthouse",
        description:
          "Drive from Pokhara to Jomsom by jeep (5 hours) then continue to Muktinath (3,760m). **Acclimatise at altitude** with a light afternoon explore on foot. Visit the sacred Muktinath temple.",
      },
      {
        day: "Day 3",
        name: "Muktinath → Kagbeni via Upper Mustang Ridge",
        altitude: "2,810m",
        walk: "35km / 4h riding",
        accommodation: "Guesthouse",
        description:
          "**First descent day.** From Muktinath, hit the high-altitude desert ridgeline before dropping into the ancient village of Kagbeni — gateway to the restricted Upper Mustang zone. Rocky, technical, spectacular.",
      },
      {
        day: "Day 4",
        name: "Kagbeni → Lo Manthang (Upper Mustang Day 1)",
        altitude: "3,840m",
        walk: "50km / 6h riding",
        accommodation: "Lodge",
        description:
          "Enter the forbidden kingdom. Ride through a lunar landscape of eroded canyons, ancient cave cities, and prayer-flag-strewn ridgelines to **Lo Manthang** — the medieval walled capital of Upper Mustang.",
      },
      {
        day: "Day 5",
        name: "Lo Manthang — Rest & Exploration Day",
        altitude: "3,840m",
        walk: "Walking day",
        accommodation: "Lodge",
        description:
          "Rest day in Lo Manthang. Visit the **Thubchen and Jampa monasteries**, walk the ancient walls, and explore the cave dwellings above the town. This place exists nowhere else in the world.",
      },
      {
        day: "Day 6",
        name: "Lo Manthang → Chele (South ride Day 1)",
        altitude: "3,050m",
        walk: "55km / 5h riding",
        accommodation: "Teahouse",
        description:
          "Begin the long return south. Ride through Ghemi, Tsarang, and Chuksang on a mix of gravel track and singletrack, with the enormous Dhaulagiri massif appearing to the south.",
      },
      {
        day: "Day 7",
        name: "Chele → Jomsom via Kaligandaki",
        altitude: "2,715m",
        walk: "45km / 4h riding",
        accommodation: "Guesthouse",
        description:
          "**The legendary Kaligandaki run.** Ride the floor of the world's deepest gorge with Dhaulagiri and Annapurna I on either side. Wind-assisted, technically straightforward but emotionally overwhelming. Arrive in Jomsom for the night.",
      },
      {
        day: "Day 8",
        name: "Jomsom → Tatopani via Marpha & Tukuche",
        altitude: "1,190m",
        walk: "55km / 5h riding",
        accommodation: "Lodge",
        description:
          "The landscape greens dramatically as you descend. Ride through **Marpha's apple orchards**, sample local cider and brandy, and drop all the way to Tatopani for a long evening in the hot springs.",
      },
      {
        day: "Day 9",
        name: "Tatopani → Beni via Kaligandaki Lower",
        altitude: "830m",
        walk: "45km / 4h riding",
        accommodation: "Guesthouse",
        description:
          "Drop into the subtropical lowlands. The trail follows the lower Kaligandaki through rice fields, jungle, and river beaches. **A completely different Nepal** from the Mustang desert above.",
      },
      {
        day: "Day 10",
        name: "Beni → Pokhara via Modi Khola Valley",
        altitude: "827m",
        walk: "50km / 4h riding",
        accommodation: "Hotel",
        description:
          "Final riding day — a gorgeous valley route back to Pokhara via Kushma and Baglung. Arrive Pokhara lakeside. **Celebration dinner on Phewa Lake.** Bikes cleaned and returned to workshop.",
      },
      {
        day: "Day 11",
        name: "Free Day in Pokhara",
        altitude: "827m",
        walk: "Flexible",
        accommodation: "Hotel",
        description:
          "Rest, recover, and explore Pokhara. Paragliding optional (highly recommended for the Annapurna aerial view). **Route certificate presented** at dinner.",
      },
      {
        day: "Day 12",
        name: "Fly/Drive to Kathmandu or Departure",
        altitude: "1,400m",
        walk: "Transfer",
        accommodation: "—",
        description:
          "Transfer to Kathmandu or direct international departure from Pokhara airport. **12 days, 200km, Mustang — done.**",
      },
    ],
    elevation: [
      { day: "D1", label: "Pokhara", altitude: 827 },
      { day: "D2", label: "Muktinath", altitude: 3760 },
      { day: "D3", label: "Kagbeni", altitude: 2810 },
      { day: "D4", label: "Lo Manthang", altitude: 3840 },
      { day: "D5", label: "Lo Manthang", altitude: 3840 },
      { day: "D6", label: "Chele", altitude: 3050 },
      { day: "D7", label: "Jomsom", altitude: 2715 },
      { day: "D8", label: "Tatopani", altitude: 1190 },
      { day: "D9", label: "Beni", altitude: 830 },
      { day: "D10", label: "Pokhara", altitude: 827 },
      { day: "D11", label: "Pokhara", altitude: 827 },
      { day: "D12", label: "Departure", altitude: 827 },
    ],
    bestMonths: [
      { month: "Jan", status: "ok" },
      { month: "Feb", status: "ok" },
      { month: "Mar", status: "best" },
      { month: "Apr", status: "best" },
      { month: "May", status: "best" },
      { month: "Jun", status: "best" },
      { month: "Jul", status: "best" },
      { month: "Aug", status: "best" },
      { month: "Sep", status: "best" },
      { month: "Oct", status: "best" },
      { month: "Nov", status: "ok" },
      { month: "Dec", status: "ok" },
    ],
    mapRoutePoints: [
      { name: "Muktinath", altitude: "3,760m", x: 60, y: 90 },
      { name: "Kagbeni", altitude: "2,810m", x: 120, y: 130 },
      {
        name: "Lo Manthang",
        altitude: "3,840m",
        x: 80,
        y: 60,
        isHighlight: true,
      },
      { name: "Jomsom", altitude: "2,715m", x: 180, y: 150 },
      { name: "Tatopani", altitude: "1,190m", x: 300, y: 220 },
      { name: "Beni", altitude: "830m", x: 400, y: 245 },
      { name: "Pokhara", altitude: "827m", x: 500, y: 260 },
    ],
    similarPackages: [
      "annapurna-mtb-circuit",
      "kathmandu-valley-mtb",
      "poon-hill-emtb",
    ],
  },

  // ─── ANNAPURNA MTB CIRCUIT ───
  {
    slug: "annapurna-mtb-circuit",
    category: "mtb",
    name: "Annapurna MTB Circuit",
    tagline:
      "221km of the Annapurna Circuit by bike. Kathmandu test trails, Manang Valley singletrack, Thorong La Pass at 5,416m, and a descent nobody ever forgets.",
    heroImage:
      "https://www.nepalmountainbike.com/_next/image?url=https%3A%2F%2Fbackend.nepalmountainbike.com%2Fmedia%2Ffile-uploads%2Fblogs%2Fmain_image%2F1775197749-Annapurna-circuit-mountain-bike-tour.jpg&w=3840&q=75",
    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1558980664-10e7170b5df9?w=1200&q=80",
        caption: "Annapurna Circuit singletrack",
      },
      {
        src: "https://images.unsplash.com/photo-1571732154690-f6d1c3e5178a?w=800&q=80",
        caption: "Rider at altitude on the circuit",
      },
      {
        src: "https://images.unsplash.com/photo-1594819047050-99defca82545?w=800&q=80",
        caption: "Manang valley descent",
      },
      {
        src: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80",
        caption: "Tatopani hot springs section",
      },
      {
        src: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800&q=80",
        caption: "Annapurna range from the trail",
      },
    ],
    difficulty: "Expert",
    duration: "18 Days",
    durationDays: 18,
    maxAltitude: "5,416m",
    maxAltitudeM: 5416,
    distance: "221 km riding",
    groupSize: "Max 8",
    dailyWalk: "5–8h riding",
    priceFrom: 2200,
    pricePremium: 3000,
    priceGold: 4200,
    elevationGain: "+5,300m total",
    startEnd: "Kathmandu",
    trailStart: "Besisahar (760m)",
    accommodation: "Teahouses / Guesthouses",
    meals: "Breakfast + Dinner",
    guideRatio: "1:4 max",
    permits: "ACAP + TIMS",
    overview: [
      "The **Annapurna MTB Circuit** is one of the most ambitious mountain bike trips on the planet — 221km from Kathmandu test trails through the Marsyangdi valley, up to **Thorong La Pass at 5,416m**, and all the way back down to Pokhara via the Kaligandaki gorge.",
      "Sections include challenging singletrack near Tatopani hot springs, steep climbs to Muktinath temple (3,802m), and thrilling descents through traditional villages. Some sections require riders to walk their bikes — this is not a road ride. **Full-suspension is non-negotiable.**",
      "This is a 3-week commitment for strong, experienced riders who want to do something genuinely extraordinary. The combination of altitude, technical terrain, and cultural immersion makes it Nepal's definitive MTB experience.",
    ],
    highlights: [
      {
        title: "Thorong La Push & Ride (5,416m)",
        desc: "Some sections will need to be walked at this altitude. The views from Nepal's most famous pass — Annapurna, Dhaulagiri, Nilgiri — are worth every gasped breath.",
      },
      {
        title: "Manang Valley Singletrack",
        desc: "The valley above Manang offers some of the finest high-altitude singletrack in Asia — rocky, wild, remote, and with 8,000m peaks as the backdrop.",
      },
      {
        title: "Full Kaligandaki Run",
        desc: "Ride the world's deepest gorge for two full days — gorge floor trails, river crossings, and the final run into the subtropical heat near Tatopani.",
      },
      {
        title: "Mustang Desert Section",
        desc: "The transition from green Marsyangdi to arid Mustang via Thorong La is one of the most dramatic landscape changes you'll experience on a bicycle anywhere.",
      },
    ],
    included: [
      "All teahouse/guesthouse accommodation",
      "Breakfast and dinner daily",
      "Expert MTB guide (circuit-certified)",
      "Support vehicle for luggage and emergencies",
      "Full-suspension bike (Scott Genius or similar)",
      "Helmet + protective gear",
      "ACAP + TIMS permits",
      "First aid + evacuation plan",
    ],
    excluded: [
      "International flights",
      "Nepal visa",
      "Rescue insurance (mandatory)",
      "Lunches",
      "Tips",
      "Personal riding gear",
      "Alcohol",
    ],
    gear: [
      {
        category: "🚵 MTB Gear",
        items: [
          "Full-face helmet",
          "Full armor set",
          "MTB shoes",
          "Padded shorts + jersey",
          "Hydration pack",
          "Gloves ×2",
        ],
      },
      {
        category: "🧥 Layers",
        items: [
          "Heavy down jacket (for pass)",
          "Windproof shell",
          "Thermal base ×3",
          "Warm gloves + balaclava",
        ],
      },
      {
        category: "🎒 Essentials",
        items: [
          "Riding backpack 15L",
          "SPF 60 sunscreen",
          "Energy gels/bars",
          "Tool kit + spare tubes",
          "Cash",
          "Passport copies",
        ],
      },
    ],
    itinerary: [
      {
        day: "Day 1",
        name: "Kathmandu — Bike Fit & Test Ride",
        altitude: "1,400m",
        walk: "2h test ride",
        accommodation: "Hotel",
        description:
          "Arrive in Kathmandu, meet the team, and spend the afternoon on a **test ride through Shivapuri forest** — perfect for tuning suspension and getting a feel for the bikes before the main event.",
      },
      {
        day: "Day 2",
        name: "Drive to Besisahar → Ride to Bulbule",
        altitude: "840m",
        walk: "Drive + 15km ride",
        accommodation: "Guesthouse",
        description:
          "Drive to Besisahar and begin riding along the **Marsyangdi river valley**. First km on the circuit — exciting, warm, and green. The mountains ahead are just hints of what's to come.",
      },
      {
        day: "Day 3–5",
        name: "Bulbule → Chame (3 days riding)",
        altitude: "2,670m",
        walk: "50–70km/day",
        accommodation: "Teahouses",
        description:
          "Three days through the lower and middle Marsyangdi valley — increasing altitude, narrowing gorges, and the first views of **Annapurna II and Manaslu** dominating the skyline.",
      },
      {
        day: "Day 6–7",
        name: "Chame → Manang (2 days)",
        altitude: "3,500m",
        walk: "60km over 2 days",
        accommodation: "Guesthouse",
        description:
          "Enter the Manang valley — the landscape shifts dramatically to an arid Tibetan plateau with yaks, ancient gompas, and the full Annapurna range filling the horizon.",
      },
      {
        day: "Day 8",
        name: "Manang — Acclimatisation Ride",
        altitude: "4,600m",
        walk: "3h hike + ride",
        accommodation: "Guesthouse",
        description:
          "Crucial rest and acclimatisation day. Ride up to Ice Lake (4,600m) — the highest point before the pass — to check bike and body response at altitude.",
      },
      {
        day: "Day 9",
        name: "Manang → Thorong Phedi",
        altitude: "4,450m",
        walk: "25km / 3h ride",
        accommodation: "Teahouse",
        description:
          "Short riding day to base camp for the pass. **Eat well, sleep early, start at 3 AM tomorrow.**",
      },
      {
        day: "Day 10",
        name: "Thorong La (5,416m) → Muktinath",
        altitude: "3,800m",
        walk: "8h push/ride",
        accommodation: "Lodge",
        description:
          "**The defining day.** Some sections must be walked — no shame in that at 5,400m. The views from the pass reward every step. Long descent to Muktinath for a well-earned rest.",
      },
      {
        day: "Day 11–14",
        name: "Muktinath → Tatopani (4 days)",
        altitude: "1,190m",
        walk: "45–60km/day",
        accommodation: "Teahouses",
        description:
          "Four days of predominantly downhill riding through Jomsom, Marpha, Tukuche, and the Kaligandaki gorge to Tatopani. Each day is different, each day is exceptional.",
      },
      {
        day: "Day 15–16",
        name: "Tatopani → Pokhara (2 days)",
        altitude: "827m",
        walk: "40–50km/day",
        accommodation: "Hotel",
        description:
          "Final two riding days through increasingly subtropical terrain, river valleys, and traditional Gurung villages back to Pokhara for the celebration dinner.",
      },
      {
        day: "Day 17",
        name: "Rest Day in Pokhara",
        altitude: "827m",
        walk: "Flexible",
        accommodation: "Hotel",
        description:
          "Rest, recover, and explore Pokhara. **Route certificate ceremony** in the evening.",
      },
      {
        day: "Day 18",
        name: "Fly to Kathmandu / Departure",
        altitude: "1,400m",
        walk: "Transfer",
        accommodation: "—",
        description:
          "Transfer to Kathmandu or international departure. **18 days, 221km, 5,416m — Nepal's greatest MTB achievement.**",
      },
    ],
    elevation: [
      { day: "D1", label: "KTM", altitude: 1400 },
      { day: "D3", label: "Chame", altitude: 2670 },
      { day: "D6", label: "Manang", altitude: 3500 },
      { day: "D9", label: "Phedi", altitude: 4450 },
      { day: "D10", label: "Thorong La", altitude: 5416 },
      { day: "D11", label: "Muktinath", altitude: 3800 },
      { day: "D13", label: "Jomsom", altitude: 2715 },
      { day: "D14", label: "Tatopani", altitude: 1190 },
      { day: "D16", label: "Pokhara", altitude: 827 },
    ],
    bestMonths: [
      { month: "Jan", status: "off" },
      { month: "Feb", status: "ok" },
      { month: "Mar", status: "best" },
      { month: "Apr", status: "best" },
      { month: "May", status: "best" },
      { month: "Jun", status: "off" },
      { month: "Jul", status: "off" },
      { month: "Aug", status: "off" },
      { month: "Sep", status: "ok" },
      { month: "Oct", status: "best" },
      { month: "Nov", status: "best" },
      { month: "Dec", status: "off" },
    ],
    mapRoutePoints: [
      { name: "Besisahar", altitude: "760m", x: 80, y: 255 },
      { name: "Manang", altitude: "3,500m", x: 220, y: 170 },
      {
        name: "Thorong La",
        altitude: "5,416m",
        x: 310,
        y: 70,
        isHighlight: true,
      },
      { name: "Muktinath", altitude: "3,800m", x: 380, y: 148 },
      { name: "Jomsom", altitude: "2,715m", x: 430, y: 190 },
      { name: "Tatopani", altitude: "1,190m", x: 510, y: 235 },
      { name: "Pokhara", altitude: "827m", x: 590, y: 258 },
    ],
    similarPackages: [
      "upper-mustang-mtb",
      "kathmandu-valley-mtb",
      "poon-hill-emtb",
    ],
  },

  // ─── KATHMANDU VALLEY MTB ───
  {
    slug: "kathmandu-valley-mtb",
    category: "mtb",
    name: "Kathmandu Valley Loop",
    tagline:
      "Shivapuri forest singletrack, ancient temples, and rural Nepal — all within an hour of Thamel. The perfect Nepal MTB introduction for intermediate riders.",
    heroImage:
      "https://images.unsplash.com/photo-1594819047050-99defca82545?w=2000&q=85",
    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1594819047050-99defca82545?w=1200&q=80",
        caption: "Shivapuri forest singletrack",
      },
      {
        src: "https://images.unsplash.com/photo-1558980664-10e7170b5df9?w=800&q=80",
        caption: "Temple ruins on the trail",
      },
      {
        src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
        caption: "Valley view from Nagarkot",
      },
      {
        src: "https://images.unsplash.com/photo-1516939884455-1445c8652f83?w=800&q=80",
        caption: "Rural Nepal between trails",
      },
      {
        src: "https://images.unsplash.com/photo-1526080652727-5b77f74eacd2?w=800&q=80",
        caption: "Traditional village descent",
      },
    ],
    difficulty: "Intermediate",
    duration: "3 Days",
    durationDays: 3,
    maxAltitude: "2,175m",
    maxAltitudeM: 2175,
    distance: "85 km riding",
    groupSize: "Max 10",
    dailyWalk: "4–5h riding",
    priceFrom: 380,
    pricePremium: 550,
    priceGold: 780,
    elevationGain: "+3,200m over 3 days",
    startEnd: "Kathmandu",
    trailStart: "Thamel, Kathmandu",
    accommodation: "Guesthouse / Lodge",
    meals: "Breakfast + Dinner",
    guideRatio: "1:5 max",
    permits: "Shivapuri NP Entry",
    overview: [
      "**The Kathmandu Valley Loop** shows you the real Nepal hiding behind the capital's chaos. Three days of riding through Shivapuri Nagarjun National Park's wilderness, across hilltop temple complexes, and through farming villages that feel decades removed from Thamel.",
      "The loop takes in **Shivapuri ridge** (2,175m) to the north, drops into the Sundarijal river valley, continues east to Nagarkot for spectacular Himalayan views, and descends through Bhaktapur's terracotta medieval streets back to Kathmandu.",
      "A brilliant warm-up for longer Nepal rides, or a standalone trip for anyone with limited time. **No altitude concerns, no permits beyond national park entry**, and daily riding distances that leave time to explore.",
    ],
    highlights: [
      {
        title: "Shivapuri Forest Singletrack",
        desc: "Technical, rooty, steep singletrack through dense sal and pine forest in Shivapuri Nagarjun National Park. Full of monkeys and birdsong.",
      },
      {
        title: "Nagarkot Himalayan View",
        desc: "The ridge above Nagarkot offers one of the finest Himalayan panoramas from within a day's ride of Kathmandu — Everest, Langtang, Ganesh Himal all visible on clear mornings.",
      },
      {
        title: "Bhaktapur Medieval City",
        desc: "Descend into the UNESCO World Heritage medieval city of Bhaktapur — the finest preserved Newari city in Nepal. Explore by bike on the final morning.",
      },
      {
        title: "Sundarijal to Nagarkot",
        desc: "The 23km Sundarijal–Nagarkot trail weaves through Chisapani, traditional villages, and ancient temples with expert guides who've ridden it hundreds of times.",
      },
    ],
    included: [
      "2 nights guesthouse accommodation (Nagarkot + Bhaktapur)",
      "Breakfast and dinner",
      "Expert local MTB guide",
      "Scott Marlin hardtail or Trek full-suspension bike",
      "Helmet + gloves provided",
      "Shivapuri NP entry permit",
      "Kathmandu pickup + drop-off",
    ],
    excluded: [
      "International flights",
      "Nepal visa",
      "Travel insurance",
      "Lunches",
      "Bhaktapur entry fee (~$15)",
      "Tips",
      "Personal gear",
    ],
    gear: [
      {
        category: "🚵 Riding",
        items: [
          "Trail or full-face helmet",
          "Gloves",
          "Padded shorts",
          "MTB shoes or trainers",
          "Eye protection",
        ],
      },
      {
        category: "🧥 Layers",
        items: [
          "Wind jacket (mornings cool)",
          "Light fleece",
          "Sun protection",
        ],
      },
      {
        category: "🎒 Pack",
        items: [
          "Day pack 15–20L",
          "Sunscreen",
          "Water 2L minimum",
          "Snacks",
          "Cash NPR",
        ],
      },
    ],
    itinerary: [
      {
        day: "Day 1",
        name: "Thamel → Shivapuri → Sundarijal",
        altitude: "1,500m",
        walk: "30km / 4h riding",
        accommodation: "Guesthouse",
        description:
          "Ride out of Thamel through Budhanilkantha's giant Vishnu statue, into **Shivapuri National Park** on steep forested singletrack, and descend to Sundarijal on the valley's northeastern rim.",
      },
      {
        day: "Day 2",
        name: "Sundarijal → Chisapani → Nagarkot",
        altitude: "2,175m",
        walk: "35km / 5h riding",
        accommodation: "Lodge",
        description:
          "The classic **Sundarijal–Nagarkot trail** — Nepal's most scenic day ride near Kathmandu. Ridgeline trails, ancient temples, and a final climb to Nagarkot for incredible sunset Himalayan views.",
      },
      {
        day: "Day 3",
        name: "Nagarkot → Bhaktapur → Kathmandu",
        altitude: "1,400m",
        walk: "20km / 3h riding",
        accommodation: "—",
        description:
          "Dawn view of Everest from the Nagarkot ridge, then descend through terraced fields into **medieval Bhaktapur**. Explore the Durbar Square by bike, then transfer back to Kathmandu.",
      },
    ],
    elevation: [
      { day: "D1", label: "Sundarijal", altitude: 1500 },
      { day: "D2", label: "Nagarkot", altitude: 2175 },
      { day: "D3", label: "Bhaktapur", altitude: 1401 },
    ],
    bestMonths: [
      { month: "Jan", status: "ok" },
      { month: "Feb", status: "ok" },
      { month: "Mar", status: "best" },
      { month: "Apr", status: "best" },
      { month: "May", status: "ok" },
      { month: "Jun", status: "off" },
      { month: "Jul", status: "off" },
      { month: "Aug", status: "off" },
      { month: "Sep", status: "ok" },
      { month: "Oct", status: "best" },
      { month: "Nov", status: "best" },
      { month: "Dec", status: "ok" },
    ],
    mapRoutePoints: [
      { name: "Kathmandu", altitude: "1,400m", x: 100, y: 240 },
      { name: "Shivapuri", altitude: "2,175m", x: 200, y: 170 },
      { name: "Sundarijal", altitude: "1,500m", x: 310, y: 215 },
      {
        name: "Nagarkot",
        altitude: "2,175m",
        x: 430,
        y: 175,
        isHighlight: true,
      },
      { name: "Bhaktapur", altitude: "1,401m", x: 520, y: 225 },
    ],
    similarPackages: [
      "sarangkot-sunrise-ride",
      "poon-hill-emtb",
      "annapurna-mtb-circuit",
    ],
  },

  // ─── SARANGKOT SUNRISE ───
  {
    slug: "sarangkot-sunrise-ride",
    category: "mtb",
    name: "Sarangkot Sunrise Ride",
    tagline:
      "Ride to Sarangkot for the iconic Annapurna sunrise, then bomb flowing singletrack down to Phewa Lake in time for lakeside breakfast. Nepal MTB's perfect day out.",
    heroImage:
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=2000&q=85",
    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=1200&q=80",
        caption: "Sarangkot sunrise — Annapurna panorama",
      },
      {
        src: "https://images.unsplash.com/photo-1594819047050-99defca82545?w=800&q=80",
        caption: "Singletrack descent toward Pokhara",
      },
      {
        src: "https://images.unsplash.com/photo-1553073520-80b5ad5ec870?w=800&q=80",
        caption: "Phewa Lake and the Annapurna range",
      },
      {
        src: "https://images.unsplash.com/photo-1558980664-10e7170b5df9?w=800&q=80",
        caption: "Forest trail below Sarangkot",
      },
      {
        src: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800&q=80",
        caption: "Machhapuchhre (Fishtail) from Pokhara",
      },
    ],
    difficulty: "Beginner",
    duration: "1 Day",
    durationDays: 1,
    maxAltitude: "1,592m",
    maxAltitudeM: 1592,
    distance: "22 km riding",
    groupSize: "Max 14",
    dailyWalk: "3–4h total",
    priceFrom: 95,
    pricePremium: 140,
    priceGold: 200,
    elevationGain: "+720m / -720m",
    startEnd: "Pokhara",
    trailStart: "Pokhara Lakeside",
    accommodation: "Not included",
    meals: "Breakfast included",
    guideRatio: "1:7 max",
    permits: "None required",
    overview: [
      "**The Sarangkot Sunrise Ride** is Nepal's perfect single-day MTB adventure — accessible to beginners, jaw-dropping for any rider, and finished in time for a lakeside lunch. The Annapurna range seen from Sarangkot at dawn is one of the world's great natural spectacles.",
      "Depart Pokhara at 5:00 AM by bike, climbing the winding forest road to Sarangkot's viewpoint (1,592m) as the sky begins to lighten. **Annapurna South, Machhapuchhre, Dhaulagiri, and Annapurna II** emerge from darkness as the sun rises.",
      "The descent back is pure joy — flowing forest singletrack through Gurung villages, terraced fields, and finally out onto the Phewa Lake shoreline. Breakfast is booked at a lakeside restaurant. Done by 10 AM.",
    ],
    highlights: [
      {
        title: "Annapurna Range at Dawn",
        desc: "14 peaks including Dhaulagiri (8,167m) and the full Annapurna range lit gold at sunrise. The most accessible version of Nepal's greatest mountain view.",
      },
      {
        title: "Phewa Lake & Fishtail",
        desc: "Machhapuchhre (Fishtail, 6,993m) reflected in Phewa Lake is possibly Nepal's most iconic image. You'll see it on the descent.",
      },
      {
        title: "Forest Singletrack",
        desc: "The descent from Sarangkot follows a mix of forest singletrack and village paths through Gurung communities. Flowing, fun, and suitable for beginner to intermediate riders.",
      },
      {
        title: "Lakeside Breakfast",
        desc: "End the ride at a Phewa Lake restaurant with a Nepali breakfast of sel roti, fresh fruit, and butter tea. Done by 10 AM — the rest of Pokhara's day is yours.",
      },
    ],
    included: [
      "Bike + helmet + gloves",
      "Expert local guide",
      "Breakfast at lakeside",
      "Pokhara hotel pickup",
    ],
    excluded: ["Nepal visa", "Travel insurance", "Tips", "Personal gear"],
    gear: [
      {
        category: "🚵 Bring",
        items: [
          "Warm layer for the pre-dawn climb",
          "Headlamp or bike light",
          "Gloves (cool at 1,600m pre-dawn)",
          "Sunscreen for the descent",
          "Camera or phone for the sunrise",
        ],
      },
    ],
    itinerary: [
      {
        day: "5:00 AM",
        name: "Depart Pokhara Lakeside by bike",
        altitude: "827m",
        walk: "Ride begins",
        accommodation: "—",
        description:
          "Dark streets, headlights on, and the entire Annapurna range invisible somewhere ahead. Ride north from Lakeside through quiet morning Pokhara.",
      },
      {
        day: "6:30 AM",
        name: "Arrive Sarangkot — Sunrise",
        altitude: "1,592m",
        walk: "12km / 1.5h climb",
        accommodation: "—",
        description:
          "The sky begins to lighten as you arrive. Find your spot on the viewpoint. Then — **the show.** Annapurna, Machhapuchhre, Dhaulagiri, Hiunchuli. Gold, pink, perfect.",
      },
      {
        day: "7:30 AM",
        name: "Begin descent via forest singletrack",
        altitude: "1,592m–827m",
        walk: "10km / 1h ride",
        accommodation: "—",
        description:
          "Drop into the forest on flowing singletrack through Gurung villages and terraced fields. Phewa Lake appears below, and Fishtail rises impossibly above it all.",
      },
      {
        day: "9:00 AM",
        name: "Breakfast at Phewa Lake",
        altitude: "827m",
        walk: "Done",
        accommodation: "—",
        description:
          "Lock up the bikes, find a lakeside table, and eat **sel roti, fresh fruit, and butter tea** while Machhapuchhre is reflected in the still morning water. Perfect.",
      },
    ],
    elevation: [
      { day: "5AM", label: "Pokhara", altitude: 827 },
      { day: "6:30AM", label: "Sarangkot", altitude: 1592 },
      { day: "9AM", label: "Phewa Lake", altitude: 827 },
    ],
    bestMonths: [
      { month: "Jan", status: "ok" },
      { month: "Feb", status: "ok" },
      { month: "Mar", status: "best" },
      { month: "Apr", status: "best" },
      { month: "May", status: "ok" },
      { month: "Jun", status: "off" },
      { month: "Jul", status: "off" },
      { month: "Aug", status: "off" },
      { month: "Sep", status: "ok" },
      { month: "Oct", status: "best" },
      { month: "Nov", status: "best" },
      { month: "Dec", status: "ok" },
    ],
    mapRoutePoints: [
      { name: "Pokhara Lakeside", altitude: "827m", x: 120, y: 270 },
      {
        name: "Sarangkot",
        altitude: "1,592m",
        x: 260,
        y: 140,
        isHighlight: true,
      },
      { name: "Phewa Lake", altitude: "827m", x: 180, y: 265 },
    ],
    similarPackages: [
      "kathmandu-valley-mtb",
      "poon-hill-emtb",
      "langtang-valley",
    ],
  },

  // ─── POON HILL E-MTB ───
  {
    slug: "poon-hill-emtb",
    category: "mtb",
    name: "Poon Hill E-MTB",
    tagline:
      "Same legendary trails, more vertical, less suffering. Bosch-powered e-MTBs take you to Poon Hill (3,210m) for Nepal's greatest sunrise — then you ride every descent fully charged.",
    heroImage:
      "https://images.unsplash.com/photo-1520637736862-4d197d17c93a?w=2000&q=85",
    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1520637736862-4d197d17c93a?w=1200&q=80",
        caption: "E-MTB on Poon Hill trail",
      },
      {
        src: "https://images.unsplash.com/photo-1553073520-80b5ad5ec870?w=800&q=80",
        caption: "Poon Hill sunrise panorama",
      },
      {
        src: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800&q=80",
        caption: "Annapurna range from the ridge",
      },
      {
        src: "https://images.unsplash.com/photo-1598948485421-1c5b9d93fd13?w=800&q=80",
        caption: "Ghorepani village",
      },
      {
        src: "https://images.unsplash.com/photo-1565073624497-7144969f5c9b?w=800&q=80",
        caption: "Rhododendron forest trail",
      },
    ],
    difficulty: "E-MTB",
    duration: "5 Days",
    durationDays: 5,
    maxAltitude: "3,210m",
    maxAltitudeM: 3210,
    distance: "95 km riding",
    groupSize: "Max 10",
    dailyWalk: "4–5h riding",
    priceFrom: 680,
    pricePremium: 950,
    priceGold: 1350,
    elevationGain: "+4,200m e-assisted",
    startEnd: "Pokhara",
    trailStart: "Nayapul (1,070m)",
    accommodation: "Teahouses",
    meals: "Breakfast + Dinner",
    guideRatio: "1:5 max",
    permits: "ACAP + TIMS",
    overview: [
      "The **Poon Hill E-MTB** uses Bergamont Bosch-powered electric mountain bikes to transform Nepal's most famous short trek into a 5-day ride with more vertical, more fun, and far more smiling. The e-assist handles the relentless uphill so you arrive at Poon Hill fresh enough to actually enjoy the sunrise.",
      "The route follows the classic Poon Hill trek trail — rhododendron forest, Gurung villages, Ghorepani teahouses — but adds ridgeline detours, forest singletrack diversions, and trail sections that trekkers are forced to skip. **The e-MTB opens Nepal's trails in a completely new way.**",
      "Suitable for riders 50+ or those who want the full Himalayan experience without the suffering of sustained climbing at altitude. **No MTB experience required** — only a sense of adventure.",
    ],
    highlights: [
      {
        title: "Poon Hill Sunrise by Bike",
        desc: "Ride to Nepal's most famous viewpoint — Annapurna, Dhaulagiri, 14 peaks at dawn — under your own (assisted) power. Most people walk this. You'll ride it.",
      },
      {
        title: "Rhododendron Singletrack",
        desc: "The e-assist unlocks trail sections through the rhododendron forest that trekkers can't access. Dense forest, root trails, and flower tunnels.",
      },
      {
        title: "Ghandruk by E-MTB",
        desc: "The beautiful Gurung village of Ghandruk sits on a steep ridgeline — perfectly suited to an e-MTB that climbs what a regular bike won't and descends what a walker can't.",
      },
      {
        title: "Accessible Adventure",
        desc: "Age 18–75, no MTB experience needed. The e-assist democratises Himalayan mountain biking in the best possible way.",
      },
    ],
    included: [
      "Bergamont e-MTB (Bosch motor, 625Wh battery)",
      "Helmet + gloves provided",
      "All teahouse accommodation",
      "Breakfast and dinner",
      "Licensed e-MTB guide",
      "ACAP + TIMS permits",
      "Battery charging at each teahouse stop",
      "Pokhara transfers",
    ],
    excluded: [
      "International flights",
      "Nepal visa",
      "Travel insurance",
      "Lunches",
      "Tips",
      "Personal gear",
    ],
    gear: [
      {
        category: "🚵 Riding",
        items: [
          "Trail helmet (full-face optional)",
          "Gloves",
          "Padded shorts",
          "Comfortable trainers work fine",
          "Eye protection",
        ],
      },
      {
        category: "🧥 Layers",
        items: [
          "Warm jacket (cold pre-dawn for sunrise)",
          "Rain layer",
          "Buff / neck warmer",
        ],
      },
      {
        category: "🎒 Pack",
        items: ["Day bag 15L", "Sunscreen", "Snacks", "Water 2L", "Cash NPR"],
      },
    ],
    itinerary: [
      {
        day: "Day 1",
        name: "Pokhara → Nayapul → Tikhedhunga (E-MTB Day 1)",
        altitude: "1,480m",
        walk: "25km riding",
        accommodation: "Teahouse",
        description:
          "Drive to Nayapul and begin the e-MTB adventure. The motor handles the Modi Khola ascent effortlessly — **save your legs for the descent.** Arrive at Tikhedhunga in the afternoon.",
      },
      {
        day: "Day 2",
        name: "Tikhedhunga → Ghorepani via Ulleri",
        altitude: "2,860m",
        walk: "20km riding",
        accommodation: "Lodge",
        description:
          "The famous 3,300-step climb — on a regular bike, this is brutal. On an e-MTB, it's brilliant. Ride all the way up to **Ghorepani** through spectacular rhododendron forest.",
      },
      {
        day: "Day 3",
        name: "Poon Hill Sunrise → Tadapani",
        altitude: "2,610m",
        walk: "4h + sunrise",
        accommodation: "Teahouse",
        description:
          "4:30 AM start for Poon Hill (3,210m) — now accessible from the south on the bike trail. **The sunrise.** Then bomb down forest singletrack to Tadapani on a route trekkers simply can't take.",
      },
      {
        day: "Day 4",
        name: "Tadapani → Ghandruk → Landruk → Nayapul",
        altitude: "1,070m",
        walk: "30km riding",
        accommodation: "Lodge",
        description:
          "The finest descent day — **Ghandruk perched on its ridgeline**, then Landruk's terraced village, then flowing riverside trail all the way back to Nayapul. Drive to Pokhara.",
      },
      {
        day: "Day 5",
        name: "Pokhara — Free Day / Departure",
        altitude: "827m",
        walk: "Flexible",
        accommodation: "Hotel",
        description:
          "Rest day in Pokhara or direct departure. **Route certificate and e-bike badge** presented at breakfast.",
      },
    ],
    elevation: [
      { day: "D1", label: "Tikhedhunga", altitude: 1480 },
      { day: "D2", label: "Ghorepani", altitude: 2860 },
      { day: "D3", label: "Poon Hill", altitude: 3210 },
      { day: "D4", label: "Nayapul", altitude: 1070 },
      { day: "D5", label: "Pokhara", altitude: 827 },
    ],
    bestMonths: [
      { month: "Jan", status: "ok" },
      { month: "Feb", status: "ok" },
      { month: "Mar", status: "best" },
      { month: "Apr", status: "best" },
      { month: "May", status: "ok" },
      { month: "Jun", status: "off" },
      { month: "Jul", status: "off" },
      { month: "Aug", status: "off" },
      { month: "Sep", status: "ok" },
      { month: "Oct", status: "best" },
      { month: "Nov", status: "best" },
      { month: "Dec", status: "ok" },
    ],
    mapRoutePoints: [
      { name: "Nayapul", altitude: "1,070m", x: 80, y: 260 },
      { name: "Tikhedhunga", altitude: "1,480m", x: 170, y: 238 },
      { name: "Ghorepani", altitude: "2,860m", x: 280, y: 175 },
      {
        name: "Poon Hill",
        altitude: "3,210m",
        x: 330,
        y: 148,
        isHighlight: true,
      },
      { name: "Ghandruk", altitude: "1,940m", x: 430, y: 220 },
    ],
    similarPackages: [
      "sarangkot-sunrise-ride",
      "annapurna-base-camp",
      "kathmandu-valley-mtb",
    ],
  },
];

export function getPackageBySlug(slug: string): Package | undefined {
  return packages.find((p) => p.slug === slug);
}

export function getPackagesByCategory(category: Category): Package[] {
  return packages.filter((p) => p.category === category);
}

export function getSimilarPackages(slugs: string[]): Package[] {
  return slugs
    .map((s) => packages.find((p) => p.slug === s))
    .filter(Boolean) as Package[];
}

export const difficultyColor: Record<Difficulty, string> = {
  Easy: "bg-green-600",
  "Easy–Moderate": "bg-green-700",
  Moderate: "bg-yellow-600",
  Challenging: "bg-red-600",
  Expert: "bg-red-800",
  Intermediate: "bg-blue-600",
  Beginner: "bg-green-500",
  "E-MTB": "bg-purple-600",
};
