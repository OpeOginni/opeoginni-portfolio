export interface Qualifications {
    key: number;
    qualification: string;
    institution: string;
    period: string;
    description: string | null;
}

export const myEducationQualificaions: Qualifications[] = [
    {
        key: 1,
        qualification: "Bachelor of Science in Computer Science",
        institution: "IU Of Applied Sciences - Bad Honnef, Germany",
        period: "2022 - present",
        description: ""
    }
]

export const myWorkQualifications: Qualifications[] = [
    {
        key: 1,
        qualification: "Junior Backend Developer",
        institution: "Centiiv",
        period: "2022 - present",
        description: ""
    },
    {
        key: 2,
        qualification: "Backend Developer",
        institution: "Eweko",
        period: "2023 - present",
        description: ""
    }
]

export const myOtherQualifications: Qualifications[] = [
    {
        key: 1,
        qualification: "Runner Up in Chainlink Spring 2023 Hackathon",
        institution: "Chainlink",
        period: "2023",
        description: "Won a prize of $2000 for building an application on the FLOW Blockchain that allows users to create Fungible and Non-Fungible tokens without writing any code."
    }
]