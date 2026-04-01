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
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      className="flex items-center justify-center w-9 h-9 rounded-full text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
    >
      <Icon className="text-[18px]" />
    </Link>
  );
}
