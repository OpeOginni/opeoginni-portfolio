import { HiOutlineCode, HiOutlineDocumentText } from "react-icons/hi";
import { LiaToolsSolid } from "react-icons/lia";
import { AiOutlineCloud } from "react-icons/ai";
import styles from "./Skills.module.css";
import ToolsAndLanguages from "./ToolsAndLanguages";
import {
  myLanguages,
  myTools,
  myCloud,
  myCerts,
} from "../../constants/tools&langages";

export default function SkillsComponent() {
  return (
    <section id="skills&certs" className={styles.section}>
      <div>
        <h1 className="text-3xl font-bold py-7 text-center">
          Skills & Certifications
        </h1>
      </div>
      <div className="h-max">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <div className={styles.gridContainer}>
              <div className="pb-9">
                <h1 className="text-xl pb-2 font-semibold text-center flex items-center justify-center">
                  <HiOutlineCode />

                  <span className="px-4">Languages</span>
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
                    <LiaToolsSolid />

                    <span className="px-4">Tools</span>
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
          <div>
            <div className="py-9">
              <h1 className="text-xl pb-2 font-semibold text-center flex items-center justify-center">
                <AiOutlineCloud />

                <span className="px-4">Cloud</span>
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
          <div>
            <div className="py-9">
              <h1 className="text-xl pb-2 font-semibold text-center flex items-center justify-center">
                <HiOutlineDocumentText />

                <span className="px-4">Certifications</span>
              </h1>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {myCerts.map((certs) => {
                return (
                  <ToolsAndLanguages
                    key={certs.key}
                    imageLocation={certs.imageLocation}
                    toolName={certs.toolName}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
