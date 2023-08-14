import IntroComponent from "@/components/IntroComponent/Intro";
import SkillsComponent from "@/components/SkillsComponent/Skills";
import QualificationsComponent from "@/components/QualificationsComponent/Qualifications";

export default function Home() {
  return (
    <>
      <div className="mt-28">
        <IntroComponent />
        <SkillsComponent />
        <QualificationsComponent />
      </div>
    </>
  );
}
