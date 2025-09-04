import { cn } from "@/lib/utils";
import { MoveRightIcon } from "lucide-react";
import Link from "next/link";

export default function IntroComponent() {
  return (
    <section className="w-full px-4 md:max-w-[75%] md:mx-auto border-b border-[hsl(207,4%,16%)] py-6 md:py-5 pb-8 md:pb-14">
      <div className="h-max">
        <div className="w-full md:w-[60%] pb-6 md:pb-5">
          <div>
            <h1 className="text-[#5E17EB] text-sm md:text-xs pb-3 md:pb-2">Hey I&apos;m</h1>
          </div>
          <h1 className="text-4xl md:text-3xl lg:text-6xl pb-4 md:pb-4 font-bold leading-tight">
            Opeyemi <br />
            <span className="text-xl md:text-2xl">a{" "}</span>Software Developer
          </h1>
          <p className="text-base md:text-s pb-4 md:pb-2 leading-relaxed">
            A versatile software developer passionate about building 
            efficient solutions using the right tools for each challenge. 
            Always eager to tackle new problems and learn emerging technologies. Always love to fix bugs.
          </p>
        </div>
        <div className="py-6 md:py-12">
            <Link
              href={"/#projects"}
              className="inline-flex items-center gap-2 py-3 px-6 md:py-2 md:px-4 border rounded-lg bg-[#5E17EB] text-white hover:bg-[#4C1D95] transition-colors duration-300 text-base md:text-sm"
            >
              My Projects <MoveRightIcon className="w-4 h-4" />
            </Link>
        </div>
      </div>
    </section>
  );
}
