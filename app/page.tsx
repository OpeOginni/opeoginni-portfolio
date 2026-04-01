import IntroComponent from "@/components/IntroComponent/Intro";
import SkillsComponent from "@/components/SkillsComponent/Skills";
import QualificationsComponent from "@/components/QualificationsComponent/Qualifications";
import ProjectsSection from "@/components/ProjectsComponent/ProjectsSection";

export default function Home() {
  return (
    <>
      <div className="mt-8 md:mt-28 z-[1] relative">
        <IntroComponent />
        <SkillsComponent />
        <QualificationsComponent />
        <ProjectsSection />
      </div>
    </>
  );
}
