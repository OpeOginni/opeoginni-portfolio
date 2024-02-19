/* eslint-disable @next/next/no-img-element */
import styles from "./Project.module.css";

interface Props {
  logoLocation: string;
  techName: string;
}
// TODO: Work on Skills and Cerification Component
export default function TechUsed({ logoLocation, techName }: Props) {
  return (
    <div className="py-7 ">
      <img className={styles.techImage} src={logoLocation} alt={techName} />
    </div>
  );
}
