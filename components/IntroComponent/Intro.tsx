import styles from "./Intro.module.css";
import { Button } from "@chakra-ui/button";

export default function IntroComponent() {
  return (
    <section className={styles.section}>
      <div className=" h-max">
        <div className={styles.introContainer}>
          <div>
            <h1 className="text-[#5E17EB] text-xs pb-2">Hey I&#39;m</h1>
          </div>
          <h1 className="text-3xl lg:text-6xl pb-4 font-bold">
            Opeyemi Oginni <br />
            Software Developer
          </h1>
          <p className="text-s pb-2">
            A versatile software developer with expertise in backend
            development, frontend integration, and blockchain solutions. My
            skills include working with cloud services to deliver efficient
            software solutions.{" "}
          </p>
        </div>
        <div className="py-12">
          <a href="#contact">
            <Button variant="outline" colorScheme="purple">
              Say Hey To Me
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
