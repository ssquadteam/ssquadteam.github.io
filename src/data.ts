export const profile = {
  name: "Sadat Sahib",
  handles: ["cxv7", "SSquadTeam"],
  location: "Dhaka, Bangladesh",
  github: "https://github.com/ssquadteam",
  x: "https://x.com/iamcxv711",
  discord: "iamcxv7",
  email: "sahib.2009.sa@gmail.com",
};

export const hotbar = [
  { icon: "kotlin", name: "Kotlin", note: "My go-to. TaleLib, HytaleBridgeMod and most of my recent work are Kotlin." },
  { icon: "java", name: "Java", note: "Plugins, Folia/Paper forks, Velocity proxies. 50+ plugin codebase at Hyping." },
  { icon: "fabric", name: "Fabric", note: "Server-side mods and a shared library for a large multi-instance Cobblemon network." },
  { icon: "plane", name: "Paper / Folia", note: "Server internals: patching Folia forks, regionised threading, Bukkit compat." },
  { icon: "cpp", name: "C / C++", note: "Native code for the performance-critical parts the JVM can't reach." },
  { icon: "rust", name: "Rust", note: "Built a Cobblemon addon that calls a Rust battle bot over JNI for smarter, more advanced bot decisions." },
  { icon: "docker", name: "Docker / K8s", note: "Horizontally scaled, on-demand game servers on Kubernetes since 2021." },
  { icon: "linux", name: "Linux", note: "Everything I run lives on Linux boxes I administer myself." },
  { icon: "db", name: "Databases", note: "PostgreSQL, MySQL, MariaDB, MongoDB, Redis for cross-server player data." },
];

export type Job = {
  role: string;
  org: string;
  url?: string;
  logo: string;
  from: string;
  to?: string;
  summary: string;
  pixelLogo?: boolean;
};

export const jobs: Job[] = [
  {
    role: "Kotlin Developer",
    org: "Unstable PvP",
    url: "https://play.unstablepvp.store/",
    logo: "/logos/unstablepvp.webp",
    from: "2026",
    summary: "Building a big Kotlin codebase from the ground up, and keeping it running.",
  },
  {
    role: "Java Developer",
    org: "Unstable Network",
    url: "https://store.unstable.sh/",
    logo: "/logos/unstable.png",
    pixelLogo: true,
    from: "2026",
    summary: "Maintaining and optimizing the network's existing codebase.",
  },
  {
    role: "Fabric Developer",
    org: "SmashMC",
    url: "https://www.smashmc.co/",
    logo: "/logos/smashmc.webp",
    from: "2025",
    to: "2026",
    summary:
      "Maintained 20+ custom mods and developed the server's Fabric library for a large, multi-instance Cobblemon network. Also built resource pack content with Filament.",
  },
  {
    role: "Java Developer",
    org: "Hyping Studio",
    url: "https://playhyping.com/",
    logo: "/logos/hyping.webp",
    from: "2025",
    to: "2026",
    summary: "Maintained a large codebase of 50+ plugins and libraries.",
  },
  {
    role: "Lead Developer",
    org: "Minecraft Bangladesh",
    url: "https://minecraftbangladesh.com/",
    logo: "/logos/mcbd.webp",
    from: "2023",
    to: "2025",
    summary: "Developed and maintained a custom Folia fork and the server's plugins.",
  },
  {
    role: "CEO & Infrastructure Lead",
    org: "Minex Network",
    logo: "/logos/minex.webp",
    from: "2021",
    to: "2022",
    summary:
      "System administration and infrastructure development. Built on-demand, horizontally scaled servers with Kubernetes.",
  },
];

export type Press = { outlet: string; title: string; date: string; url: string };

export const press: Record<string, Press> = {
  ign: {
    outlet: "IGN",
    title: "Hytale and Minecraft Get Crossplay Capability Thanks to Intrepid Modder",
    date: "Jan 20, 2026",
    url: "https://www.ign.com/articles/hytale-and-minecraft-get-crossplay-capability-thanks-to-intrepid-modder",
  },
  pcgCross: {
    outlet: "PC Gamer",
    title: "'What the f***': Modding arch-sorcerer casually invents Minecraft x Hytale crossplay",
    date: "Jan 20, 2026",
    url: "https://www.pcgamer.com/games/survival-crafting/what-the-f-modding-arch-sorcerer-casually-invents-minecraft-x-hytale-crossplay-defies-laws-of-god-and-man-alike/",
  },
  toms: {
    outlet: "Tom's Hardware",
    title: "Hytale modder gets Windows 95 OS up and running inside the actual game",
    date: "Jan 2026",
    url: "https://www.tomshardware.com/video-games/hytale-modder-gets-windows-95-os-up-and-running-inside-the-actual-game-other-projects-include-running-minecraft-and-hytale-inside-itself",
  },
  dexCross: {
    outlet: "Dexerto",
    title: "Mind-boggling crossplay mod lets Minecraft and Hytale fans play together",
    date: "Jan 20, 2026",
    url: "https://www.dexerto.com/gaming/mind-boggling-crossplay-mod-lets-minecraft-and-hytale-fans-play-together-3306701/",
  },
  grWin: {
    outlet: "GamesRadar+",
    title: "Just days after launch, Hytale mods already let you run Windows 95, Minecraft, and somehow even Hytale itself",
    date: "Jan 19, 2026",
    url: "https://www.gamesradar.com/games/survival/just-days-after-launch-hytale-mods-already-let-you-run-windows-95-minecraft-and-somehow-even-hytale-itself-within-the-sandbox-rpg-and-hypixel-has-questions-how/",
  },
  pcgWin: {
    outlet: "PC Gamer",
    title: "Doom, Windows 95, even Hytale itself: It seems like there's nothing that modders can't make Hytale run",
    date: "Jan 20, 2026",
    url: "https://www.pcgamer.com/hardware/doom-windows-95-even-hytale-itself-it-seems-like-theres-nothing-that-modders-cant-make-hytale-run/",
  },
  grCross: {
    outlet: "GamesRadar+",
    title: "Hytale gets crossplay with Minecraft thanks to 15-year-old modder presumably channeling some form of black magic",
    date: "Jan 2026",
    url: "https://www.gamesradar.com/games/rpg/hytale-gets-crossplay-with-minecraft-thanks-to-15-year-old-modder-presumably-channeling-some-form-of-black-magic/",
  },
  dexHyt: {
    outlet: "Dexerto",
    title: "Hytale modder runs the entire game again within Hytale",
    date: "Jan 19, 2026",
    url: "https://www.dexerto.com/gaming/hytale-modder-runs-the-entire-game-again-within-hytale-3306066/",
  },
  eighty: {
    outlet: "80 Level",
    title: "Hytale & Minecraft Now Crossplay Compatible Thanks To 15-Year-Old Modder",
    date: "Jan 21, 2026",
    url: "https://80.lv/articles/hytale-minecraft-now-crossplay-compatible-thanks-to-15-year-old-modder",
  },
  gb: {
    outlet: "GamingBible",
    title: "Hytale Gets Minecraft Crossplay Thanks to a 15-Year-Old Modder, Once Thought Impossible",
    date: "Jan 21, 2026",
    url: "https://www.gamingbible.com/news/platform/pc/hytale-minecraft-crossplay-15-year-old-modder-240068-20260121",
  },
  nbc: {
    outlet: "Notebookcheck",
    title: "From Windows 95 to Game Boy: teen modder turns Hytale into an all-in-one emulator",
    date: "Jan 2026",
    url: "https://www.notebookcheck.net/From-Windows-95-to-Game-Boy-teen-modder-turns-Hytale-into-an-all-in-one-emulator.1209763.0.html",
  },
};

export type Feat = {
  icon: string;
  title: string;
  when: string;
  body: string;
  facts: string[];
  repo?: string;
  coverage: (keyof typeof press)[];
};

export const feats: Feat[] = [
  {
    icon: "bridge",
    title: "Minecraft ⇄ Hytale crossplay",
    when: "Jan 2026 · a week after Hytale's launch",
    body:
      "A Minecraft server running inside the Hytale JVM. It snapshots the Hytale world, rebuilds it as Minecraft chunks and streams it to vanilla clients, so players from both games share one world.",
    facts: ["Movement, chat, animations & combat synced", "Shared time of day", "Hytale server is the authority"],
    repo: "https://github.com/ssquadteam/HytaleBridgeMod",
    coverage: ["ign", "pcgCross", "dexCross", "grCross", "eighty", "gb"],
  },
  {
    icon: "win95",
    title: "Windows 95 inside Hytale",
    when: "Jan 2026 · 5 days after launch",
    body:
      "Reworked the JPC x86 emulator to run headless on the server (with plenty of BIOS tinkering), then streamed its VGA output onto the in-game world map. Hotbar slots switch between keyboard and mouse input modes.",
    facts: ["640×480 VGA at 30 FPS", "Boots unmodified .img / .iso", "Win95, Win98, FreeDOS"],
    repo: "https://github.com/ssquadteam/TempleMaps",
    coverage: ["toms", "pcgWin", "grWin", "nbc"],
  },
  {
    icon: "skull",
    title: "DOOM on the world map",
    when: "Jan 2026",
    body:
      "DOOM rendered frame by frame onto the Hytale map. Walking moves you, jumping fires, hotbar slots pick weapons. It runs on VideoMaps, my pixel-streaming layer for map displays.",
    facts: ["35 FPS with delta compression", "Up to 60 FPS map streaming", "Multi-viewer broadcast"],
    repo: "https://github.com/ssquadteam/DoomMaps",
    coverage: ["dexHyt", "grWin"],
  },
  {
    icon: "nested",
    title: "Hytale & Minecraft in Hytale",
    when: "Jan 2026",
    body:
      "A custom headless VNC client connected to a machine running the game, piped into a pop-up in-game, so you can play Hytale while standing in Hytale. Same pipeline ran classic Minecraft server-side into the map.",
    facts: ["Hytale inside Hytale, playable", "Classic Minecraft at ~35 FPS, 320×240"],
    coverage: ["dexHyt", "pcgWin", "toms"],
  },
];

export const shoutouts = [
  {
    quote: "Hytale modder ran Windows 95 in-game, just 5 days after launch, what the hell is going on lol",
    who: "Simon Collins-Laflamme",
    role: "Hypixel Studios",
    url: "https://x.com/Simon_Hypixel/status/2012921166655009273",
  },
  {
    quote: "it's only been 5 days... how...",
    who: "Hytale",
    role: "Official account",
    url: "https://x.com/Hytale/status/2012935906110452161",
  },
];

export type Project = {
  repo: string;
  icon: string;
  lang: string;
  blurb: string;
  points?: string[];
  stars: number;
};

export const featured: Project[] = [
  {
    repo: "ApiaryProxy",
    icon: "bee",
    lang: "Java",
    stars: 37,
    blurb: "The seamless proxy. A Velocity-CTD fork focused on switching servers without the player noticing.",
    points: [
      "Removes the “Reconfiguring…” stage on server switches",
      "No resource pack, tab list or scoreboard flicker",
      "Aggressive compression + live bandwidth diagnostics",
    ],
  },
  {
    repo: "Continuum",
    icon: "loop",
    lang: "Java",
    stars: 1,
    blurb: "ApiaryProxy's ideas rebuilt on vanilla Velocity 4.0, tracking upstream.",
    points: [
      "Keeps the client world loaded across switches",
      "ClientWorldSwitches API for coordinating plugins",
      "Reconfig removal + compression toolkit",
    ],
  },
  {
    repo: "HytaleBridgeMod",
    icon: "bridge",
    lang: "Kotlin",
    stars: 1,
    blurb: "The mod behind the crossplay. Speaks the Minecraft protocol from inside a Hytale server.",
    points: [
      "Vanilla 1.21.4 clients join a Hytale world",
      "Converts Hytale terrain into Minecraft chunks",
      "Built on TaleLib",
    ],
  },
];

export const more: Project[] = [
  { repo: "TaleLib", icon: "book", lang: "Kotlin", stars: 24, blurb: "Kotlin library for Hytale plugins: commands, UI, holograms, world map and more." },
  { repo: "VideoMaps", icon: "film", lang: "Kotlin", stars: 9, blurb: "Stream pixels, video and effects onto the Hytale world map at up to 60 FPS." },
  { repo: "TempleMaps", icon: "win95", lang: "Java", stars: 7, blurb: "Run x86 operating systems like Windows 95 on the Hytale world map." },
  { repo: "DoomMaps", icon: "skull", lang: "Java", stars: 7, blurb: "Play DOOM on the Hytale world map." },
];
