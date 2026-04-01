export enum ToolName {
  NEXTJS = "nextjs",
  REACT = "react",
  TAILWINDCSS = "tailwindcss",
  NODEJS = "nodejs",
  NESTJS = "nestjs",
  DRIZZLE = "drizzle-orm",
  MONGODB = "mongodb",
  POSTGRESQL = "postgresql",
  SPRING_BOOT = "spring",
  EXPRESS = "expressjs",
  REDIS = "redis",
  GRPC = "grpc",
  PRISMA = "prisma",
  DOCKER = "docker",
  SOCKET_IO = "socket_io",
  FLASK = "flask",
  NPM = "npm",
  CLOUDFORMATION = "cloudformation",
  AUTH_JS = "auth_js",
  BUN = "bun",
  ELEVENLABS = "elevenlabs",
  TERRAFORM = "terraform",
  GIT = "git",
  CONVEX = "convex",
  OPEN_ROUTER="open_router",
  GEMINI="gemini",
  POLAR="polar",
  QWEN="qwen"
}

export enum LanguageName {
  HTML = "html",
  CSS = "css3",
  TYPESCRIPT = "typescript",
  JAVASCRIPT = "javascript",
  SOLIDITY = "solidity",
  GOLANG = "golang",
  JAVA = "java",
  CADENCE = "cadence",
  RUBY = "ruby",
  BASH = "bash"
}

export enum CloudName {
  AWS = "aws",
  RAILWAY = "railway",
  VERCEL = "vercel",
}

export enum ChainName {
  TEZOS = "tezos",
  FLOW = "flow"
}

export interface Tool {
  imageLocation: string;
  hasDark: boolean;
  toolName: string;
  link?: string;
}

export interface Language {
  imageLocation: string;
  hasDark: boolean;
  toolName: string;
}

export interface Cloud {
  imageLocation: string;
  hasDark: boolean;
  toolName: string;
}

export interface Chain {
  imageLocation: string;
  hasDark: boolean;
  toolName: string;
}

export interface Cert {
  imageLocation: string;
  hasDark: boolean;
  toolName: string;
  link: string;
}

/** Icons that have a `_dark` variant in the same directory. */
const HAS_DARK = new Set<string>([
  "expressjs",
  "flask",
  "open_router",
  "socket_io",
  "railway",
  "aws",
  "nextjs",
]);

// Utility function to get tool details
export const getTool = (name: ToolName): Tool => {
  return {
    imageLocation: `/tools/${name}.svg`,
    hasDark: HAS_DARK.has(name),
    toolName: getDisplayName(name),
  };
};

// Utility function to get language details
export const getLanguage = (name: LanguageName): Language => {
  return {
    imageLocation: `/languages/${name}.svg`,
    hasDark: HAS_DARK.has(name),
    toolName: getDisplayName(name),
  };
};

// Utility function for cloud services
export const getCloud = (name: CloudName): Cloud => {
  return {
    imageLocation: `/cloud/${name}.svg`,
    hasDark: HAS_DARK.has(name),
    toolName: getDisplayName(name),
  };
};

// Utility function for blockchain platforms
export const getChain = (name: ChainName): Chain => {
  return {
    imageLocation: `/chains/${name}.svg`,
    hasDark: HAS_DARK.has(name),
    toolName: getDisplayName(name),
  };
};

// Helper function to convert enum values to display names
function getDisplayName(name: string): string {
  const displayNames: Record<string, string> = {
    nextjs: "NextJS",
    react: "React",
    tailwindcss: "TailwindCSS",
    nodejs: "NodeJS",
    nestjs: "NestJS",
    "drizzle-orm": "Drizzle ORM",
    mongodb: "MongoDB",
    postgresql: "PostgreSQL",
    spring: "Spring Boot",
    expressjs: "ExpressJS",
    redis: "Redis",
    grpc: "gRPC",
    prisma: "PrismaORM",
    docker: "Docker",
    socket_io: "Socket.io",
    flask: "Flask",
    npm: "NPM",
    railway: "Railway",
    cloudformation: "CloudFormation",
    html: "HTML",
    css3: "CSS",
    typescript: "TypeScript",
    javascript: "JavaScript",
    solidity: "Solidity",
    golang: "Golang",
    java: "Java",
    cadence: "Cadence",
    ruby: "Ruby",
    bash: "Bash",
    aws: "AWS",
    tezos: "Tezos",
    flow: "Flow",
    bun: "Bun",
    elevenlabs: "Eleven Labs",
    terraform: "Terraform",
    convex: "Convex",
    open_router: "Open Router",
    gemini: "Google Gemini",
    polar: "Polar",
    qwen: "Qwen",
    vercel: "Vercel",
    auth_js: "Auth.js",
    git: "Git",
  };

  return displayNames[name] || name;
}

/**
 * Derive the dark variant path from a light image path.
 * `/tools/expressjs.svg` -> `/tools/expressjs_dark.svg`
 */
export function getDarkImageLocation(imageLocation: string): string {
  const dotIndex = imageLocation.lastIndexOf(".");
  return `${imageLocation.slice(0, dotIndex)}_dark${imageLocation.slice(dotIndex)}`;
}

export const getMyTools = (): Tool[] => [
  getTool(ToolName.NESTJS),
  getTool(ToolName.DOCKER),
  getTool(ToolName.SPRING_BOOT),
  getTool(ToolName.NEXTJS),
  getTool(ToolName.TAILWINDCSS),
  getTool(ToolName.GIT),
  getTool(ToolName.NODEJS),
  getTool(ToolName.TERRAFORM)
];

export const getMyLanguages = (): Language[] => [
  getLanguage(LanguageName.TYPESCRIPT),
  getLanguage(LanguageName.GOLANG),
  getLanguage(LanguageName.JAVA),
  getLanguage(LanguageName.SOLIDITY),
  getLanguage(LanguageName.CADENCE),
];

export const getMyCloud = (): Cloud[] => [
  getCloud(CloudName.AWS),
  getCloud(CloudName.RAILWAY),
];

export const getMyCerts = (): Cert[] => [
  {
    imageLocation: "/certs/aws-certified-cloud-practitioner.png",
    hasDark: false,
    toolName: "Cloud Practitioner",
    link: "https://www.credly.com/badges/96f201e3-7e27-44c8-8411-0254e632e695/public_url"
  },
  {
    imageLocation: "/certs/aws-cloud-project-bootcamp.svg",
    hasDark: false,
    toolName: "Cloud Project Bootcamp (Red Squad)",
    link: "https://app.exampro.co/student/achievements/validate/certificate/qegVh4xSQIeABWes-kIkmQf19f"
  }
];
