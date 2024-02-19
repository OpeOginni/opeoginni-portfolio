import {
    Tools,
    Languages,
    myTools,
    myCloud,
    myLanguages,
    myChains,
} from "./tools&langages";

export interface Projects {
    title: string;
    completedTime: Date;
    shortDescription: string;
    description: string;
    link: ProjectLink[];
    techTools?: Tools[];
    image?: string;
}

export interface ProjectLink {
    lintTitle: string;
    link: string;
}

export const myProjects: Projects[] = [
    {
        title: "Cruddur",
        completedTime: new Date("2023-07-01"),
        shortDescription: "Fullstack | Cloud Development | Serverless",
        description:
            "This project was built on the AWS Cloud Project Bootcamp by Andrew Brown and made use of multiple AWS Services like Cognito, ECS Fargate, Lambda, Api Gateway, X-Ray, CloudFormation, CDK, CloudFront, CodePipeline, etc. Cruddur is a social media platform like Twitter where users post Cruds and these cruds have an auto-delete time period.",
        link: [
            {
                lintTitle: "GitHub",
                link: "https://github.com/OpeOginni/aws-bootcamp-cruddur-2023",
            },
            {
                lintTitle: "Journal",
                link: "https://github.com/OpeOginni/aws-bootcamp-cruddur-2023/tree/main/journal",
            },
        ],
        techTools: [
            myCloud[0],
            {
                toolName: "CloudFormation - Yaml",
                imageLocation: "/tools/cloudformation.svg",
            },
            myTools[1],
            {
                toolName: "Flask",
                imageLocation: "/tools/flask.svg",
            },
            myTools[7],
            myLanguages[3],
            myLanguages[2],
            {
                toolName: "Ruby",
                imageLocation: "/languages/ruby.svg",
            },
            {
                toolName: "Bash",
                imageLocation: "/languages/bash.svg",
            },
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
                lintTitle: "GitHub",
                link: "https://github.com/OpeOginni/Cardify_Project",
            },
            {
                lintTitle: "Live Site",
                link: "https://cardifyproject-production.up.railway.app/",
            },
        ],
        techTools: [myTools[0], myTools[3], myTools[2], myLanguages[3], myTools[6]],
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
                lintTitle: "GitHub",
                link: "https://github.com/OpeOginni/luggage-booking",
            },
            {
                lintTitle: "Live Site",
                link: "https://luggage-booking-production.up.railway.app/",
            },
            {
                lintTitle: "Nest API Documentation",
                link: "https://documenter.getpostman.com/view/24109379/2s9YR3cvQp",
            },
        ],
        techTools: [
            myTools[0],
            myTools[4],
            myTools[6],
            myTools[2],
            myLanguages[2],
            myTools[8],
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
                lintTitle: "GitHub",
                link: "https://github.com/OpeOginni/tezos-dev-suite/tree/main/create-tez-dapp",
            },
            {
                lintTitle: "NPM Site",
                link: "https://www.npmjs.com/package/create-tez-dapp?activeTab=readme",
            },
        ],
        techTools: [
            myTools[3],
            myLanguages[2],
            {
                toolName: "NPM",
                imageLocation: "/tools/npm.svg",
            },
            myChains[0],
        ],
        image: "/projects/create-tez-dapp.png",
    },
];
