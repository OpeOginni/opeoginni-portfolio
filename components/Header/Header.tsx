import Link from "next/link";
import ArrowSVG from "../svg/arrow";
import { cn } from "@/lib/utils";

interface NavLinks {
  key: number;
  name: string;
  link: string;
}

const HeaderNavLinks: NavLinks[] = [
  { key: 0, name: "Home", link: "/" },
  { key: 1, name: "Projects", link: "/#projects" },
  { key: 2, name: "Skills/Certs", link: "/#skills&certs" },
  { key: 3, name: "Qualifications", link: "/#qualifications" },
  { key: 4, name: "Contact", link: "/#contact" },
];

const MobileHeaderNavLinks: NavLinks[] = [
  { key: 0, name: "Home", link: "/" },
  { key: 1, name: "Projects", link: "/#projects" },
  { key: 3, name: "Contact", link: "/#contact" },
];

export default async function Header() {
  return (
    <div className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl flex-row justify-between items-center px-4 py-3 md:px-6 md:py-4">
        <div>
        <Link
          href={"/"}
          className="text-lg md:text-2xl font-semibold tracking-tight md:pl-0 hover:text-slate-900 hover:cursor-pointer text-slate-900"
        >
          OpeOginni
        </Link>
        </div>
      <div className="md:hidden flex items-center gap-2">
        {MobileHeaderNavLinks.map((MobileHeaderNavLink) => {
          return (
            <div
              key={MobileHeaderNavLink.key}
              className="text-xs font-medium"
            >
              <Link
                href={MobileHeaderNavLink.link}
                className="px-3 py-1 rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              >
                {MobileHeaderNavLink.name}
              </Link>
            </div>
          );
        })}
      </div>
        <div className="hidden md:flex items-center gap-3">
        {HeaderNavLinks.map((HeaderNavLink) => {
          return (
            <div key={HeaderNavLink.key} className="text-sm font-medium">
              <Link
                href={HeaderNavLink.link}
                className={cn(
                  "relative px-3 py-1.5 rounded-full text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors",
                  HeaderNavLink.name === "Projects" && "text-slate-900"
                )}
              >
                {HeaderNavLink.name === "Projects" && (
                  <span className="pointer-events-none absolute inset-x-2 -bottom-1 h-[2px] rounded-full bg-slate-900/70" />
                )}
                <span className="relative z-10">{HeaderNavLink.name}</span>
              </Link>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
}
