/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { getDarkImageLocation } from "@/constants/tools&langages";

interface Props {
  imageLocation: string;
  hasDark: boolean;
  toolName: string;
  link?: string;
}

function ThemedIcon({ imageLocation, hasDark, toolName, className }: {
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
      <img className={`${className} dark:hidden`} src={imageLocation} alt={toolName} />
      <img className={`${className} hidden dark:block`} src={getDarkImageLocation(imageLocation)} alt={toolName} />
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
    <>
      <div className="py-7">
        <ThemedIcon
          imageLocation={imageLocation}
          hasDark={hasDark}
          toolName={toolName}
          className="w-[40px] h-[40px] md:w-[75px] md:h-[75px] lg:w-[75px] lg:h-[75px] mx-auto"
        />
      </div>
      <h1 className="text-sm md:text-lg pb-2 text-center text-neutral-700 dark:text-neutral-300">
        {toolName}
      </h1>
    </>
  );

  if (link) {
    return (
      <Link href={link} target="_blank" rel="noopener noreferrer">
        {content}
      </Link>
    );
  }

  return <div>{content}</div>;
}
