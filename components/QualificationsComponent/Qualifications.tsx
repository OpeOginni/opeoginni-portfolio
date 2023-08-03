import { LiaTrophySolid } from "react-icons/lia";
import { MdOutlineSchool, MdWorkOutline } from "react-icons/md";
import styles from "./Qualification.module.css";
import ToolsAndLanguages from "../SkillsComponent/ToolsAndLanguages";
import {
  myLanguages,
  myTools,
  myCloud,
  myCerts,
} from "../../constants/tools&langages";

// TODO: Qualifications Component
export default function QualificationsComponent() {
  return (
    <section id="qualifications" className={styles.section}>
      <div>
        <h1 className="text-3xl font-bold py-7 text-center">Qualifications</h1>
      </div>
      <div className="h-max">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <div className={styles.gridContainer}>
              <div className="pb-9">
                <h1 className="text-xl pb-2 font-semibold text-center flex items-center justify-center">
                  <MdOutlineSchool />

                  <span className="px-4">Education</span>
                </h1>
              </div>{" "}
              <div className="grid grid-cols-3 gap-3">
                {myLanguages.map((language) => {
                  return (
                    <ToolsAndLanguages
                      key={language.key}
                      imageLocation={language.imageLocation}
                      toolName={language.toolName}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className={styles.gridContainer}>
                <div className="pb-9">
                  <h1 className="text-xl pb-2 font-semibold text-center flex items-center justify-center">
                    <MdWorkOutline />

                    <span className="px-4">Experience</span>
                  </h1>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {myTools.map((tool) => {
                    return (
                      <ToolsAndLanguages
                        key={tool.key}
                        imageLocation={tool.imageLocation}
                        toolName={tool.toolName}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="py-9">
            <h1 className="text-xl pb-2 font-semibold text-center flex items-center justify-center">
              <LiaTrophySolid />

              <span className="px-4">Awards & Accomplishments</span>
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {myCloud.map((cloud) => {
              return (
                <ToolsAndLanguages
                  key={cloud.key}
                  imageLocation={cloud.imageLocation}
                  toolName={cloud.toolName}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
