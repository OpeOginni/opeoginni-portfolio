import styles from "./Intro.module.css";

export default function IntroComponent() {
  return (
    <section className={styles.section}>
      <div className=" h-max">
        <div className={styles.introContainer}>
          <h1 className="text-[#5E17EB] text-xs pb-2">Hey I&#39;m</h1>
          <h1 className="text-3xl pb-4">
            Opeyemi Oginni. <br />
            Software Developer
          </h1>
          <p className=" text-xs pb-2">
            A versatile software developer with expertise in backend
            development, frontend integration, and blockchain solutions. My
            skills include working with cloud services to deliver efficient
            software solutions.{" "}
          </p>
        </div>

        <button className={styles.button}>Let&#39;s Talk</button>
      </div>
    </section>
  );
}
