import Link from "next/link";
import styles from "./Header.module.css";

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

export default function Header() {
  return (
    <div className={`${styles.largeContainer}  `}>
      <div>
        <Link
          href={"/"}
          className="text-xl font-extrabold md:pl-10 hover:text-indigo-500 hover:cursor-pointer"
        >
          Opeyemi
        </Link>
      </div>
      <div className=" md:hidden grid grid-cols-3 gap-2 items-center">
        {MobileHeaderNavLinks.map((MobileHeaderNavLink) => {
          return (
            <div
              key={MobileHeaderNavLink.key}
              className={styles.headerNavLinks}
            >
              <Link href={MobileHeaderNavLink.link}>
                {MobileHeaderNavLink.name}
              </Link>
            </div>
          );
        })}
      </div>
      <div className=" hidden md:grid grid-cols-5 gap-4 items-center">
        {HeaderNavLinks.map((HeaderNavLink) => {
          return (
            <div key={HeaderNavLink.key} className={styles.headerNavLinks}>
              <Link href={HeaderNavLink.link}>{HeaderNavLink.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
