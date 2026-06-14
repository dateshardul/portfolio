/* ============================================================
   Shardul Date — Portfolio interactions
   ============================================================ */
(function () {
  "use strict";
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- year ---------- */
  const yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---------- nav scrolled state ---------- */
  const nav = document.querySelector(".nav");
  const onScroll = () => {
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 40);
    const h = document.documentElement;
    const pct = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
    const bar = document.querySelector(".scroll-progress");
    if (bar) bar.style.width = (pct * 100).toFixed(2) + "%";
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- mobile menu ---------- */
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
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
  const rotEl = document.querySelector("[data-roles]");
  if (rotEl && !reduce) {
    const roles = [
      "Mixed Reality systems",
      "digital-twin platforms",
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

  /* ---------- custom cursor ---------- */
  const cur = document.querySelector(".cursor");
  const dot = document.querySelector(".cursor-dot");
  if (cur && dot && window.matchMedia("(min-width: 901px)").matches) {
    let cx = 0, cy = 0, x = 0, y = 0;
    document.addEventListener("mousemove", (e) => {
      x = e.clientX; y = e.clientY;
      dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    });
    const loop = () => {
      cx += (x - cx) * 0.18; cy += (y - cy) * 0.18;
      cur.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      requestAnimationFrame(loop);
    };
    loop();
    document.querySelectorAll("a, button, [data-magnetic], .project").forEach((el) => {
      el.addEventListener("mouseenter", () => cur.classList.add("grow"));
      el.addEventListener("mouseleave", () => cur.classList.remove("grow"));
    });
  }

  /* ---------- magnetic buttons ---------- */
  if (!reduce && window.matchMedia("(min-width: 901px)").matches) {
    document.querySelectorAll("[data-magnetic]").forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        const mx = e.clientX - r.left - r.width / 2;
        const my = e.clientY - r.top - r.height / 2;
        el.style.transform = `translate(${mx * 0.25}px, ${my * 0.35}px)`;
      });
      el.addEventListener("mouseleave", () => (el.style.transform = ""));
    });
  }

  /* ---------- project spotlight + subtle tilt ---------- */
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
})();
