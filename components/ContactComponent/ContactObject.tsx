/* eslint-disable @next/next/no-img-element */
import { FiGithub } from "react-icons/fi";
import { TbBrandLinkedin } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";

interface Props {
  name: string;
  link: string;
  medium: string;
}

export default function Contacts({ name, link, medium }: Props) {
  if (medium === "github") {
    return (
      <div className="flex justify-center items-center text-xl leading-7">
        <span>
          <Link href={link}>
            <FiGithub />
          </Link>
        </span>
      </div>
    );
  } else if (medium === "linkedin") {
    return (
      <div className="flex justify-center items-center text-xl leading-7">
        <span>
          <Link href={link}>
            <TbBrandLinkedin />
          </Link>
        </span>
      </div>
    );
  } else if (medium === "email") {
    return (
      <div className="flex justify-center items-center text-xl leading-7">
        <span>
          <Link href={link}>
            <HiOutlineMail />
          </Link>
        </span>
      </div>
    );
  }
}
