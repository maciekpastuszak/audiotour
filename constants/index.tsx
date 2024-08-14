// export const navLinks = [
//     { href: '/audioprzewodniki', key: 'audioguide', text: 'Aplikacje mobilne' },
//     { href: '/#audioguide', key: 'audioguide', text: 'Audioguide' },
//     { href: '/#przewodnik-turystyczny', key: 'przewodnik', text: 'Content' },
//     { href: '/#oferta', key: 'oferta', text: 'Oferta' },
//     { href: '/#portfolio', key: 'porfolio', text: 'Porfolio' },
//     { href: '/#kontakt', key: 'kontakt', text: 'Kontakt' },
//   ];

export const navLinks = [
  {
    section: 'Aplikacje mobilne',
    icon: 'Navbar_iPhone_Icon.svg',
    color: 'bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent',
    links: [
      { href: '/aplikacja', text: 'Audioprzewodniki' },
      { href: '/#przewodniki-turystyczne', text: 'Przewodniki turystyczne' },
      { href: '/#aplikacje-skrojone-na-wymiar', text: 'Rozwiązania Tailor Made' },
    ],
  },
  {
    section: 'Audioguide',
    icon: 'Porownanie_Audioprzewodniki.svg',
    color: 'bg-gradient-to-r from-emerald-500 to-lime-600 bg-clip-text text-transparent',
    links: [
      { href: '/technologia#hengda', text: 'Zwiedzanie automatyczne' },
      { href: '/technologia#mgkeypad', text: 'Ekspozycja z numerkami' },
      { href: '/technologia#technology-02', text: 'Synchonizacja multimediów' },
    ],
  },
  {
    section: 'Content creation',
    icon: 'Porownanie_Audioprzewodniki.svg',
    color: 'bg-gradient-to-r from-emerald-500 to-lime-600 bg-clip-text text-transparent',
    links: [
      { href: '/bankglosow', text: 'Bank głosów' },
      { href: '/nagrania', text: 'Nagrania i udźwiękowienie' },
      { href: '/redakcja', text: 'Redakcja tekstu' },
      { href: '/tlumaczenia', text: 'Tłumaczenia' },
    ],
  },
  {
    section: 'Realizacje',
    icon: 'Navbar_Location_Icon.svg',
    color: 'bg-gradient-to-r from-pink-500 to-yellow-500',
    links: [
      { href: '/realizacje', text: 'Mapa realizacji' },
      { href: '/realizacje#aplikacjamobilna', text: 'Aplikacje mobilne' },
    ],
  },
  {
    section: 'Rozwiązania Tour Guide',
    icon: '',
    color: 'bg-gradient-to-r from-pink-500 to-yellow-500',
    links: [
      { href: '/zwiedzaniegrupowe', text: 'Rozwiązania Tour Guide', isBigLink: true },
    ],
  },
  {
    section: 'Kontakt',
    icon: '',
    color: 'bg-gradient-to-r from-pink-500 to-yellow-500',
    links: [
      { href: '/next/kontakt', text: 'Kontakt', isBigLink: true },
    ],
  },
];


  export const appCarouselIcons = [
    {id: '01', alt: "Brama Poznania" },
    {id: '02', alt: "MRU" },
    {id: '03', alt: "Muzeum Etnograficzne" },
    {id: '04', alt: "Muzeum Krakowa" },
    {id: '05', alt: "Muzeum Narodowe w Lublinie" },
    {id: '06', alt: "Muzuem Narodowe w Poznaniu" },
    {id: '07', alt: "Muzuem Piaseczna" },
    {id: '08', alt: "Instytu Kultury Willa Decjusza" },
    {id: '09', alt: "Zachęta" },
  ];

  export const featureCardsBlue = [
    {id: '01', cardBg: 'Feature_Audioprzewodniki_1.png', iconSrc:'Feature_Icon_Map.svg', iconAlt: 'Ikona mapy', title: 'Interaktywna mapa', content: 'Ułatwia zwiedzającym nawigację w terenie', isBig: false},
    {id: '02', cardBg: 'Feature_Audioprzewodniki_2.png', iconSrc:'Feature_Icon_GPS.svg', iconAlt: 'Ikona GPS', title: 'GPS + Beacony', content: 'Pozwala automatycznie uruchamiać nagrania na podstawie położenia zwiedzającego', isBig: false},
    {id: '03', cardBg: 'Feature_Audioprzewodniki_3.png', iconSrc:'Feature_Icon_Localization.svg', iconAlt: 'Ikona lokalizacji', title: 'Obsługa wielu języków', content: 'Aplikacja może zawierać w sobie treści w wielu językach. Obsługuje również język migowy', isBig: false},
    {id: '04', cardBg: 'Feature_Audioprzewodniki_4.png', iconSrc:'Feature_Icon_Quiz.svg', iconAlt: 'Ikona quizu', title: 'Quiz', content: 'Audioprzewodnik można rozbudować o moduł quizu - turysta zdobywa wiedzę odpowiadając na zagadki', isBig: false},
  ]

  export const featureCardsGreen = [
    {id: '01', cardBg: 'Feature_Przewodniki_1.png', iconSrc:'Feature_Icon_Map.svg', iconAlt: 'Ikona mapy', title: 'Interaktywna mapa', content: 'Ułatwia zwiedzającym nawigację w terenie', isBig: false},
    {id: '02', cardBg: 'Feature_Przewodniki_2.png', iconSrc:'Feature_Icon_GPS.svg', iconAlt: 'Ikona GPS', title: 'GPS + Nawigacja', content: 'Wyświetla Twoją aktualną pozycję na mapie i umożliwa nawigację do kolejnej atrakcji', isBig: false},
    {id: '03', cardBg: 'Feature_Przewodniki_3.png', iconSrc:'Feature_Icon_Localization.svg', iconAlt: 'Ikona lokalizacji', title: 'Obsługa wielu języków', content: 'Aplikacja może zawierać w sobie treści w wielu językach. Obsługuje również język migowy', isBig: false},
    {id: '04', cardBg: 'Feature_Przewodniki_4.png', iconSrc:'Feature_Icon_Modules.svg', iconAlt: 'Ikona puzzle', title: 'Dodatkowe moduły', content: 'Dopasuj aplikację do swoich potrzeb. Kreator tras rowerowych, gra terenowa, kalendarz, audioprzewodnik? Mamy to.', isBig: false},
  ]

  export const favouriteAppsCard1 = [
    {id: '01', fileName: "Muzeum_Narodowe_w_Lublinie.png", alt: 'Muzeum Narodowe w Lublinie', rating: '4,6'},
    {id: '02', fileName: "Wystawa_Wilhelma_Hammershoia.png", alt: 'Wystawa Wilhelma Hammershoia', rating: '4,8'}
  ]

  export const favouriteAppsCard2 = [
    {id: '01', fileName: "Park_Krajobrazowy_Beskidu_Slaskiego.png", alt: 'Park Krajobrazowy Beskidu Śląskiego', rating: '4,9'},
    {id: '02', fileName: "Szlak_Marianny_Oranskiej.png", alt: 'Szlak Marianny Orańskiej', rating: '4,8'}
  ]

  export const contactCard = [
    {id: '01', fullName: 'Michał Krynicki', mail: 'mail@audiotour.pl', phone: '+48 800 800 800' },
    {id: '02', fullName: 'Michał Krynicki', mail: 'mail@audiotour.pl', phone: '+48 800 800 800' },
    {id: '03', fullName: 'Michał Krynicki', mail: 'mail@audiotour.pl', phone: '+48 800 800 800' },
    {id: '04', fullName: 'Michał Krynicki', mail: 'mail@audiotour.pl', phone: '+48 800 800 800' },
    {id: '05', fullName: 'Michał Krynicki', mail: 'mail@audiotour.pl', phone: '+48 800 800 800' },
    {id: '06', fullName: 'Michał Krynicki', mail: 'mail@audiotour.pl', phone: '+48 800 800 800' },
  ]