export interface WeddingEvent {
  id: string;
  title: string;
  subtitle?: string;
  date: string; // e.g. "Sunday, December 20, 2026"
  dateISO: string; // "2026-12-20"
  startTime: string; // e.g. "06:30 PM"
  endTime?: string; // e.g. "11:00 PM"
  venueName: string;
  venueAddress: string;
  dressCode?: string;
  note?: string;
  googleMapsUrl?: string;
  enabled: boolean;
}

export interface ContactPerson {
  name: string;
  relation: string;
  phone: string;
}

export interface WeddingConfig {
  couple: {
    brideName: string;
    brideFullName?: string;
    brideHonorific?: string;
    groomName: string;
    groomFullName?: string;
    groomHonorific?: string;
    relationshipTagline: string;
    quoteArabic?: string;
    quoteTranslation?: string;
  };
  hosts: {
    invitationPreamble: string;
    brideFatherName: string;
    brideMotherName: string;
    brideFamilyName: string;
    honoredGrandparents?: string[];
    cordialInvitationText: string;
    closingFamilyMessage: string;
    closingFamilySignOff: string;
  };
  ceremony: {
    targetDateISO: string; // e.g., "2026-12-20T19:00:00+05:30"
    timezone: string; // e.g., "Asia/Kolkata"
    hijriDateFormatted: string; // e.g., "11 Jumada al-Thani 1448 AH"
    gregorianDateFormatted: string; // e.g., "Sunday, 20th December 2026"
    mainVenue: {
      name: string;
      city: string;
      address: string;
      googleMapsUrl: string;
      coordinates?: {
        lat: number;
        lng: number;
      };
    };
  };
  events: WeddingEvent[];
  rsvp: {
    enabled: boolean;
    deadline?: string;
    maxGuestsPerSubmission: number;
    allowDietaryRequirements: boolean;
    whatsappNumberForDirectRsvp?: string;
    apiEndpoint?: string; // If null, stores in localStorage and offers direct WhatsApp confirmation
  };
  contacts: ContactPerson[];
  share: {
    title: string;
    defaultMessage: string;
    publicUrl: string;
  };
  audio: {
    title: string;
    artist?: string;
    src?: string; // default ambient royal background music / instrumental
    defaultMuted: boolean;
  };
}
