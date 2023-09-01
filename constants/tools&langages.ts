export interface Tools {
    imageLocation: string;
    toolName: string;
    link?: string | undefined;
}

export interface Languages {
    imageLocation: string;
    toolName: string;
}

export const myTools: Tools[] = [
    {
        imageLocation: "/tools/nextjs.svg",
        toolName: "NextJS",
    },
    {
        imageLocation: "/tools/react.svg",
        toolName: "React"
    },
    {
        imageLocation: "/tools/tailwindcss.svg",
        toolName: "TailwindCSS",
    },
    {
        imageLocation: "/tools/nodejs.svg",
        toolName: "NodeJS",

    },
    {
        imageLocation: "/tools/nestjs.svg",
        toolName: "NestJS",

    },
    {
        imageLocation: "/tools/drizzle.png",
        toolName: "Drizzle ORM",
    },
    {
        imageLocation: "/tools/mongodb.svg",
        toolName: "MongoDB"

    },
    {
        imageLocation: "/tools/postgresql.svg",
        toolName: "PostgreSQL"

    },
    {
        imageLocation: "/tools/mssql.svg",
        toolName: "MSQL Sever",
    },
    {
        imageLocation: "/tools/chainlink.svg",
        toolName: "Chainlink"
    },
    {
        imageLocation: "/tools/hardhat.svg",
        toolName: "Hardhat",
    },
];

export const myLanguages: Languages[] = [
    {
        imageLocation: "/languages/html.svg",
        toolName: "HTML",
    },
    {
        imageLocation: "/languages/css3.svg",
        toolName: "CSS",
    },
    {
        imageLocation: "/languages/typescript.svg",
        toolName: "Typescript",
    },
    {
        imageLocation: "/languages/javascript.svg",
        toolName: "Javascript",
    },
    {
        imageLocation: "/languages/solidity.svg",
        toolName: "Solidity",
    },
    {
        imageLocation: "/languages/golang.svg",
        toolName: "Golang",
    },
];

export const myCloud: Tools[] = [
    {
        imageLocation: "/cloud/aws.svg",
        toolName: "AWS"
    }
]

export const myCerts: Tools[] = [
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
]