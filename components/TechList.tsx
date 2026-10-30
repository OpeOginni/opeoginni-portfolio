import Image from "next/image";
import type { Tech } from "@/lib/content";

export default function TechList({ tech, className = "" }: { tech: Tech[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-x-4 gap-y-1.5 text-[13px] text-grey ${className}`}>
      {tech.map((t) => (
        <li key={t.name} className="inline-flex items-center gap-1.5">
          {t.icon && (
            <Image src={t.icon} alt="" width={14} height={14} className={`size-3.5 object-contain ${t.invert ? "invert" : ""}`} />
          )}
          {t.name}
        </li>
      ))}
    </ul>
  );
}
