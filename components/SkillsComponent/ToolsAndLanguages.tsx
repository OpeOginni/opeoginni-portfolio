/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

interface Props {
  imageLocation: string;
  toolName: string;
  link?: string;
}

export default function ToolsAndLanguages({
  imageLocation,
  toolName,
  link,
}: Props) {
  return (
    <div>
      {link ? (
        <>
          <Link href={link} target="blank">
            <div className="py-7">
              <img
                className="w-[40px] h-[40px] md:w-[75px] md:h-[75px] lg:w-[75px] lg:h-[75px] mx-auto" 
                src={imageLocation}
                alt={toolName}
              />
            </div>
          </Link>
          <h1 className="text-sm md:text-lg pb-2 text-center">{toolName}</h1>
        </>
      ) : (
        <>
          <div className="py-7">
            <img
                className="w-[40px] h-[40px] md:w-[75px] md:h-[75px] lg:w-[75px] lg:h-[75px] mx-auto" 
                src={imageLocation}
              alt={toolName}
            />
          </div>
          <h1 className="text-sm md:text-lg pb-2 text-center">{toolName}</h1>
        </>
      )}
    </div>
  );
}
