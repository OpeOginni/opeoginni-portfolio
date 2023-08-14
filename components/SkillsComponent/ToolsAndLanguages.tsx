/* eslint-disable @next/next/no-img-element */
import styles from "./Skills.module.css";

interface Props {
  imageLocation: string;
  toolName: string;
}
// TODO: Work on Skills and Cerification Component
export default function ToolsAndLanguages({ imageLocation, toolName }: Props) {
  return (
    <div>
      <div className="py-7">
        <img className={styles.toolImage} src={imageLocation} alt={toolName} />
      </div>
      <h1 className="text-sm md:text-lg pb-2 text-center">{toolName}</h1>
    </div>
  );
}
