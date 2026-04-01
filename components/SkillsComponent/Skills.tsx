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
    <section
      id="skills&certs"
      className="w-full px-4 md:max-w-[75%] md:mx-auto border-b border-neutral-200 dark:border-neutral-800 py-10 md:py-12"
    >
      <div>
        <h2 className="text-2xl md:text-3xl font-bold pb-8 md:pb-10 text-center text-neutral-900 dark:text-neutral-50">
          Skills & Certifications
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-10 md:gap-12 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-10">
        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase text-neutral-400 dark:text-neutral-500 mb-5 text-center">
            Languages
          </h3>
          <div className="grid grid-cols-3 gap-x-2 gap-y-1">
            {myLanguages.map((language) => (
              <ToolsAndLanguages
                key={language.toolName}
                imageLocation={language.imageLocation}
                hasDark={language.hasDark}
                toolName={language.toolName}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase text-neutral-400 dark:text-neutral-500 mb-5 text-center">
            Frameworks / Tools
          </h3>
          <div className="grid grid-cols-3 gap-x-2 gap-y-1">
            {myTools.map((tool) => (
              <ToolsAndLanguages
                key={tool.toolName}
                imageLocation={tool.imageLocation}
                hasDark={tool.hasDark}
                toolName={tool.toolName}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase text-neutral-400 dark:text-neutral-500 mb-5 text-center">
            Cloud
          </h3>
          <div className="grid grid-cols-2 gap-x-2 gap-y-1">
            {myCloud.map((cloud) => (
              <ToolsAndLanguages
                key={cloud.toolName}
                imageLocation={cloud.imageLocation}
                hasDark={cloud.hasDark}
                toolName={cloud.toolName}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase text-neutral-400 dark:text-neutral-500 mb-5 text-center">
            Certifications
          </h3>
          {myCerts.length < 1 ? (
            <div className="text-center text-sm text-neutral-500">
              Working on Bagging Certs...
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-1">
              {myCerts.map((certs) => (
                <ToolsAndLanguages
                  key={certs.toolName}
                  imageLocation={certs.imageLocation}
                  hasDark={certs.hasDark}
                  toolName={certs.toolName}
                  link={certs.link}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
