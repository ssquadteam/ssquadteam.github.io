const $ = <T extends Element>(sel: string) => document.querySelector<T>(sel);
const $$ = <T extends Element>(sel: string) => [...document.querySelectorAll<T>(sel)];

const avatar = $<HTMLButtonElement>(".avatar");
const VIEWS = ["front", "side", "back", "left"] as const;
let view = 0;

avatar?.addEventListener("click", () => {
  if (view !== 0) {
    view = 0;
    avatar.dataset.view = "front";
  }
  avatar.classList.remove("is-wave");
  void avatar.offsetWidth;
  avatar.classList.add("is-wave");
});
avatar?.addEventListener("animationend", () => avatar.classList.remove("is-wave"));

$$<HTMLButtonElement>("[data-turn]").forEach((b) =>
  b.addEventListener("click", () => {
    if (!avatar) return;
    view = (view + Number(b.dataset.turn) + VIEWS.length) % VIEWS.length;
    avatar.classList.remove("is-wave");
    avatar.dataset.view = VIEWS[view];
  }),
);

const slots = $$<HTMLButtonElement>(".slot");
const info = $<HTMLElement>("#hotbar-info");

function select(i: number) {
  const slot = slots[i];
  if (!slot || !info) return;
  slots.forEach((s) => s.setAttribute("aria-selected", String(s === slot)));
  info.replaceChildren(Object.assign(document.createElement("b"), { textContent: slot.dataset.name }), slot.dataset.note ?? "");
}

slots.forEach((s, i) => s.addEventListener("click", () => select(i)));
document.addEventListener("keydown", (e) => {
  const typing = e.target instanceof Element && e.target.matches("input, textarea, [contenteditable]");
  if (e.ctrlKey || e.metaKey || e.altKey || typing) return;
  const n = Number(e.key);
  if (n >= 1 && n <= slots.length) select(n - 1);
});

const copied = $<HTMLElement>(".copied");
$$<HTMLButtonElement>("[data-copy]").forEach((b) =>
  b.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(b.dataset.copy!);
      if (copied) copied.textContent = `Copied "${b.dataset.copy}" to clipboard`;
    } catch {
      if (copied) copied.textContent = `Discord: ${b.dataset.copy}`;
    }
  }),
);

const nav = $<HTMLElement>(".nav");
const toggle = $<HTMLButtonElement>(".nav-toggle");
toggle?.addEventListener("click", () => {
  const open = nav!.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
$$<HTMLAnchorElement>(".nav-links a").forEach((a) =>
  a.addEventListener("click", () => {
    nav?.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
  }),
);

const links = new Map($$<HTMLAnchorElement>(".nav-links a").map((a) => [a.hash.slice(1), a]));
const sectionObserver = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) links.forEach((a, id) => a.setAttribute("aria-current", String(id === e.target.id)));
    }
  },
  { rootMargin: "-45% 0px -50% 0px" },
);
$$<HTMLElement>("main section[id]").forEach((s) => sectionObserver.observe(s));

const revealer = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      e.target.classList.add("in");
      revealer.unobserve(e.target);
    }
  },
  { rootMargin: "0px 0px -8% 0px" },
);
$$("[data-reveal]").forEach((el) => revealer.observe(el));
