"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Section = { id: string; label: string; count: number };
type Blob = { x: number; width: number; on: boolean; animate: boolean };

/** Floating pill of section links. Scrolls away with the page; a soft highlight slides to whichever item you point at. */
export default function SectionIndex({ sections }: { sections: Section[] }) {
  const [blob, setBlob] = useState<Blob>({ x: 0, width: 0, on: false, animate: false });
  const [current, setCurrent] = useState("");

  useEffect(() => {
    const sync = () => setCurrent(location.hash.slice(1));
    sync();
    addEventListener("hashchange", sync);
    return () => removeEventListener("hashchange", sync);
  }, []);

  // The first appearance jumps into place; after that it slides
  const moveTo = (a: HTMLElement) => setBlob((b) => ({ x: a.offsetLeft, width: a.offsetWidth, on: true, animate: b.on }));
  const hide = () => setBlob((b) => ({ ...b, on: false }));

  return (
    <nav
      aria-label="Sections"
      className="inline-flex max-w-full animate-drop-in items-center gap-1.5 rounded-full bg-raised p-[0.35rem] shadow-[0_18px_40px_-18px_rgba(0,0,0,0.8)]"
    >
      <a
        href="#top"
        aria-label="Back to top"
        className="size-8 flex-none overflow-hidden rounded-full bg-raised transition-transform duration-400 ease-spring hover:-rotate-12 hover:scale-108"
      >
        <Image src="/avatar.jpg" alt="" width={64} height={64} unoptimized className="size-full object-cover" priority />
      </a>
      <span
        onPointerLeave={hide}
        onBlur={hide}
        className="relative flex overflow-x-auto [scrollbar-width:none] max-sm:pr-6 max-sm:[mask-image:linear-gradient(to_right,#000_85%,transparent)]"
      >
        <span
          aria-hidden="true"
          className={`absolute top-0 left-0 h-full rounded-full bg-blob ${blob.on ? "opacity-100" : "opacity-0"} ${blob.animate ? "transition-[translate,width,opacity] duration-450 ease-spring" : "transition-opacity duration-200"}`}
          style={{ width: blob.width, translate: `${blob.x}px 0` }}
        />
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            aria-current={current === s.id ? "location" : undefined}
            onPointerEnter={(e) => moveTo(e.currentTarget)}
            onFocus={(e) => moveTo(e.currentTarget)}
            className="relative z-1 whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm text-grey transition-colors duration-200 hover:text-ink focus-visible:text-ink aria-[current]:text-ink"
          >
            {s.label}
            <sup className="ml-1 text-[10px] text-faint">{s.count}</sup>
          </a>
        ))}
      </span>
    </nav>
  );
}
