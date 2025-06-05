import IntroComponent from "@/components/IntroComponent/Intro";
import SkillsComponent from "@/components/SkillsComponent/Skills";
import QualificationsComponent from "@/components/QualificationsComponent/Qualifications";
import ProjectsSection from "@/components/ProjectsComponent/ProjectsSection";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <>
      <div className="mt-28 z-[1] relative">
        <IntroComponent />
        <SkillsComponent />
        <ProjectsSection />
        <QualificationsComponent />
      </div>
    </>
  );
}
