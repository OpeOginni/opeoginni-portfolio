/* eslint-disable @next/next/no-img-element */
import { getDarkImageLocation } from "@/constants/tools&langages";

interface Props {
  logoLocation: string;
  hasDark: boolean;
  techName: string;
}

export default function TechUsed({ logoLocation, hasDark, techName }: Props) {
  return (
    <div className="py-3 relative inline-block group">
      {hasDark ? (
        <>
          <img className="w-[30px] h-[30px] dark:hidden" src={logoLocation} alt={techName} aria-label={techName} />
          <img className="w-[30px] h-[30px] hidden dark:block" src={getDarkImageLocation(logoLocation)} alt={techName} aria-label={techName} />
        </>
      ) : (
        <img className="w-[30px] h-[30px]" src={logoLocation} alt={techName} aria-label={techName} />
      )}
      <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-2 whitespace-nowrap rounded-md bg-neutral-900 dark:bg-neutral-100 px-2 py-1 text-[10px] text-white dark:text-neutral-900 font-medium opacity-0 transition-opacity duration-150 group-hover:opacity-100">
        {techName}
      </span>
    </div>
  );
}
