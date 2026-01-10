// Mock data for Driada Restaurant

export const restaurantInfo = {
  name: "DRIADA",
  tagline: "Tradition at the Peak of Taste",
  subtitle: "An authentic mountain dining experience near the slopes.",
  address: "Gajre, Tetovo, 1200, North Macedonia",
  phone: "070 888 800",
  email: "restaurant.driada@gmail.com",
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
    nav: { 
      home: "Home", 
      menu: "Menu", 
      story: "Our Story", 
      gallery: "Gallery", 
      reservations: "Reservations", 
      contact: "Contact" 
    },
    hero: { 
      title: "Tradition at the Peak of Taste", 
      subtitle: "An authentic mountain dining experience near the slopes.",
      established: "Est. 1952"
    },
    cta: { 
      viewMenu: "View Menu", 
      reserveNow: "Reserve Now", 
      reserveTable: "Reserve a Table" 
    },
    dishes: {
      sectionLabel: "Culinary Excellence",
      sectionTitle: "Our Signature Dishes"
    },
    experience: {
      sectionLabel: "Our Heritage",
      sectionTitle: "The DRIADA Experience",
      description: "At DRIADA, we honor generations of mountain cooking. Our recipes are rooted in tradition, crafted with local ingredients, and elevated with refined techniques. Every dish tells a story of the mountains—of shepherds, farmers, and the timeless wisdom passed down through families.",
      features: [
        "Locally sourced ingredients from mountain farms",
        "Recipes passed down through three generations",
        "Handcrafted with traditional techniques",
        "Paired with regional wines and spirits"
      ],
      quote: "Where tradition meets the mountains, and every meal becomes a memory.",
      quoteAuthor: "— The Driada Family"
    },
    menu: {
      sectionLabel: "Seasonal Delights",
      sectionTitle: "Full Menu"
    },
    location: {
      sectionLabel: "Visit Us",
      sectionTitle: "Location & Amenities"
    },
    gallery: {
      sectionLabel: "Moments & Memories",
      sectionTitle: "Our Gallery"
    },
    reservations: {
      sectionLabel: "Book Your Experience",
      sectionTitle: "Reservations",
      subtitle: "Reserve your table and prepare for an unforgettable alpine dining experience.",
      form: {
        fullName: "Full Name",
        email: "Email",
        phone: "Phone Number",
        date: "Date",
        time: "Time",
        guests: "Guests",
        specialRequests: "Special Requests",
        selectTime: "Select time",
        guest: "Guest",
        largParty: "Large Party",
        placeholder: {
          name: "Your name",
          email: "your@email.com",
          phone: "+1 (555) 123-4567",
          specialRequests: "Allergies, special occasions, seating preferences..."
        },
        submitButton: "Confirm Reservation",
        processing: "Processing...",
        bookingPolicy: "By reserving, you agree to our booking policy. We'll contact you to confirm.",
        confirmationTitle: "Reservation Confirmed!",
        confirmationMessage: "We've sent a confirmation to your email. See you soon!",
        confirmationId: "Confirmation ID:",
        confirmationDate: "Date:",
        confirmationParty: "Party size:",
        errorMessage: "Failed to create reservation. Please try again."
      }
    },
    testimonials: {
      sectionLabel: "Guest Reviews",
      sectionTitle: "What Our Guests Say"
    },
    footer: {
      description: "An authentic mountain dining experience where tradition meets the peaks. Serving generations of alpine recipes since 1952.",
      contactUs: "Contact Us",
      openingHours: "Opening Hours",
      quickLinks: "Quick Links",
      weekdays: "Monday - Friday",
      weekends: "Saturday - Sunday",
      links: {
        menu: "Menu",
        story: "Our Story",
        gallery: "Gallery",
        reservations: "Reservations",
        privateEvents: "Private Events"
      },
      copyright: "Driada Restaurant. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    },
    weather: {
      temperature: "Temperature",
      condition: "Condition",
      snowDepth: "Snow Depth",
      slopeStatus: "Slope Status",
      visibility: "Visibility",
      wind: "Wind"
    }
  },
  sq: {
    nav: { 
      home: "Ballina", 
      menu: "Menuja", 
      story: "Historia Jonë", 
      gallery: "Galeria", 
      reservations: "Rezervime", 
      contact: "Kontakti" 
    },
    hero: { 
      title: "Traditë në Kulmin e Shijës", 
      subtitle: "Një përvojë autentike malësore gatimi pranë pistave.",
      established: "Themeluar 1952"
    },
    cta: { 
      viewMenu: "Shiko Menunë", 
      reserveNow: "Rezervo Tani", 
      reserveTable: "Rezervo një Tavolinë" 
    },
    dishes: {
      sectionLabel: "Ekscelencë Kulinare",
      sectionTitle: "Pjatat Tona Karakteristike"
    },
    experience: {
      sectionLabel: "Trashëgimia Jonë",
      sectionTitle: "Përvoja DRIADA",
      description: "Në DRIADA, ne nderojmë breza të gatimit malor. Recetat tona janë të rrënjosura në traditë, të përpunuara me përbërës lokalë dhe të ngritura me teknika të rafínuara. Çdo pjatë tregon një histori të maleve—të barinjtë, fermerëve dhe urtësisë së përhershme të transmetuar nëpër familje.",
      features: [
        "Përbërës të furnizuar lokalisht nga fermat malore",
        "Receta të trashëguara prej tre brezash",
        "Të punuara me dorë me teknika tradicionale",
        "Të çiftuara me vera dhe pije rajonale"
      ],
      quote: "Ku tradita takon malet, dhe çdo vakt bëhet një kujtim.",
      quoteAuthor: "— Familja Driada"
    },
    menu: {
      sectionLabel: "Kënaqësi Sezonale",
      sectionTitle: "Menuja e Plotë"
    },
    location: {
      sectionLabel: "Na Vizitoni",
      sectionTitle: "Vendndodhja & Mundësitë"
    },
    gallery: {
      sectionLabel: "Momente & Kujtime",
      sectionTitle: "Galeria Jonë"
    },
    reservations: {
      sectionLabel: "Rezervoni Përvojën Tuaj",
      sectionTitle: "Rezervime",
      subtitle: "Rezervoni tavolinën tuaj dhe përgatituni për një përvojë të paharrueshme alpine gatimi.",
      form: {
        fullName: "Emri i Plotë",
        email: "Email",
        phone: "Numri i Telefonit",
        date: "Data",
        time: "Ora",
        guests: "Mysafirë",
        specialRequests: "Kërkesa të Veçanta",
        selectTime: "Zgjidhni orën",
        guest: "Mysafir",
        largParty: "Grup i Madh",
        placeholder: {
          name: "Emri juaj",
          email: "emaili@juaj.com",
          phone: "+355 (69) 123-4567",
          specialRequests: "Alergji, raste të veçanta, preferencat e uljes..."
        },
        submitButton: "Konfirmo Rezervimin",
        processing: "Duke përpunuar...",
        bookingPolicy: "Duke rezervuar, ju pranoni politikën tonë të rezervimit. Ne do t'ju kontaktojmë për konfirmim.",
        confirmationTitle: "Rezervimi u Konfirmua!",
        confirmationMessage: "Kemi dërguar një konfirmim në emailin tuaj. Shihemi së shpejti!",
        confirmationId: "ID e Konfirmimit:",
        confirmationDate: "Data:",
        confirmationParty: "Madhësia e grupit:",
        errorMessage: "Dështoi krijimi i rezervimit. Ju lutemi provoni përsëri."
      }
    },
    testimonials: {
      sectionLabel: "Vlerësimet e Mysafirëve",
      sectionTitle: "Çfarë Thonë Mysafirët Tanë"
    },
    footer: {
      description: "Një përvojë autentike malësore gatimi ku tradita takon kulmet. Duke shërbyer breza recetash alpine që nga 1952.",
      contactUs: "Na Kontaktoni",
      openingHours: "Orët e Hapjes",
      quickLinks: "Lidhje të Shpejta",
      weekdays: "E Hënë - E Premte",
      weekends: "E Shtunë - E Diel",
      links: {
        menu: "Menuja",
        story: "Historia Jonë",
        gallery: "Galeria",
        reservations: "Rezervime",
        privateEvents: "Ngjarje Private"
      },
      copyright: "Restoranti Driada. Të gjitha të drejtat e rezervuara.",
      privacy: "Politika e Privatësisë",
      terms: "Kushtet e Shërbimit"
    },
    weather: {
      temperature: "Temperatura",
      condition: "Gjendja",
      snowDepth: "Thellësia e Borës",
      slopeStatus: "Statusi i Pistave",
      visibility: "Dukshmëria",
      wind: "Era"
    }
  },
  mk: {
    nav: { 
      home: "Дома", 
      menu: "Мени", 
      story: "Нашата Приказна", 
      gallery: "Галерија", 
      reservations: "Резервации", 
      contact: "Контакт" 
    },
    hero: { 
      title: "Традиција на Врвот на Вкусот", 
      subtitle: "Автентично планинско искуство во готвење близу до пистите.",
      established: "Основано 1952"
    },
    cta: { 
      viewMenu: "Видете Мени", 
      reserveNow: "Резервирајте Сега", 
      reserveTable: "Резервирајте Маса" 
    },
    dishes: {
      sectionLabel: "Кулинарска Извонредност",
      sectionTitle: "Нашите Карактеристични Јадења"
    },
    experience: {
      sectionLabel: "Наше Наследство",
      sectionTitle: "Искуството DRIADA",
      description: "Во DRIADA, ние ги почитуваме генерациите на планинско готвење. Нашите рецепти се вкоренети во традицијата, изработени со локални состојки и издигнати со рафинирани техники. Секое јадење раскажува приказна за планините—за овчарите, земјоделците и вечната мудрост пренесена низ семејствата.",
      features: [
        "Локално набавени состојки од планински фарми",
        "Рецепти пренесени низ три генерации",
        "Рачно изработено со традиционални техники",
        "Спарено со регионални вина и пијалаци"
      ],
      quote: "Каде традицијата ги среќава планините, и секој оброк станува спомен.",
      quoteAuthor: "— Семејството Дријада"
    },
    menu: {
      sectionLabel: "Сезонски Деликатеси",
      sectionTitle: "Целосно Мени"
    },
    location: {
      sectionLabel: "Посетете Не",
      sectionTitle: "Локација & Погодности"
    },
    gallery: {
      sectionLabel: "Моменти & Спомени",
      sectionTitle: "Нашата Галерија"
    },
    reservations: {
      sectionLabel: "Резервирајте Го Вашето Искуство",
      sectionTitle: "Резервации",
      subtitle: "Резервирајте ја вашата маса и подгответе се за незаборавно алпско искуство во готвење.",
      form: {
        fullName: "Целосно Име",
        email: "Е-пошта",
        phone: "Телефонски Број",
        date: "Датум",
        time: "Време",
        guests: "Гости",
        specialRequests: "Специјални Барања",
        selectTime: "Изберете време",
        guest: "Гостин",
        largParty: "Голема Група",
        placeholder: {
          name: "Вашето име",
          email: "vasha@email.com",
          phone: "+389 (70) 123-456",
          specialRequests: "Алергии, специјални прилики, преференции за седење..."
        },
        submitButton: "Потврдете Резервација",
        processing: "Обработување...",
        bookingPolicy: "Со резервирањето, вие се согласувате со нашата политика за резервација. Ќе ве контактираме за потврда.",
        confirmationTitle: "Резервацијата е Потврдена!",
        confirmationMessage: "Испративме потврда на вашата е-пошта. Се гледаме наскоро!",
        confirmationId: "ИД на Потврда:",
        confirmationDate: "Датум:",
        confirmationParty: "Големина на група:",
        errorMessage: "Неуспешно креирање на резервација. Ве молиме обидете се повторно."
      }
    },
    testimonials: {
      sectionLabel: "Рецензии на Гости",
      sectionTitle: "Што Велат Нашите Гости"
    },
    footer: {
      description: "Автентично планинско искуство во готвење каде традицијата ги среќава врвовите. Служење на генерации со алпски рецепти од 1952 година.",
      contactUs: "Контактирајте Не",
      openingHours: "Работно Време",
      quickLinks: "Брзи Врски",
      weekdays: "Понеделник - Петок",
      weekends: "Сабота - Недела",
      links: {
        menu: "Мени",
        story: "Нашата Приказна",
        gallery: "Галерија",
        reservations: "Резервации",
        privateEvents: "Приватни Настани"
      },
      copyright: "Ресторан Дријада. Сите права задржани.",
      privacy: "Политика на Приватност",
      terms: "Услови на Користење"
    },
    weather: {
      temperature: "Температура",
      condition: "Состојба",
      snowDepth: "Длабочина на Снег",
      slopeStatus: "Статус на Писти",
      visibility: "Видливост",
      wind: "Ветер"
    }
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
