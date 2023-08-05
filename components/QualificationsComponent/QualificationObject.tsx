import styles from "./Qualification.module.css";

interface Props {
  qualification: string;
  institution: string;
  period: string;
  description: string | null;
}

export default function Qualifications({
  qualification,
  institution,
  period,
  description,
}: Props) {
  return (
    <div className="flex flex-col">
      <h1 className={styles.qualificationName}>{qualification}</h1>
      <h1 className={styles.qualificationInstitution}>{institution}</h1>
      <h1 className={styles.qualificationPeriod}>{period}</h1>
      <h1>{description}</h1>
    </div>
  );
}
