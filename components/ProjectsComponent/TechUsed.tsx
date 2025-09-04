/* eslint-disable @next/next/no-img-element */

interface Props {
  logoLocation: string;
  techName: string;
}
// TODO: Work on Skills and Cerification Component
export default function TechUsed({ logoLocation, techName }: Props) {
  return (
    <div className="py-3 relative inline-block group">
      <img
        className="w-[30px] h-[30px]"
        src={logoLocation}
        alt={techName}
        aria-label={techName}
      />
      <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-2 whitespace-nowrap rounded-md bg-black/80 px-2 py-1 text-[10px] text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100">
        {techName}
      </span>
    </div>
  );
}
