import { WeddingConfig } from '../types/wedding';

/**
 * =======================================================================
 * ROYAL NIKAH WEDDING CONFIGURATION — BRIDE'S FAMILY INVITATION
 * =======================================================================
 * This is the central source of truth for the entire wedding invitation.
 * You can customize the couple's names, parents' names, dates, venues,
 * event timeline, RSVP settings, and WhatsApp sharing message here.
 */
export const weddingConfig: WeddingConfig = {
  couple: {
    brideName: "Syeda Fatima",
    brideFullName: "Syeda Fatima Zahra",
    brideHonorific: "Daughter of",
    groomName: "Mirza Zayd",
    groomFullName: "Mirza Zayd Baig",
    groomHonorific: "Son of",
    relationshipTagline: "Two souls, two families, unified in faith and eternal love.",
    quoteArabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
    quoteTranslation: "And of His signs is that He created for you spouses from among yourselves so that you may find tranquility in them; and He placed between you affection and mercy. (Surah Ar-Rum: 21)"
  },

  hosts: {
    invitationPreamble: "Bismillahir Rahmanir Raheem",
    brideFatherName: "Mr. Syed Rashid Ali",
    brideMotherName: "Mrs. Parveen Sultana",
    brideFamilyName: "The Syed Family",
    honoredGrandparents: [
      "Late Janab Syed Muzaffar Ali",
      "Late Mohtarma Zeenat Begum"
    ],
    cordialInvitationText: "request the honour of your presence and heartfelt prayers (Dua) at the solemn Nikah ceremony and wedding reception of their beloved daughter",
    closingFamilyMessage: "Your gracious presence, prayers, and blessings will be the greatest gift as our daughter begins this sacred new chapter of her life.",
    closingFamilySignOff: "With warm regards & prayers,\nRashid Ali, Parveen Sultana & The Entire Syed Family"
  },

  ceremony: {
    // Configured for Asia/Kolkata timezone (IST)
    targetDateISO: "2026-12-20T19:00:00+05:30",
    timezone: "Asia/Kolkata",
    hijriDateFormatted: "10 Jumada al-Akhirah 1448 AH",
    gregorianDateFormatted: "Sunday, 20th December 2026",
    mainVenue: {
      name: "The Royal Palace Grand Ballroom",
      city: "New Delhi",
      address: "Palace Gardens, 15 Taj Enclave, Ring Road, New Delhi, 110021",
      googleMapsUrl: "https://maps.google.com/?q=The+Royal+Palace+Grand+Ballroom+New+Delhi",
      coordinates: {
        lat: 28.6139,
        lng: 77.2090
      }
    }
  },

  events: [
    {
      id: "mehndi",
      title: "Mehndi & Haldi Celebration",
      subtitle: "An intimate evening of fragrant henna, family joy, and traditional singing",
      date: "Saturday, 19th December 2026",
      dateISO: "2026-12-19",
      startTime: "05:30 PM",
      endTime: "09:30 PM",
      venueName: "Emerald Banquet Lawn, The Royal Palace",
      venueAddress: "Palace Gardens, 15 Taj Enclave, Ring Road, New Delhi",
      dressCode: "Festive Indian / Pakistani Pastels or Emerald & Ochre Yellow",
      note: "Family gathering with dinner and traditional wedding songs.",
      googleMapsUrl: "https://maps.google.com/?q=The+Royal+Palace+Grand+Ballroom+New+Delhi",
      enabled: true
    },
    {
      id: "nikah",
      title: "The Solemn Nikah Ceremony",
      subtitle: "The sacred marriage contract sealed under the blessings of Allah",
      date: "Sunday, 20th December 2026",
      dateISO: "2026-12-20",
      startTime: "07:00 PM",
      endTime: "08:15 PM",
      venueName: "Grand Minar Hall, The Royal Palace",
      venueAddress: "Palace Gardens, 15 Taj Enclave, Ring Road, New Delhi",
      dressCode: "Royal Traditional Modest Formal Attire",
      note: "Please be seated by 06:45 PM for the solemnization of Nikah and Dua.",
      googleMapsUrl: "https://maps.google.com/?q=The+Royal+Palace+Grand+Ballroom+New+Delhi",
      enabled: true
    },
    {
      id: "dawat-walima",
      title: "Barat Reception & Dawat-e-Nikah",
      subtitle: "The celebratory banquet dinner hosted in honour of our guests and new family",
      date: "Sunday, 20th December 2026",
      dateISO: "2026-12-20",
      startTime: "08:30 PM",
      endTime: "11:30 PM",
      venueName: "The Royal Ballroom & Gardens",
      venueAddress: "Palace Gardens, 15 Taj Enclave, Ring Road, New Delhi",
      dressCode: "Imperial Evening Formals / Sherwani / Velvet Elegance",
      note: "Followed by the celebratory royal feast and heartfelt Rukhsati.",
      googleMapsUrl: "https://maps.google.com/?q=The+Royal+Palace+Grand+Ballroom+New+Delhi",
      enabled: true
    }
  ],

  rsvp: {
    enabled: true,
    deadline: "10th December 2026",
    maxGuestsPerSubmission: 8,
    allowDietaryRequirements: true,
    whatsappNumberForDirectRsvp: "+919876543210", // Replace with family WhatsApp number
    apiEndpoint: undefined // Leave undefined for simulated demo + direct WhatsApp sending
  },

  contacts: [
    {
      name: "Syed Tariq Ali",
      relation: "Bride's Uncle (Chacha)",
      phone: "+91 98765 43211"
    },
    {
      name: "Syed Danish Ali",
      relation: "Bride's Brother",
      phone: "+91 98765 43212"
    }
  ],

  share: {
    title: "Royal Nikah Invitation — Syeda Fatima & Mirza Zayd",
    defaultMessage: "Assalamu Alaikum wa Rahmatullah! You are warmly invited by the Syed Family to celebrate the Nikah of our beloved daughter Syeda Fatima with Mirza Zayd. We look forward to your presence and blessed prayers (Dua). View our royal invitation here: ",
    publicUrl: typeof window !== 'undefined' ? window.location.href : "https://royal-nikah-invitation.com"
  },

  audio: {
    title: "Mughal Ambient Oud & Sitar Nocturne",
    artist: "Royal Court Melodies",
    // Synthesized Web Audio API harp/oud sound is also included so it works without requiring external mp3!
    src: "/audio/royal-ambient.mp3",
    defaultMuted: true
  }
};
