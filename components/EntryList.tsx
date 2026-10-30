import Image from "next/image";
import type { Entry, Logo } from "@/lib/content";

const logoStyle: Record<Logo["style"], string> = {
  tile: "rounded-md bg-white p-0.5 object-contain",
  bare: "rounded-md object-cover",
  mark: "rounded-md bg-[#2a2626] p-1 object-contain",
  icon: "object-contain",
};

/**
 * A list of name, details and year. Hovering one row dims the others.
 * Linked rows carry a dotted underline on the name and open in a new tab.
 */
export default function EntryList({ entries }: { entries: Entry[] }) {
  return (
    <ul className="group/list">
      {entries.map((e) => {
        const row = (
          <>
            <span className="flex items-center gap-3 font-medium [overflow-wrap:anywhere] [grid-area:name]">
              <Image src={e.logo.src} alt="" width={44} height={44} unoptimized className={`size-[22px] flex-none ${logoStyle[e.logo.style]}`} />
              <span className={e.href ? "link group-hover/row:text-ink group-hover/row:decoration-solid group-hover/row:decoration-ink group-focus-visible/row:decoration-solid group-focus-visible/row:decoration-ink" : ""}>
                {e.name}
              </span>
            </span>
            <span className="text-grey transition-colors group-hover/row:text-ink [grid-area:line]">
              {e.note ? (
                <>
                  <span className="block text-ink">{e.line}</span>
                  <span className="mt-0.5 block text-[13px] text-faint">{e.note}</span>
                </>
              ) : (
                <>
                  {e.line}
                  {e.code && (
                    <>
                      {" "}
                      <code className="text-[0.9em] whitespace-nowrap text-ink">{e.code}</code>
                    </>
                  )}
                </>
              )}
            </span>
            <span className="text-right text-faint tabular-nums whitespace-nowrap [grid-area:year]">{e.years}</span>
          </>
        );
        const rowClass =
          "group/row grid grid-cols-[1fr_auto] items-start gap-x-7 gap-y-1 py-3 transition-opacity duration-200 [grid-template-areas:'name_year'_'line_line'] *:min-w-0 sm:grid-cols-[11rem_1fr_4.75rem] sm:py-2.5 sm:[grid-template-areas:'name_line_year'] group-hover/list:[&:not(:hover):not(:focus-within)]:opacity-40";
        return (
          <li key={e.name}>
            {e.href ? (
              <a href={e.href} target="_blank" rel="noopener" className={rowClass}>
                {row}
              </a>
            ) : (
              <div className={rowClass}>{row}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
