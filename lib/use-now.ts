"use client";

import { useSyncExternalStore } from "react";

const STEP = 30_000;

const subscribe = (onChange: () => void) => {
  const id = setInterval(onChange, STEP);
  return () => clearInterval(id);
};
const getSnapshot = () => Math.floor(Date.now() / STEP) * STEP;
const getServerSnapshot = () => null;

/** The current time, rounded to 30 seconds. Null on the server and during hydration. */
export function useNow(): number | null {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
