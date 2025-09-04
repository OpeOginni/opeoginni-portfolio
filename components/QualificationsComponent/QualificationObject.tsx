import styles from "./Qualification.module.css";

interface Props {
  qualification: string;
  institution: string;
  period: string;
  description: string | null;
  location?: string;
}

export default function Qualifications({
  qualification,
  institution,
  period,
  description,
  location,
}: Props) {
  return (
    <div className="flex flex-col text-center">
      <h1 className="font-semibold text-base leading-6 mb-4">{qualification}</h1>
      <h1 className="pb-2 text-[hsl(207,4%,56%)]">{institution} - {location}</h1>
      <h1 className="text-[hsl(207,4%,56%)]">{period}</h1>
      <h1>{description}</h1>
    </div>
  );
}
