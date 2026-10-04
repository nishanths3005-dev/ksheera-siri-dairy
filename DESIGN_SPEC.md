# Ksheera Siri (ಕ್ಷೀರ ಸಿರಿ) — Comprehensive Design Specification & Deliverable

## 1. Website Sitemap

```mermaid
graph TD
    A[Home Page] --> B[Our Products]
    A --> C[Farm to Home Journey]
    A --> D[Farmer Collective & Impact]
    A --> E[Store Locator & Parllours]
    A --> F[Lab Purity & Traceability]
    A --> G[Subscription & Quick Order]
    A --> H[Contact & Customer Care]

    B --> B1[Farm Fresh Cow Milk / ಹಸು ಹಾಲು]
    B --> B2[Creamy Curd / Mosaru / ಮೊಸರು]
    B --> B3[Traditional Bilona Ghee / ತುಪ್ಪ]
    B --> B4[Farm Fresh Butter / ಬೆಣ್ಣೆ]
    B --> B5[Fresh Malai Paneer / ಪನೀರ್]
    B --> B6[Artisanal Cheese / ಚೀಸ್]
    B --> B7[Flavoured Milk & Badam Milk / ಸುವಾಸಿತ ಹಾಲು]

    C --> C1[04:30 AM Ethical Village Milking]
    C --> C2[05:15 AM 4°C BMC Rapid Chilling]
    C --> C3[08:00 AM 24-Point Infrared Lab Testing]
    C --> C4[05:30 AM Insulated Cold-Chain Doorstep Drop]

    D --> D1[75% Direct Farmer Revenue Guarantee]
    D --> D2[Farmer Stories: Mandya, Hassan, Malnad]
    D --> D3[Free Bovine Veterinary & Fodder Support]

    E --> E1[Bengaluru (42 Outlets)]
    E --> E2[Mysuru (12 Outlets)]
    E --> E3[Mangaluru (8 Outlets)]
    E --> E4[Hubballi-Dharwad (9 Outlets)]
    E --> E5[Belagavi (6 Outlets)]

    G --> G1[7-Day Morning Trial Configurator]
    G --> G2[Pincode Serviceability Engine]
    G --> G3[1-Click WhatsApp Quick Reorder]
```

---

## 2. Homepage Wireframe

### Desktop Wireframe (1440px)
```
+---------------------------------------------------------------------------------------------------------+
| [TOP BAR: 🌿 Today's 04:30 AM Fresh Batch Dispatched | Bengaluru, Mysuru, Hubballi | [EN / ಕನ್ನಡ]]       |
+---------------------------------------------------------------------------------------------------------+
| [LOGO: 🥛 Ksheera Siri]   Products   Farm-to-Home   Our Farmers   Stores   Lab Check  [Pincode] [Cart(0)]   |
+---------------------------------------------------------------------------------------------------------+
|                                              HERO SECTION                                               |
|  [Left Column: 58%]                                           [Right Column: 42%]                       |
|  [Badge: 🌿 100% Single-Origin Karnataka Cow Milk]             +--------------------------------------+ |
|  H1: Pure Milk from Karnataka’s Heartlands                     | [Hero Card: Rich Western Ghats Farm  | |
|      Straight to Your Morning Cup                              |  imagery, brass tumbler pour, milk   | |
|  Sub: Sourced ethically from 12,000+ local smallholders.       |  froth micro-animation, cold badge]  | |
|       Zero preservatives, chilled at 4°C within 45 mins.       +--------------------------------------+ |
|  [CTA: Start 7-Day Morning Trial] [Secondary: WhatsApp Order]  | [Float: Purity Score 99.8% | 8.7% SNF]| |
|  [Trust Row: 75% to Farmers | 4°C Cold Chain | 24 Lab Checks]  +--------------------------------------+ |
+---------------------------------------------------------------------------------------------------------+
| [LIVE METRICS BAR: 12,000+ Farmers | 48,000L Daily | 5 Major Cities | 0 Preservatives | FSSAI A-Grade]   |
+---------------------------------------------------------------------------------------------------------+
|                                           PRODUCT SHOWCASE                                              |
|  Categories: [All (7)] [Fresh Milk] [Curd / Mosaru] [Ghee & Butter] [Paneer & Cheese] [Flavoured Milk]  |
|  +--------------------+ +--------------------+ +--------------------+ +--------------------+             |
|  | Farm Fresh Milk    | | Thick Set Mosaru   | | Bilona Cow Ghee    | | Soft Malai Paneer  |             |
|  | ಹಸು ಹಾಲು          | | ಮಧುರ ಮೊಸರು         | | ಸಾಂಪ್ರದಾಯಿಕ ತುಪ್ಪ  | | ಮಲೈ ಪನೀರ್          |             |
|  | ₹32 / 500ml        | | ₹35 / 450g         | | ₹650 / 500ml       | | ₹110 / 200g        |             |
|  | [+ Add to Bag]     | | [+ Add to Bag]     | | [+ Add to Bag]     | | [+ Add to Bag]     |             |
|  +--------------------+ +--------------------+ +--------------------+ +--------------------+             |
+---------------------------------------------------------------------------------------------------------+
|                                    THE "FARM TO HOME" 4-STEP JOURNEY                                    |
|  [Step 1: 04:30 AM Milking] --> [Step 2: 05:15 AM 4°C Chill] --> [Step 3: 24 Lab Tests] --> [Step 4]  |
|  Interactive timeline with GPS cold-chain tracker and village bulk cooler telemetry                     |
+---------------------------------------------------------------------------------------------------------+
|                                     FARMER COLLECTIVE & EMPOWERMENT                                     |
|  [Left: Portrait of Mandya Farmer Smt. Gowramma]              [Right: The 75% Fair Revenue Promise]     |
|  "Transparent fat testing at our village center gave my family financial security."                     |
+---------------------------------------------------------------------------------------------------------+
|                                       INTERACTIVE STORE LOCATOR                                         |
|  City Pills: [Bengaluru (42)] [Mysuru (12)] [Mangaluru (8)] [Hubballi (9)] [Belagavi (6)]               |
|  [Search Area / Pincode...]                                                                             |
|  +------------------------------------------------+ +-------------------------------------------------+ |
|  | Store 1: Jayanagar 4th Block Parlour           | | Store 2: Malleshwaram 8th Cross Fresh Depot     | |
|  | ⏰ 05:30 AM - 09:30 PM | 🟢 Fresh Stock Ready   | | ⏰ 05:30 AM - 09:00 PM | 🟢 Fresh Stock Ready   | |
|  +------------------------------------------------+ +-------------------------------------------------+ |
+---------------------------------------------------------------------------------------------------------+
|                                   TESTIMONIALS & FAMILY REVIEWS                                         |
|  [Bangalore Coffee Connoisseur]     [Mysuru Traditional Chef]        [Hubballi Paediatrician]           |
|  "Perfect filter kaapi froth!"      "Grainiest traditional ghee"     "Safe and natural for kids"        |
+---------------------------------------------------------------------------------------------------------+
| [SUBSCRIBE CTA BANNER: Get ₹100 Off Your First 7-Day Morning Milk Trial | Delivered Before 05:30 AM]   |
+---------------------------------------------------------------------------------------------------------+
| [FOOTER: FSSAI Lic #11224333000198 | Toll-Free: 1800-425-5743 | WhatsApp Ordering | Kannada & English]  |
+---------------------------------------------------------------------------------------------------------+
```

---

## 3. Section-by-Section Content (Bilingual: English & Kannada)

### Global Header
* **EN**: `☀️ Today's Fresh Morning Batch Dispatched at 4:45 AM from Mandya & Hassan | 4°C Cold Chain`
* **KN**: `☀️ ಇಂದು ಮುಂಜಾನೆ 4:45ರ ತಾಜಾ ಹಾಲು ಮಂಡ್ಯ ಮತ್ತು ಹಾಸನದಿಂದ ಸರಬರಾಜಾಗಿದೆ | 4°C ಶೀತಲೀಕರಣ`
* **Nav Items**:
  * Products / ಉತ್ಪನ್ನಗಳು
  * Farm to Home / ಫಾರ್ಮ್‌ನಿಂದ ಮನೆಗೆ
  * Our Farmers / ನಮ್ಮ ರೈತರು
  * Store Locator / ಶಾಪ್ ಹುಡುಕಿ
  * Batch Check / ಗುಣಮಟ್ಟ ಪರಿಶೀಲನೆ

### Hero Section
* **H1 (EN)**: `Pure Milk from Karnataka's Heartlands to Your Family's Morning Cup.`
* **H1 (KN)**: `ಕರ್ನಾಟಕದ ಹಸಿರು ಮಣ್ಣಿನಿಂದ ನಿಮ್ಮ ಬೆಳಗಿನ ಕಾಫಿ ಕಪ್‌ಗೆ.`
* **Sub-copy (EN)**: `Ethically procured from 12,000+ local dairy farmers across Mandya, Hassan, and Malnad. Chilled to 4°C within 45 minutes of milking, tested on 24 quality parameters, and delivered silently before 5:30 AM.`
* **Sub-copy (KN)**: `ಮಂಡ್ಯ, ಹಾಸನ ಮತ್ತು ಮಲೆನಾಡಿನ ೧೨,೦೦೦ಕ್ಕೂ ಹೆಚ್ಚು ಸ್ಥಳೀಯ ರೈತ ಕುಟುಂಬಗಳಿಂದ ನೇರ ಸಂಗ್ರಹ. ಕರೆದ ೪೫ ನಿಮಿಷಗಳಲ್ಲಿ ೪°C ಗೆ ಶೀತಲೀಕರಿಸಿ, ಮುಂಜಾನೆ ೫:೩೦ ರೊಳಗಾಗಿ ನಿಮ್ಮ ಮನೆ ಬಾಗಿಲಿಗೆ.`

### Products Showcase (All 7 Categories)
1. **Farm Fresh Cow Milk (ಹಸು ಹಾಲು)**:
   * *EN*: Min 3.8% natural fat, 8.7% SNF, zero water dilution, antibiotic-free. ₹32 / 500ml.
   * *KN*: ನೈಸರ್ಗಿಕ ಹಸು ಹಾಲು. ಯಾವುದೇ ನೀರು ಅಥವಾ ಪ್ರಿಸರ್ವೇಟಿವ್ ಇಲ್ಲ. ₹೩೨ / ೫೦೦ಮಿ.ಲೀ.
2. **Velvet Set Curd / Mosaru (ಮಧುರ ಮೊಸರು)**:
   * *EN*: Natural slow-set curd with active live cultures. Thick, non-sour, zero gelatin or starches. ₹35 / 450g.
   * *KN*: ಸಾಂಪ್ರದಾಯಿಕ ಗಟ್ಟಿ ಮೊಸರು. ರೋಗನಿರೋಧಕ ಪ್ರೊಬಯೋಟಿಕ್ ಯುಕ್ತ. ₹೩೫ / ೪೫೦ಗ್ರಾಂ.
3. **Traditional Bilona Cow Ghee (ಸಾಂಪ್ರದಾಯಿಕ ತುಪ್ಪ)**:
   * *EN*: Prepared via traditional curd churning (Bilona). Granular golden texture and rich aroma. ₹650 / 500ml.
   * *KN*: ಮಂಥನ ಪದ್ಧತಿಯಲ್ಲಿ ತಯಾರಿಸಿದ ಪರಿಮಳಯುಕ್ತ ಹರಳಿನಂತ ತುಪ್ಪ. ₹೬೫೦ / ೫೦೦ಮಿ.ಲೀ.
4. **Farm Butter (ತಾಜಾ ಬೆಣ್ಣೆ)**:
   * *EN*: Freshly churned white and golden butter. Perfect for Davanagere Benne Dosa. ₹115 / 200g.
   * *KN*: ದಾವಣಗೆರೆ ಬೆಣ್ಣೆ ದೋಸೆ ಹಾಗೂ ಬಿಸಿ ರೊಟ್ಟಿಗೆ ಹೇಳಿ ಮಾಡಿಸಿದ ತಾಜಾ ಹಳ್ಳಿ ಬೆಣ್ಣೆ. ₹೧೧೫ / ೨೦೦ಗ್ರಾಂ.
5. **Fresh Malai Paneer (ಮಲೈ ಪನೀರ್)**:
   * *EN*: Hand-crafted cottage cheese from pure morning milk. Ultra-soft, high natural protein. ₹110 / 200g.
   * *KN*: ಅತ್ಯಂತ ಮೃದುವಾದ, ನೈಸರ್ಗಿಕ ಪ್ರೋಟೀನ್ ಸಮೃದ್ಧ ತಾಜಾ ಮಲೈ ಪನೀರ್. ₹೧೧೦ / ೨೦೦ಗ್ರಾಂ.
6. **Artisanal Cheese (ದೇಶಿ ಚೀಸ್)**:
   * *EN*: Handcrafted mozzarella and gouda from local micro-creameries. ₹185 / 200g.
   * *KN*: ಸ್ಥಳೀಯ ಡೈರಿಯಲ್ಲಿ ಸಣ್ಣ ಬ್ಯಾಚ್‌ಗಳಲ್ಲಿ ತಯಾರಿಸಿದ ರುಚಿಕರ ಚೀಸ್. ₹೧೮೫ / ೨೦೦ಗ್ರಾಂ.
7. **Karnataka Badam & Elaichi Milk (ಸುವಾಸಿತ ಹಾಲು)**:
   * *EN*: Infused with pure Coorg cardamom, crushed badam nibs, and Kashmiri saffron. ₹45 / 200ml.
   * *KN*: ಕೊಡಗಿನ ಏಲಕ್ಕಿ ಮತ್ತು ಬಾದಾಮಿ ಸತ್ವವಿರುವ ರುಚಿಕರ ತಂಪು ಹಾಲು. ₹೪೫ / ೨೦೦ಮಿ.ಲೀ.

### Farm to Home Journey
* **04:30 AM**: Ethical Grazing & Milking (ಮುಂಜಾನೆಯ ನೈಸರ್ಗಿಕ ಕರೆಯುವಿಕೆ)
* **05:15 AM**: 4°C Rapid Bulk Chilling (೪°C ತ್ವರಿತ ಶೀತಲೀಕರಣ)
* **08:00 AM**: 24 Infrared Lab Fingerprint Checks (೨೪ ಲ್ಯಾಬ್ ಪರೀಕ್ಷೆಗಳು)
* **05:30 AM (Next Morning)**: Silent Insulated Doorstep Delivery (ಮುಂಜಾನೆಯ ಮನೆ ವಿತರಣೆ)

---

## 4. Color Palette and Typography

### Curated Color Palette
* **Malnad Pasture Green (`#1E5631`)**: Primary brand color. Evokes Western Ghats pastures, trust, organic vitality.
* **Pure Milk Cream (`#FDFBF7`)**: Background canvas. Warmer and softer than harsh white, resembles natural milk.
* **Karnataka Saffron / Ghee Gold (`#E68A00`)**: Call-to-action & accents. Evokes Bilona ghee, Karnataka cultural warmth.
* **Deep Deccan Navy (`#0B2545`)**: High-contrast text & titles. Crisp, professional, and accessible.
* **Cold-Chain Ice Blue (`#E0F2FE`)**: Visual temperature cues for chilled milk, 4°C cold-chain indicators.
* **Pure Milk White (`#FFFFFF`)**: Card surfaces, modal backgrounds, and high-contrast badges.

### Typography Hierarchy
* **Headings (English)**: `Outfit`, sans-serif (Geometric, modern, approachable FMCG aesthetics).
* **Body (English)**: `Plus Jakarta Sans`, sans-serif (High x-height, crystal-clear readability for specs and prices).
* **Headings (Kannada)**: `Baloo Tamma 2`, cursive / display (Friendly curves, expressive Kannada character).
* **Body (Kannada)**: `Noto Sans Kannada`, sans-serif (Clean digital rendering of Kannada vowels and conjuncts).

---

## 5. UI/UX Design Guidelines

1. **Dual-Generation Accessibility**:
   - Touch targets $\ge 48\text{px} \times 48\text{px}$ for mobile ease for both senior citizens and youth.
   - Contrast ratio exceeds WCAG 2.1 AA (all text exceeds $6.8:1$).
   - One-tap WhatsApp ordering for customers unfamiliar with digital carts.
2. **Instant Transparency & Batch Traceability**:
   - Real-time Purity Scanner simulator where customers test any batch code to view farm origin and chemical-free lab certificates.
3. **Frictionless Subscription & Trial**:
   - 7-Day morning trial calculator with one-click doorstep booking and pincode validation across Bengaluru, Mysuru, Mangaluru, Hubballi, and Belagavi.

---

## 6. Suggested Animations

* **Hero Milk Pour**: Subtle CSS liquid-stream flow and rising foam animation on load.
* **Language Crossfade**: Smooth transition between English and Kannada text strings.
* **Card Lift on Hover**: Micro-interaction with `translateY(-6px)` and subtle green ambient shadow.
* **Purity Scan Pulse**: Circular radar scanning animation when testing batch codes.
* **Accessibility**: Full `@media (prefers-reduced-motion: reduce)` support.

---

## 7. SEO-Friendly Titles and Meta Descriptions

* **Home Page**:
  * *Title*: `Ksheera Siri | Pure Karnataka Cow Milk & Fresh Farm Dairy`
  * *Description*: `Pure cow milk, curd (mosaru), bilona ghee, and paneer sourced directly from 12,000+ Karnataka farmers. Chilled at 4°C, delivered before 5:30 AM in Bengaluru & Mysuru.`
* **Product Page**:
  * *Title*: `Farm Fresh Dairy Products | Milk, Mosaru, Ghee, Paneer | Ksheera Siri`
  * *Description*: `Shop 100% antibiotic-free single-origin milk, traditional set curd, Bilona cow ghee, and malai paneer from Karnataka's pristine pastures.`
* **Store Locator**:
  * *Title*: `Ksheera Siri Milk Parlours | Bengaluru, Mysuru, Hubballi, Mangaluru, Belagavi`
  * *Description*: `Find your nearest fresh milk booth in Bengaluru, Mysuru, Mangaluru, Hubballi, and Belagavi. Check morning batch delivery times and directions.`
