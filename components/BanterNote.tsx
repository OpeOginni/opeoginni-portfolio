// A hand-drawn arrow and scribbled note under the X link, pointing up at it.
// The arrow draws itself in once on load, and nudges toward X when the link is hovered.
// Wider screens put the note to the right of the arrow; phones put it to the left so it stays on screen.

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  pathLength: 1,
  strokeDasharray: 1,
};

const arrow = "size-7 flex-none group-hover/x:animate-nudge";
const note = "font-hand leading-none -rotate-3 animate-scribble-in";

export default function BanterNote() {
  return (
    <span aria-hidden="true" className="pointer-events-none absolute inset-0 text-marker select-none">
      <span className="absolute top-[calc(100%+0.15rem)] -left-1 hidden items-end whitespace-nowrap sm:flex">
        <svg viewBox="0 0 30 30" className={arrow}>
          <path d="M26 26 C 16 24, 10 16, 10 5" {...stroke} className="animate-draw" />
          <path d="M5 10 L10 3.5 L15.5 10" {...stroke} className="animate-draw" style={{ animationDelay: "1.6s" }} />
        </svg>
        <span className={`ml-0.5 translate-y-1 text-xl ${note}`}>banter me on X</span>
      </span>
      <span className="absolute top-[calc(100%+0.15rem)] -right-1 flex items-end whitespace-nowrap sm:hidden">
        <span className={`mr-0.5 translate-y-1 text-lg ${note}`}>banter me on X</span>
        <svg viewBox="0 0 30 30" className={arrow}>
          <path d="M4 26 C 14 24, 20 16, 20 5" {...stroke} className="animate-draw" />
          <path d="M14.5 10 L20 3.5 L25 10" {...stroke} className="animate-draw" style={{ animationDelay: "1.6s" }} />
        </svg>
      </span>
    </span>
  );
}
