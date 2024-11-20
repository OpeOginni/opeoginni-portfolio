import {
    ToolName,
    LanguageName,
    CloudName,
    ChainName,
    getTool,
    getLanguage,
    getCloud,
    getChain,
} from "./tools&langages";

export interface Projects {
    title: string;
    completedTime: Date;
    shortDescription: string;
    description: string;
    link: ProjectLink[];
    tech: (ToolName | LanguageName | CloudName | ChainName)[];
    image?: string;
}

export interface ProjectLink {
    linkTitle: string;
    link: string;
}

export const myProjects: Projects[] = [     {
    title: "Solana Trade Connect",
    completedTime: new Date("2024-04-08"),
    shortDescription: "Dev Tool | Solana | Microservices",
    description: "A Wallet As A Service system, that allows developers simply add in NFT trading and chat features to their dApps without having to build the infrastructure leaving them to focus on building their product.",
    link: [
        {
            linkTitle: "GitHub",
            link: "https://github.com/OpeOginni/solana-trade-connect"
        },
        {
            linkTitle: "Demo Video",
            link: "https://www.loom.com/share/df3428e10d2f4be783f7e4beaa0d5104?sid=82ba92e1-6a15-4ac7-b23c-b584fe332fde"
        },
        {
            linkTitle: "Infra Diagram",
            link: "https://github.com/OpeOginni/solana-trade-connect/blob/main/media/Trade_Connect-Complete_Internal_Diagram.png"
        },
        {
            linkTitle: "Dev Interaction",
            link: "https://github.com/OpeOginni/solana-trade-connect/blob/main/media/Trade_Connect-Client_Interaction_Diagram.png"
        },
        {
            linkTitle: "Dashboard Site",
            link: "https://solana-trade-connect.vercel.app/"
        },
    ],
    tech: [
        LanguageName.TYPESCRIPT,
        ToolName.EXPRESS,
        ToolName.REDIS,
        ToolName.GRPC,
        ToolName.PRISMA,
        ToolName.POSTGRESQL,
        CloudName.RAILWAY,
        ToolName.DOCKER,
        ToolName.SOCKET_IO,
        ToolName.NEXTJS,
    ],
        image: "/projects/solana-trade-connect.png"
    },
    {
        title: "Cruddur",
        completedTime: new Date("2023-07-01"),
        shortDescription: "Fullstack | Cloud Development | Serverless",
        description:
            "This project was built on the AWS Cloud Project Bootcamp by Andrew Brown and made use of multiple AWS Services like Cognito, ECS Fargate, Lambda, Api Gateway, X-Ray, CloudFormation, CDK, CloudFront, CodePipeline, etc. Cruddur is a social media platform like Twitter where users post Cruds and these cruds have an auto-delete time period.",
        link: [
            {
                linkTitle: "GitHub",
                link: "https://github.com/OpeOginni/aws-bootcamp-cruddur-2023",
            },
            {
                linkTitle: "Journal",
                link: "https://github.com/OpeOginni/aws-bootcamp-cruddur-2023/tree/main/journal",
            },
        ],
        tech: [
            CloudName.AWS,
            ToolName.CLOUDFORMATION,
            ToolName.REACT,
            ToolName.FLASK,
            ToolName.POSTGRESQL,
            LanguageName.TYPESCRIPT,
            LanguageName.JAVASCRIPT,
            LanguageName.RUBY,
            LanguageName.BASH,
        ],
        image: "/projects/cruddur.png",
    },

    {
        title: "Cardify",
        completedTime: new Date("2023-01-01"),
        shortDescription: "Fullstack | E-Commerce",
        description:
            "This is a site that let users order bank cards from the comfort of their home, and make payments with stripe. Built the Frontend using NextJs and the Backend Using Node and ExpressJS.",
        link: [
            {
                linkTitle: "GitHub",
                link: "https://github.com/OpeOginni/Cardify_Project",
            },
            {
                linkTitle: "Live Site",
                link: "https://cardifyproject-production.up.railway.app/",
            },
        ],
        tech: [ToolName.NEXTJS, ToolName.NODEJS, ToolName.TAILWINDCSS, LanguageName.JAVASCRIPT, ToolName.MONGODB],
        image: "/projects/cardify-4.png",
    },

    {
        title: "Luggage Booking App",
        completedTime: new Date("2023-11-01"),
        shortDescription: "Fullstack | Travel",
        description:
            "This site allows users to book their luggages or packages to be loaded into different transports, and they can retrive them at the destination point.",
        link: [
            {
                linkTitle: "GitHub",
                link: "https://github.com/OpeOginni/luggage-booking",
            },
            {
                linkTitle: "Live Site",
                link: "https://luggage-booking.vercel.app/",
            },
            {
                linkTitle: "Nest API Documentation",
                link: "https://documenter.getpostman.com/view/24109379/2s9YR3cvQp",
            },
        ],
        tech: [
            ToolName.NEXTJS,
            ToolName.NESTJS,
            ToolName.POSTGRESQL,
            ToolName.TAILWINDCSS,
            CloudName.RAILWAY,
            LanguageName.TYPESCRIPT,
        ],
        image: "/projects/luggage-booking.png",
    },
    {
        title: "Create-tez-dApp CLI",
        completedTime: new Date("2024-02-18"),
        shortDescription: "Dev Tool | CLI",
        description:
            "Scaffolding CLI that speeds up frontend setup time for developers building dApps on Tezos",
        link: [
            {
                linkTitle: "GitHub",
                link: "https://github.com/OpeOginni/tezos-dev-suite/tree/main/create-tez-dapp",
            },
            {
                linkTitle: "NPM Site",
                link: "https://www.npmjs.com/package/create-tez-dapp?activeTab=readme",
            },
        ],
        tech: [
            ToolName.NPM,
            LanguageName.JAVASCRIPT,
            ChainName.TEZOS,
        ],
        image: "/projects/create-tez-dapp.png",
    },
];
