export interface Tools {
    key: number;
    imageLocation: string;
    toolName: string;
}

export interface Languages {
    key: number;
    imageLocation: string;
    toolName: string;
}

export const myTools: Tools[] = [
    {
        key: 1,
        imageLocation: "/tools/nextjs.svg",
        toolName: "NextJS",
    },
    {
        key: 2,
        imageLocation: "/tools/react.svg",
        toolName: "React"
    },
    {
        key: 3,
        imageLocation: "/tools/tailwindcss.svg",
        toolName: "TailwindCSS",
    },
    {
        key: 4,
        imageLocation: "/tools/nodejs.svg",
        toolName: "NodeJS",

    },
    {
        key: 5,
        imageLocation: "/tools/nestjs.svg",
        toolName: "NestJS",

    },
    {
        key: 6,
        imageLocation: "/tools/drizzle.png",
        toolName: "Drizzle ORM",
    },
    {
        key: 7,
        imageLocation: "/tools/mongodb.svg",
        toolName: "MongoDB"

    },
    {
        key: 8,
        imageLocation: "/tools/postgresql.svg",
        toolName: "PostgresSQL"

    },
    {
        key: 9,
        imageLocation: "/tools/mssql.svg",
        toolName: "MSQL Sever",
    },
    {
        key: 10,
        imageLocation: "/tools/chainlink.svg",
        toolName: "Chainlink"
    },
    {
        key: 11,
        imageLocation: "/tools/hardhat.svg",
        toolName: "Hardhat",
    },
];

export const myLanguages: Languages[] = [
    {
        key: 1,
        imageLocation: "/languages/html.svg",
        toolName: "HTML",
    },
    {
        key: 2,
        imageLocation: "/languages/css3.svg",
        toolName: "CSS",
    },
    {
        key: 3,
        imageLocation: "/languages/typescript.svg",
        toolName: "Typescript",
    },
    {
        key: 4,
        imageLocation: "/languages/javascript.svg",
        toolName: "Javascript",
    },
    {
        key: 5,
        imageLocation: "/languages/solidity.svg",
        toolName: "Solidity",
    },
    {
        key: 7,
        imageLocation: "/languages/golang.svg",
        toolName: "Golang",
    },
];

export const myCloud: Tools[] = [
    {
        key: 1,
        imageLocation: "/cloud/aws.svg",
        toolName: "AWS"
    }
]

export const myCerts: Tools[] = [
    {
        key: 1,
        imageLocation: "/cloud/aws.svg",
        toolName: "AWS"
    },
    {
        key: 2,
        imageLocation: "/cloud/aws.svg",
        toolName: "AWS"
    },
    {
        key: 2,
        imageLocation: "/cloud/aws.svg",
        toolName: "AWS"
    }
]