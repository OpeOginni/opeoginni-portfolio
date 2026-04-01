/* eslint-disable @next/next/no-img-element */
import { FiGithub } from "react-icons/fi";
import { TbBrandLinkedin } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

interface Props {
  name: string;
  link: string;
  medium: string;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: FiGithub,
  linkedin: TbBrandLinkedin,
  email: HiOutlineMail,
  x: FaXTwitter,
};

export default function Contacts({ name, link, medium }: Props) {
  const Icon = iconMap[medium];
  if (!Icon) return null;

  return (
    <div className="flex justify-center items-center text-xl leading-7">
      <span>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
        >
          <Icon />
        </Link>
      </span>
    </div>
  );
}
