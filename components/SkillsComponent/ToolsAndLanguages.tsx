/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "./Skills.module.css";

interface Props {
  imageLocation: string;
  toolName: string;
  link?: string;
}
// TODO: Work on Skills and Cerification Component
export default function ToolsAndLanguages({
  imageLocation,
  toolName,
  link,
}: Props) {
  return (
    <div>
      {link ? (
        <>
          <Link href={link} target="blank">
            <div className="py-7">
              <img
                className={styles.toolImage}
                src={imageLocation}
                alt={toolName}
              />
            </div>
          </Link>
          <h1 className="text-sm md:text-lg pb-2 text-center">{toolName}</h1>
        </>
      ) : (
        <>
          <div className="py-7">
            <img
              className={styles.toolImage}
              src={imageLocation}
              alt={toolName}
            />
          </div>
          <h1 className="text-sm md:text-lg pb-2 text-center">{toolName}</h1>
        </>
      )}
    </div>
  );
}
