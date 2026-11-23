"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Project } from "@/lib/content";
import { logoStyle } from "./EntryList";
import TechList from "./TechList";

const screenFit = {
  cover: "object-cover",
  "cover-top": "object-cover object-top",
  logo: "",
};

// Over the picture's edges on smaller screens, out beside it once there is room
const arrow =
  "absolute top-1/2 z-10 grid size-10 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-raised/80 text-grey backdrop-blur-sm transition-colors hover:bg-raised-hover hover:text-ink max-sm:hidden";

/**
 * A strip of screenshots that slides sideways. The neighbours peek in, dimmed, beside the current one.
 * Swipe, drag, the arrows beside it, the arrow keys or the names underneath move it.
 */
export default function ProjectViewer({ projects }: { projects: Project[] }) {
  const [current, setCurrent] = useState(0);
  const section = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; moved: boolean } | null>(null);
  const go = (i: number) => setCurrent((i + projects.length) % projects.length);

  // Arrow keys browse while the projects are on screen
  useEffect(() => {
    let visible = false;
    const observer = new IntersectionObserver(([e]) => (visible = e.isIntersecting), { threshold: 0.4 });
    if (section.current) observer.observe(section.current);
    const onKey = (e: KeyboardEvent) => {
      if (!visible || e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        e.preventDefault();
        setCurrent((c) => (c + (e.key === "ArrowRight" ? 1 : -1) + projects.length) % projects.length);
      }
    };
    addEventListener("keydown", onKey);
    return () => {
      observer.disconnect();
      removeEventListener("keydown", onKey);
    };
  }, [projects.length]);

  return (
    <div ref={section}>
      <div className="relative">
        {/* Bleeds past the column so the neighbouring slides show, up to 14rem either side */}
        <div className="-mx-(--bleed) overflow-hidden px-(--bleed) [--bleed:min(14rem,calc(50vw-50%))] [mask-image:linear-gradient(to_right,transparent,#000_var(--bleed),#000_calc(100%-var(--bleed)),transparent)]">
          <div
            className="flex touch-pan-y gap-(--gap) transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] select-none [--gap:0.75rem] sm:[--gap:1.25rem]"
            style={{ transform: `translateX(calc(${-current} * (100% + var(--gap))))` }}
            onPointerDown={(e) => (drag.current = { x: e.clientX, moved: false })}
            onPointerUp={(e) => {
              const dx = e.clientX - (drag.current?.x ?? e.clientX);
              if (Math.abs(dx) > 40) {
                drag.current = { x: 0, moved: true };
                go(current + (dx < 0 ? 1 : -1));
              }
            }}
            onClickCapture={(e) => {
              // A swipe ends in a click on the slide it started on; don't let that open or select it
              if (drag.current?.moved) {
                e.preventDefault();
                e.stopPropagation();
              }
              drag.current = null;
            }}
          >
            {projects.map((p, i) => (
              <a
                key={p.name}
                href={p.links[0].href}
                target="_blank"
                rel="noopener"
                aria-label={`Open ${p.name}`}
                aria-hidden={i !== current}
                tabIndex={i === current ? 0 : -1}
                draggable={false}
                onClick={(e) => {
                  if (i === current) return;
                  e.preventDefault();
                  go(i);
                }}
                className={`relative block aspect-[16/10] w-full shrink-0 overflow-hidden rounded-lg bg-raised transition-opacity duration-500 ${
                  i === current ? "" : "opacity-25 hover:opacity-45"
                }`}
              >
                {p.screen.fit === "logo" ? (
                  // A square logo sits on a blurred copy of itself
                  <>
                    <Image src={p.screen.src} alt="" fill unoptimized draggable={false} className="scale-125 object-cover blur-[40px] brightness-[0.55]" />
                    <Image
                      src={p.screen.src}
                      alt={p.screen.alt}
                      width={320}
                      height={320}
                      unoptimized
                      draggable={false}
                      className="absolute inset-0 m-auto h-[64%] w-auto rounded-[14px]"
                    />
                  </>
                ) : (
                  <Image
                    src={p.screen.src}
                    alt={p.screen.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 768px"
                    quality={90}
                    preload={i === 0}
                    draggable={false}
                    className={screenFit[p.screen.fit]}
                  />
                )}
              </a>
            ))}
          </div>
        </div>

        <button aria-label="Previous project" onClick={() => go(current - 1)} className={`${arrow} left-3 lg:-left-16`}>
          <svg viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 3 5 8l5 5" />
          </svg>
        </button>
        <button aria-label="Next project" onClick={() => go(current + 1)} className={`${arrow} right-3 lg:-right-16`}>
          <svg viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 3 5 5-5 5" />
          </svg>
        </button>
      </div>

      <div role="tablist" aria-label="Projects" className="mt-5 flex flex-wrap justify-center gap-1">
        {projects.map((p, i) => (
          <button
            key={p.name}
            role="tab"
            aria-selected={i === current}
            onClick={() => go(i)}
            className="group flex cursor-pointer items-center gap-2 rounded-full py-1.5 pr-3.5 pl-1.5 text-faint transition-colors hover:text-grey aria-selected:bg-raised aria-selected:text-ink"
          >
            <Image
              src={p.logo.src}
              alt=""
              width={44}
              height={44}
              unoptimized
              className={`size-[22px] flex-none opacity-50 transition-opacity group-hover:opacity-80 group-aria-selected:opacity-100 ${logoStyle[p.logo.style]}`}
            />
            {p.name}
          </button>
        ))}
      </div>

      {/* Every project sits in the same grid cell, so switching never changes the height */}
      <div className="mt-6 grid">
        {projects.map((p, i) => (
          <article key={p.name} aria-hidden={i !== current} className={`col-start-1 row-start-1 ${i === current ? "" : "invisible"}`}>
            <p className="max-w-[62ch] text-grey">{p.description}</p>
            <TechList tech={p.tech} className="mt-3" />
            <div className="mt-4 flex items-baseline gap-[1.1rem] text-sm">
              {p.links.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noopener" className="link text-ink hover:decoration-solid hover:decoration-ink">
                  {l.label}
                </a>
              ))}
              <span className="ml-auto text-faint tabular-nums whitespace-nowrap">{p.years}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
