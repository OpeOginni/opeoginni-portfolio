"use client";

import { useNow } from "@/lib/use-now";

// Minutes since the epoch as a wall clock in the given time zone reads them
function wallMinutes(now: number, timeZone?: string) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", {
      timeZone,
      hourCycle: "h23",
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    })
      .formatToParts(now)
      .map((p) => [p.type, Number(p.value)]),
  );
  return Date.UTC(parts.year, parts.month - 1, parts.day, parts.hour, parts.minute) / 60_000;
}

/** Germany's time and how far it is from the visitor's own. */
export default function GermanyClock() {
  const now = useNow();
  if (now === null) return <span>Germany</span>;

  const time = new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Berlin", hour: "2-digit", minute: "2-digit" }).format(now);
  const diff = (wallMinutes(now, "Europe/Berlin") - wallMinutes(now)) / 60;
  const hours = Math.abs(diff);
  const amount = `${hours} ${hours === 1 ? "hour" : "hours"}`;
  const relation = diff === 0 ? "same time as you" : diff > 0 ? `${amount} ahead of you` : `${amount} behind you`;

  return (
    <span>
      {time} in Germany, {relation}
    </span>
  );
}
