import { MoveRightIcon } from "lucide-react";
import Link from "next/link";

export default function IntroComponent() {
  return (
    <section className="w-full px-4 md:max-w-[75%] md:mx-auto border-b border-neutral-200 dark:border-neutral-800 py-6 md:py-5 pb-8 md:pb-14">
      <div className="h-max">
        <div className="w-full md:w-[60%] pb-6 md:pb-5">
          <div>
            <h1 className="text-blue-600 dark:text-blue-500 text-sm md:text-xs pb-3 md:pb-2 font-medium tracking-wide uppercase">
              Hey I&apos;m
            </h1>
          </div>
          <h1 className="text-4xl md:text-3xl lg:text-6xl pb-4 md:pb-4 font-bold leading-tight text-neutral-900 dark:text-neutral-50">
            Opeyemi <br />
            <span className="text-xl md:text-2xl font-normal text-neutral-500 dark:text-neutral-400">
              a{" "}
            </span>
            Software Developer
          </h1>
          <p className="text-base md:text-sm pb-4 md:pb-2 leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-lg">
            I build efficient solutions with the right tools. Check out my work
            below.
          </p>
        </div>
        <div className="py-4 md:py-6">
          <Link
            href={"/#projects"}
            className="inline-flex items-center gap-2 py-3 px-6 md:py-2.5 md:px-5 border border-blue-600 dark:border-blue-500 rounded-lg bg-blue-600 dark:bg-blue-600 text-white hover:bg-blue-700 dark:hover:bg-blue-500 hover:border-blue-700 dark:hover:border-blue-500 transition-all duration-200 text-base md:text-sm font-medium"
          >
            View Projects <MoveRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
