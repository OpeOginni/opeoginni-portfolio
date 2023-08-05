import { LiaTrophySolid } from "react-icons/lia";
import { MdOutlineSchool, MdWorkOutline } from "react-icons/md";
import styles from "./Qualification.module.css";
import Qualifications from "./QualificationObject";
import {
  myEducationQualificaions,
  myWorkQualifications,
  myOtherQualifications,
} from "../../constants/qualifications";

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
              </div>
              <div className="flex justify-center">
                <div className="grid grid-cols-1 gap-7">
                  {myEducationQualificaions.map((educationQualification) => {
                    return (
                      <Qualifications
                        key={educationQualification.key}
                        qualification={educationQualification.qualification}
                        institution={educationQualification.institution}
                        period={educationQualification.period}
                        description={educationQualification.description}
                      />
                    );
                  })}
                </div>
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
                <div className="flex justify-center">
                  <div className="grid grid-cols-1 gap-7">
                    {myWorkQualifications.map((workQualifications) => {
                      return (
                        <Qualifications
                          key={workQualifications.key}
                          qualification={workQualifications.qualification}
                          institution={workQualifications.institution}
                          period={workQualifications.period}
                          description={workQualifications.description}
                        />
                      );
                    })}
                  </div>
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
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-7">
              {myOtherQualifications.map((otherQualifications) => {
                return (
                  <Qualifications
                    key={otherQualifications.key}
                    qualification={otherQualifications.qualification}
                    institution={otherQualifications.institution}
                    period={otherQualifications.period}
                    description={otherQualifications.description}
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
