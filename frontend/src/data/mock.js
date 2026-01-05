// Mock data for Driada Restaurant

export const restaurantInfo = {
  name: "DRIADA",
  tagline: "Tradition at the Peak of Taste",
  subtitle: "An authentic mountain dining experience near the slopes.",
  address: "Alpine Valley Road 42, Near Ski Resort",
  phone: "+1 (555) 123-4567",
  email: "reservations@driada.com",
  hours: {
    weekdays: "12:00 PM - 10:00 PM",
    weekends: "11:00 AM - 11:00 PM"
  }
};

export const navigation = [
  { name: "Home", href: "#home" },
  { name: "Menu", href: "#menu" },
  { name: "Our Story", href: "#story" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reservations", href: "#reservations" },
  { name: "Contact", href: "#contact" }
];

export const signatureDishes = [
  {
    id: 1,
    name: "Mountain Lamb Stew",
    description: "Slow-braised lamb with root vegetables and aromatic herbs, a cherished family recipe passed down through generations.",
    price: "$38",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80"
  },
  {
    id: 2,
    name: "Traditional Cheese Pie",
    description: "Golden layers of handmade phyllo filled with local mountain cheese and fresh herbs.",
    price: "$24",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80"
  },
  {
    id: 3,
    name: "Slow-Cooked Veal",
    description: "Tender veal roasted with wild mushrooms and served with creamy polenta.",
    price: "$45",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80"
  },
  {
    id: 4,
    name: "Homemade Desserts",
    description: "Traditional alpine pastries with seasonal berries and fresh mountain cream.",
    price: "$16",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80"
  }
];

export const menuCategories = [
  {
    name: "Starters",
    items: [
      { name: "Mountain Cheese Board", description: "Selection of aged local cheeses with honey and nuts", price: "$22" },
      { name: "Wild Mushroom Soup", description: "Creamy forest mushroom bisque with truffle oil", price: "$16" },
      { name: "Cured Meats Platter", description: "Traditional alpine cured meats with pickled vegetables", price: "$26" },
      { name: "Warm Goat Cheese Salad", description: "Fresh greens with baked goat cheese and walnuts", price: "$18" }
    ]
  },
  {
    name: "Main Courses",
    items: [
      { name: "Mountain Lamb Stew", description: "Slow-braised lamb with root vegetables", price: "$38" },
      { name: "Pan-Seared Trout", description: "Local river trout with alpine herbs and lemon butter", price: "$34" },
      { name: "Venison Medallions", description: "Wild venison with berry reduction and seasonal vegetables", price: "$48" },
      { name: "Traditional Cheese Fondue", description: "Melted local cheeses served with crusty bread (for 2)", price: "$56" }
    ]
  },
  {
    name: "Desserts",
    items: [
      { name: "Apple Strudel", description: "Warm apple pastry with vanilla ice cream", price: "$14" },
      { name: "Chocolate Fondant", description: "Rich chocolate cake with molten center", price: "$16" },
      { name: "Berry Tart", description: "Seasonal berries on vanilla custard", price: "$15" },
      { name: "Cheese Selection", description: "Local cheeses with fruit compote", price: "$18" }
    ]
  },
  {
    name: "Local Wines",
    items: [
      { name: "Alpine Red Reserve", description: "Full-bodied red with notes of dark fruit", price: "$52/bottle" },
      { name: "Mountain White", description: "Crisp white wine with citrus undertones", price: "$46/bottle" },
      { name: "Rosé de Montagne", description: "Light and refreshing rosé", price: "$44/bottle" },
      { name: "Mulled Wine", description: "Traditional warm spiced wine", price: "$12/glass" }
    ]
  }
];

export const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1606738766122-6ef686862e7f?w=800&q=80",
    caption: "Our Mountain Retreat",
    category: "exterior"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1653192916062-9b29d31896b4?w=800&q=80",
    caption: "Dining with a View",
    category: "interior"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1760783320399-1382d1fc0cfb?w=800&q=80",
    caption: "Cozy Atmosphere",
    category: "interior"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1758994092703-cc9573b59c4d?w=800&q=80",
    caption: "Traditional Warmth",
    category: "interior"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1465220183275-1faa863377e3?w=800&q=80",
    caption: "Alpine Panorama",
    category: "scenery"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&q=80",
    caption: "Mountain Majesty",
    category: "scenery"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sophie & Marc",
    location: "Paris, France",
    text: "An unforgettable dining experience! The lamb stew transported us to another era. The view from our table was breathtaking.",
    rating: 5
  },
  {
    id: 2,
    name: "James Wilson",
    location: "London, UK",
    text: "After a long day on the slopes, Driada was the perfect reward. Warm atmosphere, incredible food, and impeccable service.",
    rating: 5
  },
  {
    id: 3,
    name: "Elena Rossi",
    location: "Milan, Italy",
    text: "The cheese fondue is the best I've ever had. This place captures the essence of mountain hospitality beautifully.",
    rating: 5
  }
];

export const weatherData = {
  temperature: -5,
  condition: "Snowy",
  snowDepth: "120 cm",
  slopeStatus: "Open",
  visibility: "Good",
  wind: "12 km/h"
};

export const translations = {
  en: {
    nav: { home: "Home", menu: "Menu", story: "Our Story", gallery: "Gallery", reservations: "Reservations", contact: "Contact" },
    hero: { title: "Tradition at the Peak of Taste", subtitle: "An authentic mountain dining experience near the slopes." },
    cta: { viewMenu: "View Menu", reserveNow: "Reserve Now", reserveTable: "Reserve a Table" }
  },
  de: {
    nav: { home: "Startseite", menu: "Speisekarte", story: "Unsere Geschichte", gallery: "Galerie", reservations: "Reservierungen", contact: "Kontakt" },
    hero: { title: "Tradition auf dem Gipfel des Geschmacks", subtitle: "Ein authentisches Berggastronomieerlebnis in der Nähe der Pisten." },
    cta: { viewMenu: "Speisekarte", reserveNow: "Jetzt Reservieren", reserveTable: "Tisch Reservieren" }
  },
  fr: {
    nav: { home: "Accueil", menu: "Menu", story: "Notre Histoire", gallery: "Galerie", reservations: "Réservations", contact: "Contact" },
    hero: { title: "La Tradition au Sommet du Goût", subtitle: "Une expérience gastronomique authentique de montagne près des pistes." },
    cta: { viewMenu: "Voir le Menu", reserveNow: "Réserver", reserveTable: "Réserver une Table" }
  }
};

export const heroImages = {
  main: "https://images.unsplash.com/photo-1606738766122-6ef686862e7f?w=1920&q=80",
  interior: "https://images.unsplash.com/photo-1653192916062-9b29d31896b4?w=1920&q=80",
  mountain: "https://images.unsplash.com/photo-1465220183275-1faa863377e3?w=1920&q=80"
};

export const experienceContent = {
  title: "The DRIADA Experience",
  description: "At DRIADA, we honor generations of mountain cooking. Our recipes are rooted in tradition, crafted with local ingredients, and elevated with refined techniques. Every dish tells a story of the mountains—of shepherds, farmers, and the timeless wisdom passed down through families.",
  features: [
    "Locally sourced ingredients from mountain farms",
    "Recipes passed down through three generations",
    "Handcrafted with traditional techniques",
    "Paired with regional wines and spirits"
  ]
};

export const locationFeatures = [
  { icon: "ski", text: "Located near the ski slopes" },
  { icon: "fire", text: "Fireplace dining room" },
  { icon: "mountain", text: "Perfect après-ski destination" },
  { icon: "view", text: "Panoramic mountain views" }
];
