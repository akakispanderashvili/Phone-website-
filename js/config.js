/* ==========================================================================
   GANGSTER BARBERSHOP: EDITABLE CONTENT
   --------------------------------------------------------------------------
   This is the ONE file to edit for barbers, prices, hours and contacts.
   Every text has a Georgian (ka) and an English (en) version.
   Images live in /assets. Swap a file there or point "image" to a new photo
   (e.g. "assets/crew/giorgi.jpg").
   The first 4 prices are also shown in the hero (top of the page).
   Items marked  PLACEHOLDER  still need real data.
   ========================================================================== */
window.SITE_CONFIG = {
  /* ---- Contacts ---------------------------------------------------------- */
  bookingUrl: 'https://aichatbot.ge/book/gangster-barbershop',
  phone: '+995558121611',               // used for tel: links
  phoneDisplay: '+995 558 121 611',     // shown on the page
  instagram: 'https://www.instagram.com/gangsterbarbershop.ge',
  instagramHandle: '@gangsterbarbershop.ge',
  address: {
    ka: 'თბილისი, საბურთალო, ანა კალანდაძის ქ. 5',
    en: 'Tbilisi, Saburtalo, Ana Kalandadze St. 5',
  },
  mapQuery: 'Ana Kalandadze St 5, Tbilisi',

  /* ---- Opening hours (PLACEHOLDER) -------------------------------------- */
  hours: [
    { days: { ka: 'ორშაბათი – შაბათი', en: 'Monday – Saturday' }, time: '10:00 – 21:00' },
    { days: { ka: 'კვირა', en: 'Sunday' }, time: '11:00 – 20:00' },
  ],

  /* ---- Crew (PLACEHOLDER names, nicknames and specialties) --------------- */
  barbers: [
    {
      name: { ka: 'გიორგი', en: 'Giorgi' },
      nickname: { ka: '„სამართებელი“', en: '“The Razor”' },
      specialty: { ka: 'სკინ-ფეიდი და სამართებლით მუშაობა', en: 'Skin fades & razor work' },
      image: 'assets/crew/barber-1.svg',
    },
    {
      name: { ka: 'ლუკა', en: 'Luka' },
      nickname: { ka: '„დონი“', en: '“The Don”' },
      specialty: { ka: 'წვერის ფორმირება და სკულპტურა', en: 'Beard shaping & sculpting' },
      image: 'assets/crew/barber-2.svg',
    },
    {
      name: { ka: 'დათო', en: 'Dato' },
      nickname: { ka: '„ბოსი“', en: '“The Boss”' },
      specialty: { ka: 'ცხელი პირსახოცი და კლასიკური პარსვა', en: 'Hot towel & classic shaves' },
      image: 'assets/crew/barber-3.svg',
    },
    {
      name: { ka: 'ნიკა', en: 'Nika' },
      nickname: { ka: '„კონსილიერი“', en: '“The Consigliere”' },
      specialty: { ka: 'კლასიკური და თანამედროვე სტილი', en: 'Classic & modern styling' },
      image: 'assets/crew/barber-4.svg',
    },
  ],

  /* ---- Price list in GEL (PLACEHOLDER prices) ---------------------------- */
  currency: '₾',
  prices: [
    { name: { ka: 'თმის შეჭრა', en: 'Haircut' },
      note: { ka: 'კონსულტაცია, დაბანა, სტაილინგი', en: 'Consultation, wash & styling' }, price: 40 },
    { name: { ka: 'წვერის ფორმირება', en: 'Beard shaping' },
      note: { ka: 'კონტური, ზეთი, ბალზამი', en: 'Line-up, oil & balm' }, price: 25 },
    { name: { ka: 'თმა + წვერი', en: 'Haircut + Beard' },
      note: { ka: 'სრული პაკეტი', en: 'The full package' }, price: 60 },
    { name: { ka: 'პარსვა სამართებლით და ცხელი პირსახოცით', en: 'Hot towel straight-razor shave' },
      note: { ka: 'ძველი სკოლის რიტუალი', en: 'The old-school ritual' }, price: 35 },
    { name: { ka: 'მანქანით შეჭრა', en: 'Buzz cut' },
      note: { ka: 'ერთი სიგრძე, სუფთა ხაზები', en: 'One length, clean lines' }, price: 25 },
    { name: { ka: 'ბავშვის თმის შეჭრა', en: 'Kids cut' },
      note: { ka: '12 წლამდე', en: 'Under 12' }, price: 30 },
    { name: { ka: 'წვერის შეღებვა', en: 'Beard coloring' },
      note: { ka: 'ბუნებრივი ტონი', en: 'Natural-looking tone' }, price: 30 },
    { name: { ka: 'სტილის შექმნა', en: 'Style creation' },
      note: { ka: 'ახალი იმიჯი თავიდან ბოლომდე', en: 'A new look, start to finish' }, price: 50 },
  ],

  /* ---- Gallery (replace with real photos, 1:1 works best) ---------------- */
  gallery: [
    { src: 'assets/gallery/gallery-1.svg', caption: { ka: 'სავარძელი', en: 'The chair' } },
    { src: 'assets/gallery/gallery-2.svg', caption: { ka: 'სამართებელი', en: 'The razor' } },
    { src: 'assets/gallery/gallery-3.svg', caption: { ka: 'შლაპა და ვისკი', en: 'Fedora & whiskey' } },
    { src: 'assets/gallery/gallery-4.svg', caption: { ka: 'კეპი', en: 'The flat cap' } },
    { src: 'assets/gallery/gallery-5.svg', caption: { ka: 'მანქანა', en: 'The ride' } },
    { src: 'assets/gallery/gallery-6.svg', caption: { ka: 'ფეიდი', en: 'The fade' } },
    { src: 'assets/gallery/gallery-7.svg', caption: { ka: 'ღამის ცვლა', en: 'Night shift' } },
    { src: 'assets/gallery/gallery-8.svg', caption: { ka: 'დრო და სიგარა', en: 'Time & cigar' } },
  ],
};
