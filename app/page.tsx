import IntroComponent from "@/components/IntroComponent/Intro";
import SkillsComponent from "@/components/SkillsComponent/Skills";
import QualificationsComponent from "@/components/QualificationsComponent/Qualifications";
import { ContactComponent } from "@/components/ContactComponent/Contact";

export default function Home() {
  return (
    <>
      <div className="mt-28">
        <IntroComponent />
        <SkillsComponent />
        <QualificationsComponent />
        <ContactComponent />
      </div>
    </>
  );
}
