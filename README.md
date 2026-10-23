# Royal Nikah — Bride's Family Invitation

A luxury, interactive 3D Muslim wedding invitation website crafted for the **bride's family**, blending royal Islamic/Mughal architectural aesthetics with modern WebGL capabilities and mobile-first responsiveness.

---

## 🕌 Features & Experience Flow

1. **Scene 1: Cinematic Loading & Welcome (`WelcomeScreen.tsx`)**
   - Deep royal emerald backdrop with glistening gold dust particles and crescent finial.
   - User-initiated royal ambient oud/sitar music or procedural Web Audio synth (no unsolicited audio autoplay).
   - "Open Your Invitation" interaction with smooth camera glide and door unveiling.
   - "Skip Intro" option respecting accessibility and `prefers-reduced-motion`.

2. **Scene 2: Grand 3D Architectural Entrance (`GrandEntranceCanvas.tsx`, `IslamicArch3D.tsx`)**
   - Real 3D multi-tiered Mughal cusped archway extruded with gold bevels and emerald marble pillars.
   - Swinging brass Moroccan/Mughal lanterns with warm amber point lights and gentle flame flicker (`Lanterns3D.tsx`).
   - Atmospheric floating golden dust motes (`GoldParticles3D.tsx`).
   - Pointer & gyroscopic parallax with polished marble reflections.

3. **Scene 3: Bismillah & Invitation Introduction (`BismillahSection.tsx`)**
   - Authentic, respectful Arabic script: *بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ* (*Bismillahir Rahmanir Raheem*).
   - Reverent invitation preamble from the hosts.

4. **Scene 4: Bride and Groom Names (`NamesSection.tsx`)**
   - Centerpiece showcasing **[BRIDE_NAME]** (host's daughter) and **[GROOM_NAME]**.
   - Traditional Quranic Ayah on spousal tranquility, affection, and mercy (*Surah Ar-Rum: 21*).

5. **Scene 5: Invitation from the Bride's Family (`FamilyInvitationSection.tsx`)**
   - Dedicated invitation card styled with warm ivory grain paper and antique gold embossed borders.
   - Bride's father, mother, and family names (`hosts.brideFatherName`, `hosts.brideMotherName`, `hosts.brideFamilyName`).
   - Blessings and remembrances of grandparents.

6. **Scene 6: Wedding Date & Countdown (`WeddingCountdown.tsx`)**
   - Accurate 4-metric countdown (Days, Hours, Minutes, Seconds) supporting the `Asia/Kolkata` (IST) timezone.
   - Simultaneous display of Gregorian and Hijri Islamic calendar dates.
   - Automatic celebration state upon date arrival.

7. **Scene 7: Event Timeline & Itinerary (`EventsTimeline.tsx`, `EventCard.tsx`)**
   - Configurable wedding functions (Mehndi & Haldi, Solemn Nikah Ceremony, Barat Reception & Dawat-e-Nikah).
   - Timings, addresses, dress codes, and notes.
   - Direct "Add to Calendar" (Google Calendar / .ics export) and "Get Directions".

8. **Scene 8: Venue & Navigation (`VenueSection.tsx`)**
   - Principal venue details with Google Maps intent navigation (works directly on iOS, Android, and Desktop without requiring paid Google Maps API keys).
   - One-tap hospitality coordinator contacts with direct phone call (`tel:`) and WhatsApp chat links.

9. **Scene 9: Warm Family Message & Sunnah Dua (`FamilyMessageSection.tsx`)**
   - Sincere message of gratitude from the bride's parents.
   - Traditional Prophetic blessing (*BarakAllahu Laka wa Baraka 'Alaika...*).

10. **Scene 10: Interactive RSVP System (`RsvpSection.tsx`)**
    - Guest name, attendance selection (*Joyfully Accept* / *Regretfully Decline*), guest count, and Dua/message.
    - Celebratory gold confetti on acceptance.
    - Duplicate submission protection via local storage.
    - Direct "RSVP on WhatsApp" option sending pre-filled confirmation to family coordinators.
    - Zero external backend needed for demo, with clear API endpoint plug-in support.

11. **Scene 11: WhatsApp Sharing & Copy Link (`ShareModal.tsx`)**
    - Native Web Share API integration with WhatsApp fallback using pre-formatted, URL-encoded invitation message.
    - One-click copy link with clipboard confirmation toast.

12. **Scene 12: Memorable Closing & Navigation (`ClosingSection.tsx`, `FloatingActions.tsx`)**
    - Return-to-top button, quick jump anchors, and thumb-friendly floating mobile action dock.

---

## 🎨 Visual Identity & Color Palette

- **Deep Emerald:** `#063D32` (Stone / architectural body)
- **Dark Forest Green:** `#082C26` / `#031713` (Atmospheric courtyard shadows)
- **Antique Gold:** `#C6A45B` (Primary metallic trims & borders)
- **Champagne Gold:** `#E7D6A3` (Delicate highlights & linework)
- **Warm Ivory:** `#F8F3E8` / `#FCF9F3` (Traditional printed card paper)
- **Soft Cream:** `#EFE6D5` (Card background gradient)
- **Text Charcoal:** `#252720` (High-contrast typography on light cards)

---

## 📱 Three Performance Modes

Guests accessing invitations through WhatsApp may use low-end or high-end devices. The website features three runtime graphics modes selectable anytime from the navbar:

1. **Full 3D Mode:** High-resolution WebGL, cast shadows, 380 floating particles, swinging lanterns, and continuous camera parallax.
2. **Balanced Mode:** Optimized for mid/low-end Android and older iPhones with capped pixel ratios and reduced particle counts.
3. **Classic 2D Architecture (`fallback`):** High-fidelity SVG and CSS 3D architectural facade without WebGL overhead. Automatically triggered if WebGL is unavailable or if `prefers-reduced-motion` is active.

---

## 🛠️ Project Structure

```
├── index.html                   # HTML entry point with preloaded luxury Google Fonts
├── package.json                 # Dependencies & build scripts
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Royal color tokens, fonts & animations
├── tsconfig.json                # TypeScript strict configuration
├── vite.config.ts               # Vite configuration with vendor chunk splitting
└── src/
    ├── App.tsx                  # Main application orchestrator & scene coordination
    ├── main.tsx                 # React DOM mount point
    ├── config/
    │   └── wedding.ts           # CENTRAL CONFIGURATION FOR ALL WEDDING DETAILS
    ├── types/
    │   └── wedding.ts           # TypeScript interfaces for couple, hosts, events & RSVP
    ├── hooks/
    │   ├── useAudio.ts          # Procedural Web Audio Oud/Tanpura synth & audio player
    │   ├── useCountdown.ts      # Accurate countdown timer with timezone handling
    │   └── useWebGLSupport.ts   # Device detection & graphics mode manager
    ├── scenes/
    │   ├── GrandEntranceCanvas.tsx # React Three Fiber 3D scene & camera rig
    │   ├── IslamicArch3D.tsx    # 3D Extruded Mughal cusped arch geometry & pillars
    │   ├── Lanterns3D.tsx       # 3D Hanging brass lanterns with flickering point lights
    │   ├── GoldParticles3D.tsx  # Floating gold dust particle simulation
    │   └── SceneFallback.tsx    # Pure SVG/CSS architectural fallback
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.tsx       # Top brand bar, audio toggle & 3D mode selector
    │   │   └── FloatingActions.tsx # Mobile thumb-friendly action dock
    │   ├── invitation/
    │   │   ├── WelcomeScreen.tsx           # Opening ceremony & "Open Invitation" button
    │   │   ├── BismillahSection.tsx        # Reverent Bismillah & invitation introduction
    │   │   ├── NamesSection.tsx            # Bride & Groom typography centerpiece
    │   │   ├── FamilyInvitationSection.tsx # Bride's family card & grandparents blessings
    │   │   ├── FamilyMessageSection.tsx    # Warm family closing message & Sunnah Dua
    │   │   └── ClosingSection.tsx          # Sign-off & back-to-top navigation
    │   ├── countdown/
    │   │   └── WeddingCountdown.tsx        # Gold-framed counters & Hijri date
    │   ├── events/
    │   │   ├── EventsTimeline.tsx          # Sequential wedding functions
    │   │   └── EventCard.tsx               # Individual event card with calendar export
    │   ├── venue/
    │   │   └── VenueSection.tsx            # Venue details, Google Maps & contacts
    │   ├── rsvp/
    │   │   └── RsvpSection.tsx             # Interactive RSVP form & WhatsApp direct RSVP
    │   ├── sharing/
    │   │   └── ShareModal.tsx              # WhatsApp share link & clipboard copy
    │   └── ui/
    │       ├── ArchFrame.tsx               # Reusable SVG cusped arch contour
    │       ├── GoldButton.tsx              # Accessible metallic gold button
    │       ├── IslamicBorder.tsx           # Ornate arabesque corner borders
    │       └── OrnamentalDivider.tsx       # Gold crescent & floral SVG dividers
    └── styles/
        └── index.css                       # Tailwind layers, gold text gradients & animations
```

---

## 🚀 How to Run Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
Creates an optimized production bundle inside `dist/`.

### 4. Preview the Production Build
```bash
npm run preview
```
Serves the production build on [http://localhost:4173](http://localhost:4173).

---

## ✏️ How to Customize Wedding Details

All wedding information is centralized in a single file:
👉 **`src/config/wedding.ts`**

### 1. Couple & Host Information
```typescript
couple: {
  brideName: "Syeda Fatima",
  brideFullName: "Syeda Fatima Zahra",
  groomName: "Mirza Zayd",
  groomFullName: "Mirza Zayd Baig",
  ...
},
hosts: {
  brideFatherName: "Mr. Syed Rashid Ali",
  brideMotherName: "Mrs. Parveen Sultana",
  brideFamilyName: "The Syed Family",
  ...
}
```

### 2. Target Wedding Date & Timezone
```typescript
ceremony: {
  targetDateISO: "2026-12-20T19:00:00+05:30", // ISO format with timezone offset
  timezone: "Asia/Kolkata",
  hijriDateFormatted: "10 Jumada al-Akhirah 1448 AH",
  gregorianDateFormatted: "Sunday, 20th December 2026",
  ...
}
```

### 3. Add or Edit Wedding Events
In `src/config/wedding.ts`, customize the `events` array. You can enable or disable any event using `enabled: true / false`:
```typescript
{
  id: "nikah",
  title: "The Solemn Nikah Ceremony",
  date: "Sunday, 20th December 2026",
  startTime: "07:00 PM",
  venueName: "Grand Minar Hall, The Royal Palace",
  venueAddress: "Palace Gardens, 15 Taj Enclave, Ring Road, New Delhi",
  dressCode: "Royal Traditional Modest Formal Attire",
  googleMapsUrl: "https://maps.google.com/?q=...",
  enabled: true
}
```

### 4. WhatsApp Sharing Message
Update `share.defaultMessage` and set `share.publicUrl` to your deployed domain.

---

## 📩 How to Connect a Real RSVP Backend

The RSVP component works immediately out of the box in local/demo mode (saving submissions in browser `localStorage` and allowing direct WhatsApp dispatch).

To connect a live database, Google Sheet, or Webhook:

1. Create a webhook endpoint (e.g., using Google Sheets Apps Script, Formspree, Supabase, or AWS Lambda).
2. In `src/config/wedding.ts`, configure:
   ```typescript
   rsvp: {
     enabled: true,
     apiEndpoint: "https://your-api-endpoint.com/api/rsvp",
     ...
   }
   ```
3. The form sends a POST request with:
   ```json
   {
     "fullName": "Guest Name",
     "attendance": "accept",
     "guestCount": 2,
     "dietaryNote": "",
     "message": "May Allah bless the couple!"
   }
   ```

---

## 🌐 Deployment Instructions

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag and drop the `dist` folder into https://app.netlify.com/drop
```

### Deploy to Firebase Hosting
```bash
firebase init hosting
# Set public directory to "dist" and configure as a single-page app
npm run build
firebase deploy --only hosting
```

---

## 🛡️ License
Private wedding invitation template. Designed with reverence, respect, and Islamic art traditions.
