import { MoveRightIcon } from "lucide-react";
import Link from "next/link";

export default function IntroComponent() {
  return (
    <section className="w-full px-4 md:max-w-[75%] md:mx-auto border-b border-neutral-200 dark:border-neutral-800 py-10 md:py-12 pb-10 md:pb-16">
      <div className="h-max">
        <div className="w-full md:w-[65%] pb-6 md:pb-5">
          <p className="text-blue-600 dark:text-blue-500 text-xs pb-4 md:pb-3 font-medium tracking-widest uppercase">
            Hey I&apos;m
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl pb-5 md:pb-5 font-bold leading-[1.1] tracking-tight text-neutral-900 dark:text-neutral-50">
            Opeyemi,{" "}
            <span className="text-neutral-500 dark:text-neutral-400 font-normal">
              a
            </span>
            <br />
            Software Developer
          </h1>
          <p className="text-base md:text-[15px] leading-relaxed text-neutral-500 dark:text-neutral-400 max-w-md">
            I build efficient solutions with the right tools. Check out my work
            below.
          </p>
        </div>
        <div className="flex items-center gap-4 pt-2 md:pt-4">
          <Link
            href={"/#projects"}
            className="group inline-flex items-center gap-2 py-2.5 px-5 border border-blue-600 dark:border-blue-500 rounded-lg bg-blue-600 dark:bg-blue-600 text-white hover:bg-blue-700 dark:hover:bg-blue-500 hover:border-blue-700 dark:hover:border-blue-500 transition-all duration-200 text-sm font-medium"
          >
            View Projects
            <MoveRightIcon className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
