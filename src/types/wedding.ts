export interface WeddingEvent {
  id: string;
  title: string;
  subtitle?: string;
  date: string; // e.g. "Wednesday, November 25, 2026"
  dateISO: string; // "2026-11-25"
  startTime: string; // e.g. "07:00 PM"
  endTime?: string;
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
    brideParentsTitle?: string;
    brideFatherName: string;
    brideAddress: string;
    groomName: string;
    groomFullName?: string;
    groomHonorific?: string;
    groomParentsTitle?: string;
    groomFatherName: string;
    groomAddress: string;
    groomFamilyFirm?: string;
    relationshipTagline: string;
    quoteArabic?: string;
    quoteTranslation?: string;
  };
  hosts: {
    invitationPreamble: string;
    invitationHeader: string;
    brideFatherName: string;
    brideMotherName?: string;
    brideFamilyName: string;
    brideAddress: string;
    honoredGrandparents?: string[];
    cordialInvitationText: string;
    closingFamilyMessage: string;
    closingFamilySignOff: string;
  };
  ceremony: {
    targetDateISO: string; // "2026-11-25T19:00:00+05:30"
    timezone: string; // "Asia/Kolkata"
    hijriDateFormatted: string; // "15 Jumada al-Awwal 1448 AH"
    gregorianDateFormatted: string; // "Wednesday, 25th November 2026"
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
    apiEndpoint?: string;
    brideSideRsvp: string[];
    groomSideRsvp: string[];
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
    src?: string;
    defaultMuted: boolean;
  };
}
