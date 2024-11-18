import Link from "next/link";
import styles from "./Header.module.css";
import ArrowSVG from "../svg/arrow";

interface NavLinks {
  key: number;
  name: string;
  link: string;
}

const HeaderNavLinks: NavLinks[] = [
  { key: 0, name: "Home", link: "/" },
  { key: 1, name: "Projects", link: "/projects" },
  { key: 2, name: "Skills/Certs", link: "/#skills&certs" },
  { key: 3, name: "Qualifications", link: "/#qualifications" },
  { key: 4, name: "Contact", link: "/#contact" },
];

const MobileHeaderNavLinks: NavLinks[] = [
  { key: 0, name: "Home", link: "/" },
  { key: 1, name: "Projects", link: "/projects" },
  { key: 3, name: "Contact", link: "/#contact" },
];

export default async function Header() {
  return (
    <div className={`${styles.largeContainer} sticky top-0 bg-white/80 backdrop-blur-sm z-50`}>
      <div>
        <Link
          href={"/"}
          className="text-2xl font-extrabold md:pl-10 hover:text-indigo-500 hover:cursor-pointer"
        >
          OpeOginni
        </Link>
      </div>
      <div className="md:hidden grid grid-cols-3 gap-2 items-center">
        {MobileHeaderNavLinks.map((MobileHeaderNavLink) => {
          return (
            <div
              key={MobileHeaderNavLink.key}
              className={`${styles.headerNavLinks} text-lg`}
            >
              <Link href={MobileHeaderNavLink.link}>
                {MobileHeaderNavLink.name}
              </Link>
            </div>
          );
        })}
      </div>
      <div className="hidden md:grid grid-cols-5 gap-4 items-center">
        {HeaderNavLinks.map((HeaderNavLink) => {
          return (
            <div key={HeaderNavLink.key} className={`${styles.headerNavLinks} text-lg`}>
              <Link 
                href={HeaderNavLink.link}
                className={`${
                  HeaderNavLink.name === "Projects" 
                    ? "relative flex items-center justify-center text-lg"
                    : ""
                }`}
              >
                {HeaderNavLink.name === "Projects" && (
                  <span className="absolute flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent blur-2xl animate-[pulse_2s_ease-in-out_infinite] hover:animate-[pulse_1s_ease-in-out_infinite]">
                    {HeaderNavLink.name}
                  </span>
                )}
                <span className={`${
                  HeaderNavLink.name === "Projects"
                    ? "relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                    : ""
                }`}>
                  {HeaderNavLink.name}
                </span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
