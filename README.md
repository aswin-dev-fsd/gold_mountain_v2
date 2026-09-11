# Gold Mountain Wellness Resort — Production Website

A production-ready, international-facing Next.js website for **Gold Mountain Wellness Resort**, Tiruvannamalai, Tamil Nadu, India.

Built directly in this local workspace according to the official Gold Mountain brand identity, architecture specification, animation blueprint, and WCAG 2.2 AA accessibility standards.

---

## Brand Foundation & Design System

- **Brand Palette (Locked)**:
  - Warm Ivory: `#F7F3EA` (Primary background and negative space)
  - Forest Green: `#214D33` (Primary brand text, navigation, buttons, and major sections)
  - Gold: `#C49A3A` (Signature accent, dividers, and premium highlights)
  - Deep Red: `#8F2D24` (Rare supporting accent)
- **Typography Direction**:
  - Primary: `Outfit` (Headings, UI, labels, buttons)
  - Secondary/Editorial: `The Seasons` (Editorial statements, italic quotes, display serif)
- **Conversion Philosophy**:
  - Primary: WhatsApp personal enquiry (`+91 94296 94026`)
  - Secondary: Verified Email correspondence (`enquiry@goldmountainresort.com`)
  - No automated booking engines, fake calendars, or payment gateways.

---

## Product Taxonomy

The site strictly differentiates the following distinct offerings:
1. **Short Stay**: Flexible accommodation for guests and pilgrims visiting Tiruvannamalai.
2. **Wellness Stay**: Accommodation combined with confirmed daily yoga, meditation, and flexible treatments.
3. **Monthly Stay**: Long-stay residential living for extended rejuvenation, rest, and sabbaticals.
4. **Wellness Packages**: Structured confirmed programmes (7-Day Wellness Journey, 14-Day Healing Retreat, 21-Day Ayurveda Program).

---

## Prerequisites

- **Node.js**: v18.17+ or v20+ (tested on Node v24.20.0)
- **npm**: v9+ (tested on npm v11.19.0)

---

## Installation & Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run in development mode**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Run production build**:
   ```bash
   npm run build
   ```

4. **Start production server**:
   ```bash
   npm run start
   ```

---

## Project Structure

```
gold_mountain_v2/
├── app/
│   ├── layout.tsx            # Root layout with fonts, metadata & shared UI
│   ├── page.tsx              # Canonical 10-stage Homepage
│   ├── globals.css           # Brand tokens, tracking & WCAG rules
│   ├── wellness/page.tsx     # Wellness philosophy, 5 pillars & programmes
│   ├── stay/page.tsx         # Accommodation, room details & arrival info
│   ├── experience/page.tsx   # Sacred geography, farm, cows & day timeline
│   ├── about/page.tsx        # Resort history, purpose & values
│   ├── blog/
│   │   ├── page.tsx          # Strategic journal index with category filter
│   │   └── [slug]/page.tsx   # Dynamic editorial article pages
│   ├── contact/page.tsx      # Contact options, verified location & form
│   ├── book/page.tsx         # Focused booking enquiry flow
│   ├── privacy/page.tsx      # Privacy policy
│   ├── terms/page.tsx        # Terms & conditions of stay
│   ├── sitemap.ts            # Dynamic sitemap generator (sitemap.xml)
│   ├── robots.ts             # Search engine crawling rules (robots.txt)
│   ├── not-found.tsx         # 404 handler
│   ├── loading.tsx           # Polished loading state
│   └── error.tsx             # Error boundary
├── components/
│   ├── Header.tsx            # Sticky header with mobile drawer
│   ├── Footer.tsx            # Full footer with brand stripe & location
│   ├── BrandLogo.tsx         # Official logo with dark/light variants
│   ├── Button.tsx            # Tactile buttons with micro-interactions
│   ├── SectionHeading.tsx    # Editorial titles with kicker & gold divider
│   ├── EnquiryModal.tsx      # Accessible modal with receipt confirmation
│   └── WhatsAppButton.tsx    # Floating WhatsApp conversion trigger
├── lib/
│   ├── data.ts               # Source of truth for content, rooms & articles
│   └── utils.ts              # Styling utilities (clsx + tailwind-merge)
├── public/
│   └── assets/
│       ├── logos/            # Approved Gold Mountain logo marks
│       └── images/           # Authentic resort, food & nature photography
├── tailwind.config.ts        # Locked brand tokens & typography config
├── tsconfig.json             # Strict TypeScript configuration
└── next.config.mjs           # Next.js optimization configuration
```

---

## Verified Location & Contact

- **Address**: No.97, Kotangal Road, Adiannamalai, Tiruvannamalai, Tamil Nadu 606604, India
- **WhatsApp**: `+91 94296 94026`
- **Email**: `enquiry@goldmountainresort.com`
- **Base Currency**: Indian Rupee (INR ₹). USD ($) and EUR (€) values are indicative estimates.

---

## Client Integration Placeholders

As mandated by the source specification, all unverified items are clearly marked for production client sign-off rather than fabricated:
- `[FOUNDER PROFILE TO BE PROVIDED BY CLIENT]` in `app/about/page.tsx`
- `[PRACTITIONER CREDENTIALS VERIFIED LOCALLY]` in `app/about/page.tsx`
- `[PRICE TO BE CONFIRMED UPON ENQUIRY]` in `app/stay/page.tsx` for room rates
