/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import TechUsed from "./TechUsed";
import { 
    ToolName, 
    LanguageName, 
    CloudName, 
    ChainName,
    getTool,
    getLanguage,
    getCloud,
    getChain
} from "@/constants/tools&langages";
import { ProjectLink } from "@/constants/projects";
import Link from "next/link";
import { Fragment } from "react";
import { cn } from "@/lib/utils";
import { GhostIcon } from "lucide-react";

interface Props {
  title: string;
  completedTime: Date;
  shortDescription: string;
  description: string;
  links: ProjectLink[];
  tech: (ToolName | LanguageName | CloudName | ChainName)[];
  lastProject?: boolean;
  image?: string;
}

interface LinksProps {
  links: ProjectLink[];
}

const getTechDetails = (techName: ToolName | LanguageName | CloudName | ChainName) => {
    if (Object.values(ToolName).includes(techName as ToolName)) {
        return getTool(techName as ToolName);
    }
    if (Object.values(LanguageName).includes(techName as LanguageName)) {
        return getLanguage(techName as LanguageName);
    }
    if (Object.values(CloudName).includes(techName as CloudName)) {
        return getCloud(techName as CloudName);
    }
    if (Object.values(ChainName).includes(techName as ChainName)) {
        return getChain(techName as ChainName);
    }
    throw new Error(`Unknown tech: ${techName}`);
};

export const Project = ({
  title,
  completedTime,
  shortDescription,
  description,
  links,
  tech,
  lastProject = false,
  image,
}: Props) => {
  return (
    <div className={cn(
      "max-w-[75%] mx-auto py-14 sm:max-w-[95%]",
      !lastProject && "border-b border-[hsl(207,4%,16%)]"
    )}>
      <div className="lg:grid lg:grid-cols-2 lg:gap-5">
        <div>
          <div id="headers" className="py-6 flex text-center justify-between ">
            <h1 className="font-bold text-sm xl:text-lg">{title}</h1>
            <h1 className="font-semibold text-xs xl:text-lg">
              {shortDescription}
            </h1>
          </div>
          <div
            id="description"
            className="text-justify py-6 text-sm xl:text-lg "
          >
            {description}
          </div>
          <ProjectLinksComp links={links} />
          <div className="grid grid-cols-10 gap-3">
            {tech.map((techName) => {
                const techDetails = getTechDetails(techName);
                return (
                    <TechUsed
                        key={techDetails.toolName}
                        logoLocation={techDetails.imageLocation}
                        techName={techDetails.toolName}
                    />
                );
            })}
          </div>

          <div id="date">
            {completedTime.toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
            })}
          </div>
        </div>
        <div className="max-h-[400px]">
          {image ? (
            <Image
              alt="Project 1"
              width={758}
              height={400}
              src={image}
              className="hidden lg:block w-full h-full object-contain"
              style={{ maxHeight: '400px' }}
            />
          ) : (
            <Image
              alt="Project 1"
              width={0}
              height={0}
              src="/cloud/aws.svg"
              style={{ width: "100%", height: "100%" }}
              className="hidden lg:block w-full h-full object-contain"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export const ProjectInverted = ({
  title,
  completedTime,
  shortDescription,
  description,
  links,
  tech,
  image,
  lastProject = false,
}: Props) => {
  return (
    <div className={cn(
      "max-w-[75%] mx-auto py-14 sm:max-w-[95%]",
      !lastProject && "border-b border-[hsl(207,4%,16%)]"
    )}>
      <div className="lg:grid lg:grid-cols-2 lg:gap-5">
        <div className="max-h-[400px]">
          {image ? (
            <Image
              alt="Project 1"
              width={758}
              height={400}
              src={image}
              className="hidden lg:block w-full h-full object-contain"
              style={{ maxHeight: '400px' }}
            />
          ) : (
            <Image
              alt="Project 1"
              width={0}
              height={0}
              src="/cloud/aws.svg"
              style={{ width: "100%", height: "100%" }}
              className="hidden lg:block w-full h-full object-contain"
            />
          )}
        </div>

        <div>
          <div id="headers" className="py-6 flex text-center justify-between ">
            <h1 className="font-bold text-sm xl:text-lg">{title}</h1>
            <h1 className="font-semibold text-xs xl:text-lg">
              {shortDescription}
            </h1>
          </div>
          <div
            id="description"
            className="text-justify py-6 text-sm xl:text-lg "
          >
            {description}
          </div>
          <ProjectLinksComp links={links} />
          <div className="grid grid-cols-10 gap-3">
            {tech.map((techName) => {
                const techDetails = getTechDetails(techName);
                return (
                    <TechUsed
                        key={techDetails.toolName}
                        logoLocation={techDetails.imageLocation}
                        techName={techDetails.toolName}
                    />
                );
            })}
          </div>

          <div id="date">
            {completedTime.toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export const EmptyProject = () => {
  return (
    <div className="flex items-center justify-center max-w-[75%] mx-auto py-14 sm:max-w-[95%] min-h-[60vh]">
      <div className="flex flex-col items-center justify-center">
        <GhostIcon className="w-10 h-10" />
        <h1 className="text-lg font-bold">No Projects Found (YET)</h1>
      </div>
    </div>
  )
}

const ProjectLinksComp = ({ links }: LinksProps) => {
  return (
    <div
      id="links"
      className="flex h-5 items-center space-x-4 text-sm text-indigo-600"
    >
      {links.map((link, index) => {
        return (
          <Fragment key={link.linkTitle}>
            {index === links.length - 1 ? (
              <div key={link.linkTitle}>
                <Link href={link.link} target="blank">
                  {link.linkTitle}
                </Link>
              </div>
            ) : (
              <Fragment key={link.linkTitle}>
                {" "}
                <div key={link.linkTitle}>
                  <Link href={link.link} target="blank">
                    {link.linkTitle}
                  </Link>
                </div>
                <Separator orientation="vertical" />{" "}
              </Fragment>
            )}
          </Fragment>
        );
      })}
    </div>
  );
};
