import { cn } from "@/lib/utils";
import styles from "./Intro.module.css";

export default function IntroComponent() {
  return (
    <section className={cn(styles.section)}>
      <div className="h-max">
        <div className={styles.introContainer}>
          <div>
            <h1 className="text-[#5E17EB] text-xs pb-2">Hey I&#39;m</h1>
          </div>
          <h1 className="text-3xl lg:text-6xl pb-4 font-bold">
            Opeyemi <br />
            <span className=" text-2xl">a{" "}</span>Software Developer
          </h1>
          <p className="text-s pb-2">
            This guy brags about being an all round software developer with a
            passion for building software solutions with any tools available
            for the job 💪
            <br />
            He is still working on improving his skills on building more
            scalable and efficient software 🚀
          </p>
        </div>
        <div className="py-12">
          <a href="#contact">
            <button className="py-2 px-4 border rounded-lg border-[#5E17EB] text-[#5E17EB]">
              Say Hey To Me
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
