/* ============================================================
   Shardul Date — Portfolio · BACKEND / behaviour layer
   ------------------------------------------------------------
   This file is DESIGN-AGNOSTIC. It powers the live/interactive
   behaviour and looks for the hooks below. If a hook is absent
   the feature silently no-ops, so partial markup is safe.

   INTEGRATION CONTRACT  (give these to the visual design):
   --- Personal welcome (time + visitor city + live weather) ---
     #greeting       el whose innerHTML becomes the time/place greeting
     #weatherBadge   el for "<weather> · <temp>° in <City>"
     #hillsGreeting  el for the weather sentence near the window
     #hillsSub       el for the sub-line (personalised if ?to= present)
     #windowScene    el; JS sets data-sky="dawn|day|dusk|night"
     #clouds #rain   els; JS toggles .show based on weather code
     Shared link:    ?to=Name&at=Company  → names the visitor
     APIs (no keys): ipapi.co/json  +  api.open-meteo.com  (graceful fallback)
   --- Entry door (first-visit + returning) ---
     #door (.gone hides it) · #doorRound (.open) · #doorEnter · #doorSkip · #doorSign
     localStorage "bagend_visited" drives the returning-visitor copy
   --- Comfort ---  #soundBtn (aria-pressed) + .comfort-label  → fireside Web Audio
   --- Generic UI hooks ---
     .reveal (+.in on scroll) · .nav (+.scrolled) · .scroll-progress (width %)
     .nav-toggle/.nav-links (+.open) · [data-roles] (rotator) · .lantern (cursor)
     [data-magnetic] · .project (spotlight --mx/--my) · [data-count] (counters)
     #year · easter egg: type "mellon"
   All motion is gated by prefers-reduced-motion.
   ============================================================ */
(function () {
  "use strict";
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isDesktop = window.matchMedia("(min-width: 901px)").matches;
  const $ = (s) => document.querySelector(s);

  /* ---------- year ---------- */
  const yr = $("#year");
  if (yr) yr.textContent = new Date().getFullYear();

  /* ============================================================
     THE ROUND GREEN DOOR
     ============================================================ */
  (function door() {
    const overlay = $("#door");
    if (!overlay) return;
    const round = $("#doorRound");
    const enter = $("#doorEnter");
    const skip = $("#doorSkip");
    const sign = $("#doorSign");
    const returning = localStorage.getItem("bagend_visited");

    if (returning && sign && enter) {
      sign.innerHTML = "Welcome back,<br><em>good to see you again</em>";
      enter.innerHTML = 'Come in again <span aria-hidden="true">→</span>';
    }

    document.body.style.overflow = "hidden";
    let opened = false;
    const open = () => {
      if (opened) return;
      opened = true;
      localStorage.setItem("bagend_visited", "1");
      if (round && !reduce) round.classList.add("open");
      const delay = reduce ? 0 : 650;
      setTimeout(() => {
        overlay.classList.add("gone");
        document.body.style.overflow = "";
      }, delay);
    };
    enter && enter.addEventListener("click", open);
    round && round.addEventListener("click", open);
    skip && skip.addEventListener("click", open);
    document.addEventListener("keydown", (e) => {
      if (!opened && (e.key === "Enter" || e.key === " " || e.key === "Escape")) open();
    });
    // expose for easter egg
    window.__openDoor = open;
  })();

  /* ============================================================
     NAV scrolled state + scroll progress
     ============================================================ */
  const nav = $(".nav");
  const bar = $(".scroll-progress");
  const onScroll = () => {
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 40);
    const h = document.documentElement;
    const pct = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
    if (bar) bar.style.width = (pct * 100).toFixed(2) + "%";
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- mobile menu ---------- */
  const toggle = $(".nav-toggle");
  const links = $(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      })
    );
  }

  /* ---------- reveal on scroll ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduce) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            e.target.style.transitionDelay = (e.target.dataset.delay || (i % 4) * 70) + "ms";
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in"));
  }

  /* ---------- role rotator ---------- */
  const rotEl = $("[data-roles]");
  if (rotEl && !reduce) {
    const roles = [
      "Mixed Reality worlds",
      "digital-twin farms",
      "real-time audio engines",
      "machine-learning products",
      "things you can hold",
      "full-stack web apps",
    ];
    let i = 0;
    setInterval(() => {
      rotEl.classList.add("out");
      setTimeout(() => {
        i = (i + 1) % roles.length;
        rotEl.textContent = roles[i];
        rotEl.classList.remove("out");
      }, 400);
    }, 2600);
  }

  /* ============================================================
     LANTERN cursor
     ============================================================ */
  const lantern = $(".lantern");
  if (lantern && isDesktop && !reduce) {
    let lx = 0, ly = 0, x = 0, y = 0;
    document.addEventListener("mousemove", (e) => { x = e.clientX; y = e.clientY; });
    const loop = () => {
      lx += (x - lx) * 0.2; ly += (y - ly) * 0.2;
      lantern.style.transform = `translate(${lx}px, ${ly}px) translate(-50%, -50%)`;
      requestAnimationFrame(loop);
    };
    loop();
    document.querySelectorAll("a, button, [data-magnetic], .project").forEach((el) => {
      el.addEventListener("mouseenter", () => lantern.classList.add("grow"));
      el.addEventListener("mouseleave", () => lantern.classList.remove("grow"));
    });
  }

  /* ---------- magnetic buttons ---------- */
  if (!reduce && isDesktop) {
    document.querySelectorAll("[data-magnetic]").forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        const mx = e.clientX - r.left - r.width / 2;
        const my = e.clientY - r.top - r.height / 2;
        el.style.transform = `translate(${mx * 0.22}px, ${my * 0.3}px)`;
      });
      el.addEventListener("mouseleave", () => (el.style.transform = ""));
    });
  }

  /* ---------- project spotlight ---------- */
  document.querySelectorAll(".project").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", ((e.clientX - r.left) / r.width) * 100 + "%");
      card.style.setProperty("--my", ((e.clientY - r.top) / r.height) * 100 + "%");
    });
  });

  /* ---------- animated stat counters ---------- */
  const counters = document.querySelectorAll("[data-count]");
  const runCount = (el) => {
    const target = parseFloat(el.dataset.count);
    const dec = parseInt(el.dataset.decimals || "0", 10);
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";
    const dur = 1500;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + (target * eased).toFixed(dec) + suffix;
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = prefix + target.toFixed(dec) + suffix;
    };
    requestAnimationFrame(tick);
  };
  if ("IntersectionObserver" in window && !reduce) {
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { runCount(e.target); cio.unobserve(e.target); }
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach((c) => cio.observe(c));
  } else {
    counters.forEach((el) => {
      const dec = parseInt(el.dataset.decimals || "0", 10);
      el.textContent = (el.dataset.prefix || "") + parseFloat(el.dataset.count).toFixed(dec) + (el.dataset.suffix || "");
    });
  }

  /* ============================================================
     A WELCOME MADE FOR THIS VISITOR
     time of day · their weather · a name from a shared link
     ============================================================ */
  (function welcome() {
    const greetingEl = $("#greeting");
    const badgeEl = $("#weatherBadge");
    const hillsEl = $("#hillsGreeting");
    const hillsSub = $("#hillsSub");
    const scene = $("#windowScene");
    const clouds = $("#clouds");
    const rain = $("#rain");

    const hour = new Date().getHours();
    const partOfDay =
      hour >= 5 && hour < 12 ? "morning" :
      hour >= 12 && hour < 17 ? "afternoon" :
      hour >= 17 && hour < 21 ? "evening" : "night";
    const skyForHour =
      hour >= 5 && hour < 8 ? "dawn" :
      hour >= 8 && hour < 17 ? "day" :
      hour >= 17 && hour < 20 ? "dusk" : "night";
    if (scene) scene.dataset.sky = skyForHour;

    // a name from a shared link: ?to=Priya&at=Google
    const params = new URLSearchParams(location.search);
    const to = (params.get("to") || "").trim().slice(0, 40);
    const at = (params.get("at") || "").trim().slice(0, 40);
    const esc = (s) => s.replace(/[<>&"]/g, "");

    const setGreeting = (place, weather) => {
      if (!greetingEl) return;
      let msg;
      if (to) {
        msg = `Good ${partOfDay}, ${esc(to)}${at ? " of " + esc(at) : ""} — I'm so glad you came.`;
      } else if (place) {
        msg = `Good ${partOfDay}, traveller — ${weather} over ${esc(place)} right now.`;
      } else {
        msg = `Good ${partOfDay}, traveller — the kettle's on.`;
      }
      greetingEl.innerHTML = '<span class="dot"></span> ' + msg;
    };

    setGreeting(null, null); // sensible default immediately

    const weatherWord = (code) => {
      if (code === 0) return "clear skies";
      if (code <= 2) return "a few clouds";
      if (code === 3) return "an overcast sky";
      if (code === 45 || code === 48) return "a soft mist";
      if (code >= 51 && code <= 67) return "gentle rain";
      if (code >= 71 && code <= 77) return "falling snow";
      if (code >= 80 && code <= 82) return "passing showers";
      if (code >= 95) return "a rumbling storm";
      return "fair weather";
    };
    const isWet = (code) => (code >= 51 && code <= 67) || (code >= 80 && code <= 82) || code >= 95 || (code >= 71 && code <= 77);
    const isCloudy = (code) => code >= 2;

    // Fetch the visitor's city + weather (no keys, graceful fallback)
    const withTimeout = (url, ms) => {
      const ac = new AbortController();
      const t = setTimeout(() => ac.abort(), ms);
      return fetch(url, { signal: ac.signal }).then((r) => {
        clearTimeout(t);
        if (!r.ok) throw new Error("bad");
        return r.json();
      });
    };

    withTimeout("https://ipapi.co/json/", 4500)
      .then((loc) => {
        const place = loc.city || loc.region || loc.country_name || "";
        if (loc.latitude == null || loc.longitude == null) {
          setGreeting(place, "fair weather");
          return null;
        }
        return withTimeout(
          `https://api.open-meteo.com/v1/forecast?latitude=${loc.latitude}&longitude=${loc.longitude}&current=temperature_2m,weather_code,is_day`,
          4500
        ).then((w) => ({ place, w }));
      })
      .then((res) => {
        if (!res || !res.w || !res.w.current) return;
        const c = res.w.current;
        const code = c.weather_code;
        const temp = Math.round(c.temperature_2m);
        const word = weatherWord(code);

        setGreeting(res.place, word);

        // refine the window scene with real sky + weather
        if (scene && c.is_day === 0 && skyForHour !== "dusk") scene.dataset.sky = "night";
        if (clouds) clouds.classList.toggle("show", isCloudy(code));
        if (rain) rain.classList.toggle("show", isWet(code));

        if (badgeEl) {
          badgeEl.innerHTML = `<span class="dot-live"></span> ${word[0].toUpperCase() + word.slice(1)} · ${temp}° in ${esc(res.place)}`;
        }
        if (hillsEl) {
          hillsEl.textContent = res.place
            ? `It's ${word} over ${res.place} — but there's a warm seat by the fire here.`
            : hillsEl.textContent;
        }
        if (hillsSub && to) {
          hillsSub.textContent = `I set this corner aside for you, ${to}. Stay as long as you like.`;
        }
      })
      .catch(() => { /* stay with the cosy defaults */ });
  })();

  /* ============================================================
     FIRESIDE SOUND (opt-in, off by default)
     ============================================================ */
  (function hearth() {
    const btn = $("#soundBtn");
    if (!btn) return;
    let ctx = null, src = null, gain = null, crackleTimer = null, on = false;

    const makeNoiseBuffer = (context) => {
      const len = context.sampleRate * 2;
      const buf = context.createBuffer(1, len, context.sampleRate);
      const data = buf.getChannelData(0);
      let last = 0;
      for (let i = 0; i < len; i++) {
        const white = Math.random() * 2 - 1;
        last = (last + 0.02 * white) / 1.02; // brown-ish
        data[i] = last * 3.2;
      }
      return buf;
    };
    const crackle = () => {
      if (!ctx || !on) return;
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = "triangle";
      o.frequency.value = 400 + Math.random() * 900;
      g.gain.setValueAtTime(0.0001, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.05 + Math.random() * 0.06, ctx.currentTime + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.08);
      o.connect(g).connect(ctx.destination);
      o.start(); o.stop(ctx.currentTime + 0.1);
      crackleTimer = setTimeout(crackle, 250 + Math.random() * 1400);
    };
    const start = () => {
      ctx = ctx || new (window.AudioContext || window.webkitAudioContext)();
      src = ctx.createBufferSource();
      src.buffer = makeNoiseBuffer(ctx);
      src.loop = true;
      const lp = ctx.createBiquadFilter();
      lp.type = "lowpass"; lp.frequency.value = 620;
      gain = ctx.createGain(); gain.gain.value = 0.0001;
      src.connect(lp).connect(gain).connect(ctx.destination);
      src.start();
      gain.gain.exponentialRampToValueAtTime(0.07, ctx.currentTime + 1.2);
      crackle();
    };
    const stop = () => {
      if (crackleTimer) clearTimeout(crackleTimer);
      if (gain && ctx) {
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.5);
        const s = src;
        setTimeout(() => { try { s && s.stop(); } catch (e) {} }, 600);
      }
    };
    btn.addEventListener("click", () => {
      on = !on;
      btn.setAttribute("aria-pressed", String(on));
      const label = btn.querySelector(".comfort-label");
      if (on) { start(); if (label) label.textContent = "fireside"; }
      else { stop(); if (label) label.textContent = "hearth"; }
    });
  })();

  /* ============================================================
     A LITTLE EASTER EGG — type "mellon" (speak, friend)
     ============================================================ */
  (function mellon() {
    let buf = "";
    document.addEventListener("keydown", (e) => {
      if (e.key.length !== 1) return;
      buf = (buf + e.key.toLowerCase()).slice(-6);
      if (buf === "mellon") {
        const d = $("#door");
        if (d && d.classList.contains("gone") && window.__openDoor) {
          d.classList.remove("gone");
          document.body.style.overflow = "hidden";
        }
        const note = document.createElement("div");
        note.textContent = "“Speak, friend, and enter.” 🌿";
        note.setAttribute("style",
          "position:fixed;left:50%;bottom:32px;transform:translateX(-50%);z-index:9998;" +
          "font-family:Caveat,cursive;font-size:26px;color:#fbf6e9;background:#4a5b36;" +
          "padding:10px 22px;border-radius:100px;box-shadow:0 16px 32px -14px rgba(0,0,0,.5)");
        document.body.appendChild(note);
        setTimeout(() => note.remove(), 3200);
      }
    });
  })();
})();
