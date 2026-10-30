"use client";

import Image from "next/image";
import { useState } from "react";
import type { Match } from "@/lib/match";
import { useNow } from "@/lib/use-now";

const HOUR = 3_600_000;
const MATCH_LENGTH = 2 * HOUR;
const MATCHDAY_WINDOW = 12 * HOUR;
const RESULT_SHOWN_FOR = 18 * HOUR;

type View = {
  label: string;
  live?: boolean;
  match: Match;
  sub: string;
  middle: string;
};

const time = (d: Date) => d.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });

function dayWord(kickoff: Date, now: number) {
  const days = Math.round((new Date(kickoff).setHours(0, 0, 0, 0) - new Date(now).setHours(0, 0, 0, 0)) / (24 * HOUR));
  if (days === 0) return "today";
  if (days === 1) return "tomorrow";
  if (days < 7) return kickoff.toLocaleDateString(undefined, { weekday: "long" });
  return kickoff.toLocaleDateString(undefined, { day: "numeric", month: "short" });
}

function countdown(ms: number) {
  const m = Math.floor(ms / 60_000);
  const d = Math.floor(m / 1440);
  const h = Math.floor((m % 1440) / 60);
  const mm = m % 60;
  if (d) return h ? `${d}d ${h}h` : `${d}d`;
  return h ? `${h}h ${mm}m` : `${mm}m`;
}

function reaction(m: Match) {
  if (m.homeScore === null || m.awayScore === null) return "Full time";
  const chelseaHome = m.home === "Chelsea";
  const us = chelseaHome ? m.homeScore : m.awayScore;
  const them = chelseaHome ? m.awayScore : m.homeScore;
  if (us > them) return "Full time. Good day.";
  if (us < them) return "Full time. We go again.";
  return "Full time. A point is a point.";
}

const score = (m: Match) =>
  m.homeScore === null || m.awayScore === null ? "vs" : `${m.homeScore}–${m.awayScore}`;

function view(now: number, next: Match | null, last: Match | null): View | null {
  if (next) {
    const kickoff = new Date(next.kickoff);
    const until = kickoff.getTime() - now;
    if (until <= 0 && until > -MATCH_LENGTH) {
      return { label: "Watching now", live: true, match: next, sub: "Live. Probably shouting at the screen", middle: "vs" };
    }
    if (until <= -MATCH_LENGTH) {
      return { label: "What I just watched", match: next, sub: "Full time", middle: "vs" };
    }
    if (until < MATCHDAY_WINDOW) {
      return {
        label: "Matchday, getting ready",
        match: next,
        sub: `Kick-off in ${countdown(until)}, ${dayWord(kickoff, now)} at ${time(kickoff)} your time`,
        middle: "vs",
      };
    }
  }
  if (last && now - new Date(last.kickoff).getTime() < MATCH_LENGTH + RESULT_SHOWN_FOR) {
    return { label: "What I just watched", match: last, sub: reaction(last), middle: score(last) };
  }
  if (next) {
    const kickoff = new Date(next.kickoff);
    return {
      label: "What I'm watching next",
      match: next,
      sub: `Kick-off in ${countdown(kickoff.getTime() - now)}, ${dayWord(kickoff, now)} at ${time(kickoff)} your time`,
      middle: "vs",
    };
  }
  return null;
}

// Crests overlap at rest. On hover, focus or tap they slide apart, tilt at each
// other and a "vs" (or the score) pops in between. Classes are written out in
// full so Tailwind can find them.
const cardOpen = "group-hover:bg-raised-hover group-focus-visible:bg-raised-hover group-data-[open=true]:bg-raised-hover";
const homeOpen = "group-hover:animate-face-off-left group-focus-visible:animate-face-off-left group-data-[open=true]:animate-face-off-left";
const awayOpen =
  "group-hover:ml-0 group-focus-visible:ml-0 group-data-[open=true]:ml-0 group-hover:animate-face-off-right group-focus-visible:animate-face-off-right group-data-[open=true]:animate-face-off-right";
const middleOpen =
  "group-hover:mx-2 group-hover:max-w-12 group-hover:rotate-0 group-hover:scale-100 group-hover:opacity-100 group-hover:delay-[50ms] " +
  "group-focus-visible:mx-2 group-focus-visible:max-w-12 group-focus-visible:rotate-0 group-focus-visible:scale-100 group-focus-visible:opacity-100 group-focus-visible:delay-[50ms] " +
  "group-data-[open=true]:mx-2 group-data-[open=true]:max-w-12 group-data-[open=true]:rotate-0 group-data-[open=true]:scale-100 group-data-[open=true]:opacity-100 group-data-[open=true]:delay-[50ms]";

export default function Fixture({ next, last }: { next: Match | null; last: Match | null }) {
  const now = useNow();
  const [open, setOpen] = useState(false);
  const v = now === null ? null : view(now, next, last);
  const match = v?.match ?? next;

  if (!match) {
    return (
      <div className="mt-9 inline-flex items-center gap-[0.9rem] rounded-xl bg-raised py-3 pr-5 pl-[0.85rem]">
        <Image src="/logos/chelsea.png" alt="" width={32} height={32} unoptimized className="size-8 object-contain" />
        <span>
          <span className="block text-xs text-faint">What I&apos;m watching next</span>
          <span className="block font-medium">Chelsea, whenever they play</span>
          <span className="block text-[13px] text-grey">Usually on the weekend</span>
        </span>
      </div>
    );
  }

  const fullTime = v?.middle !== "vs" && v?.middle !== undefined;

  return (
    <div
      tabIndex={0}
      data-open={open}
      onClick={() => setOpen((o) => !o)}
      className={`group mt-9 inline-flex cursor-default items-center gap-[0.9rem] rounded-xl bg-raised py-3 pr-5 pl-[0.85rem] transition-colors duration-200 ${cardOpen}`}
    >
      <span className="flex flex-none items-center" aria-hidden="true">
        <Image
          src={match.homeBadge}
          alt=""
          width={32}
          height={32}
          unoptimized
          className={`size-8 object-contain ${homeOpen}`}
        />
        <span
          className={`max-w-0 -rotate-[25deg] scale-[0.3] overflow-hidden whitespace-nowrap text-[11px] font-semibold opacity-0 transition-[max-width,margin,opacity,rotate,scale] duration-500 ease-spring ${middleOpen}`}
        >
          {v?.middle ?? "vs"}
        </span>
        <Image
          src={match.awayBadge}
          alt=""
          width={32}
          height={32}
          unoptimized
          className={`-ml-2 size-8 object-contain transition-[margin] duration-500 ease-spring ${awayOpen}`}
        />
      </span>
      <span>
        <span className="flex items-center gap-1.5 text-xs text-faint">
          {v?.live && <span className="size-1.5 animate-live rounded-full bg-[#ff5d5d]" aria-hidden="true" />}
          {v?.label ?? "What I'm watching next"}
        </span>
        <span className="block font-medium">
          {fullTime ? `${match.home} ${v?.middle} ${match.away}` : `${match.home} v ${match.away}`}
        </span>
        <span className="block min-h-[1.55em] text-[13px] text-grey">{v?.sub}</span>
      </span>
    </div>
  );
}
