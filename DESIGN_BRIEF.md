# Portfolio Design Brief — Shardul Date

**For:** the visual/design pass (e.g. Claude Design).
**You own:** the look — layout, type, colour, texture, motion, illustration.
**Already built & handed to you separately:** the **backend/behaviour layer** (`script.js`)
that powers the live personalisation, the entry door, the fireside sound, etc. Build your
markup to include the **integration hooks** in the contract at the bottom and everything
"just works" — no JS needed from you.

---

## 1. The person (so the design has a soul)

Shardul Date — final-year **Mechanical Engineer at IIT Jodhpur** (minor in Management,
4th in department, JEE Adv AIR 8224). A maker who **refuses to pick one lane**: Mixed
Reality, AI/ML, digital twins, real-time C++ audio, FEA/CAD, and full-stack web — all of it.

**Audience:** recruiters, hiring managers, and fellow engineers. Must read as *serious and
capable* while feeling *warm and human*.

## 2. The concept — "There and Back Again" (a hobbit-hole home)

The site is a **cosy hobbit-hole** (Bag End in the Shire) — homely, parchment-warm, inviting,
*no rush*. **Crucially**, the cutting-edge projects are framed as **the treasures and maps
brought back from adventures**. The home is cosy; the trophies on the wall are pure frontier
tech. This deliberately resolves a constraint: he must **not** look pigeonholed as "traditional/
heritage tech only" — the cosy frame is universal hospitality; the *content* shows full range
(MR, AI, digital twins, machine design).

**Feeling to evoke:** you walked in out of the weather, the kettle's on, pull up a chair, stay
a while. Charm + craft. Should be distinctive enough to be *memorable* (the user explicitly
wants a stand-out, "Dribbble-leaderboard" calibre site), not a generic template.

**Reference vibes:** https://vedang.date/ · https://praaach.live/ · and the engineer
portfolios at https://www.sitebuilderreport.com/inspiration/engineer-portfolios

## 3. Art direction (starting point — you may push further)

- **Palette:** aged parchment canvas (`#efe3c8`), wood-ink text (`#3a2a17`), moss/round-door
  green (`#5f7345`), warm ember accent (`#c14d22`), lamplight gold/brass (`#c8901f`/`#a9802f`).
  Light, warm, storybook — *not* the old cold-dark theme.
- **Type:** Fraunces (display serif, storybook), Spectral (body serif), Caveat (handwritten —
  marginalia, signs, signature). Tech tags in a **monospace** for a deliberate "frontier"
  contrast against the cosy serif.
- **Texture & warmth:** paper grain, a banked-**hearth glow** in a corner, soft vignette,
  rounded/arched forms (round door, round window, circular project "wax-seal" numbers).
- **Motion:** gentle, unhurried, generous spacing. Everything must honour
  `prefers-reduced-motion`.
- A **working visual reference** already exists in `index.html` + `style.css` (the Bag End
  build). Treat it as a *starting sketch* to keep or surpass — your call.

## 4. Signature elements (please keep these — they're the magic)

1. **The round green door** — a first-visit entry overlay: round door + brass knob + a
   handwritten sign ("No admittance except on party business"), a "Knock & come in" button,
   and a quiet "skip". Returning visitors get a "Welcome back" variant. *(Logic done.)*
2. **The window on the hills** 🪟 — a round hobbit window with a wooden cross-frame looking
   out on rolling hills. The **sky + weather inside it are LIVE**: they match the visitor's
   real local time (dawn/day/dusk/night) and current weather (clouds/rain/sun/stars), pulled
   from their location. This is the emotional centrepiece — "this was made for *me*, right now."
   *(Logic done; you build the scene markup to the hooks.)*
3. **Personal greeting** — a line that adapts to time of day + the visitor's city, and to a
   **name/company from a shared link** (`?to=Priya&at=Google`) so a recruiter feels addressed.
4. **Hospitality copy & bookends** — a host's welcome ("the kettle's on") and a warm farewell
   ("Thank you for visiting — mind the step"); handwritten marginalia; a **handwritten
   signature**; section names themed (*Treasures · The Hobbit · Travels · Knock*).
5. **Fireside sound** — an opt-in, off-by-default 🔥 toggle (soft fire crackle). *(Logic done.)*
6. **Easter egg** — typing `mellon` ("speak, friend, and enter") triggers a delight. *(Done.)*
7. His **face/photo at the top** is a hard requirement (round, brass-ringed portrait works well).

## 5. Sections & exact content (copy is editable for tone, facts are not)

1. **Nav** — brand (round-door mark) + links: Treasures / The Hobbit / Travels / Knock + a
   "Come in" CTA.
2. **Hero** — name "Shardul Date", a rotating role ("I make … Mixed Reality worlds / digital-twin
   farms / real-time audio engines / …"), one-line bio, two CTAs, the round portrait, the live
   greeting line. Tagline: *"There and back again."*
3. **Window on the hills** — the live scene + a weather-aware sentence + "pull up a chair" sub.
4. **Marquee (provisions)** — skill ticker: Python · C/C++ · PyTorch · Next.js · FastAPI · Unity ·
   SolidWorks · FEA · OpenCV · TypeScript · Docker · MATLAB · LLMs & RAG.
5. **Work — "Treasures I brought back"** — the 11 cards below (numbered wax-seal style).
6. **About — "At home"** — photo + lead "A maker who refuses to pick one lane — mechanical
   engineering, AI, and software, under one roof." + 2 paras + stats (CGPA 8.45 · Dept #4 ·
   JEE Adv 8224 · 25+ projects) + 3 capability cards (Engineering & Design / AI & Data / Software).
7. **Experience — "Travels"** — timeline: UI Intern · DataOceano (2025) · NLP Intern · KJSIT
   (2025) · India Space Lab & Leadership (2024–25).
8. **Contact — "Knock on the door"** — "Let's build something worth coming home to." +
   b22me077@iitj.ac.in · GitHub (github.com/dateshardul) · LinkedIn (linkedin.com/in/shardul-date) ·
   +91 99221 12491.
9. **Footer** — warm farewell + © + "Back up the path ↑".

### The 11 project cards (name · one-liner · tags)
1. **Holographic Land Terrain** (2025) — Multi-user Mixed Reality framework rendering a real-time
   Sahyadri terrain from elevation data; synchronised spatial collaboration. B.Tech capstone.
   *Unity · Mixed Reality · 3D/DEM · Networking*
2. **KrishiTwin** (2026) — Digital-twin farming advisor running three crop-sim models over NASA,
   ERA5 & SoilGrids to give a full irrigation/fertiliser/sowing plan in ~18s.
   *React · FastAPI · ML Ensemble · Crop Sim*
3. **Dinachitran** (2025) — End-to-end AI content pipeline, human-in-the-loop; FastAPI + Celery,
   pluggable LLM/image providers, Next.js approval dashboard. *FastAPI · Next.js · Celery · Claude API*
4. **Distance Measuring** (2025) — Mobile web app measuring walls/angles/area from a phone camera
   (even furnished rooms) via monocular depth + segmentation. *PyTorch · MiDaS · SegFormer · Flask*
5. **Nrityabhyas Audio Engine** (2025) — Portable low-latency multi-stem audio sync engine in C++,
   verified 0.000 ms per-stem offset. *C++17 · CMake · Real-time DSP · miniaudio*
6. **Neo-Speculum Segmented Optics** (2025) — Research on shatter-proof segmented parabolic mirrors
   from high-tin bronze. *Materials · Aspheric Optics · Metrology · Research*
7. **Crossed Spherical Gear** (2025) — Involute spherical gear for a 3-DOF arm joint; SolidWorks +
   static/dynamic/fatigue FEA + a web parametriser. *SolidWorks · FEA · Machine Design · Robotics*
8. **Vaahan "Yuvati" CHEV** (2025) — CNG hybrid-EV concept for Indian families; 50–80% lower CO₂,
   3-tier product line + strategy. *Powertrain · Hybrid EV · Product Strategy*
9. **PanchangBot** (2024) — Multilingual RAG chatbot answering Marathi (Devanagari) astrology
   queries grounded in classical texts. *RAG · Transformers · Embeddings · NLP*
10. **Gomantak Gaman** (Live ↗ https://goa-tourism.vercel.app/) — Deployed Goa heritage-tourism
    site, 20+ temples, gallery, Framer Motion. *Next.js 15 · React 19 · TypeScript · Framer Motion*
11. **Konkan Bhatkanti** (Live ↗ https://konkan-bhatkanti.vercel.app/) — Deployed Konkan Coast
    travel guide; filters, spotlights, map discovery. *Next.js · React · TypeScript · Vercel*

Plus a "browse the whole shelf" link → https://github.com/dateshardul

## 6. SEO & technical requirements (must preserve)

- Canonical domain **https://shardul.date/**. Keep `<title>`, meta description/keywords/author,
  Open Graph + Twitter cards, **JSON-LD `Person`**, `theme-color`, robots, `sitemap.xml`,
  `site.webmanifest`, SVG favicon (a round green door). Semantic HTML5, alt text, good Lighthouse.
- Static site, **no build step** (plain HTML/CSS/JS), deployable to GitHub Pages / Cloudflare Pages.
- Fonts via Google Fonts. Images live in `images/` (`shardul.jpg`, `og-image.jpg`).
- Accessibility: full `prefers-reduced-motion` support; keyboard-operable door; sound off by default.

## 7. Integration contract (the hooks the backend needs)

Include these IDs / classes / data-attributes in your markup. The full, authoritative list lives
in the header comment of **`script.js`** — build to it and the live behaviour attaches automatically:

- **Welcome/weather:** `#greeting`, `#weatherBadge`, `#hillsGreeting`, `#hillsSub`,
  `#windowScene` (JS sets `data-sky`), `#clouds`, `#rain`.
- **Door:** `#door` (`.gone` to hide), `#doorRound` (`.open`), `#doorEnter`, `#doorSkip`, `#doorSign`.
- **Comfort:** `#soundBtn` (+ a `.comfort-label` inside).
- **Generic UI:** `.reveal`, `.nav` (+`.scrolled`), `.scroll-progress`, `.nav-toggle`/`.nav-links`,
  `[data-roles]`, `.lantern`, `[data-magnetic]`, `.project` (+`--mx`/`--my`), `[data-count]`, `#year`.

No backend server is required — personalisation uses keyless public APIs with graceful fallback.
