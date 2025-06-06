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
      "w-full py-8 md:py-14",
      !lastProject && "border-b border-[hsl(207,4%,16%)]"
    )}>
      {/* Mobile Layout - Consistent pattern */}
      <div className="lg:hidden space-y-6">
        {/* Image always first on mobile */}
        <div className="max-h-[250px]">
          {image ? (
            <Image
              alt="Project Image"
              width={758}
              height={400}
              src={image}
              className="w-full h-full object-contain rounded-lg"
              style={{ maxHeight: '250px' }}
            />
          ) : (
            <Image
              alt="Project Image"
              width={0}
              height={0}
              src="/cloud/aws.svg"
              style={{ width: "100%", height: "100%" }}
              className="w-full h-full object-contain"
            />
          )}
        </div>
        
        {/* Content always second on mobile */}
        <div>
          <div id="headers" className="pb-4 space-y-2">
            <h1 className="font-bold text-lg">{title}</h1>
            <h1 className="font-semibold text-sm text-gray-600">
              {shortDescription}
            </h1>
          </div>
          <div
            id="description"
            className="text-justify py-4 text-sm leading-relaxed"
          >
            {description}
          </div>
          <div className="pb-4">
            <ProjectLinksComp links={links} />
          </div>
          <div className="grid grid-cols-8 gap-2 pb-4">
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

          <div id="date" className="text-sm text-gray-500">
            {completedTime.toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
            })}
          </div>
        </div>
      </div>

      {/* Desktop Layout - Alternating pattern */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-5">
        <div className="order-2 lg:order-1">
          <div id="headers" className="py-6 flex text-center justify-between">
            <h1 className="font-bold text-sm xl:text-lg">{title}</h1>
            <h1 className="font-semibold text-xs xl:text-lg text-gray-600">
              {shortDescription}
            </h1>
          </div>
          <div
            id="description"
            className="text-justify py-6 text-sm xl:text-lg leading-relaxed"
          >
            {description}
          </div>
          <div className="pb-4">
            <ProjectLinksComp links={links} />
          </div>
          <div className="grid grid-cols-10 gap-3 pb-4">
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

          <div id="date" className="text-sm text-gray-500">
            {completedTime.toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
            })}
          </div>
        </div>
        <div className="order-1 lg:order-2 max-h-[400px]">
          {image ? (
            <Image
              alt="Project Image"
              width={758}
              height={400}
              src={image}
              className="w-full h-full object-contain"
              style={{ maxHeight: '400px' }}
            />
          ) : (
            <Image
              alt="Project Image"
              width={0}
              height={0}
              src="/cloud/aws.svg"
              style={{ width: "100%", height: "100%" }}
              className="w-full h-full object-contain"
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
      "w-full py-8 md:py-14",
      !lastProject && "border-b border-[hsl(207,4%,16%)]"
    )}>
      {/* Mobile Layout - Same consistent pattern as Project */}
      <div className="lg:hidden space-y-6">
        {/* Image always first on mobile */}
        <div className="max-h-[250px]">
          {image ? (
            <Image
              alt="Project Image"
              width={758}
              height={400}
              src={image}
              className="w-full h-full object-contain rounded-lg"
              style={{ maxHeight: '250px' }}
            />
          ) : (
            <Image
              alt="Project Image"
              width={0}
              height={0}
              src="/cloud/aws.svg"
              style={{ width: "100%", height: "100%" }}
              className="w-full h-full object-contain"
            />
          )}
        </div>
        
        {/* Content always second on mobile */}
        <div>
          <div id="headers" className="pb-4 space-y-2">
            <h1 className="font-bold text-lg">{title}</h1>
            <h1 className="font-semibold text-sm text-gray-600">
              {shortDescription}
            </h1>
          </div>
          <div
            id="description"
            className="text-justify py-4 text-sm leading-relaxed"
          >
            {description}
          </div>
          <div className="pb-4">
            <ProjectLinksComp links={links} />
          </div>
          <div className="grid grid-cols-8 gap-2 pb-4">
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

          <div id="date" className="text-sm text-gray-500">
            {completedTime.toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
            })}
          </div>
        </div>
      </div>

      {/* Desktop Layout - Inverted pattern */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-5">
        <div className="order-1 max-h-[400px]">
          {image ? (
            <Image
              alt="Project Image"
              width={758}
              height={400}
              src={image}
              className="w-full h-full object-contain"
              style={{ maxHeight: '400px' }}
            />
          ) : (
            <Image
              alt="Project Image"
              width={0}
              height={0}
              src="/cloud/aws.svg"
              style={{ width: "100%", height: "100%" }}
              className="w-full h-full object-contain"
            />
          )}
        </div>

        <div className="order-2">
          <div id="headers" className="py-6 flex text-center justify-between">
            <h1 className="font-bold text-sm xl:text-lg">{title}</h1>
            <h1 className="font-semibold text-xs xl:text-lg text-gray-600">
              {shortDescription}
            </h1>
          </div>
          <div
            id="description"
            className="text-justify py-6 text-sm xl:text-lg leading-relaxed"
          >
            {description}
          </div>
          <div className="pb-4">
            <ProjectLinksComp links={links} />
          </div>
          <div className="grid grid-cols-10 gap-3 pb-4">
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

          <div id="date" className="text-sm text-gray-500">
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
    <div className="flex items-center justify-center w-full py-8 md:py-14 min-h-[50vh]">
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
      className="flex flex-wrap gap-3 md:flex-nowrap md:h-5 md:items-center text-sm text-indigo-600"
    >
      {links.map((link, index) => {
        return (
          <Fragment key={link.linkTitle}>
            <div key={link.linkTitle}>
              <Link href={link.link} target="blank" className="hover:text-indigo-500 transition-colors">
                {link.linkTitle}
              </Link>
            </div>
            {index < links.length - 1 && (
              <div className="text-gray-400 select-none">|</div>
            )}
          </Fragment>
        );
      })}
    </div>
  );
};
