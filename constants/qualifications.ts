export interface Qualifications {
    qualification: string;
    institution: string;
    period: string;
    description: string | null;
}

export const myEducationQualificaions: Qualifications[] = [
    {
        qualification: "Bachelor of Science in Computer Science",
        institution: "IU Of Applied Sciences - Bad Honnef, Germany",
        period: "2022 - 2024",
        description: ""
    }
]

export const myWorkQualifications: Qualifications[] = [
    {
        qualification: "Junior Backend Developer",
        institution: "Centiiv",
        period: "2022 - 2023",
        description: ""
    },
    {
        qualification: "Backend Engineer",
        institution: "Yala (Rank Capital)",
        period: "April 2024 - Sept 2024",
        description: ""
    },
    {
        qualification: "Full Stack / Blockchain Developer",
        institution: "Kingdomly",
        period: "Sept 2024 - Present",
        description: ""
    }

]

export const myOtherQualifications: Qualifications[] = [
    {
        qualification: "Runner Up in Chainlink Spring 2023 Hackathon",
        institution: "Chainlink",
        period: "2023",
        description: ""
    }
]