import { HiOutlineCode, HiOutlineDocumentText } from "react-icons/hi";
import { LiaToolsSolid } from "react-icons/lia";
import { AiOutlineCloud } from "react-icons/ai";
import ToolsAndLanguages from "./ToolsAndLanguages";
import {
  getMyLanguages,
  getMyTools,
  getMyCloud,
  getMyCerts,
} from "../../constants/tools&langages";

export default function SkillsComponent() {
  const myLanguages = getMyLanguages();
  const myTools = getMyTools();
  const myCloud = getMyCloud();
  const myCerts = getMyCerts();

  return (
    <section id="skills&certs" className="w-full px-4 md:max-w-[75%] md:mx-auto border-b border-[hsl(207,4%,16%)] py-6 md:py-5 pb-8 md:pb-14">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold py-6 md:py-7 text-center">
          Skills & Certifications
        </h1>
      </div>
      <div className="h-max">
        <div className="grid grid-cols-1 gap-8 md:gap-14 lg:grid-cols-2 lg:gap-3">
          <div>
            <div className="w-full">
              <div className="pb-4 md:pb-2 lg:pb-5">
                <h1 className="text-lg md:text-xl pb-2 font-semibold text-center flex items-center justify-center">
                  <HiOutlineCode />
                  <span className="px-4">Languages</span>
                </h1>
              </div>
              <div className="grid grid-cols-3 gap-2 md:gap-3 pb-3">
                {myLanguages.map((language) => {
                  return (
                    <ToolsAndLanguages
                      key={language.toolName}
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
              <div className="w-full">
                <div className="pb-4 md:pb-2 lg:pb-5">
                  <h1 className="text-lg md:text-xl pb-2 font-semibold text-center flex items-center justify-center">
                    <LiaToolsSolid />
                    <span className="px-4">Frameworks / Tools</span>
                  </h1>
                </div>
                <div className="grid grid-cols-3 gap-2 md:gap-3 pb-3">
                  {myTools.map((tool) => {
                    return (
                      <ToolsAndLanguages
                        key={tool.toolName}
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
            <div className="w-full">
              <div className="pb-4 md:pb-2 lg:pb-5">
                <h1 className="text-lg md:text-xl pb-2 font-semibold text-center flex items-center justify-center">
                  <AiOutlineCloud />
                  <span className="px-4">Cloud</span>
                </h1>
              </div>
              <div className="grid grid-cols-2 gap-2 md:gap-3">
                {myCloud.map((cloud) => {
                  return (
                    <ToolsAndLanguages
                      key={cloud.toolName}
                      imageLocation={cloud.imageLocation}
                      toolName={cloud.toolName}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="pb-4 md:pb-2 lg:pb-5">
              <h1 className="text-lg md:text-xl pb-2 font-semibold text-center flex items-center justify-center">
                <HiOutlineDocumentText />
                <span className="px-4">Certifications</span>
              </h1>
            </div>
            {myCerts.length < 1 ? (
              <div className="text-center text-base font-bold">
                Working on Bagging Certs...
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 text-sm md:text-xs">
                {myCerts.map((certs) => {
                  return (
                    <ToolsAndLanguages
                      key={certs.toolName}
                      imageLocation={certs.imageLocation}
                      toolName={certs.toolName}
                      link={certs.link}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
