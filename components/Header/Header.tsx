import Link from "next/link";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";

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
    <div className="sticky top-0 z-50 border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl flex-row justify-between items-center px-4 py-3 md:px-6 md:py-4">
        <div>
          <Link
            href={"/"}
            className="text-lg md:text-2xl font-semibold tracking-tight hover:cursor-pointer text-neutral-900 dark:text-neutral-50"
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
                  className="px-3 py-1 rounded-full text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                >
                  {MobileHeaderNavLink.name}
                </Link>
              </div>
            );
          })}
          <ThemeToggle />
        </div>
        <div className="hidden md:flex items-center gap-3">
          {HeaderNavLinks.map((HeaderNavLink) => {
            return (
              <div key={HeaderNavLink.key} className="text-sm font-medium">
                <Link
                  href={HeaderNavLink.link}
                  className={cn(
                    "relative px-3 py-1.5 rounded-full text-sm font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors",
                    HeaderNavLink.name === "Projects" &&
                      "text-neutral-900 dark:text-neutral-50"
                  )}
                >
                  {HeaderNavLink.name === "Projects" && (
                    <span className="pointer-events-none absolute inset-x-2 -bottom-1 h-[2px] rounded-full bg-blue-600 dark:bg-blue-500" />
                  )}
                  <span className="relative z-10">{HeaderNavLink.name}</span>
                </Link>
              </div>
            );
          })}
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
