import { MdOutlineSchool, MdWorkOutline } from "react-icons/md";
import Qualifications from "./QualificationObject";
import {
  myEducationQualificaions,
  myWorkQualifications,
} from "../../constants/qualifications";

export default function QualificationsComponent() {
  return (
    <section
      id="qualifications"
      className="w-full px-4 md:max-w-[75%] md:mx-auto border-b border-neutral-200 dark:border-neutral-800 py-10 md:py-12"
    >
      <div>
        <h2 className="text-2xl md:text-3xl font-bold pb-8 md:pb-10 text-center text-neutral-900 dark:text-neutral-50">
          Qualifications
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
        <div>
          <div className="w-full text-center">
            <div className="pb-6 md:pb-8">
              <div className="inline-flex items-center gap-2 text-neutral-800 dark:text-neutral-200">
                <MdOutlineSchool className="text-lg" />
                <h3 className="text-base md:text-lg font-semibold">
                  Education
                </h3>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 gap-8 w-full max-w-md">
                {myEducationQualificaions.map(
                  (educationQualification, index) => (
                    <div key={educationQualification.qualification}>
                      <Qualifications
                        qualification={educationQualification.qualification}
                        institution={educationQualification.institution}
                        location={educationQualification.location}
                        period={educationQualification.period}
                        description={educationQualification.description}
                      />
                      {index < myEducationQualificaions.length - 1 && (
                        <div className="w-8 h-px bg-neutral-200 dark:bg-neutral-800 mx-auto mt-8"></div>
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:hidden">
          <div className="w-16 h-px bg-neutral-300 dark:bg-neutral-700 mx-auto"></div>
        </div>

        <div>
          <div className="w-full text-center">
            <div className="pb-6 md:pb-8">
              <div className="inline-flex items-center gap-2 text-neutral-800 dark:text-neutral-200">
                <MdWorkOutline className="text-lg" />
                <h3 className="text-base md:text-lg font-semibold">
                  Experience
                </h3>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 gap-8 w-full max-w-md">
                {myWorkQualifications.map((workQualifications, index) => (
                  <div key={workQualifications.qualification}>
                    <Qualifications
                      qualification={workQualifications.qualification}
                      institution={workQualifications.institution}
                      period={workQualifications.period}
                      description={workQualifications.description}
                      location={workQualifications.location}
                    />
                    {index < myWorkQualifications.length - 1 && (
                      <div className="w-8 h-px bg-neutral-200 dark:bg-neutral-800 mx-auto mt-8"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
