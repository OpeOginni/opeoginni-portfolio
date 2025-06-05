import { LiaTrophySolid } from "react-icons/lia";
import { MdOutlineSchool, MdWorkOutline } from "react-icons/md";
import Qualifications from "./QualificationObject";
import {
  myEducationQualificaions,
  myWorkQualifications,
} from "../../constants/qualifications";

// TODO: Qualifications Component
export default function QualificationsComponent() {
  return (
    <section id="qualifications" className="max-w-[75%] mx-auto border-b border-[hsl(207,4%,16%)] py-5 pb-14">
      <div>
        <h1 className="text-3xl font-bold py-7 text-center">Qualifications</h1>
      </div>
      <div className="h-max">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-8">
          <div>
            <div className="max-w-full mx-auto text-center">
              <div className="pb-9">
                <h1 className="text-xl pb-2 font-semibold text-center flex items-center justify-center">
                  <MdOutlineSchool />
                  <span className="px-4">Education</span>
                </h1>
              </div>
              <div className="flex justify-center">
                <div className="grid grid-cols-1 gap-7 w-full max-w-md">
                  {myEducationQualificaions.map((educationQualification) => {
                    return (
                      <Qualifications
                        key={educationQualification.qualification}
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
            <div className="max-w-full mx-auto text-center">
              <div className="pb-9">
                <h1 className="text-xl pb-2 font-semibold text-center flex items-center justify-center">
                  <MdWorkOutline />
                  <span className="px-4">Experience</span>
                </h1>
              </div>
              <div className="flex justify-center">
                <div className="grid grid-cols-1 gap-7 w-full max-w-md">
                  {myWorkQualifications.map((workQualifications) => {
                    return (
                      <Qualifications
                        key={workQualifications.qualification}
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
    </section>
  );
}
