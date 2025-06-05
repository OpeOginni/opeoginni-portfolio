import { cn } from "@/lib/utils";
import { MoveRightIcon } from "lucide-react";
import Link from "next/link";

export default function IntroComponent() {
  return (
    <section className="max-w-[75%] mx-auto border-b border-[hsl(207,4%,16%)] py-5 pb-14">
      <div className="h-max">
        <div className="w-[60%] pb-5 sm:w-full">
          <div>
            <h1 className="text-[#5E17EB] text-xs pb-2">Hey I&apos;m</h1>
          </div>
          <h1 className="text-3xl lg:text-6xl pb-4 font-bold">
            Opeyemi <br />
            <span className="text-2xl">a{" "}</span>Software Developer
          </h1>
          <p className="text-s pb-2">
            A versatile software developer passionate about building 
            efficient solutions using the right tools for each challenge. 
            Always eager to tackle new problems and learn emerging technologies.
          </p>
        </div>
        <div className="py-12">
            <Link 
              href={"/#projects"} 
              className="inline-flex items-center gap-2 py-2 px-4 border rounded-lg border-[#5E17EB] text-[#5E17EB] hover:bg-[#5E17EB] hover:text-white transition-all duration-300"
            >
              My Projects <MoveRightIcon className="w-4 h-4" />
            </Link>
        </div>
      </div>
    </section>
  );
}
