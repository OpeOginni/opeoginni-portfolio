import { cn } from "@/lib/utils";

export default function IntroComponent() {
  return (
    <section className="max-w-[75%] mx-auto border-b border-[hsl(207,4%,16%)] py-5 pb-14">
      <div className="h-max">
        <div className="w-[60%] pb-5 sm:w-full">
          <div>
            <h1 className="text-[#5E17EB] text-xs pb-2">Hey I&#39;m</h1>
          </div>
          <h1 className="text-3xl lg:text-6xl pb-4 font-bold">
            Opeyemi <br />
            <span className="text-2xl">a{" "}</span>Software Developer
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
            <button className="py-2 px-4 border rounded-lg border-[#5E17EB] text-[#5E17EB] hover:bg-[#5E17EB] hover:text-white transition-colors">
              Say Hey To Me
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
