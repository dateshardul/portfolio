# UI / UX Design Document — Shardul Date Portfolio ("Bag End")

**Version:** 2.0 (extended, with full rationale) · **Scope:** the personal portfolio at **https://shardul.date/**
**Companion docs:** `DESIGN_BRIEF.md` (creative brief / content) · `script.js` header (integration contract)
**Status:** authoritative source of truth. Every numeric value below mirrors the shipped `style.css` / `index.html` / `script.js`.

> **How to read this document.** This is not just a spec sheet — it explains *why* every decision was
> made, layer by layer, so any designer or developer (human or AI) can extend the site without breaking
> its soul. Each section is structured as **Intent → What it is → The thinking** (trade-offs, alternatives
> considered, rules). If you only have five minutes, read **Part 1** (the thesis) and **Part 3** (the layer
> stack). If you're implementing, read **Parts 4–6**. If you're writing copy, read **Part 10**.

---

## Table of contents
- **Part 1** — Design philosophy & the central thesis (the big "why")
- **Part 2** — Audience, personas & the emotional arc
- **Part 3** — The layer stack (every visual layer, bottom to top, with z-index)
- **Part 4** — Visual system: colour
- **Part 5** — Visual system: typography
- **Part 6** — Visual system: space, rhythm, shape, texture, depth
- **Part 7** — Components (anatomy + intent of each)
- **Part 8** — Section-by-section (intent · layout · layers · copy reasoning)
- **Part 9** — The personalisation engine (the "made-for-me" thinking)
- **Part 10** — Voice & tone (the copy system)
- **Part 11** — Motion & animation
- **Part 12** — Accessibility & responsive
- **Part 13** — SEO, performance & resilience
- **Part 14** — What we deliberately rejected (anti-patterns)
- **Part 15** — Open questions & future work

---

# PART 1 — DESIGN PHILOSOPHY & THE CENTRAL THESIS

## 1.1 The problem this site has to solve

Shardul is a final-year **Mechanical Engineer at IIT Jodhpur** who genuinely works across an unusually wide
span: Mixed Reality, AI/ML, digital twins, real-time C++ audio, FEA/CAD machine design, full-stack web, and
applied research that reaches into Indian knowledge systems (Jyotish, scriptural prediction). The brief asked
for a site that could **land on the Dribbble leaderboard** — i.e. be visually exceptional, not a template — and
have **strong SEO**, and show **his face**.

Two hard constraints emerged from his own feedback during design, and they shaped everything:

1. **"Don't pigeonhole me as traditional-tech only."** An earlier "Heritage × Engineering" framing was rejected
   because it implied he *only* works on India-tradition-adjacent tech. He also does plainly frontier work. The
   site must communicate **range**, with heritage as *one thread*, never the headline.
2. **"Make it feel personalised — the viewer should feel it was made for them; it should invoke emotion."** And
   later: **"make it as homely as a hobbit-hole in the Shire"** — somewhere a viewer feels *relaxed and at home*,
   knowing the host did something *for them*.

So the design must simultaneously be: **impressive** (frontier range, real depth), **warm** (homely, relaxing,
emotional), and **personal** (made-for-this-viewer) — without any of those three undercutting the others.

## 1.2 The central tension — and the idea that resolves it

There is a real tension between "cutting-edge engineer" (which trends cold, dark, technical, grid-like) and
"homely / emotional" (which trends warm, soft, storybook). Most attempts at warmth would *cost* credibility;
most attempts at credibility would *cost* warmth.

**The resolving idea: "There and Back Again."** The site is a **cosy hobbit-hole home (Bag End)**, and the
frontier projects are the **treasures and maps brought back from adventures out in the wide world.** A hobbit
goes *out* to the frontier and comes *home* to the Shire.

This single metaphor does four jobs at once:
- **Warmth** comes from the *home* (parchment, hearth, the round door, the kettle).
- **Range/impressiveness** comes from the *treasures* — the home is cosy, but the trophies on the shelf are
  Mixed Reality, digital twins, real-time engines. The content carries the credibility; the frame carries the warmth.
- **No pigeonholing** — because the *frame* is universal hospitality (everyone knows "welcome, come in"), not
  Indian-tradition iconography. Heritage shows up only inside specific *treasures*, as part of a wider chord.
- **Personalisation has a natural home** — a host who prepared the room *for you* (greets you by the weather,
  by your city, by name) is the most literal expression of "made for the viewer."

**One-line concept:** *A warm hobbit-hole where the cutting-edge work is the treasure brought back from the road.*

## 1.3 The three feelings (in priority order)

Every design choice is judged against these, in this order:

1. **Welcomed** — "this was made for me." (Hospitality + live personalisation.)
2. **Impressed** — "this person has real range and depth." (The treasures, the stats, the live work.)
3. **Charmed** — "I want to stay; I'll remember this." (The door, the window, the easter egg, the copy.)

When two goals conflict, the earlier one wins — **but never at the cost of blocking the others.** (E.g. charm
must never slow down an impatient recruiter — hence everything charming is skippable, see 1.5.)

## 1.4 Design principles (with the reasoning)

1. **Hospitality over salesmanship.** The site *hosts* rather than *pitches*. Reasoning: warmth and lowered
   defences make the work more persuasive than a hard sell would. Manifested in copy ("the kettle's on"),
   pacing (generous whitespace, "no rush"), and the door/farewell bookends.
2. **Range is the headline; heritage is a thread.** Reasoning: directly answers constraint #1. Manifested in
   the role rotator (MR → digital-twin farms → audio engines → ML → "things you can hold" → web apps), the
   marquee, and a project order that *interleaves* frontier and cultural work rather than grouping the cultural.
3. **Warmth must not cost credibility.** Reasoning: constraint behind the whole concept. Manifested by letting
   *content* (precise tech, metrics, "Live ↗") carry seriousness while *frame* (texture, copy) carries warmth;
   and by a deliberate **monospace** treatment on tech tags so the "frontier" register is always visible against
   the cosy serif.
4. **Personal, but never creepy.** Reasoning: "made for me" is magic; "they know too much about me" is unsettling.
   Manifested by using only coarse, ambient signals (city, weather, time, an opt-in URL name) — never anything
   that feels surveilled — and by graceful, cosy fallbacks when signals are missing.
5. **Charm is always skippable / non-blocking.** Reasoning: protects persona #1 (recruiter) from persona #3's
   delights. The door has a "skip"; sound is off by default; the greeting degrades to a generic warm line.
6. **Roundness is load-bearing.** Reasoning: the hobbit-hole reads instantly through *round* forms (door, window,
   portrait). Circles are the brand's primary shape language, not a decoration.
7. **Accessibility is part of hospitality.** Reasoning: a host accommodates everyone. Full reduced-motion path,
   sound off by default, keyboard-operable door, AA contrast. A truly welcoming home excludes no one.
8. **Static, durable, fast.** Reasoning: SEO + longevity + deploy-anywhere. No build step, no framework, keyless
   APIs with fallback — the site outlives toolchain churn and works even when third parties are down.

## 1.5 The "skippable charm" doctrine (why the site doesn't annoy)

The biggest risk of a *themed*, *animated*, *personalised* site is that it becomes a toy that wastes a busy
recruiter's time. The doctrine that prevents this: **every delight is optional and every delight has an exit.**
- Door → "skip" + opens on any key.
- Sound → off by default, opt-in only.
- Motion → full `prefers-reduced-motion` path.
- Personalisation → silently falls back to a warm generic line; never blocks render.
- The *substance* (who he is, the work, the contact) is always reachable in seconds regardless of the theatre.

---

# PART 2 — AUDIENCE, PERSONAS & THE EMOTIONAL ARC

## 2.1 Personas (who walks up the path)

**P1 — The Recruiter / Hiring Manager.** Skims fast, low patience, often on mobile, needs *credibility + range +
contactability* in under ~30 seconds. Cares about: real shipped work, metrics, pedigree (IIT, rank, AIR),
"can I reach them." **Often arrives via a shared link** (`?to=Name&at=Company`) — the single most important
moment to make feel bespoke. *Success = email/LinkedIn click.*

**P2 — The Engineer / Collaborator.** Reads deeper, wants *architecture, stack, proof of craft*. Cares about the
C++ "0.000 ms" claim, the digital-twin data pipeline, the FEA, GitHub. Skeptical of fluff; rewarded by precise
tags and honest framing. *Success = GitHub visit / technical conversation.*

**P3 — The Curious Visitor** (peer, friend, fellow maker, fellow nerd). Here for *delight and story*. Rewards
charm: watches the door swing, notices the window matches their weather, tries `mellon`, turns on the fire.
*Success = shares the link / returns.*

**Design consequence:** the site must serve all three **without a mode switch or a "choose your path" gate**
(which would tax everyone). Instead it *layers*: fast credibility on the surface, depth one layer down, charm
woven in the margins where it never blocks the main read.

## 2.2 The emotional arc (the intended journey of feeling)

The page is sequenced as a narrative of feeling, top to bottom:

1. **Door** → *curiosity + a smile* ("oh, it's a little door").
2. **Hero greeting** → *recognition* ("it knows my city / my name / the time").
3. **Window on the hills** → *warmth + wonder* ("the weather outside matches *my* weather — this was made for now").
4. **Marquee + Treasures** → *respect* ("…that's a lot of serious range").
5. **About + stats** → *trust* ("real pedigree, real numbers, honestly stated").
6. **Travels** → *credibility* ("he's been out in the world").
7. **Knock** → *invitation* ("I could actually talk to this person").
8. **Footer** → *fondness* ("mind the step" — a warm goodbye you remember).

The arc deliberately front-loads *welcome/wonder* and back-loads *invitation* — emotion first, ask last.

---

# PART 3 — THE LAYER STACK (every visual layer, bottom to top)

The page is composed of stacked layers with deliberate z-index ordering. Understanding this stack is essential
to extending the site without visual regressions. **Bottom (furthest back) → top (closest):**

| # | Layer | z-index | What it is | Why it exists / the thinking |
|---|---|---|---|---|
| 0 | **Body canvas + fixed gradient washes** | (base) | `--paper` parchment with two fixed radial washes (honey top-right, green bottom-left) | The "room's" ambient light. Fixed-attachment so the light feels *stable* as you scroll — like a real room lit from a window, not a moving gradient. Establishes warmth before any content loads. |
| 1 | **Hearth glow** | `0` | A blurred ember/honey radial, bottom-left, slowly breathing | The *banked fire* in the corner. Pure atmosphere — the single strongest "homely" signal after the door. Breathing animation (5.5s) makes the room feel *alive and occupied*. Off under reduced-motion. |
| 2 | **Hero background blobs** | `-1` (within hero) | Three big blurred colour orbs (honey, ember, green) drifting | Soft, out-of-focus depth behind the name. Reasoning: keeps the hero from feeling flat/empty without competing with text. The three brand hues preview the palette subconsciously. |
| 3 | **Section content** | `1` | All the actual sections | Sits *above* the hearth glow so text stays readable, but the glow still bleeds warmly at the page edges. |
| 4 | **Comfort controls** | `95` | The floating 🔥 hearth button (bottom-right) | Always reachable but never in the way. Below nav/door so overlays cover it. |
| 5 | **Navigation** | `1000` | The sticky top bar | Above content, below the entry door and the lantern. |
| 6 | **Paper grain** | `60` | A fixed SVG fractal-noise overlay at 6% opacity, `multiply` blend | The *texture of the parchment itself.* Reasoning: flat colour reads "digital/cheap"; grain reads "made, physical, warm". `multiply` so it sits *in* the paper, not on top. The single most important texture for the storybook feel. |
| 7 | **Scroll progress** | `9997` | A 3px top bar, green→honey→ember gradient | A quiet "how far down the path am I" indicator. Doubles as a thin line of *lamplight* tying the three brand colours together. |
| 8 | **Lantern cursor** | `9999` | A warm radial glow that follows the pointer (desktop) | Replaces the OS arrow with a *lantern* you carry through the hobbit-hole. Reasoning: turns the most-used UI element (the cursor) into a story object; makes hovering feel like *illuminating*. Grows over interactive elements. Off <900px + reduced-motion. |
| 9 | **Entry door overlay** | `10000` | The full-screen round-door gate | The topmost layer — it *is* the threshold. Must cover everything until the visitor chooses to enter. |

**The thinking behind the stack:** atmosphere lives at the *back* (canvas, hearth, blobs) and *front* (grain,
lantern) — wrapping the content in warmth from both sides — while the *substance* sits safely in the readable
middle. Decorative layers are all `aria-hidden` and motion-gated, so the stack is pure enhancement: strip every
atmospheric layer and the site is still a complete, legible, accessible document.

---

# PART 4 — VISUAL SYSTEM: COLOUR

## 4.1 Intent

The palette had to do the heaviest lifting in the whole concept: **flip the register from the old cold-dark
template to warm-light storybook**, and encode the hobbit-hole (earth, lamplight, moss, ember) — while keeping
enough contrast for a serious, readable, AA-compliant document.

## 4.2 The big decision: light, not dark

The previous portfolio was near-black (`#08080b`). We went to **light parchment** (`#efe3c8`). Reasoning:
- A hobbit-hole is *lamplit and earthy*, not a void. Dark would have read "techy/edgy" — the exact thing we were
  moving *away* from.
- Light + warm is rarer in engineer portfolios (most go dark), so it stands out (the Dribbble-calibre goal).
- Parchment evokes *paper, maps, journals* — directly supporting the "treasures/maps brought back" metaphor.

## 4.3 The tokens (and why each exists)

Defined as CSS custom properties in `:root`. Grouped by job:

**Surfaces (the room itself)**
| Token | Hex | Job & reasoning |
|---|---|---|
| `--paper` | `#efe3c8` | The canvas. Aged parchment — warm enough to feel lamplit, light enough for AA body text. |
| `--paper-2` | `#e7d8b8` | A half-step deeper, for full-bleed bands (marquee) so they recede slightly without a hard edge. |
| `--card` | `#f6efdd` | Card surface — *lighter* than the canvas so treasures lift *toward* the light (counter-intuitive but correct: in a warm room, the thing you pick up catches the lamp). |
| `--card-2` | `#efe4c9` | Card gradient end, giving each card a subtle top-lit sheen. |

**Ink (text — the writing on the paper)**
| Token | Hex | Job & reasoning |
|---|---|---|
| `--ink` | `#3a2a17` | Primary text. *Wood-brown, not black* — black on parchment reads harsh/digital; brown reads "ink on a page." |
| `--ink-soft` | `#6a543b` | Body/secondary. Still AA on parchment; softer hierarchy. |
| `--muted` | `#8a755a` | Labels, captions. Decorative-adjacent; only for ≥13px non-critical text. |
| `--muted-2` | `#a8916f` | Faintest. Watermark-level only — **never** body text (fails contrast by design). |

**Brand & accent (identity and emphasis)**
| Token | Hex | Job & reasoning |
|---|---|---|
| `--door` | `#5f7345` | **Primary brand** — the round-door moss green. Used for identity, nav, primary action. Green = "come in / go / home". |
| `--door-deep` | `#4a5b36` | Hover/active green, signage plaques. |
| `--ember` | `#c14d22` | **Emphasis & links** — the warm fire accent. The one "hot" colour; used sparingly so it always means "look here / act here". |
| `--ember-soft` | `#d76a3c` | Ember hover. |
| `--honey` | `#c8901f` | Lamplight gold — *light*, not text. Glows, the door button, the gradient bar. |
| `--brass` | `#a9802f` | Metal — the door knob, the portrait ring. |

**Structure**
| Token | Hex | Job |
|---|---|---|
| `--line` | `rgba(74,56,33,.18)` | Borders/hairlines (warm-brown, never grey). |
| `--line-soft` | `rgba(74,56,33,.10)` | Faint dividers. |

## 4.4 The colour *grammar* (the rules that keep it coherent)

This is the most important part of the colour system — the **semantic assignment** that makes the site feel
designed rather than decorated:

- **Green = identity, navigation, primary actions.** (Brand mark, primary button, door, "come in".) *Green is
  the home; it's where you go.*
- **Ember = emphasis & interaction.** (Links, italic emphasis, "Live ↗", hover accents, active states, selection.)
  *Ember is the fire; it draws the eye and means "this is alive / act here".* Kept scarce on purpose.
- **Honey & brass = light and metal — decorative only, never text on parchment** (they fail contrast). The
  hearth glow, the gradient progress bar, the portrait ring, the knob.
- **Ink/ink-soft = all body text, always.** Muted only for ≥13px non-critical labels; muted-2 never for text.
- **Selection:** background `--ember`, text `#fff5e9` (warm white, never pure white).

**Why this matters:** by reserving ember for "act/alive" and green for "identity/go", the site teaches the
visitor an instant, wordless vocabulary — they know where to click before they read.

## 4.5 Contrast & known risk

Body `--ink`/`--ink-soft` on `--paper` passes WCAG AA. **Known risk (tracked in Part 15):** `--ember` on
parchment is borderline at small sizes — the rule is *ember for emphasis at ≥16px or bold only*, never for small
body text.

---

# PART 5 — VISUAL SYSTEM: TYPOGRAPHY

## 5.1 Intent

Type had to carry *three voices at once*: a **storybook display** voice (the fairy-tale frame), a **readable
literary body** voice (a real document a recruiter can skim), and a **handwritten human** voice (the host's own
hand — marginalia, signs, signature). Plus a *fourth, contrasting* voice for tech, to keep "frontier" visible.

## 5.2 The four families (and why each was chosen)

| Family | Voice | Used for | Why this face |
|---|---|---|---|
| **Fraunces** (serif, optical-size axis) | Storybook display | H1, section titles, project/card names, stats, nav brand | Has genuine *character and warmth* (soft, slightly old-style, beautiful italics) without being twee. Its optical-size axis means it looks lush at display sizes. It's the "once upon a time" voice. |
| **Spectral** (serif) | Literary body | All body copy, buttons, sub-text | A *readable* serif designed for screens and long text. Keeping the body in a **serif** (not a sans) preserves the bookish, warm register — the whole site reads like a well-set page, not an app. |
| **Caveat** (cursive) | The host's hand | `.hand` marginalia, the door sign, the portrait "Bag End" sign, the farewell, (future) signature | The literal human touch — a *handwritten* note from Shardul to *you*. Sized `1.42em`, colour `--ember`. This is where "a person made this for me" becomes visible. |
| **System monospace** | Frontier / machine | Project tech tags only | A *deliberate clash*. The cosy serif says "home"; the mono tags say "I build serious technical things." This one-element contrast is doing real strategic work (principle 1.4.3). |

**Why three serifs + a mono instead of the usual serif-display + sans-body?** Because a sans body would have
pulled the whole page back toward "modern app/portfolio template" — the exact generic register we're avoiding.
An all-serif page is unusual, warmer, and more memorable; the lone monospace then reads as an intentional signal,
not an inconsistency.

## 5.3 The scale (fluid, clamped — and why)

All display type uses `clamp(min, vw, max)` so it scales smoothly with the viewport instead of jumping at
breakpoints. Reasoning: fluid type keeps the *dramatic* hero impact on desktop while staying graceful on phones,
with no awkward mid-sizes.

| Role | Size | Face / notes |
|---|---|---|
| H1 hero | `clamp(56px, 9vw, 138px)` | Fraunces 400, line-height `.86`, letter-spacing `-.03em` — tight and grand |
| Section title | `clamp(34px, 6vw, 76px)` | Fraunces 400 |
| About lead / hills line | `clamp(26px, 3.6vw, 44px)` | Fraunces 400 |
| Contact title | `clamp(36px, 8vw, 100px)` | the loudest "ask" on the page |
| Stat number | `clamp(32px, 4vw, 50px)` | Fraunces — numbers as display objects |
| Card name | `25px` | Fraunces 500 |
| Body base | `18px`, line-height `1.62` | Spectral — generous leading for calm reading |
| Card body | `15.5px` | Spectral |
| Tech tags | `11.5px` | monospace, letter-spacing `.02em` |
| Eyebrows / labels | `13–15px` | uppercase, letter-spaced, ember or muted |

## 5.4 Emphasis grammar (two distinct tools, never mixed)

- `.serif-italic` → **Fraunces italic in ember.** For *typographic* emphasis inside headings/body ("brought
  *back*", "*Date*"). It's the page's formal emphasis.
- `.hand` → **Caveat in ember.** For *personal asides* from the host ("There and back again.", "Frontier work;
  homely heart."). It's a different *speaker* — Shardul scribbling in the margin.

**Rule:** never combine them in one phrase — they're two different voices and mixing them muddies who's speaking.

---

# PART 6 — VISUAL SYSTEM: SPACE, RHYTHM, SHAPE, TEXTURE, DEPTH

## 6.1 Space & rhythm — "no rush"

- **Section padding:** `clamp(80px, 12vw, 160px)` vertical, `clamp(20px, 5vw, 64px)` horizontal. Max content
  width `1280px`, centred.
- **Intent:** generous vertical space is the *spatial expression of hospitality* — "stay as long as you like,
  there's room to breathe." Cramped layouts feel transactional; this feels unhurried. The big vertical gaps also
  give each "treasure" its own moment rather than a dense catalogue.
- **Card grid gap** `24px`, **card padding** `32px 28px 28px` — comfortable, never tight.

## 6.2 Shape — roundness is the brand (load-bearing, not decoration)

The hobbit-hole reads in the first 200ms *because of round forms.* The shape language is strictly tiered:

- **Circles (`50%`)** — the iconic forms: the door, the window, the portrait, the brand mark, the project
  "wax-seal" numbers, the live/weather badges. These *are* the brand silhouette.
- **Soft rectangles (`16px`)** — cards and panels. Friendly but legible for content blocks.
- **Pills (`100px`)** — buttons, nav links' CTA, badges. The "smooth pebble" feel.
- **Small radius (`6px`)** — tech tags only, to read as little *labels/luggage-tags* on the treasures.

**Why tiered rather than "everything round":** if *everything* were a circle, content blocks would be unusable
and it'd read as a gimmick. Reserving circles for the *iconic* objects makes them feel special and keeps content
readable. Roundness is a *spotlight*, not a wash.

## 6.3 Texture — why the site feels "made"

- **Paper grain** (Part 3, layer 6): fixed SVG fractal noise, 6% opacity, `multiply`. The difference between
  "a warm colour" and "a piece of warm paper." Without it the parchment looks like a flat fill; with it, it
  looks physical. This is the highest-ROI texture on the site.
- **Tech-tag dashed borders:** a tiny craft cue — like hand-cut paper labels.

## 6.4 Depth — warm light, never hard shadow

- **Shadows are warm-brown and soft, never black.** Cards: `0 18px 36px -28px rgba(58,42,23,.5)`. Floating
  objects (portrait, window): up to `0 40px 80px -40px rgba(58,42,23,.7)`. The long, soft, *brown* falloff reads
  as *lamplight casting a gentle shadow*, where a hard black shadow would read "Material Design / app."
- **Inner light:** the portrait ring (conic brass), the card top gradient bar, the hearth glow — light *sources*
  rather than drop-shadows do most of the depth work, reinforcing "a room lit by fire and lamp."

---

# PART 7 — COMPONENTS (anatomy + intent of each)

Each component is described as **Intent → Anatomy → States → Reasoning.**

## 7.1 Buttons
- **Intent:** the two actions a host offers — "come further in" (primary) and "just say hi" (secondary).
- **Anatomy:** radius `100px`, Spectral 500, padding `16px 28px`.
  - `.btn-primary` — green fill `--door`, text `#fbf6e9`, soft green shadow. *The "go home / come in" action.*
  - `.btn-ghost` — transparent, `--line` border. *The lighter-weight option.*
- **States:** primary hover → `--door-deep`; ghost hover → ember border + faint ember wash; both (desktop) carry
  `[data-magnetic]` so they *lean toward the cursor* (≤0.22× x / 0.3× y).
- **Reasoning:** the magnetic pull makes buttons feel *eager to be pressed* — a small warmth in the interaction
  itself. Green-for-primary keeps the colour grammar (green = go/home).

## 7.2 Navigation
- **Intent:** orient without intruding; carry the theme in miniature.
- **Anatomy:** fixed bar. **Brand** = circular green "door" mark with a brass knob dot + two-line wordmark
  ("Shardul Date" / "BAG END · JODHPUR"). **Links** themed (Treasures · The Hobbit · Travels · Knock). **CTA** pill
  "Come in". **Mobile (<760px):** hamburger → full-screen parchment menu in Fraunces, centred.
- **States:** transparent at the very top (lets the hero breathe); on scroll gains `.scrolled` — parchment blur
  `rgba(241,231,208,.78)` + hairline + soft shadow, so it becomes legible over content. Links underline-grow in
  ember on hover.
- **Reasoning:** the brand mark *is* a tiny round door with a brass knob — the concept stated in 40px. The two-line
  wordmark sneaks in "Bag End · Jodhpur" (whimsy + the real SEO-relevant location).

## 7.3 Project card ("a treasure on the shelf")
- **Intent:** present each project as a *found object* worth picking up — not a row in a table.
- **Anatomy:** parchment gradient surface, `16px` radius. **Top row:** a circular **ember "wax-seal" number**
  (40–42px, embossed look) + the year *or* an "In progress" label *or* — for deployed sites — a **"Live ↗" ember
  pill.** Then Fraunces **name**, `--ink-soft` **description**, **dashed monospace tags.**
- **States (hover):** lift `-6px`; border turns ember; a `4px` gradient bar (green→honey→ember) lights along the
  top edge; and a **honey radial spotlight** follows the cursor across the card (`--mx`/`--my`).
- **Reasoning:** the wax-seal number makes each project feel *sealed/curated* (a treasure, not a list item). The
  cursor spotlight is "holding a lantern up to it." The "Live ↗" pill is the credibility shortcut for P1/P2 — a
  visitor can *touch the real thing* in one click, which is worth more than any description.

## 7.4 Capability card
- **Intent:** summarise the breadth (Engineering & Design / AI & Data / Software) for fast scanning.
- **Anatomy:** `--card` surface, `16px` radius, Fraunces heading, `--ink-soft` body. Hover: lift + ember border.
- **Reasoning:** these three cards are the *literal* answer to "don't pigeonhole me" — three equal-weight pillars,
  none subordinate.

## 7.5 Timeline item (Travels)
- **Intent:** the road taken, as a journey log.
- **Anatomy:** 2-col (`140px` ember year + body), hairline divider; hover sweeps a faint ember wash L→R.
- **Reasoning:** the L→R wash reads like *retracing the path*; ember years tie it to the "alive/important" accent.

## 7.6 Comfort control (the hearth toggle)
- **Intent:** let the visitor *choose* their comfort (sound) — agency is the deepest form of "make me at home."
- **Anatomy:** floating bottom-right pill `#soundBtn` (🔥 + label "hearth" → "fireside"); `aria-pressed` toggles
  an ember outline.
- **Reasoning:** different people relax differently, so the host offers a dial rather than imposing. Off by
  default (principle 1.4.5). Placed bottom-right, out of the reading path.

## 7.7 Badges & signs
- **Intent:** small spoken labels from the host.
- **Anatomy:** parchment **pill badges** (weather badge `#weatherBadge`, photo "Jodhpur, India" tag) and Caveat
  **"signs" on green plaques** (the swaying portrait "Bag End" sign, the easter-egg note).
- **Reasoning:** signs in the host's handwriting personalise the space; the weather badge is where live data
  surfaces as a tiny, delightful detail rather than a dashboard.

---

# PART 8 — SECTION-BY-SECTION (intent · layout · layers · copy reasoning)

> Cross-reference: the integration hooks (IDs/classes the backend needs) live in the `script.js` header.

## 8.1 Entry door (`#door`) — *the threshold*
- **Intent:** set the entire emotional register in two seconds, and make *entering a choice* (so arrival feels
  like being welcomed in, not landing on a page).
- **Layout/layers:** full-screen overlay, dark warm wash (`#2a2013`→`#16110a` + radial vignette). Centred
  **round green door** (`min(46vw,260px)`): radial-green face, **brass knob** (right-centre), centre vertical
  plank, two inset rings, **"SD" monogram.** Below: a Caveat **sign**, a honey **"Knock & come in →"** button, a
  quiet underlined **"skip".**
- **Copy:** *"No admittance / except on party business"* (a direct, affectionate Tolkien nod) → for returning
  visitors becomes *"Welcome back / good to see you again"* (recognition).
- **Behaviour:** click door/button/skip, or press Enter/Space/Esc → the door **swings open** (`rotateY(-82deg)`,
  ~650ms) → overlay fades, scroll unlocks. Sets `localStorage bagend_visited`. Reduced-motion → instant.
- **Reasoning:** the door is the concept's handshake. The "skip" + any-key-opens honour principle 1.4.5. The
  returning-visitor variant is the first proof that the house *remembers* you.

## 8.2 Hero (`#home`) — *who, range, and recognition*
- **Intent:** in one screen — name, that he has *range*, that this was made *for you*, and his face.
- **Layout:** two-column grid `1.12fr / 0.88fr` (stacks <860px; portrait moves *above* the text on mobile so the
  face still leads).
  - **Left:** live **greeting eyebrow** (`#greeting`, green pulse dot) · **H1** "Shardul / *Date*" (surname in
    ember) · **role rotator** "I make … *<rotating>*" (`[data-roles]`) · bio with `--ink` bolds + a `.hand` "There
    and back again." · **primary** "See what I brought back" + **ghost** "Say hello".
  - **Right:** **round portrait** — conic **brass ring**, 6px cream inner border, lightly **sepia** photo (de-sepias
    on hover), a swaying Caveat **"Bag End" sign**, and a parchment **weather badge** bottom-centre.
- **Layers:** hero background blobs (z `-1`) behind everything; portrait shadow lifts it off the page.
- **Copy reasoning:** the rotator is the *anti-pigeonhole device* — it cycles MR → digital-twin farms → audio
  engines → ML → "things you can hold" → web apps, so the *first thing* a visitor learns is breadth. "See what I
  brought back" frames the work as treasure (concept). The sepia photo ties him into the parchment world; the
  hover de-sepia is a tiny "he comes to life when you reach for him."

## 8.3 Window on the hills (`#hills`) — *the emotional centrepiece*
- **Intent:** the single strongest "made-for-me-*right-now*" moment — a window whose view matches the visitor's
  real time and weather.
- **Layout:** two-column (stacks <860px). **Left = the window:** a round scene inside a thick **wooden frame with
  cross-mullions.**
- **Scene layers (`#windowScene`, driven by `data-sky`):** sky gradient (dawn/day/dusk/night) · **sun *or* moon**
  (`#celestial`, repositions by time) · twinkling **stars** (night) · drifting **clouds** (`#clouds.show`) ·
  diagonal **rain** (`#rain.show`) · **three green hill layers** for depth · a **far lamplit door** on the hills
  that *glows at night.*
- **Right:** ember eyebrow "The view from the round window" · weather-aware **H2** (`#hillsGreeting`) · sub
  (`#hillsSub`, personalised if `?to=`).
- **Behaviour:** JS sets `data-sky` from the visitor's local hour, then refines with **live weather** (clouds/rain/
  day-night) from Open-Meteo. Graceful: stays cosy and static if APIs fail.
- **Reasoning:** weather is the detail that makes personalisation feel *uncanny and kind* rather than creepy —
  it's about *the world you share right now*, not about *you* as a tracked individual (principle 1.4.4). The far
  glowing door on the hills is a quiet emotional rhyme: *home is just over there.*

## 8.4 Marquee — *provisions*
- **Intent:** a fast, low-effort proof of technical breadth between the warm window and the work.
- **Layout:** full-bleed band, `--paper-2`, hairlines top/bottom, infinite-scrolling skill list (Fraunces, every
  3rd word in deep-green). `aria-hidden`, paused under reduced-motion.
- **Reasoning:** it's the pantry shelf — Python, C/C++, PyTorch, Unity, SolidWorks, FEA… — reinforcing range
  kinetically without asking anyone to read carefully.

## 8.5 Treasures / Work (`#work`) — *what he brought back*
- **Intent:** the core credibility section — 13 projects as curated treasures, interleaving frontier and cultural
  work so range reads first.
- **Layout:** head (index "01 — From the road" · title "Treasures I *brought back*" · Caveat note "every adventure
  leaves something on the shelf →"). **3-col grid** (2-col <980px, 1-col <640px) of **13 cards** (content in
  `DESIGN_BRIEF.md §5`). Cards 10–11 carry **"Live ↗"** pills; 12–13 show **"In progress".** Footer row: italic
  "and plenty more in the pack…" + ghost **"Browse the whole shelf ↗"** → GitHub.
- **Reasoning:** ordering interleaves MR, digital-twin, AI pipeline, C++ audio, optics, gears, EV, RAG, live
  tourism sites, and the two new applied-research projects — *deliberately not* grouping the cultural ones, so
  no visitor concludes "tradition guy." "In progress" on 12–13 is honest and signals momentum.

## 8.6 The Hobbit / About (`#about`) — *at home*
- **Intent:** trust — the human, the pedigree, the honest numbers, the three pillars.
- **Layout:** index "02 — At home". Grid `0.8fr / 1.2fr` (stacks <820px): **left** framed sepia photo + "Jodhpur,
  India" tag; **right** Fraunces **lead** ("A maker who refuses to pick one lane — *mechanical engineering, AI, and
  software, under one roof.*"), two paragraphs (with `.hand` "Frontier work; homely heart."), then a **stats** row
  — CGPA `8.45` · Dept `#4` · JEE Adv `8224` · `25+` projects — that **counts up** on scroll (`[data-count]`).
  Below: **3 capability cards** (Engineering & Design / AI & Data / Software).
- **Reasoning:** the lead sentence is the thesis in his own voice. The count-up makes the stats feel *earned*
  (they tick into place) rather than just printed. The three pillars are the formal "range, not one lane" proof.

## 8.7 Travels / Experience (`#experience`)
- **Intent:** show he's been *out in the world* (the "there" of "there and back again").
- **Layout:** index "03 — Travels" · title "Where the road *has taken me*" · timeline (DataOceano 2025 · KJSIT
  2025 · India Space Lab & Leadership 2024–25).
- **Reasoning:** "Travels" reframes internships/roles as journeys, staying in-world while delivering CV facts.

## 8.8 Knock / Contact (`#contact`) — *the invitation*
- **Intent:** the single clear ask, kept warm.
- **Layout:** centred. Index "04 — Knock on the door" · title "Let's build something / *worth coming home to.*" ·
  large **email** link (ember underline on hover) · row: GitHub · LinkedIn · phone.
- **Reasoning:** the ask comes *last* (emotional arc 2.2). "Worth coming home to" closes the metaphor on the
  highest, warmest note before the goodbye.

## 8.9 Footer — *the goodbye you remember*
- **Layout:** Caveat farewell **"Thank you for visiting — mind the step."** · © + "Built from scratch at IIT
  Jodhpur" · "Back up the path ↑".
- **Reasoning:** "mind the step" is the host walking you to the door — a tiny line that converts a cold page-end
  into a fond memory (feeling #3). "Built from scratch" quietly reasserts craft.

---

# PART 9 — THE PERSONALISATION ENGINE (the "made-for-me" thinking)

## 9.1 Intent & boundary
Make each visitor feel *personally hosted* using only **ambient, non-invasive** signals, with **cosy fallback**
whenever a signal is missing. The line we never cross (principle 1.4.4): nothing that feels like surveillance —
only the shared world (time, their city, the weather) and an *opt-in* name the visitor's referrer chose to add.

## 9.2 The four signals
1. **Time of day** (local clock) → greeting wording ("Good morning/afternoon/evening") + the window's `data-sky`
   (dawn/day/dusk/night). *Zero network, always works.*
2. **City** (via `ipapi.co/json`, keyless) → "…over <City> right now." Coarse, ambient, never stored.
3. **Live weather** (via `api.open-meteo.com`, keyless, from the IP's lat/long) → the greeting's weather word +
   the window's clouds/rain/sun/stars. *The uncanny-kind detail.*
4. **Shared-link name** (`?to=Name&at=Company`) → "Good evening, Priya of Google — I'm so glad you came," and a
   personalised hills sub-line. *The recruiter-bespoke moment.*

## 9.3 The graceful-degradation ladder (why it never feels broken)
The greeting is set **immediately** to a warm generic line, then *upgraded* as signals arrive:
`generic warm line` → `+ time of day` → `+ city` → `+ live weather` → (`+ name` if URL has it).
Every fetch has a timeout and a `catch` that simply keeps the cosier line. **The visitor never sees a loading
state, an error, or an empty slot** — only, at worst, a slightly less specific warmth. This is the engineering
that makes the magic feel reliable.

## 9.4 Memory (returning visitor)
`localStorage bagend_visited` flips the door's copy to "Welcome back." Deliberately tiny for now; Part 15 lists a
richer "last time you read about X" idea. Reasoning: even one bit of memory ("the house knows me") is
disproportionately warm.

---

# PART 10 — VOICE & TONE (the copy system)

## 10.1 The voice
**A warm, witty host with quiet confidence.** Speaks *to* the visitor, not *at* them. Hospitable, never servile;
playful, never goofy; proud of the work, never boastful. Think: a well-read friend welcoming you into a home full
of interesting things they've made.

## 10.2 Principles
- **Hospitality verbs:** "come in", "stay a while", "pull up a chair", "the kettle's on", "mind the step."
- **Treasure/journey nouns:** "treasures", "brought back", "the road", "travels", "the shelf", "provisions."
- **Honesty over hype** — *especially* for the research projects: "tested for statistically honest signal",
  "treating the scriptures as a hypothesis source rather than ground truth." This is what makes prediction-from-
  tradition read as *rigour*, not mysticism, to P1/P2.
- **Two registers, two type tools:** formal emphasis = `.serif-italic`; the host's personal aside = `.hand`
  (Part 5.4).
- **Themed but never obscure:** section names are themed (Treasures/The Hobbit/Travels/Knock) but always paired
  with a plain index ("01 — From the road") and clear content so no one is lost. Screen-reader labels stay literal.

## 10.3 The Tolkien layer (how heavy, and why that heavy)
Light and affectionate, never cosplay. Allowed: "There and back again", the door sign, `mellon` ("speak, friend,
and enter"), "Bag End", "the Shire"-adjacent warmth. **Not** allowed: invented lore, heavy fantasy diction,
anything that would read as a *Tolkien fan site* rather than *an engineer's warm home.* The metaphor serves the
person; the person is never in service of the metaphor.

---

# PART 11 — MOTION & ANIMATION

## 11.1 Principles
Unhurried, soft, warm. **Default easing `cubic-bezier(.16,1,.3,1)`** (a gentle ease-out — things *settle* into
place). **Nothing bounces, snaps, or springs.** The mental model: *firelight and a gentle breeze*, not a product
demo. Motion should make the room feel *alive and occupied*, never *busy*.

## 11.2 The motion inventory
| Element | Motion | Timing |
|---|---|---|
| Reveal-on-scroll | fade + 26px rise, staggered | 1s; stagger `(i%4)*70ms` |
| Door open | `rotateY(-82deg)` + fade | ~650ms |
| Hearth glow | breathing scale/opacity | 5.5s alternate |
| Portrait sign | gentle sway | 4.5s alternate |
| Role rotator | crossfade + 12px shift | 2.6s interval / .4s swap |
| Lantern cursor | lerp follow (0.2), grows over interactive | continuous |
| Project spotlight | honey radial follows cursor | .5s opacity |
| Stat counters | ease-out count-up | 1.5s, fires at 60% in-view |
| Window scene | sky/weather crossfades | 1–1.2s |
| Marquee | linear infinite scroll | 34s |
| Background blobs | slow drift | 17s alternate |

## 11.3 The reduced-motion contract
`prefers-reduced-motion: reduce` → reveals show instantly; hearth glow, blob drift, portrait sway, marquee, and
lantern all stop; the door opens instantly; smooth-scroll off. **Every piece of content and every function
remains fully available with zero motion** — motion is strictly enhancement. (This is hospitality, not just
compliance — principle 1.4.7.)

---

# PART 12 — ACCESSIBILITY & RESPONSIVE

## 12.1 Accessibility (intent: a host excludes no one)
- **Contrast:** body `--ink`/`--ink-soft` on parchment passes AA. *Never* `--honey`/`--brass`/`--muted-2` for body
  or small text (decorative only). Ember reserved for ≥16px/bold (Part 4.5).
- **Keyboard:** door operable via Enter/Space/Esc; all links/buttons focusable; logical top-down tab order.
  *Tracked gap (Part 15):* add a visible `:focus-visible` ember outline, since the custom lantern cursor hides the
  default affordance.
- **Motion:** full reduced-motion path (Part 11.3).
- **Sound:** off by default, user-initiated only; toggle exposes `aria-pressed`.
- **Semantics:** exactly one `<h1>`; every section is a `<section>` with a heading; nav has `aria-label`; all
  decorative layers (`.grain`, `.lantern`, `.hearth-glow`, the window scene parts, the marquee) are `aria-hidden`;
  the live greeting is an `aria-live="polite"` region so it announces without stealing focus.
- **Images:** descriptive `alt` (the portrait is described, not "image"); below-the-fold images `loading="lazy"`.
- **Themed-label safety:** because nav words are themed, keep ARIA/alt text literal where the themed word could
  confuse a screen-reader user (Treasures=Work, etc.).

## 12.2 Responsive breakpoints (and the reasoning per break)
| ≤px | Change | Why |
|---|---|---|
| 980 | Work grid 3→2 col | keep cards readable, avoid cramming |
| 900 | Lantern off, OS cursor restored | custom cursors hurt on hybrid/touch |
| 860 | Hero & hills stack; portrait moves *above* text, shrinks (~220px) | face must still lead on mobile |
| 820 | About grid + capabilities → 1 col | single-column reading on tablets |
| 760 | Nav → hamburger full-screen menu | room runs out for inline links |
| 640 | Work grid → 1 col; timeline stacks | phone reading |
| 560 | Stats → 2 col | four-up stats get too tight |

## 12.3 Touch
No hover-only information anywhere (everything important is visible without hover); tap targets ≥44px; magnetic
buttons, card spotlight, and lantern are pure enhancement and simply absent on touch — the site is complete
without them.

---

# PART 13 — SEO, PERFORMANCE & RESILIENCE

## 13.1 SEO (a hard requirement from the brief)
Preserve, on every change: canonical `https://shardul.date/`; `<title>`; meta description/keywords/author;
**Open Graph + Twitter** cards; **JSON-LD `Person`** (name, IIT Jodhpur, `knowsAbout`, `sameAs` GitHub/LinkedIn);
`theme-color` (now warm `#efe3c8`); `robots`; `sitemap.xml`; `site.webmanifest`; the **SVG favicon = a round green
door.** Semantic HTML5 and real alt text are themselves SEO + a11y wins.

## 13.2 Performance
- Static, **no build step** — plain HTML/CSS/JS; deploys to GitHub Pages / Cloudflare Pages.
- Fonts via Google Fonts with `preconnect` + `display=swap` (text shows immediately in fallback, swaps when the
  webfont lands — no invisible-text flash).
- Images live in `images/`; compress `shardul.jpg`/`og-image.jpg`, serve ~2× the displayed size max.
- One small `script.js`, no framework/bundler. Target **Lighthouse ≥95** across the board.

## 13.3 Resilience (a quiet point of pride)
All personalisation uses **keyless** public APIs (`ipapi.co`, `api.open-meteo.com`) with **timeouts + graceful
fallback** (Part 9.3). The site is fully functional, warm, and complete even if both third parties are down, or
JavaScript is disabled entirely — the door simply isn't there and you land in a complete static home.

---

# PART 14 — WHAT WE DELIBERATELY REJECTED (anti-patterns)

Recording these so future edits don't "helpfully" reintroduce them:

- **The cold dark theme** (old `#08080b`). Rejected: read as generic-edgy and fought the warmth. → warm parchment.
- **"Heritage × Engineering" as the headline.** Rejected by the user: pigeonholes him as tradition-only. → range
  is the headline; heritage is one thread (Part 1.1, principle 1.4.2).
- **A "choose your path: recruiter / engineer / curious" gate.** Rejected: taxes everyone with a decision before
  any value. → layered single page that serves all three at once (Part 2).
- **Full fantasy cosplay / heavy Tolkien lore.** Rejected: would read as a fan site, not an engineer's home. →
  affectionate light touch only (Part 10.3).
- **Sound on by default / autoplay.** Rejected: hostile. → opt-in, off by default.
- **Blocking the recruiter with theatre.** Rejected. → everything charming is skippable (principle 1.4.5).
- **Hard black shadows / flat fills / a sans body.** Rejected: each pulls toward "generic app template." → warm
  brown light, paper grain, all-serif body.
- **Overstated project claims** (e.g. an earlier inflated BTP "AR defense" scope; mysticism-tone on the research
  projects). Rejected: credibility is fragile. → grounded, honest framing throughout (Part 10.2).

---

# PART 15 — OPEN QUESTIONS & FUTURE WORK

1. **Focus rings:** add a visible `:focus-visible` ember outline (the custom cursor currently hides the default).
   *Priority: high (a11y).*
2. **Ember contrast:** audit ember text at small sizes; enforce "ember ≥16px or bold." *Priority: high.*
3. **Calm mode:** a one-tap "still the room" toggle beside the hearth button (all motion off without needing OS
   settings) — extends principle 1.4.7 into an explicit control. *Priority: medium.*
4. **Richer memory:** returning-visitor "welcome back — last time you lingered on KrishiTwin" via `localStorage`.
   *Priority: medium; watch the not-creepy line.*
5. **Per-treasure cover art:** illustrated "map/journal" visuals per project card instead of text-only (the brief's
   Dribbble-calibre ceiling). *Priority: medium.*
6. **The handwritten signature:** add Shardul's actual signature (SVG) near the farewell — the most personal
   single touch still missing. *Priority: low/easy.*
7. **Stats number:** "25+ projects" is a deliberate round floor; revisit if we want to surface the true higher
   count. *Priority: low.*
8. **Sound palette:** consider an optional birdsong/rain layer alongside the fire crackle (visitor-chosen
   soundscape = deeper "relax your way" agency). *Priority: low.*

---

*End of document. For content (exact project copy, links, facts) see `DESIGN_BRIEF.md`. For the live-behaviour
integration hooks see the header comment in `script.js`.*
