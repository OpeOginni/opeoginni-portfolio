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
    <section id="qualifications" className="w-full px-4 md:max-w-[75%] md:mx-auto border-b border-[hsl(207,4%,16%)] py-6 md:py-5 pb-8 md:pb-14">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold py-6 md:py-7 text-center">Qualifications</h1>
      </div>
      <div className="h-max">
        <div className="grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-2 lg:gap-8">
          <div>
            <div className="w-full text-center">
              <div className="pb-6 md:pb-9">
                <h1 className="text-lg md:text-xl pb-2 font-semibold text-center flex items-center justify-center">
                  <MdOutlineSchool />
                  <span className="px-4">Education</span>
                </h1>
                <div className="w-16 h-px bg-gray-300 mx-auto mt-3"></div>
              </div>
              <div className="flex justify-center">
                <div className="grid grid-cols-1 gap-6 md:gap-7 w-full max-w-md">
                  {myEducationQualificaions.map((educationQualification, index) => {
                    return (
                      <div key={educationQualification.qualification}>
                        <Qualifications
                          qualification={educationQualification.qualification}
                          institution= {educationQualification.institution}
                          location={educationQualification.location}
                          period={educationQualification.period}
                          description={educationQualification.description}
                        />
                        {index < myEducationQualificaions.length - 1 && (
                          <div className="w-12 h-px bg-gray-200 mx-auto mt-6"></div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:hidden">
            <div className="w-24 h-px bg-gray-400 mx-auto"></div>
          </div>
          
          <div>
            <div className="w-full text-center">
              <div className="pb-6 md:pb-9">
                <h1 className="text-lg md:text-xl pb-2 font-semibold text-center flex items-center justify-center">
                  <MdWorkOutline />
                  <span className="px-4">Experience</span>
                </h1>
                <div className="w-16 h-px bg-gray-300 mx-auto mt-3"></div>
              </div>
              <div className="flex justify-center">
                <div className="grid grid-cols-1 gap-6 md:gap-7 w-full max-w-md">
                  {myWorkQualifications.map((workQualifications, index) => {
                    return (
                      <div key={workQualifications.qualification}>
                        <Qualifications
                          qualification={workQualifications.qualification}
                          institution={workQualifications.institution}
                          period={workQualifications.period}
                          description={workQualifications.description}
                          location={workQualifications.location}
                        />
                        {index < myWorkQualifications.length - 1 && (
                          <div className="w-12 h-px bg-gray-200 mx-auto mt-6"></div>
                        )}
                      </div>
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
