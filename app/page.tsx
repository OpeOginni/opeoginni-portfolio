import IntroComponent from "@/components/IntroComponent/Intro";
import SkillsComponent from "@/components/SkillsComponent/Skills";

export default function Home() {
  return (
    <>
      <div className="mt-28">
        <IntroComponent />
        <SkillsComponent />
      </div>
    </>
  );
}
