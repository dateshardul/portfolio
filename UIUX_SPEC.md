# UI / UX Specification — Shardul Date Portfolio ("Bag End")

**Version:** 1.0 · **Scope:** the personal portfolio at **https://shardul.date/**
**Companion docs:** `DESIGN_BRIEF.md` (creative intent) · `script.js` header (integration contract)
**Status:** authoritative source of truth. Values below mirror the shipped `style.css` / `index.html`.

This is an all-in-one document: **Part A** design system · **Part B** UX (personas, journeys, IA) ·
**Part C** page-by-page specs · **Part D** motion · **Part E** accessibility & responsive · **Part F** SEO/perf.

---

## 0. Concept in one line

A cosy **hobbit-hole home** ("Bag End") where the cutting-edge engineering projects are the
**treasures and maps brought back from adventures** — *"There and back again."* Warm and human on
the surface; serious range underneath. The frame is universal hospitality, so it never pigeonholes
the work as "traditional tech only."

**Three feelings, in priority order:** (1) *Welcomed* — this was made for me. (2) *Impressed* —
this person has real range and depth. (3) *Charmed* — I want to stay / I'll remember this.

---

# PART A — DESIGN SYSTEM

## A1. Colour tokens

Warm, light, storybook. (CSS custom properties, defined in `:root`.)

| Token | Hex | Role |
|---|---|---|
| `--paper` | `#efe3c8` | Primary canvas (aged parchment) |
| `--paper-2` | `#e7d8b8` | Deeper parchment (marquee, bands) |
| `--card` | `#f6efdd` | Card surface (lighter) |
| `--card-2` | `#efe4c9` | Card gradient end |
| `--ink` | `#3a2a17` | Primary text (wood-brown) |
| `--ink-soft` | `#6a543b` | Secondary text / body |
| `--muted` | `#8a755a` | Muted labels |
| `--muted-2` | `#a8916f` | Faintest text |
| `--door` | `#5f7345` | Moss / round-door green (primary brand) |
| `--door-deep` | `#4a5b36` | Deep green (hover, signage) |
| `--ember` | `#c14d22` | Warm ember accent (links, emphasis) |
| `--ember-soft` | `#d76a3c` | Ember hover |
| `--honey` | `#c8901f` | Lamplight gold |
| `--brass` | `#a9802f` | Brass (knob, portrait ring) |
| `--line` | `rgba(74,56,33,.18)` | Borders / hairlines |
| `--line-soft` | `rgba(74,56,33,.10)` | Faint dividers |

**Usage rules**
- **Green = identity/navigation/primary actions** (brand mark, primary button, door).
- **Ember = emphasis & links** (active states, "live ↗", italic emphasis, hover accents).
- **Honey/brass = light & metal** (glow, portrait ring, knob) — decorative, not for text on parchment (fails contrast).
- Body text is always `--ink` / `--ink-soft` on parchment. Never put `--honey` or `--muted-2` on small text.
- Selection: background `--ember`, text `#fff5e9`.

## A2. Typography

Three families (Google Fonts), each with a distinct job:

| Family | Use | Notes |
|---|---|---|
| **Fraunces** (serif, opsz) | Display: H1, section titles, project/card names, stats, nav brand | Storybook character; weights 300–700, supports italic |
| **Spectral** (serif) | Body copy, buttons, sub-text | Readable, warm; weights 300–600 |
| **Caveat** (cursive) | Handwritten marginalia, door sign, portrait sign, farewell, signature | Class `.hand`; sized `1.42em`, colour `--ember` |
| *(system monospace)* | Project tech tags only | Deliberate "frontier" contrast vs. the cosy serif |

**Type scale** (clamped, fluid):
- H1 hero: `clamp(56px, 9vw, 138px)`, Fraunces 400, line-height `.86`, letter-spacing `-.03em`
- Section title: `clamp(34px, 6vw, 76px)`, Fraunces 400
- About lead / hills line: `clamp(26px, 3.6vw, 44px)`, Fraunces 400
- Contact title: `clamp(36px, 8vw, 100px)`
- Stat number: `clamp(32px, 4vw, 50px)`, Fraunces
- Card name: `25px` Fraunces 500
- Body base: `18px` Spectral, line-height `1.62`
- Card body: `15.5px` · tags `11.5px` mono · eyebrows/labels `13–15px`

**Emphasis convention:** italic phrases use `.serif-italic` (Fraunces italic, colour `--ember`).
Handwritten asides use `.hand` (Caveat). Don't mix the two in one phrase.

## A3. Spacing, radius, shape

- **Section padding:** `clamp(80px, 12vw, 160px)` vertical · `clamp(20px, 5vw, 64px)` horizontal. Max width `1280px`, centred.
- **Card padding:** `32px 28px 28px`. **Grid gap:** `24px`.
- **Radius language — roundness is the brand.** Door, window, portrait, brand mark, project numbers, badges = **circles** (`50%`). Cards/panels = `16px`. Pills/tags = `100px` (tags `6px` for a "label" feel).
- **Shadows:** warm-brown, soft, low. Cards `0 18px 36px -28px rgba(58,42,23,.5)`; floating elements up to `0 40px 80px -40px rgba(58,42,23,.7)`. Never pure-black shadows.
- **Borders:** `1px solid --line`. Tech tags use **dashed** borders (craft/paper feel).

## A4. Components

**Buttons** — radius `100px`, Spectral 500, padding `16px 28px`.
- `.btn-primary`: green fill `--door`, text `#fbf6e9`, green shadow; hover → `--door-deep`.
- `.btn-ghost`: transparent + `--line` border; hover → ember border + faint ember wash.
- Hover lift via `[data-magnetic]` (desktop): button drifts toward cursor (≤0.22×/0.3×).

**Nav** — fixed; transparent at top, on scroll gains `.scrolled` (parchment blur `rgba(241,231,208,.78)` + hairline + soft shadow). Brand = circular green "door" mark with a brass knob dot + two-line wordmark ("Shardul Date" / "BAG END · JODHPUR"). Links underline-grow in ember on hover. CTA pill "Come in". Mobile (<760px): hamburger → full-screen parchment menu, Fraunces, centred.

**Project card ("treasure")** — parchment gradient surface, `16px` radius. Top row: a **circular ember "wax-seal" number** (40–42px) + year/"In progress" (or a "Live ↗" ember pill for deployed sites). Then Fraunces name, `--ink-soft` description, dashed mono tags. Hover: lift `-6px`, ember border, a `4px` gradient bar (green→honey→ember) appears at the top edge, and a **honey radial spotlight** follows the cursor (`--mx`/`--my`).

**Capability card** — `--card` surface, `16px` radius, Fraunces heading; hover lift + ember border.

**Timeline item** — 2-col (`140px` year + body); year in ember; hover sweeps a faint ember wash L→R.

**Comfort control** — bottom-right floating pill `#soundBtn` (🔥 + label "hearth"→"fireside"); `aria-pressed` toggles ember outline.

**Badges/signs** — parchment pill badges (weather badge, photo tag); Caveat "signs" on green plaques (portrait "Bag End", easter-egg note).

---

# PART B — UX

## B1. Personas (who walks up the path)

1. **The Recruiter / Hiring Manager** — skims fast, low patience, needs *credibility + range + contactability* in <30s. Cares about: real shipped work, metrics, education pedigree, "can I reach them." May arrive via a **shared link** (`?to=Name&at=Company`).
2. **The Engineer / Collaborator** — reads deeper, wants *architecture, tech stack, proof of craft*. Cares about: the C++ latency claim, the digital-twin pipeline, GitHub.
3. **The Curious Visitor** (peer, friend, fellow maker) — here for *delight and story*. Rewards charm: the door, the window, the easter egg.

The design must serve all three **without a mode-switch**: fast credibility on the surface (hero, stats, live work with "Live ↗"), depth one layer down (tags, descriptions, GitHub), and charm woven throughout (door, window, copy) so it never gets in the recruiter's way.

## B2. Signature emotional moments (the "made-for-me" beats)

| Moment | What happens | Serves |
|---|---|---|
| **The round door** | First-visit entry overlay; "knock & come in". Returning visitors → "Welcome back". | Charm; sets tone in 2s; skippable for the impatient |
| **Personal greeting** | Hero eyebrow adapts to time-of-day + visitor's city; or names them from `?to=&at=`. | All three — esp. recruiter via shared link |
| **Window on the hills** | Round hobbit window whose **sky + weather are live** to the visitor's real location/time. | The emotional centrepiece — "this was made for me, right now" |
| **Hospitality copy** | "the kettle's on" welcome; "mind the step" farewell; themed section names. | Charm + warmth bookends |
| **Fireside sound** | Opt-in 🔥 toggle, soft crackle. Off by default. | Curious; never imposed |
| **`mellon` easter egg** | Typing "mellon" ("speak, friend, and enter") reopens the door + a note. | Curious / fellow nerds |

**Rule:** every charming element is **skippable or non-blocking**. The door has a "skip"; sound is off by default; the greeting degrades to a cosy generic line if geo/weather fails. Charm must never tax the recruiter.

## B3. Information architecture

```
Entry door (overlay, first visit)
└─ Home (single page, top-down narrative)
   1. Nav (sticky) ......... Treasures · The Hobbit · Travels · Knock + "Come in"
   2. Hero ................. who + rotating role + live greeting + portrait + CTAs
   3. Window on the hills .. live weather scene + "pull up a chair"
   4. Marquee ("provisions") skill ticker
   5. Treasures (Work) ..... 13 project cards; "browse the whole shelf" → GitHub
   6. The Hobbit (About) ... photo + lead + bio + stats + 3 capability cards
   7. Travels (Experience) . timeline (3 roles)
   8. Knock (Contact) ...... email + GitHub + LinkedIn + phone
   9. Footer .............. farewell + © + back-to-top
```

**Nav label mapping** (themed → literal, for clarity in alt/aria): Treasures=Work, The Hobbit=About, Travels=Experience, Knock=Contact.

## B4. Primary user flows

- **Recruiter, 30-second scan:** Door (skip or knock) → Hero reads name + "Mechanical Engineer, IIT Jodhpur" + rotating range → eye drops to CTAs → scrolls past live window → Treasures (sees "Live ↗" + breadth) → About stats (CGPA/rank/AIR) → Knock (email). *Success = email click or LinkedIn.*
- **Engineer, deep read:** Hero → Treasures (reads tags, opens GitHub) → About capabilities → maybe toggles fireside. *Success = GitHub visit / contact.*
- **Curious, delight loop:** Door (knock, watch it swing) → notices live greeting matches their city → window matches their weather → tries `mellon` → fireside on → shares the link. *Success = share / return visit.*
- **Shared-link arrival:** `?to=Priya&at=Google` → greeting + hills sub-line address Priya by name. *Success = feels bespoke → replies.*

---

# PART C — PAGE-BY-PAGE SPECS

### C1. Entry door (`#door`)
- Full-screen overlay, dark warm wash (`#2a2013`→`#16110a` + radial). Centred **round green door** (`min(46vw,260px)`): radial-green face, brass knob (right-centre), centre vertical plank, two inset rings, "SD" monogram.
- Caveat **sign**: "No admittance / *except on party business*" (returning: "Welcome back / *good to see you again*").
- Honey **"Knock & come in →"** button + quiet underlined **"skip"**.
- **Behaviour:** click door/button/skip, or press Enter/Space/Esc → door swings open (`rotateY(-82deg)`, 650ms) → overlay fades, body scroll unlocks. Sets `localStorage bagend_visited`. Respects reduced-motion (instant).

### C2. Hero (`#home`)
- Two-column grid `1.12fr / 0.88fr` (stacks <860px; portrait moves above text).
- Left: live **greeting eyebrow** (`#greeting`, green pulse dot) · H1 "Shardul / *Date*" (Date in ember) · **role rotator** "I make … *<rotating>*" (`[data-roles]`) · bio with `--ink` bolds + `.hand` "There and back again." · primary "See what I brought back" + ghost "Say hello".
- Right: **round portrait** — conic brass ring, 6px cream inner border, sepia photo (de-sepias on hover), swaying Caveat "Bag End" sign, parchment **weather badge** (`#weatherBadge`) bottom-centre.
- Soft animated background blobs (honey/ember/green, blurred). Scroll cue "Step in".

### C3. Window on the hills (`#hills`)
- Two-column (stacks <860px). Left: the **window** — round scene + thick wooden frame with cross-mullions.
- **Scene (`#windowScene`, `data-sky`):** layered — sky gradient (per `data-sky`: dawn/day/dusk/night) · sun **or** moon (`#celestial`, repositions) · twinkling stars (night) · drifting clouds (`#clouds.show`) · diagonal rain (`#rain.show`) · three green hill layers · a far lamplit door (glows at night).
- Right: ember eyebrow "The view from the round window" · weather-aware H2 (`#hillsGreeting`) · sub (`#hillsSub`, personalised if `?to=`).
- **Behaviour:** JS sets `data-sky` from the visitor's local hour, then refines with live weather (clouds/rain/day-night) from Open-Meteo. Graceful: stays cosy/static if APIs fail.

### C4. Marquee
- Full-bleed band, deeper parchment, hairline top/bottom. Infinite scroll of skills (Fraunces, every 3rd in deep-green). `aria-hidden`. Pauses under reduced-motion (no animation).

### C5. Treasures / Work (`#work`)
- Head: index "01 — From the road" · title "Treasures I *brought back*" · Caveat note "every adventure leaves something on the shelf →".
- **3-col grid** (2-col <980px, 1-col <640px) of **13 cards** (see DESIGN_BRIEF §5 for content). Cards 10–11 carry "Live ↗" ember pills; 12–13 show "In progress".
- Footer row: italic "and plenty more in the pack…" + ghost "Browse the whole shelf ↗" → GitHub.

### C6. The Hobbit / About (`#about`)
- Index "02 — At home". Grid `0.8fr / 1.2fr` (stacks <820px): left **framed photo** (sepia, "Jodhpur, India" tag); right Fraunces **lead** ("A maker who refuses to pick one lane …"), two paragraphs (with `.hand` "Frontier work; homely heart."), then **stats** row: CGPA `8.45` · Dept `#4` · JEE Adv `8224` · `25+` projects (count-up on scroll, `[data-count]`).
- Below: **3 capability cards** — Engineering & Design / AI & Data / Software.

### C7. Travels / Experience (`#experience`)
- Index "03 — Travels" · title "Where the road *has taken me*". Timeline: DataOceano (2025) · KJSIT (2025) · India Space Lab & Leadership (2024–25).

### C8. Knock / Contact (`#contact`)
- Centred. Index "04 — Knock on the door" · title "Let's build something / *worth coming home to.*" · large email link (ember underline on hover) · row: GitHub · LinkedIn · phone.

### C9. Footer
- Caveat farewell "Thank you for visiting — mind the step." · © + "Built from scratch at IIT Jodhpur" · "Back up the path ↑".

---

# PART D — MOTION

**Principles:** unhurried, soft, warm. Default easing `cubic-bezier(.16,1,.3,1)`. Nothing bounces or snaps. Motion should feel like firelight and a gentle breeze, not a product demo.

| Element | Motion | Timing |
|---|---|---|
| Reveal-on-scroll | fade + 26px rise, staggered | 1s; stagger `(i%4)*70ms` |
| Door open | `rotateY(-82deg)` + fade | ~650ms |
| Hearth glow | breathing scale/opacity | 5.5s alt |
| Portrait | floating sway sign | 4.5s alt |
| Role rotator | crossfade + 12px shift | 2.6s interval / .4s swap |
| Lantern cursor | lerp follow (0.2), grows over interactive | — |
| Project spotlight | radial follows cursor | .5s opacity |
| Stat counters | ease-out count-up | 1.5s, on 60% in-view |
| Window scene | sky/weather crossfades | 1–1.2s |
| Marquee | linear infinite | 34s |

**Lantern cursor** replaces the OS cursor on desktop (`cursor:none`); a warm radial "lantern" glow tracks the pointer and enlarges over links/buttons/cards. Disabled <900px and under reduced-motion.

**`prefers-reduced-motion: reduce`** → reveals show instantly; hearth glow, blob float, portrait sway, marquee, lantern all disabled; door opens instantly; smooth-scroll off. **All content remains fully accessible with zero motion.**

---

# PART E — ACCESSIBILITY & RESPONSIVE

## E1. Accessibility
- **Contrast:** body `--ink`/`--ink-soft` on parchment passes AA. **Never** use `--honey`/`--brass`/`--muted-2` for body or small text (decorative only).
- **Keyboard:** door operable via Enter/Space/Esc; all links/buttons focusable; logical tab order top-down. (TODO: ensure visible focus rings survive the custom-cursor styling — add `:focus-visible` outline in ember.)
- **Motion:** full reduced-motion support (Part D).
- **Sound:** off by default; user-initiated only; toggle has `aria-pressed`.
- **Semantics:** one `<h1>`; sections use `<section>` + heading; nav `aria-label`; decorative layers (`.grain`, `.lantern`, `.hearth-glow`, scene parts, marquee) `aria-hidden`. Live greeting region `aria-live="polite"`.
- **Images:** real `alt` (portrait described); `loading="lazy"` below the fold.
- **Themed labels:** ensure screen-reader users still understand "Treasures=Work" etc. — keep `aria-label`s literal where the themed word is ambiguous.

## E2. Responsive breakpoints
| ≤px | Change |
|---|---|
| 980 | Work grid 3→2 col |
| 900 | Lantern off, OS cursor restored |
| 860 | Hero & hills stack; portrait moves above, shrinks (220px) |
| 820 | About grid + capabilities → 1 col |
| 760 | Nav → hamburger full-screen menu |
| 640 | Work grid → 1 col; timeline stacks |
| 560 | Stats → 2 col |

**Touch:** no hover-only information; tap targets ≥44px; magnetic/spotlight effects are pure enhancement and absent on touch.

---

# PART F — SEO & PERFORMANCE (must-keep)

- **Canonical** `https://shardul.date/`. Preserve `<title>`, meta description/keywords/author, **Open Graph + Twitter** cards, **JSON-LD `Person`**, `theme-color` (now warm `#efe3c8`), `robots`, `sitemap.xml`, `site.webmanifest`, **SVG favicon = round green door**.
- **Static, no build step** — plain HTML/CSS/JS. Deploys to GitHub Pages / Cloudflare Pages.
- **Perf budget:** fonts via Google Fonts with `preconnect` + `display=swap`; images in `images/` (compress `shardul.jpg`/`og-image.jpg`; serve ~2× portrait max). No framework, no bundler. Defer non-critical JS (already one small `script.js`). Target Lighthouse ≥95 across the board.
- **Resilience:** personalisation uses **keyless** public APIs (`ipapi.co`, `api.open-meteo.com`) with timeouts + graceful fallback — the site is fully functional offline-of-those.

---

## Appendix — open design TODOs
1. Add a visible `:focus-visible` ember outline (custom cursor currently hides default focus affordance).
2. Confirm AA contrast on ember text at small sizes; reserve ember for ≥16px or bold.
3. Consider a "calm mode" toggle (one tap → all motion off) beside the hearth button for visitors who want stillness without OS settings.
4. Optional: returning-visitor "welcome back, last time you read about X" using `localStorage`.
5. Generate per-card cover art / illustrated "map" treatment for the Treasures grid (currently text cards).
