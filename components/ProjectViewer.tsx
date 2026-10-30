"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Project } from "@/lib/content";
import TechList from "./TechList";

const screenFit = {
  cover: "object-cover",
  "cover-top": "object-cover object-top",
  contain: "object-contain",
  logo: "",
};

const thumbFit = {
  cover: "object-cover",
  "cover-top": "object-cover object-top",
  contain: "object-contain",
  center: "object-cover object-center",
  shield: "object-contain py-[10%]",
};

/** One large picture at a time, a strip of thumbnails underneath, and the selected project's details. */
export default function ProjectViewer({ projects }: { projects: Project[] }) {
  const [current, setCurrent] = useState(0);
  const section = useRef<HTMLDivElement>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const project = projects[current];

  const select = (i: number) => {
    const next = (i + projects.length) % projects.length;
    setCurrent(next);
    tabs.current[next]?.scrollIntoView({ block: "nearest", inline: "nearest" });
  };

  // Arrow keys browse while the projects are on screen
  useEffect(() => {
    let visible = false;
    const observer = new IntersectionObserver(([e]) => (visible = e.isIntersecting), { threshold: 0.4 });
    if (section.current) observer.observe(section.current);
    const onKey = (e: KeyboardEvent) => {
      if (!visible || e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        e.preventDefault();
        setCurrent((c) => {
          const next = (c + (e.key === "ArrowRight" ? 1 : -1) + projects.length) % projects.length;
          tabs.current[next]?.scrollIntoView({ block: "nearest", inline: "nearest" });
          return next;
        });
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
      <a
        href={project.links[0].href}
        target="_blank"
        rel="noopener"
        aria-label={`Open ${project.name}`}
        className="relative block aspect-[16/10] overflow-hidden rounded-lg bg-raised"
      >
        {projects.map((p, i) => (
          <span
            key={p.name}
            className={`absolute inset-0 transition-opacity duration-350 ${i === current ? "opacity-100" : "opacity-0"}`}
            style={{ background: p.screen.background }}
          >
            {p.screen.fit === "logo" ? (
              // A square logo sits on a blurred copy of itself
              <>
                <Image src={p.screen.src} alt="" fill unoptimized className="scale-125 object-cover blur-[40px] brightness-[0.55]" />
                <Image
                  src={p.screen.src}
                  alt={p.screen.alt}
                  width={320}
                  height={320}
                  unoptimized
                  className="absolute inset-0 m-auto h-[72%] w-auto rounded-[14px]"
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
                className={screenFit[p.screen.fit]}
              />
            )}
          </span>
        ))}
      </a>

      <div
        role="tablist"
        aria-label="Projects"
        className="mt-2.5 grid grid-cols-4 gap-2.5 max-sm:flex max-sm:snap-x max-sm:snap-mandatory max-sm:overflow-x-auto max-sm:[scrollbar-width:none]"
      >
        {projects.map((p, i) => (
          <button
            key={p.name}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            role="tab"
            aria-selected={i === current}
            aria-label={p.name}
            onClick={() => select(i)}
            className="relative aspect-[16/10] cursor-pointer overflow-hidden rounded-[5px] bg-raised opacity-35 transition-opacity duration-200 hover:opacity-70 aria-selected:opacity-100 max-sm:flex-[0_0_28%] max-sm:snap-start"
            style={{ background: p.thumb.background }}
          >
            <Image src={p.thumb.src} alt="" fill unoptimized className={thumbFit[p.thumb.fit]} />
          </button>
        ))}
      </div>

      {/* Every project sits in the same grid cell, so switching never changes the height */}
      <div className="mt-6 grid">
        {projects.map((p, i) => (
          <article
            key={p.name}
            aria-hidden={i !== current}
            className={`col-start-1 row-start-1 grid grid-cols-[1fr_auto] content-start items-baseline [grid-template-areas:'name_year'_'body_body'_'go_go'] sm:grid-cols-[auto_1fr_auto] sm:[grid-template-areas:'name_go_year'_'body_body_body'] ${i === current ? "" : "invisible"}`}
          >
            <h3 className="font-medium [grid-area:name]">{p.name}</h3>
            <div className="mt-3 flex gap-[1.1rem] text-sm [grid-area:go] sm:mt-0 sm:ml-5">
              {p.links.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noopener" className="link text-ink hover:decoration-solid hover:decoration-ink">
                  {l.label}
                </a>
              ))}
            </div>
            <span className="text-right text-faint tabular-nums whitespace-nowrap [grid-area:year]">{p.years}</span>
            <div className="mt-1.5 [grid-area:body]">
              <p className="max-w-[62ch] text-grey">{p.description}</p>
              <TechList tech={p.tech} className="mt-3" />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
