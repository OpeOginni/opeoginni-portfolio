/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { getDarkImageLocation } from "@/constants/tools&langages";

interface Props {
  imageLocation: string;
  hasDark: boolean;
  toolName: string;
  link?: string;
}

function ThemedIcon({
  imageLocation,
  hasDark,
  toolName,
  className,
}: {
  imageLocation: string;
  hasDark: boolean;
  toolName: string;
  className: string;
}) {
  if (!hasDark) {
    return <img className={className} src={imageLocation} alt={toolName} />;
  }

  return (
    <>
      <img
        className={`${className} dark:hidden`}
        src={imageLocation}
        alt={toolName}
      />
      <img
        className={`${className} hidden dark:block`}
        src={getDarkImageLocation(imageLocation)}
        alt={toolName}
      />
    </>
  );
}

export default function ToolsAndLanguages({
  imageLocation,
  hasDark,
  toolName,
  link,
}: Props) {
  const content = (
    <div className="flex flex-col items-center py-4 md:py-5">
      <ThemedIcon
        imageLocation={imageLocation}
        hasDark={hasDark}
        toolName={toolName}
        className="w-[36px] h-[36px] md:w-[52px] md:h-[52px] mb-3"
      />
      <span className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 font-medium">
        {toolName}
      </span>
    </div>
  );

  if (link) {
    return (
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity"
      >
        {content}
      </Link>
    );
  }

  return <div>{content}</div>;
}
