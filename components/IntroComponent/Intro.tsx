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
            Software Developer
          </h1>
          <p className="text-s pb-2">
            A versatile developer with expertise in backend
            development, frontend integration, and blockchain solutions. My
            skills include working with cloud services to deliver efficient
            software solutions.{" "}
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
