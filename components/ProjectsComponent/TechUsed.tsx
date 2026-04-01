/* eslint-disable @next/next/no-img-element */
import { getDarkImageLocation } from "@/constants/tools&langages";

interface Props {
  logoLocation: string;
  hasDark: boolean;
  techName: string;
}

export default function TechUsed({ logoLocation, hasDark, techName }: Props) {
  return (
    <div className="relative inline-block group" title={techName}>
      {hasDark ? (
        <>
          <img
            className="w-[24px] h-[24px] md:w-[26px] md:h-[26px] dark:hidden"
            src={logoLocation}
            alt={techName}
          />
          <img
            className="w-[24px] h-[24px] md:w-[26px] md:h-[26px] hidden dark:block"
            src={getDarkImageLocation(logoLocation)}
            alt={techName}
          />
        </>
      ) : (
        <img
          className="w-[24px] h-[24px] md:w-[26px] md:h-[26px]"
          src={logoLocation}
          alt={techName}
        />
      )}
      <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-1.5 whitespace-nowrap rounded-md bg-neutral-900 dark:bg-neutral-100 px-2 py-0.5 text-[10px] text-white dark:text-neutral-900 font-medium opacity-0 transition-opacity duration-150 group-hover:opacity-100 z-10">
        {techName}
      </span>
    </div>
  );
}
