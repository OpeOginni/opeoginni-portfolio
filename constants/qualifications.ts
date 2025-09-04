export interface Qualifications {
    qualification: string;
    institution: string;
    period: string;
    description: string | null;
    location: string;
}

export const myEducationQualificaions: Qualifications[] = [
    {
        qualification: "MSc in Global Software Development",
        institution: "Fulda University of Applied Sciences",
        period: "2025 - 2027",
        description: "",
        location: "Fulda, Germany"
    },
    {
        qualification: "BSc in Computer Science",
        institution: "IU Of Applied Sciences",
        period: "2022 - 2024",
        description: "",
        location: "Bad Honnef, Germany"
    }
]

export const myWorkQualifications: Qualifications[] = [
    {
        qualification: "Full Stack / Blockchain Developer",
        institution: "Kingdomly",
        period: "Sept 2024 - April 2025",
        description: "",
        location: "Remote"
    },
    {
        qualification: "Backend Engineer",
        institution: "Yala (Rank Capital)",
        period: "April 2024 - Sept 2024",
        description: "",
        location: "Lagos, Nigeria"
    },
    {
        qualification: "Junior Backend Developer",
        institution: "Centiiv",
        period: "2022 - 2023",
        description: "",
        location: "Lagos, Nigeria"
    },
]