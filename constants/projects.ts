import { Tools, Languages, myTools, myCloud, myLanguages } from "./tools&langages";

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
        description: "This project was built on the AWS Cloud Project Bootcamp by Andrew Brown and made use of multiple AWS Services like Cognito, ECS Fargate, Lambda, Api Gateway, X-Ray, CloudFormation, CDK, CloudFront, CodePipeline, etc. Cruddur is a social media platform like Twitter where users post Cruds and these cruds have an auto-delete time period.",
        link: [
            {
                lintTitle: "GitHub",
                link: "https://github.com/OpeOginni/aws-bootcamp-cruddur-2023"
            },
            {
                lintTitle: "Journal",
                link: "https://github.com/OpeOginni/aws-bootcamp-cruddur-2023/tree/main/journal"
            }
        ],
        techTools: [myCloud[0],
        {
            toolName: "CloudFormation - Yaml",
            imageLocation: "/tools/cloudformation.svg"
        },
        myTools[1],
        {
            toolName: "Flask",
            imageLocation: "/tools/flask.svg"
        },
        myTools[7], myLanguages[3], myLanguages[2],
        {
            toolName: "Ruby",
            imageLocation: "/languages/ruby.svg"
        },
        {
            toolName: "Bash",
            imageLocation: "/languages/bash.svg"
        },
        ],
        image: "/projects/cruddur.png"

    },

    {
        title: "Cardify",
        completedTime: new Date("2023-01-01"),
        shortDescription: "Fullstack | E-Commerce",
        description: "This is a site that let users order bank cards from the comfort of their home, and make payments with stripe. Built the Frontend using NextJs and the Backend Using Node and ExpressJS.",
        link: [
            {
                lintTitle: "GitHub",
                link: "https://github.com/OpeOginni/Cardify_Project"
            },
            {
                lintTitle: "Live Site",
                link: "https://cardifyproject-production.up.railway.app/"
            }
        ],
        techTools: [
            myTools[0],
            myTools[3], myTools[2], myLanguages[3],
            myTools[6]

        ],
        image: "/projects/cardify.png"

    }
]