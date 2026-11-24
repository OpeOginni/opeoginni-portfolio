export type Logo = {
  src: string;
  /** "tile": favicon on a white tile. "bare": the image is already a tile. "mark": light mark on a dark tile. "icon": no tile. */
  style: "tile" | "bare" | "mark" | "icon";
};

export type Entry = {
  name: string;
  href?: string;
  logo: Logo;
  line: string;
  note?: string;
  code?: string;
  years: string;
};

export type Tech = { name: string; icon?: string; invert?: boolean };

export type Project = {
  name: string;
  years: string;
  description: string;
  links: { label: string; href: string }[];
  tech: Tech[];
  logo: Logo;
  screen: { src: string; alt: string; fit: "cover" | "cover-top" | "logo" };
};

export const profile = {
  name: "Opeyemi Oginni",
  lede: "I build software that helps people in care homes get proper meals. On the side, I make tools for running coding agents in the cloud, and help build OpenCode.",
  where: "Software engineer in Germany. Finishing an MSc in global software development.",
  links: {
    github: "https://github.com/OpeOginni",
    linkedin: "https://www.linkedin.com/in/opeyemi-oginni-9468a0232/",
    email: "mailto:brightoginni123@gmail.com",
    x: "https://x.com/OpeOginni",
  },
};

export const work: Entry[] = [
  {
    name: "Culinu",
    href: "https://www.culinu.eu",
    logo: { src: "/logos/culinu.png", style: "tile" },
    line: "Working Student Product & Engineering",
    note: "Ordering, recipes and kitchen ops for care homes",
    years: "2026–",
  },
  {
    name: "Kingdomly",
    logo: { src: "/logos/kingdomly.png", style: "bare" },
    line: "Full stack & blockchain developer",
    note: "NFT launchpad on Berachain",
    years: "2024–25",
  },
  {
    name: "Yala",
    href: "https://useyala.com",
    logo: { src: "/logos/yala.png", style: "bare" },
    line: "Backend engineer",
    note: "Rank Capital, Lagos",
    years: "2024",
  },
  {
    name: "Centiiv",
    href: "https://www.centiiv.io",
    logo: { src: "/logos/centiiv.png", style: "tile" },
    line: "Junior backend developer",
    note: "Payment infrastructure, Lagos",
    years: "2022–23",
  },
];

const tech = {
  typescript: { name: "TypeScript", icon: "/tech/typescript.svg" },
  bun: { name: "Bun", icon: "/tech/bun.svg" },
  docker: { name: "Docker", icon: "/tech/docker.svg" },
  opencode: { name: "OpenCode", icon: "/logos/opencode.svg" },
  t3: { name: "T3 Code", icon: "/logos/t3.svg" },
  nextjs: { name: "Next.js", icon: "/tech/nextjs.svg" },
  convex: { name: "Convex", icon: "/tech/convex.svg" },
  mongodb: { name: "MongoDB", icon: "/tech/mongodb.svg" },
  solidity: { name: "Solidity", icon: "/tech/solidity.svg", invert: true },
  postgresql: { name: "PostgreSQL", icon: "/tech/postgresql.svg" },
  elevenlabs: { name: "ElevenLabs", icon: "/tech/elevenlabs.svg", invert: true },
  rust: { name: "Rust", icon: "/tech/rust.svg", invert: true },
} satisfies Record<string, Tech>;

export const projects: Project[] = [
  {
    name: "Gitterm",
    years: "2025–",
    description:
      "Cloud sandboxes for the coding agent on your laptop, or a cloud workspace for the whole agent that you can reach from your phone or Slack. Works with OpenCode, Codex and Claude Code, on the cloud provider you pick.",
    links: [
      { label: "gitterm.dev", href: "https://gitterm.dev" },
      { label: "Source", href: "https://github.com/OpeOginni/gitterm" },
    ],
    tech: [tech.typescript, tech.bun, tech.docker, tech.opencode, tech.t3],
    logo: { src: "/logos/gitterm.png", style: "bare" },
    screen: { src: "/projects/gitterm.png", alt: "Gitterm home page", fit: "cover" },
  },
  {
    name: "Hex Meetings",
    years: "2026",
    description:
      "A macOS companion for Hex that turns recorded calls into summaries, action items and follow-ups with the coding agent you already use. Preview the result, then post it to Slack, Notion, GitHub or Linear.",
    links: [
      { label: "hex-meetings.opeoginni.dev", href: "https://hex-meetings.opeoginni.dev/" },
      { label: "Source", href: "https://github.com/OpeOginni/hex-meetings" },
    ],
    tech: [tech.rust, tech.opencode],
    logo: { src: "/logos/hex-meetings.png", style: "bare" },
    screen: { src: "/projects/hex-meetings.webp", alt: "Hex Meetings with a call summary and action items", fit: "cover-top" },
  },
  {
    name: "Self Defence",
    years: "2026",
    description:
      'A party game for friends. Vote on who best fits a "Who would...?" question, then that player gets 50 seconds to talk their way out before the revote.',
    links: [{ label: "selfdefence.app", href: "https://www.selfdefence.app/" }],
    tech: [tech.nextjs, tech.convex],
    logo: { src: "/logos/self-defence-shield.png", style: "icon" },
    screen: { src: "/projects/self-defence.png", alt: "Self Defence home screen", fit: "cover" },
  },
  {
    name: "StarBridge",
    years: "2025",
    description:
      "A Telegram bot that swaps Telegram Stars for USDT and USDC on TON, BSC and opBNB. Over 2,000 users and $8k in swaps in its first two months.",
    links: [{ label: "Open bot", href: "https://t.me/StarBridgeTGBot" }],
    tech: [tech.typescript, tech.bun, tech.mongodb, tech.solidity],
    logo: { src: "/logos/starbridge.jpg", style: "bare" },
    screen: { src: "/logos/starbridge.jpg", alt: "StarBridge logo", fit: "logo" },
  },
  {
    name: "Redmond Consultants",
    years: "2025–",
    description:
      "A language learning platform used by corporate teams across Germany, with AI generated audio for every lesson.",
    links: [{ label: "Open app", href: "https://app.redmondconsultants.com/" }],
    tech: [tech.nextjs, tech.postgresql, tech.elevenlabs, tech.docker],
    logo: { src: "/logos/redmond.png", style: "tile" },
    screen: { src: "/projects/redmond-app.png", alt: "Redmond flashcard practice, German to French", fit: "cover-top" },
  },
];

export const earlierProjects = [
  { name: "Flowmate", href: "https://github.com/OpeOginni/flowmate" },
  { name: "Solana Trade Connect", href: "https://github.com/OpeOginni/solana-trade-connect" },
];

export const openSource: Entry[] = [
  {
    name: "OpenCode",
    href: "https://github.com/anomalyco/opencode/commits?author=OpeOginni",
    logo: { src: "/logos/opencode.svg", style: "mark" },
    line: "89 merged commits, mostly the TUI, desktop app and core",
    years: "2025–",
  },
  {
    name: "github-copilot-openai-compatible",
    href: "https://github.com/OpeOginni/github-copilot-openai-compatible",
    logo: { src: "/tech/npm.svg", style: "icon" },
    line: "AI SDK provider that makes every GitHub Copilot model OpenAI compatible",
    years: "2025",
  },
  {
    name: "oc-triage",
    href: "https://github.com/OpeOginni/oc-triage",
    logo: { src: "/tech/npm.svg", style: "icon" },
    line: "Fixes a broken OpenCode install with OpenCode itself, even when the install is dead.",
    code: "npx oc-triage",
    years: "2026",
  },
];

export const talks: Entry[] = [
  {
    name: "Beyond the IDE",
    href: "https://www.linkedin.com/posts/awsugfrankfurt-awscommunityday-aws-ugcPost-7503726305926975488-JnP_/",
    logo: { src: "/logos/aws.png", style: "tile" },
    line: "OpenCode agents in your AWS environment. AWS User Group Frankfurt, with a live Gitterm demo",
    years: "Sep 2026",
  },
];

export const education: Entry[] = [
  {
    name: "Hochschule Fulda",
    logo: { src: "/logos/hs-fulda.png", style: "tile" },
    line: "MSc Global Software Development",
    years: "2025–27",
  },
  {
    name: "IU",
    logo: { src: "/logos/iu.png", style: "tile" },
    line: "BSc Computer Science",
    years: "2022–24",
  },
];

export const certificates: Entry[] = [
  {
    name: "Cloud Project Bootcamp",
    href: "https://app.exampro.co/student/achievements/validate/certificate/qegVh4xSQIeABWes-kIkmQf19f",
    logo: { src: "/logos/aws-bootcamp.svg", style: "icon" },
    line: "Red Squad. Built Cruddur, a social app on ECS, Lambda and CloudFormation",
    years: "2023",
  },
];

export const sections = [
  { id: "work", label: "Work", count: work.length },
  { id: "projects", label: "Projects", count: projects.length },
  { id: "open-source", label: "Open source", count: openSource.length },
  { id: "talks", label: "Talks", count: talks.length },
  { id: "education", label: "Education", count: education.length + certificates.length },
];
