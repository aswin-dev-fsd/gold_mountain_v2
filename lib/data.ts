export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Wellness", href: "/wellness" },
  { label: "Stay", href: "/stay" },
  { label: "Experience", href: "/experience" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const CONTACT_INFO = {
  phone: "+91 94296 94026",
  phoneFormatted: "+91 94296 94026",
  whatsapp: "919429694026",
  whatsappUrl: "https://wa.me/919429694026?text=Hello%20Gold%20Mountain%20Wellness%20Resort,%20I%20would%20like%20to%20enquire%20about%20a%20stay.",
  email: "enquiry@goldmountainresort.com",
  address: "No.97, Kotangal Road, Adiannamalai, Tiruvannamalai, Tamil Nadu 606604, India",
  googleMapsUrl: "https://maps.google.com/?q=No.97,+Kotangal+Road,+Adiannamalai,+Tiruvannamalai,+Tamil+Nadu+606604,+India",
  hours: "Front desk & enquiries: 9:00 AM – 8:00 PM IST",
};

export interface WellnessPillar {
  id: string;
  title: string;
  badge: string;
  subtitle: string;
  description: string;
  image: string;
  details: string[];
}

export const WELLNESS_PILLARS: WellnessPillar[] = [
  {
    id: "body",
    title: "Body",
    badge: "01 / RESTORATION",
    subtitle: "Ayurveda & Traditional Therapies",
    description: "Time-tested therapies rooted in traditional Ayurveda, tailored to your individual constitution (Prakriti) to restore balance and support natural vitality.",
    image: "/assets/images/pillar-body.jpg",
    details: ["Abhyanga warm oil massage", "Herbal steam and scrubs", "Individual Ayurvedic assessment", "Constitutional balance"],
  },
  {
    id: "mind",
    title: "Mind",
    badge: "02 / STILLNESS",
    subtitle: "Yoga & Meditation",
    description: "Cultivate stillness, emotional clarity, and gentle physical alignment in quiet open-air pavilions overlooking the peaceful foothills of Arunachala.",
    image: "/assets/images/pillar-mind.jpg",
    details: ["Gentle restorative Hatha yoga", "Guided breathwork (Pranayama)", "Sunset silent meditation", "Mindful contemplative walking"],
  },
  {
    id: "food",
    title: "Food",
    badge: "03 / NOURISHMENT",
    subtitle: "Nourishing Sattvic Meals",
    description: "Wholesome, seasonal meals crafted from farm-grown vegetables and healing herbal garden produce, honoring Ayurvedic culinary wisdom.",
    image: "/assets/images/pillar-food.jpg",
    details: ["Zero artificial additives", "Farm-fresh daily harvest", "Digestive herbal infusions", "Tailored dietary recommendations"],
  },
  {
    id: "lifestyle",
    title: "Lifestyle",
    badge: "04 / RHYTHM",
    subtitle: "Daily Wellness Rituals",
    description: "Simple, enduring practices that align with natural circadian rhythms, empowering you to carry sustainable restorative habits back home.",
    image: "/assets/images/pillar-lifestyle.jpg",
    details: ["Early morning awakening rituals", "Mindful digital boundaries", "Evening quiet contemplation", "Personalized lifestyle guidance"],
  },
  {
    id: "environment",
    title: "Environment",
    badge: "05 / PRESENCE",
    subtitle: "Nature & Sacred Surroundings",
    description: "The serene presence of holy Arunachala to the east and Parvati Malai to the west creates an uninterrupted sanctuary of peace and clean air.",
    image: "/assets/images/pillar-environment.jpg",
    details: ["Unobstructed mountain views", "Lush native tropical gardens", "Quiet outdoor reading pavilions", "Clean rural air and birdlife"],
  },
];

export interface Therapy {
  id: string;
  title: string;
  type: string;
  description: string;
  image: string;
  duration: string;
  benefits: string[];
}

export const THERAPIES: Therapy[] = [
  {
    id: "abhyanga",
    title: "Abhyanga",
    type: "Full Body Herb-Infused Massage",
    description: "A synchronized full-body massage using warm medicinal oils tailored to your dosha, encouraging lymphatic drainage, skin nourishment, and deep neuromuscular relaxation.",
    image: "/assets/images/therapy-abhyanga.jpg",
    duration: "60–75 mins",
    benefits: ["Detoxification and lymphatic flow", "Relieves muscle stiffness and tension", "Nourishes skin and joints"],
  },
  {
    id: "shirodhara",
    title: "Shirodhara",
    type: "Continuous Warm Herbal Oil Flow",
    description: "A rhythmic, continuous stream of warm herbal oil poured gently over the third eye (forehead), deeply soothing the autonomic nervous system and calming mental chatter.",
    image: "/assets/images/therapy-shirodhara.jpg",
    duration: "45–60 mins",
    benefits: ["Calms anxious thoughts and mental stress", "Supports deep, restorative sleep", "Enhances mental clarity and focus"],
  },
  {
    id: "pinda-sweda",
    title: "Pinda Sweda",
    type: "Herbal Bolus Thermal Therapy",
    description: "Warm linen boluses filled with therapeutic leaves and roots are massaged over the entire body, easing joint stiffness, soothing aches, and opening energy pathways.",
    image: "/assets/images/therapy-pinda-sweda.jpg",
    duration: "60 mins",
    benefits: ["Relieves stiffness and joint discomfort", "Enhances peripheral circulation", "Induces soothing cellular warmth"],
  },
  {
    id: "udwarthanam",
    title: "Udwarthanam",
    type: "Herbal Powder Exfoliation Therapy",
    description: "A vigorous upward massage using finely ground herbal powders that exfoliates skin, stimulates subcutaneous micro-circulation, and supports natural metabolism.",
    image: "/assets/images/therapy-udwarthanam.jpg",
    duration: "45–60 mins",
    benefits: ["Exfoliates and tones skin texture", "Stimulates metabolic vitality", "Helps clear lymphatic sluggishness"],
  },
  {
    id: "ayurvedic-consultation",
    title: "Ayurvedic Consultation",
    type: "Comprehensive Constitution Assessment",
    description: "One-on-one consultation with experienced Ayurvedic practitioners to analyze your unique Prakriti, current balance, and craft your individual wellness pathway.",
    image: "/assets/images/therapy-consultation.jpg",
    duration: "45 mins",
    benefits: ["Constitution & dosha mapping", "Customized dietary roadmap", "Recommended therapy sequence"],
  },
];

export interface WellnessPackage {
  id: string;
  name: string;
  duration: string;
  days: number;
  shortDesc: string;
  inclusions: string[];
  priceInr: string;
  indicativeUsd: string;
  indicativeEur: string;
  idealFor: string;
}

export const WELLNESS_PACKAGES: WellnessPackage[] = [
  {
    id: "7-day-wellness-journey",
    name: "7-Day Wellness Journey",
    duration: "7 Days / 6 Nights",
    days: 7,
    shortDesc: "A focused reset to dissolve accumulated fatigue, restore healthy digestive rhythms, and introduce daily mindfulness practices.",
    inclusions: [
      "Initial Ayurvedic consultation & constitutional evaluation",
      "Daily personalized Ayurvedic treatments (60–90 min)",
      "Morning restorative yoga & breathwork",
      "Evening guided meditation sessions",
      "All three Sattvic farm-to-table meals daily",
      "Herbal teas and restorative broths throughout the day",
    ],
    priceInr: "₹45,000",
    indicativeUsd: "$540",
    indicativeEur: "€500",
    idealFor: "Guests seeking a concise reset and introduction to traditional wellness.",
  },
  {
    id: "14-day-healing-retreat",
    name: "14-Day Healing Retreat",
    duration: "14 Days / 13 Nights",
    days: 14,
    shortDesc: "A transformative deep-tissue and nervous-system rejuvenation journey to untangle long-held stress patterns and restore vitality.",
    inclusions: [
      "Detailed Ayurvedic diagnostic assessment and progress reviews",
      "Comprehensive daily therapies (Abhyanga, Shirodhara, Swedana)",
      "Daily morning Hatha yoga and evening Pranayama",
      "Personalized Sattvic meal regimen tailored to digestive capacity",
      "Guided herbal garden & organic farm tours",
      "Private meditation sessions facing Arunachala",
    ],
    priceInr: "₹88,000",
    indicativeUsd: "$1,050",
    indicativeEur: "€970",
    idealFor: "Guests recovering from professional burnout or seeking profound rejuvenation.",
  },
  {
    id: "21-day-ayurveda-program",
    name: "21-Day Ayurveda Program",
    duration: "21 Days / 20 Nights",
    days: 21,
    shortDesc: "The complete traditional cycle of preparation, gentle elimination, and deep rejuvenation (Rasayana) for enduring holistic balance.",
    inclusions: [
      "Full cycle of Ayurvedic healing and rejuvenation protocols",
      "Multiple specialized daily therapies and customized herbal infusions",
      "Dedicated practitioner guidance and lifestyle coaching",
      "Daily private yoga therapy and meditative stillness practice",
      "Complete bespoke nourishing meal plan from farm harvest",
      "Follow-up lifestyle roadmap to continue practices at home",
    ],
    priceInr: "₹1,25,000",
    indicativeUsd: "$1,500",
    indicativeEur: "€1,380",
    idealFor: "Guests seeking comprehensive bodily renewal and lifestyle realignment.",
  },
  {
    id: "monthly-wellness-stay",
    name: "Monthly Wellness Stay",
    duration: "30 Days / 29 Nights",
    days: 30,
    shortDesc: "An immersive extended sanctuary stay combining peaceful long-term living, flexible wellness therapies, and quiet connection to nature.",
    inclusions: [
      "Comfortable long-stay accommodation in tranquil surroundings",
      "Weekly practitioner consultations and tailored treatments",
      "Full access to daily morning yoga and evening meditation",
      "Nutritious organic farm-to-table dining plan",
      "Quiet workspaces, high-speed Wi-Fi, and peaceful reading areas",
      "Guided Arunachala walks and rural nature immersions",
    ],
    priceInr: "₹1,25,000",
    indicativeUsd: "$1,500",
    indicativeEur: "€1,380",
    idealFor: "Sabbaticals, writers, meditators, and those seeking an intentional slow living lifestyle.",
  },
];

export interface StayType {
  id: string;
  name: string;
  tagline: string;
  description: string;
  targetAudience: string;
  highlights: string[];
}

export const STAY_TYPES: StayType[] = [
  {
    id: "short-stay",
    name: "Short Stay",
    tagline: "Flexible Sanctuary for Explorers",
    description: "Comfortable, quiet accommodation for travelers visiting Tiruvannamalai who desire a serene base close to nature with complete freedom to plan their days.",
    targetAudience: "Pilgrims, solo travelers, and weekend visitors seeking peaceful rest.",
    highlights: ["Flexible length of stay", "Access to resort gardens and dining", "Optional à la carte wellness sessions", "Quiet rooms with mountain views"],
  },
  {
    id: "wellness-stay",
    name: "Wellness Stay",
    tagline: "Accommodation + Daily Healing Rhythm",
    description: "Our signature stay combining peaceful resort accommodation with daily confirmed yoga, meditation, and flexible Ayurvedic therapy sessions.",
    targetAudience: "Guests who want wellness woven naturally into their daily rhythm.",
    highlights: ["Accommodation included", "Daily morning yoga & evening meditation", "Tailored treatment schedule", "Wholesome Sattvic breakfast & meals"],
  },
  {
    id: "monthly-stay",
    name: "Monthly Stay",
    tagline: "Extended Living in Nature",
    description: "Substantial long-stay living designed for deeper rest, creative reflection, remote focus, and gradual lifestyle restoration.",
    targetAudience: "Guests on sabbatical, writers, spiritual seekers, and long-stay guests.",
    highlights: ["Special monthly residence pricing", "Private peaceful terrace room", "Flexible laundry & housekeeping", "Full access to property amenities"],
  },
];

export interface Room {
  id: string;
  name: string;
  category: string;
  image: string;
  capacity: string;
  description: string;
  amenities: string[];
  priceNote: string;
}

export const ROOMS: Room[] = [
  {
    id: "deluxe-forest-suite",
    name: "Deluxe Forest Suite",
    category: "Sanctuary View",
    image: "/assets/images/resort-room.jpg",
    capacity: "Up to 2 Adults",
    description: "Thoughtfully designed with natural local timbers, expansive glass sliding doors opening onto a private veranda, and serene views across the tropical garden canopy toward the mountain ridges.",
    amenities: ["Private covered balcony with loungers", "King-size bed with organic cotton linen", "Quiet climate control & ceiling fans", "En-suite bathroom with natural stone finishes", "Organic herbal bath amenities", "High-speed Wi-Fi & work desk"],
    priceNote: "[PRICE TO BE CONFIRMED UPON ENQUIRY]",
  },
  {
    id: "garden-cottage",
    name: "Garden Cottage",
    category: "Nature Cottage",
    image: "/assets/images/resort-terrace.png",
    capacity: "Up to 2 Adults",
    description: "Detached ground-floor cottage set right amidst the herbal flora and fragrant fruit trees. Features a shaded sit-out veranda ideal for morning reading, gentle tea sipping, and bird watching.",
    amenities: ["Spacious ground-floor veranda", "Queen or twin bedding options", "Direct walkway into the herbal garden", "Spacious airy shower with rain head", "Electric kettle with organic teas", "Quiet writing desk"],
    priceNote: "[PRICE TO BE CONFIRMED UPON ENQUIRY]",
  },
  {
    id: "mountain-view-retreat",
    name: "Mountain View Retreat Room",
    category: "Panoramic Ridge View",
    image: "/assets/images/resort-gardens.png",
    capacity: "Up to 3 Adults",
    description: "Elevated suites boasting unobstructed vistas of the sacred Arunachala sunrise to the east and the gentle folds of Parvati Malai to the west. Spacious layout with natural ventilation and daylight.",
    amenities: ["Panoramic mountain-facing balcony", "Spacious daybed / reading nook", "King bed with artisanal handwoven textiles", "Spacious dressing area and luggage bench", "Organic tea bar & fresh filtered spring water", "24-hour attentive guest support"],
    priceNote: "[PRICE TO BE CONFIRMED UPON ENQUIRY]",
  },
];

export interface ExperienceItem {
  id: string;
  title: string;
  category: string;
  image: string;
  summary: string;
  description: string;
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "shiva-shakti-darshanam",
    title: "Shiva Shakthi Darshanam",
    category: "Sacred & Spiritual",
    image: "/assets/images/exp-shiva-shakti.jpg",
    summary: "Reflecting on the sacred balance between Arunachala and Parvati Malai.",
    description: "Gold Mountain is nestled between Arunachala to the east (traditionally representing Shiva / divine stillness) and Parvati Malai to the west (representing Shakti / divine vitality). Guests experience this serene geographic and contemplative balance throughout their stay.",
  },
  {
    id: "the-cow-shelter",
    title: "The Cow Shelter",
    category: "Nature & Farm Life",
    image: "/assets/images/exp-cow-shelter.jpg",
    summary: "Compassionate connection with indigenous cows nurtured in calm rural rhythm.",
    description: "Our on-site cow shelter provides a compassionate sanctuary for indigenous Indian cattle. Guests are invited to spend quiet, respectful moments participating in gentle care, feeding, and experiencing their calming presence.",
  },
  {
    id: "the-fish-pond",
    title: "The Fish Pond",
    category: "Healing Environment",
    image: "/assets/images/exp-fish-pond.jpg",
    summary: "Reflective water feature designed for quiet contemplation and mindfulness.",
    description: "A natural freshwater pond surrounded by water lilies, lotus blooms, and shaded stone sitting areas. Designed as an anchor of stillness where guests can sit in silence, listen to the gentle ripple of water, and watch fish glide.",
  },
  {
    id: "herbal-garden",
    title: "Herbal Garden",
    category: "Nature & Farm Life",
    image: "/assets/images/exp-herbal-garden.jpg",
    summary: "Living repository of traditional Ayurvedic botanicals, tulsi, and medicinal herbs.",
    description: "Stroll through rows of medicinal plants including Tulsi, Brahmi, Ashwagandha, and Neem. Our resident herbalists explain the therapeutic properties and how these very leaves are freshly harvested for daily healing broths and steam therapies.",
  },
  {
    id: "farm-fresh-vegetables",
    title: "Organic Farm & Fresh Harvest",
    category: "Nature & Farm Life",
    image: "/assets/images/exp-farm-vegetables.jpg",
    summary: "Experience seasonal agriculture rooted in honest, chemical-free earth.",
    description: "Our organic farm fields supply the resort kitchen with heirloom vegetables, greens, and gourds. Witness the journey of your food from soil to table and experience how eating produce harvested hours earlier revitalizes digestion.",
  },
  {
    id: "five-element-philosophy",
    title: "Five Element Experience",
    category: "Healing Environment",
    image: "/assets/images/exp-five-elements.jpg",
    summary: "Architecture and open spaces honoring Earth, Water, Fire, Air, and Space.",
    description: "Every dimension of Gold Mountain is oriented toward the five fundamental cosmic elements (Pancha Mahabhutas). From open-air stone courtyards to soothing water ponds, the environment harmonizes your inner nature with the outer world.",
  },
];

export interface BlogPost {
  slug: string;
  title: string;
  category: "Wellness" | "Ayurveda" | "Food" | "Nature" | "Arunachala" | "Life at Gold Mountain";
  excerpt: string;
  readTime: string;
  date: string;
  image: string;
  content: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "sacred-geography-arunachala-international-traveler-guide",
    title: "The Sacred Geography of Arunachala: An International Traveler's Guide",
    category: "Arunachala",
    excerpt: "Understanding the ancient significance of Tiruvannamalai, the energy of Arunachala, and how to approach your visit with respect and curiosity.",
    readTime: "6 min read",
    date: "September 2026",
    image: "/assets/images/hero-landscape-alt.png",
    content: [
      "Rising abruptly from the plains of Tamil Nadu, Mount Arunachala has drawn spiritual seekers, pilgrims, and quiet wanderers for thousands of years. In ancient Vedic lore, it is revered as Tejolinga—a physical embodiment of pure divine fire and inner stillness.",
      "For an international traveler arriving for the first time, Tiruvannamalai may feel both vibrant and profoundly still. The ancient circumambulation path (Girivalam) circles the mountain for 14 kilometers, walked by millions during full moons, yet offering contemplative quiet at dawn.",
      "Gold Mountain is intentionally situated on the tranquil outskirts near Adiannamalai, providing an unobstructed view of Arunachala's eastern face while resting against the tranquil horizon of Parvati Malai to the west. Here, the mountain is not simply scenic decoration—it is an anchor of silence that gently invites the mind to rest.",
    ],
  },
  {
    slug: "ayurvedic-nutrition-food-as-nourishment-and-healing",
    title: "Food as Nourishment: The Ayurvedic Philosophy of Sattvic Living",
    category: "Food",
    excerpt: "How freshly harvested vegetables, mindful digestion, and balanced spices transform everyday dining into an integral wellness practice.",
    readTime: "5 min read",
    date: "September 2026",
    image: "/assets/images/nourishing-food.jpg",
    content: [
      "In classical Ayurveda, nourishment is recognized as one of the three foundational pillars of life (Ahara). What you eat directly feeds not only your muscular and cellular tissues, but the clarity of your mental states.",
      "At Gold Mountain, dining is conceived as an extension of the healing journey. We avoid heavy, overly oily, or heavily spiced preparations in favor of Sattvic meals: light, freshly cooked, seasonal dishes prepared with produce harvested directly from our surrounding organic farm.",
      "By eating in alignment with your personal digestive fire (Agni)—giving the stomach space to rest between meals and drinking warm herbal infusions—the body naturally sheds lethargy and regains radiant vitality.",
    ],
  },
  {
    slug: "finding-stillness-in-tiruvannamalai-preparing-for-your-wellness-stay",
    title: "Finding Stillness: Preparing for Your First Wellness Stay",
    category: "Wellness",
    excerpt: "What to expect during a retreat at Gold Mountain, what to pack, and how to transition gently into a slower, restorative rhythm of living.",
    readTime: "7 min read",
    date: "September 2026",
    image: "/assets/images/meditation-valley.jpg",
    content: [
      "Modern life accelerates our internal pace to a tempo that the nervous system was never built to sustain permanently. Arriving at a dedicated wellness resort requires a conscious softening—allowing yourself permission to stop rushing.",
      "At Gold Mountain, there are no rigid clocks or overwhelming schedules. Your days unfold in a natural arc: waking with gentle sunrise light, practicing restorative morning yoga, receiving nurturing herbal therapies, eating wholesome meals, and resting in the presence of the mountain.",
      "We encourage guests to arrive with an open mindset. Bring comfortable, breathable cotton clothing, a journal for reflections, and a willingness to unplug from digital urgency. Our team is here to support every step of your personal journey.",
    ],
  },
  {
    slug: "five-elements-pancha-mahabhutas-healing-environment",
    title: "The Five Elements in Daily Living: Restoring Balance from Within",
    category: "Ayurveda",
    excerpt: "Exploring Earth, Water, Fire, Air, and Space, and how harmonizing these elemental energies brings profound mental and physical balance.",
    readTime: "6 min read",
    date: "September 2026",
    image: "/assets/images/exp-five-elements.jpg",
    content: [
      "According to ancient philosophy, everything in the cosmos—from the towering granite of Arunachala to our smallest bodily cell—is composed of five elements: Prithvi (Earth), Jala (Water), Tejas (Fire), Vayu (Air), and Akasha (Space).",
      "When we spend years surrounded by concrete, artificial lighting, and digital screens, our elemental connection weakens, leading to fatigue, anxiety, and digestive imbalance.",
      "By immersing yourself in natural surroundings—feeling the earth underfoot in our gardens, watching reflective water in our lily pond, soaking in natural sunlight, breathing unpolluted mountain air, and sitting in spacious silence—your body intuitively remembers how to heal itself.",
    ],
  },
  {
    slug: "from-seed-to-plate-inside-gold-mountain-organic-farm",
    title: "From Seed to Plate: Cultivating Wholeness on Our Land",
    category: "Nature",
    excerpt: "A glimpse into our chemical-free farming methods, indigenous seeds, and the dedicated gardeners who nourish the Gold Mountain table.",
    readTime: "4 min read",
    date: "September 2026",
    image: "/assets/images/exp-farm-vegetables.jpg",
    content: [
      "True wellness cannot begin in a factory or from a processed packet. It begins in rich, unadulterated soil nurtured by sunshine, natural compost, and clean irrigation water.",
      "The Gold Mountain farm is managed using traditional organic practices without synthetic pesticides or chemical stimulants. We cultivate local varieties of pumpkin, ridge gourd, okra, leafy greens, and native root vegetables that are naturally adapted to the Tiruvannamalai climate.",
      "Guests are always welcome to walk through the farm plots in the early morning, speak with our gardeners, and experience the simple joy of plucking fresh herbs directly from the soil.",
    ],
  },
  {
    slug: "morning-to-nightfall-a-typical-day-at-gold-mountain",
    title: "Morning to Nightfall: A Day in the Rhythm of Gold Mountain",
    category: "Life at Gold Mountain",
    excerpt: "Walk with us through a typical day of sunrise yoga, therapeutic treatments, wholesome food, and twilight silence.",
    readTime: "5 min read",
    date: "September 2026",
    image: "/assets/images/resort-architecture.png",
    content: [
      "Dawn breaks over Arunachala with a soft golden glow. The resort stirs gently as the birds begin their morning song. Guests gather in the open pavilion for gentle joint-loosening movements, mindful breathwork, and quiet contemplation.",
      "By mid-morning, following a light Sattvic breakfast of warm stewed fruits and herbal infusion, individual therapy sessions begin. In the tranquil treatment rooms, warm herbal oils are applied by caring hands, releasing tension stored deep within the muscles.",
      "The afternoon offers spacious freedom: reading in a garden hammock, wandering the herbal garden, or resting in the cool shade of your private veranda. As dusk descends and the temple bells echo softly in the distance, a nourishing dinner is served, followed by twilight meditation under starry rural skies.",
    ],
  },
];
