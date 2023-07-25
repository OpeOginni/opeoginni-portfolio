import Link from "next/link";
import styles from "./Header.module.css";

interface NavLinks {
  key: number;
  name: string;
  link: string;
}

const HeaderNavLinks: NavLinks[] = [
  { key: 0, name: "Home", link: "/" },
  { key: 1, name: "Skills/Certs", link: "#skills&certs" },
  { key: 2, name: "Projects", link: "#projects" },
  { key: 3, name: "Qualifications", link: "#qualifications" },
  { key: 4, name: "Contact", link: "#contact" },
];

export default function Header() {
  return (
    <div
      className={`${styles.largeContainer} hover:border-b-4 border-indigo-600 `}
    >
      <div>
        <h2 className="text-xl font-extrabold pl-10">Opeyemi</h2>
      </div>
      <div className="grid grid-cols-5 gap-4 items-center">
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
