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
  toolName: string;
  link?: string;
}

export interface Language {
  imageLocation: string;
  toolName: string;
}

export interface Cloud {
  imageLocation: string;
  toolName: string;
}

export interface Chain {
  imageLocation: string;
  toolName: string;
}

export interface Cert {
  imageLocation: string;
  toolName: string;
  link: string;
}

// Utility function to get tool details
export const getTool = (name: ToolName): Tool => {
  return {
    imageLocation: `/tools/${name}.svg`,
    toolName: getDisplayName(name)
  };
};

// Utility function to get language details
export const getLanguage = (name: LanguageName): Language => {
  return {
    imageLocation: `/languages/${name}.svg`,
    toolName: getDisplayName(name)
  };
};

// Utility function for cloud services
export const getCloud = (name: CloudName): Cloud => {
  return {
    imageLocation: `/cloud/${name}.svg`,
    toolName: getDisplayName(name)
  };
};

// Utility function for blockchain platforms
export const getChain = (name: ChainName): Chain => {
  return {
    imageLocation: `/chains/${name}.svg`,
    toolName: getDisplayName(name)
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
    qwen: "Qwen"
  };

  return displayNames[name] || name;
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
    toolName: "Cloud Practitioner",
    link: "https://www.credly.com/badges/96f201e3-7e27-44c8-8411-0254e632e695/public_url"
  },
  {
    imageLocation: "/certs/aws-cloud-project-bootcamp.svg",
    toolName: "Cloud Project Bootcamp (Red Squad)",
    link: "https://app.exampro.co/student/achievements/validate/certificate/qegVh4xSQIeABWes-kIkmQf19f"
  }
];

