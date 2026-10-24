import { WeddingConfig } from '../types/wedding';

/**
 * =======================================================================
 * WEDDING INVITATION CONFIGURATION — SAHIBA & ABDUL QADIR
 * =======================================================================
 * Host: Bride's Family (Md. Nizamuddin, South East Delhi)
 * All Bride's details are prioritized and presented first.
 */
export const weddingConfig: WeddingConfig = {
  couple: {
    // Bride's Details (Always First)
    brideName: "Sahiba",
    brideFullName: "Sahiba Khatoon",
    brideHonorific: "Daughter of",
    brideParentsTitle: "Daughter of Md. Nizamuddin",
    brideFatherName: "Md. Nizamuddin",
    brideAddress: "Delhi",

    // Groom's Details
    groomName: "Abdul Qadir",
    groomFullName: "Abdul Qadir",
    groomHonorific: "Son of",
    groomParentsTitle: "Son of Abdul Qayyum Idrisi",
    groomFatherName: "Abdul Quaiyum Idrisi",
    groomAddress: "Akbarpur, Ward No. 2, Nagar Panchayat, Rohtas, Bihar",
    groomFamilyFirm: "Beauty Tailor",

    relationshipTagline: "Two souls, two families, united in faith, love, and eternal prayers.",
    quoteArabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
    quoteTranslation: "And of His signs is that He created for you spouses from among yourselves so that you may find tranquility in them; and He placed between you affection and mercy. (Surah Ar-Rum: 21)"
  },

  hosts: {
    invitationPreamble: "Bismillahir Rahmanir Raheem",
    invitationHeader: "Wedding Invitation",
    brideFatherName: "Md. Nizamuddin",
    brideFamilyName: "The Family of Md. Nizamuddin",
    brideAddress: "Delhi",
    cordialInvitationText: "Request the honour of your presence and heartfelt prayers (Dua) at the solemn Nikah ceremony of their beloved daughter",
    closingFamilyMessage: "Your gracious presence, prayers, and blessings will be the greatest gift as our daughter begins this sacred new chapter of her life.",
    closingFamilySignOff: "With warm regards & prayers,\nMd. Nizamuddin, Naushad, Sahil\n& All Relatives and Friends\nDelhi"
  },

  ceremony: {
    // Solemn Nikah Date & Time: Wednesday, 25 November 2026
    targetDateISO: "2026-11-25T19:00:00+05:30",
    timezone: "Asia/Kolkata",
    hijriDateFormatted: "15 Jumada al-Awwal 1448 AH",
    gregorianDateFormatted: "Wednesday, 25th November 2026",

    mainVenue: {
      name: "Moon Star Marriage Hall",
      city: "Akbarpur, Rohtas, Bihar",
      address: "Above Hamid Super Market, Near Bank of India, Akbarpur, Rohtas, Bihar",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Moon+Star+Marriage+Hall+Above+Hamid+Super+Market+Near+Bank+of+India+Akbarpur+Rohtas+Bihar",
      coordinates: {
        lat: 24.6315,
        lng: 83.9427
      }
    }
  },

  events: [
    {
      id: "haldi-bride",
      title: "Haldi Ceremony (Bride's Side)",
      subtitle: "Traditional turmeric ceremony, henna blessings, and joyful family songs",
      date: "Sunday, 22nd November 2026",
      dateISO: "2026-11-22",
      startTime: "07:00 PM",
      endTime: "10:30 PM",
      venueName: "Bride's Residence / Marriage Lawn",
      venueAddress: "Akbarpur Celebration Lawn",
      dressCode: "Festive Yellow / Traditional Elegance",
      note: "Family gathering with dinner and traditional wedding singing.",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Akbarpur+Rohtas+Bihar",
      enabled: true
    },
    {
      id: "quran-khani",
      title: "Quran Khani & Milad-un-Nabi",
      subtitle: "Recitation of the Holy Quran and sacred Milad seeking Allah's eternal blessings",
      date: "Monday, 23rd November 2026",
      dateISO: "2026-11-23",
      startTime: "After Fajr",
      endTime: "10:00 AM",
      venueName: "Family Residence",
      venueAddress: "Akbarpur, Ward No. 2, Rohtas, Bihar",
      note: "Starting the blessed wedding week with remembrance of Allah (Dhikr) and Dua.",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Akbarpur+Rohtas+Bihar",
      enabled: true
    },
    {
      id: "madwa",
      title: "Madwa & Manjha Ceremony",
      subtitle: "Customary pre-wedding celebrations, blessings, and family dinner",
      date: "Tuesday, 24th November 2026",
      dateISO: "2026-11-24",
      startTime: "08:00 PM",
      endTime: "11:00 PM",
      venueName: "Family Lawn",
      venueAddress: "Akbarpur, Rohtas, Bihar",
      note: "Traditional festive gathering on the eve of the Nikah.",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Akbarpur+Rohtas+Bihar",
      enabled: true
    },
    {
      id: "nikah",
      title: "Departure of Barat & Solemn Nikah",
      subtitle: "The sacred marriage ceremony sealed under the blessings of Allah Almighty",
      date: "Wednesday, 25th November 2026",
      dateISO: "2026-11-25",
      startTime: "07:00 PM",
      endTime: "11:30 PM",
      venueName: "Moon Star Marriage Hall",
      venueAddress: "Above Hamid Super Market, Near Bank of India, Akbarpur, Rohtas, Bihar",
      dressCode: "Royal Festive Traditional Modest Attire",
      note: "Barat arrival and solemnization of Nikah, followed by celebratory Dawat-e-Nikah feast.",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Moon+Star+Marriage+Hall+Above+Hamid+Super+Market+Near+Bank+of+India+Akbarpur+Rohtas+Bihar",
      enabled: true
    },
    {
      id: "rukhsati",
      title: "Rukhsati (Bride's Farewell)",
      subtitle: "Emotional farewell with heartfelt prayers as our beloved daughter begins her blessed new home",
      date: "Thursday, 26th November 2026",
      dateISO: "2026-11-26",
      startTime: "06:00 AM",
      venueName: "Moon Star Marriage Hall",
      venueAddress: "Above Hamid Super Market, Near Bank of India, Akbarpur, Rohtas, Bihar",
      note: "Accompanied by heartfelt Quranic Duas and family blessings.",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Moon+Star+Marriage+Hall+Above+Hamid+Super+Market+Near+Bank+of+India+Akbarpur+Rohtas+Bihar",
      enabled: true
    }
  ],

  rsvp: {
    enabled: false,
    deadline: "18th November 2026",
    maxGuestsPerSubmission: 8,
    allowDietaryRequirements: true,
    whatsappNumberForDirectRsvp: "+916200511384", // Beauty Tailor / Family WhatsApp
    apiEndpoint: undefined,
    brideSideRsvp: ["Naushad", "Sahil", "All Relatives and Friends"],
    groomSideRsvp: ["Ayub Ahmad", "Sajjad Ahmad", "Irshad Ahmad", "Md. Tahir", "Ashraf Ali", "Ahmad Ali"]
  },

  contacts: [
    {
      name: "Naushad",
      relation: "Bride's Family Coordinator",
      phone: "Delhi / Rohtas"
    },
    {
      name: "Sahil",
      relation: "Bride's Family Coordinator",
      phone: "Delhi / Rohtas"
    },
    {
      name: "Md. Nizamuddin",
      relation: "Bride's Father",
      phone: "Delhi"
    },
    {
      name: "Abdul Quaiyum Idrisi (Beauty Tailor)",
      relation: "Groom's Father (Akbarpur, Rohtas)",
      phone: "+91 62005 11384"
    }
  ],

  share: {
    title: "Wedding Invitation — Sahiba & Abdul Qadir",
    defaultMessage: "Assalamu Alaikum wa Rahmatullah! You are cordially invited by Md. Nizamuddin & Family to celebrate the Nikah of our beloved daughter Sahiba Khatoon with Abdul Qadir on Wednesday, 25th November 2026 at Moon Star Marriage Hall, Akbarpur, Rohtas, Bihar. We look forward to your presence and blessed prayers (Dua). View our royal digital invitation here: ",
    publicUrl: typeof window !== 'undefined' ? window.location.href : "https://royal-nikah-sahiba-abdulqadir.com"
  },

  audio: {
    title: "Mughal Ambient Oud & Sitar Nocturne",
    artist: "Royal Court Melodies",
    src: "/audio/royal-ambient.mp3",
    defaultMuted: true
  }
};
