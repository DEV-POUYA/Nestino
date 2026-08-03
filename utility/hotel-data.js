// Room 1: double luxry - Toronto
import tornto1 from "@/assets/hotel/tornto1.webp";
import tornto2 from "@/assets/hotel/tornto2.webp";
import tornto3 from "@/assets/hotel/tornto3.webp";
import tornto4 from "@/assets/hotel/tornto4.webp";
// Room 2: single comfort - New York
import ny1 from "@/assets/hotel/ny1.webp";
import ny2 from "@/assets/hotel/ny2.webp";
import ny3 from "@/assets/hotel/ny3.webp";
import ny4 from "@/assets/hotel/ny4.webp";
// Room 3: family suite - Paris
import paris1 from "@/assets/hotel/paris1.webp";
import paris2 from "@/assets/hotel/paris2.webp";
import paris3 from "@/assets/hotel/paris3.webp";
import paris4 from "@/assets/hotel/paris4.webp";
// Room 4: deluxe king - Dubai
import dubai1 from "@/assets/hotel/dubai1.webp";
import dubai2 from "@/assets/hotel/dubai2.webp";
import dubai3 from "@/assets/hotel/dubai3.webp";
import dubai4 from "@/assets/hotel/dubai4.webp";
// Room 5: ocean view twin - Phuket
import phuket1 from "@/assets/hotel/phuket1.webp";
import phuket2 from "@/assets/hotel/phuket2.webp";
import phuket3 from "@/assets/hotel/phuket3.webp";
import phuket4 from "@/assets/hotel/phuket4.webp";
// Room 6: executive business - Tokyo
import tokyo1 from "@/assets/hotel/tokyo1.webp";
import tokyo2 from "@/assets/hotel/tokyo2.webp";
import tokyo3 from "@/assets/hotel/tokyo3.webp";
import tokyo4 from "@/assets/hotel/tokyo4.webp";
// Room 7: honeymoon suite - Rome
import rome1 from "@/assets/hotel/rome1.webp";
import rome2 from "@/assets/hotel/rome2.webp";
import rome3 from "@/assets/hotel/rome3.webp";
import rome4 from "@/assets/hotel/rome4.webp";
// Room 8: budget twin - Mumbai
import mumbai1 from "@/assets/hotel/mumbai1.webp";
import mumbai2 from "@/assets/hotel/mumbai2.webp";
import mumbai3 from "@/assets/hotel/mumbai3.webp";
import mumbai4 from "@/assets/hotel/mumbai4.webp";
// Room 9: penthouse luxury - Singapore
import singapore1 from "@/assets/hotel/singapore1.webp";
import singapore2 from "@/assets/hotel/singapore2.webp";
import singapore3 from "@/assets/hotel/singapore3.webp";
import singapore4 from "@/assets/hotel/singapore4.webp";
// Room 10: mountain chalet - Zurich
import zurich1 from "@/assets/hotel/zurich1.webp";
import zurich2 from "@/assets/hotel/zurich2.webp";
import zurich3 from "@/assets/hotel/zurich3.webp";
import zurich4 from "@/assets/hotel/zurich4.webp";
// Room 11: standard queen - Sydney
import sydney1 from "@/assets/hotel/sydney1.webp";
import sydney2 from "@/assets/hotel/sydney2.webp";
import sydney3 from "@/assets/hotel/sydney3.webp";
import sydney4 from "@/assets/hotel/sydney4.webp";
// Room 12: villa pool access - Bali
import bali1 from "@/assets/hotel/bali1.webp";
import bali2 from "@/assets/hotel/bali2.webp";
import bali3 from "@/assets/hotel/bali3.webp";
import bali4 from "@/assets/hotel/bali4.webp";
// Room 13: historic heritage - Barcelona
import barcelona1 from "@/assets/hotel/barcelona1.webp";
import barcelona2 from "@/assets/hotel/barcelona2.webp";
import barcelona3 from "@/assets/hotel/barcelona3.webp";
import barcelona4 from "@/assets/hotel/barcelona4.webp";
// Room 14: eco friendly room - oslo
import norway1 from "@/assets/hotel/norway1.webp";
import norway2 from "@/assets/hotel/norway2.webp";
import norway3 from "@/assets/hotel/norway3.webp";
import norway4 from "@/assets/hotel/norway4.webp";
// Room 15: loft apartment - Berlin
import berlin1 from "@/assets/hotel/berlin1.webp";
import berlin2 from "@/assets/hotel/berlin2.webp";
import berlin3 from "@/assets/hotel/berlin3.webp";
import berlin4 from "@/assets/hotel/berlin4.webp";
// Room 16: royal presidential - London
import london1 from "@/assets/hotel/london1.webp";
import london2 from "@/assets/hotel/london2.webp";
import london3 from "@/assets/hotel/london3.webp";
import london4 from "@/assets/hotel/london4.webp";

const hotelCollection = [
  {
    id: 1,
    name: "double luxry",
    aboutUs:
      "Welcome to double luxury hotel, offering premium comfort and elegant design in the heart of the city. Our spacious rooms are carefully designed to provide both relaxation and sophistication for every guest. Enjoy world-class service, modern amenities, and a memorable stay in one of the finest locations.",
    image: [tornto1, tornto2, tornto3, tornto4],
    rate: "7.5",
    features: [
      "smoking-room",
      "free-wifi",
      "daily-service",
      "air-conditioning",
      "flat-screen-tv",
      "mini-fridge",
      "room-safe",
      "coffee-maker",
      "work-desk",
      "blackout-curtains",
      "bathrobe",
      "hairdryer",
      "24h-reception",
    ],
    price: "120",
    address: "canada , tornto",
    city: "tornto",
    guest: { adults: 2, kids: 1 },
    duration: "3 days",
  },
  {
    id: 2,
    name: "single comfort",
    aboutUs:
      "Welcome to single comfort room, perfect for solo travelers seeking peace and modern amenities. The room offers a quiet atmosphere ideal for rest after a long day of exploring the city. Thoughtful details and essential comforts make your stay simple, convenient, and enjoyable.",
    image: [ny1, ny2, ny3, ny4],
    rate: "8.2",
    features: [
      "non-smoking",
      "free-wifi",
      "room-service",
      "air-conditioning",
      "smart-tv",
      "work-desk",
      "usb-charging",
      "blackout-curtains",
      "tea-coffee",
      "in-room-safe",
      "daily-housekeeping",
      "hairdryer",
      "city-view",
    ],
    price: "85",
    address: "usa , new york",
    city: "new york",
    guest: { adults: 1, kids: 0 },
    duration: "4 days",
  },
  {
    id: 3,
    name: "family suite",
    aboutUs:
      "Welcome to family suite, spacious and child-friendly with beautiful city views. The suite is designed to give families extra space, comfort, and convenience during their stay. Soft lighting, practical furniture, and thoughtful amenities create a warm and welcoming environment for everyone.",
    image: [paris1, paris2, paris3, paris4],
    rate: "9.1",
    features: [
      "kitchenette",
      "free-wifi",
      "daily-service",
      "family-friendly",
      "two-bedrooms",
      "sofa-bed",
      "kids-amenities",
      "microwave",
      "dining-area",
      "city-view",
      "air-conditioning",
      "smart-tv",
      "washing-machine",
    ],
    price: "175",
    address: "france , paris",
    city: "paris",
    guest: { adults: 2, kids: 2 },
    duration: "4 days",
  },
  {
    id: 4,
    name: "deluxe king",
    aboutUs:
      "Welcome to deluxe king room, luxurious bedding and stunning skyline panorama. Wake up to breathtaking views and sink into premium mattresses designed for deep rest. Every detail, from lighting to textiles, has been carefully selected to deliver a refined experience.",
    image: [dubai1, dubai2, dubai3, dubai4],
    rate: "8.7",
    features: [
      "king-bed",
      "free-wifi",
      "spa-access",
      "mini-bar",
      "skyline-view",
      "rain-shower",
      "bath-tub",
      "nespresso",
      "walk-in-closet",
      "smart-tv",
      "bluetooth-speaker",
      "premium-toiletries",
      "turndown-service",
    ],
    price: "155",
    address: "uae , dubai",
    city: "dubai",
    guest: { adults: 2, kids: 0 },
    duration: "3 days",
  },
  {
    id: 5,
    name: "ocean view twin",
    aboutUs:
      "Welcome to ocean view twin, wake up to breathtaking sea views and fresh air. The twin beds are ideal for friends or colleagues traveling together. Large windows frame the ocean, filling the room with natural light and a calm coastal atmosphere.",
    image: [phuket1, phuket2, phuket3, phuket4],
    rate: "8.9",
    features: [
      "ocean-view",
      "free-wifi",
      "daily-service",
      "twin-beds",
      "balcony",
      "air-conditioning",
      "mini-fridge",
      "tea-coffee",
      "outdoor-seating",
      "mosquito-net",
      "beach-towels",
      "safety-box",
      "rain-shower",
    ],
    price: "140",
    address: "thailand , phuket",
    city: "phuket",
    guest: { adults: 2, kids: 0 },
    duration: "5 days",
  },
  {
    id: 6,
    name: "executive business",
    aboutUs:
      "Welcome to executive business room, designed for productivity with ergonomic workspace. High-speed internet and a quiet environment help you stay focused during your trip. After work, enjoy comfortable seating and thoughtful amenities that support both business and rest.",
    image: [tokyo1, tokyo2, tokyo3, tokyo4],
    rate: "7.8",
    features: [
      "work-desk",
      "free-wifi",
      "business-center",
      "non-smoking",
      "ergonomic-chair",
      "printer-access",
      "express-checkout",
      "iron-board",
      "coffee-machine",
      "blackout-curtains",
      "soundproof-windows",
      "usb-ports",
      "daily-newspaper",
    ],
    price: "165",
    address: "japan , tokyo",
    city: "tokyo",
    guest: { adults: 1, kids: 0 },
    duration: "3 days",
  },
  {
    id: 7,
    name: "honeymoon suite",
    aboutUs:
      "Welcome to honeymoon suite, romantic ambiance with jacuzzi and candlelight dinner option. Soft lighting, elegant décor, and private atmosphere create the perfect setting for couples. Every detail is designed to make your special moments unforgettable.",
    image: [rome1, rome2, rome3, rome4],
    rate: "9.5",
    features: [
      "jacuzzi",
      "free-wifi",
      "romantic-decor",
      "daily-service",
      "king-bed",
      "champagne-on-arrival",
      "private-balcony",
      "candle-setup",
      "rose-petals",
      "bath-robes",
      "premium-toiletries",
      "mood-lighting",
      "late-checkout",
    ],
    price: "190",
    address: "italy , rome",
    city: "rome",
    guest: { adults: 2, kids: 0 },
    duration: "4 days",
  },
  {
    id: 8,
    name: "budget twin",
    aboutUs:
      "Welcome to budget twin room, clean, comfortable and great value for money. Ideal for travelers who want essential comfort without unnecessary extras. The room is practical, well-maintained, and located in a convenient area for exploring the city.",
    image: [mumbai1, mumbai2, mumbai3, mumbai4],
    rate: "6.9",
    features: [
      "free-wifi",
      "daily-service",
      "twin-beds",
      "air-conditioning",
      "shared-bathroom",
      "locker",
      "fan",
      "reading-light",
      "power-outlets",
      "clean-linen",
      "towel-service",
      "24h-reception",
      "luggage-storage",
    ],
    price: "80",
    address: "india , mumbai",
    city: "mumbai",
    guest: { adults: 2, kids: 0 },
    duration: "5 days",
  },
  {
    id: 9,
    name: "penthouse luxury",
    aboutUs:
      "Welcome to penthouse luxury, ultimate indulgence with private terrace and city lights. Enjoy panoramic views and exclusive privacy at the top of the building. Personalized service and premium finishes make this suite a true statement of luxury.",
    image: [singapore1, singapore2, singapore3, singapore4],
    rate: "9.8",
    features: [
      "private-terrace",
      "free-wifi",
      "butler-service",
      "spa-access",
      "panoramic-view",
      "private-dining",
      "walk-in-closet",
      "smart-home",
      "wine-cooler",
      "outdoor-lounge",
      "rain-shower",
      "jacuzzi",
      "limousine-service",
    ],
    price: "200",
    address: "singapore , singapore",
    city: "singapore",
    guest: { adults: 2, kids: 1 },
    duration: "3 days",
  },
  {
    id: 10,
    name: "mountain chalet",
    aboutUs:
      "Welcome to mountain chalet style room, cozy fireplace and alpine views. Warm wooden interiors and soft textiles create a relaxing retreat after a day outdoors. The peaceful setting and natural surroundings make it perfect for nature lovers.",
    image: [zurich1, zurich2, zurich3, zurich4],
    rate: "8.4",
    features: [
      "fireplace",
      "free-wifi",
      "mountain-view",
      "wooden-interior",
      "heated-floors",
      "balcony",
      "tea-coffee",
      "extra-blankets",
      "boot-dryer",
      "ski-storage",
      "bath-robes",
      "mini-bar",
      "sound-system",
    ],
    price: "150",
    address: "switzerland , zurich",
    city: "zurich",
    guest: { adults: 2, kids: 1 },
    duration: "4 days",
  },
  {
    id: 11,
    name: "standard queen",
    aboutUs:
      "Welcome to standard queen room, reliable comfort for every traveler. A comfortable queen bed and clean modern design provide everything you need for a pleasant stay. Practical amenities and a calm atmosphere ensure a restful experience.",
    image: [sydney1, sydney2, sydney3, sydney4],
    rate: "7.2",
    features: [
      "queen-bed",
      "free-wifi",
      "daily-service",
      "air-conditioning",
      "flat-screen-tv",
      "work-desk",
      "tea-coffee",
      "iron",
      "hairdryer",
      "in-room-safe",
      "blackout-curtains",
      "usb-charging",
      "city-view",
    ],
    price: "95",
    address: "australia , sydney",
    city: "sydney",
    guest: { adults: 2, kids: 0 },
    duration: "4 days",
  },
  {
    id: 12,
    name: "villa pool access",
    aboutUs:
      "Welcome to villa with direct pool access, private and exclusive experience. Step out of your room straight into the pool for ultimate convenience and privacy. Lush surroundings and open-air living create a true tropical escape.",
    image: [bali1, bali2, bali3, bali4],
    rate: "9.3",
    features: [
      "private-pool",
      "free-wifi",
      "villa-style",
      "outdoor-shower",
      "garden-view",
      "daybed",
      "mini-bar",
      "mosquito-net",
      "open-air-bathroom",
      "sun-loungers",
      "ceiling-fan",
      "tea-coffee",
      "butler-service",
    ],
    price: "185",
    address: "bali , indonesia",
    city: "bali",
    guest: { adults: 2, kids: 2 },
    duration: "6 days",
  },
  {
    id: 13,
    name: "historic heritage",
    aboutUs:
      "Welcome to historic heritage room, blend of old-world charm and modern luxury. Original architectural details meet contemporary comfort in a unique setting. Guests can enjoy the character of the past while benefiting from today’s amenities.",
    image: [barcelona1, barcelona2, barcelona3, barcelona4],
    rate: "8.6",
    features: [
      "heritage-design",
      "free-wifi",
      "daily-service",
      "high-ceilings",
      "antique-furniture",
      "modern-bathroom",
      "air-conditioning",
      "smart-tv",
      "work-desk",
      "tea-coffee",
      "bath-robes",
      "premium-toiletries",
      "city-view",
    ],
    price: "145",
    address: "spain , barcelona",
    city: "barcelona",
    guest: { adults: 2, kids: 0 },
    duration: "3 days",
  },
  {
    id: 14,
    name: "eco friendly room",
    aboutUs:
      "Welcome to eco-friendly room, sustainable luxury with natural materials. Thoughtfully designed to reduce environmental impact without compromising comfort. Organic textiles, energy-efficient systems, and calming natural tones create a peaceful retreat.",
    image: [norway1, norway2, norway3, norway4],
    rate: "8.1",
    features: [
      "eco-materials",
      "free-wifi",
      "solar-powered",
      "organic-bedding",
      "low-flow-shower",
      "recycling-bin",
      "natural-toiletries",
      "energy-saving-lights",
      "air-purifier",
      "wooden-floors",
      "plant-decor",
      "tea-coffee",
      "bike-rental",
    ],
    price: "110",
    address: "Norway , oslo",
    city: "norway",
    guest: { adults: 1, kids: 0 },
    duration: "3 days",
  },
  {
    id: 15,
    name: "loft apartment",
    aboutUs:
      "Welcome to loft apartment style room, open space and industrial chic design. High ceilings and large windows create a bright and airy atmosphere. The flexible layout is perfect for both short stays and longer visits in the city.",
    image: [berlin1, berlin2, berlin3, berlin4],
    rate: "8.0",
    features: [
      "open-layout",
      "free-wifi",
      "kitchenette",
      "high-ceilings",
      "large-windows",
      "sofa-area",
      "dining-table",
      "smart-tv",
      "washer-dryer",
      "work-desk",
      "exposed-brick",
      "bluetooth-speaker",
      "city-view",
    ],
    price: "130",
    address: "germany , berlin",
    city: "berlin",
    guest: { adults: 2, kids: 1 },
    duration: "3 days",
  },
  {
    id: 16,
    name: "royal presidential",
    aboutUs:
      "Welcome to royal presidential suite, the pinnacle of opulence and privacy. Expansive living areas, exquisite furnishings, and personalized service define this exclusive experience. Every detail is crafted to exceed the expectations of the most discerning guests.",
    image: [london1, london2, london3, london4],
    rate: "9.9",
    features: [
      "presidential",
      "free-wifi",
      "private-butler",
      "spa",
      "multiple-bedrooms",
      "private-dining",
      "walk-in-closet",
      "jacuzzi",
      "panoramic-view",
      "limousine",
      "personal-chef",
      "wine-cellar",
      "security-service",
    ],
    price: "195",
    city: "london",
    guest: { adults: 2, kids: 2 },
    duration: "4 days",
  },
];

export default hotelCollection;
