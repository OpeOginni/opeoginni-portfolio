/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import TechUsed from "./TechUsed";
import {
  ToolName,
  LanguageName,
  CloudName,
  ChainName,
  getTool,
  getLanguage,
  getCloud,
  getChain,
} from "@/constants/tools&langages";
import { ProjectLink } from "@/constants/projects";
import Link from "next/link";
import { Fragment } from "react";
import { cn } from "@/lib/utils";
import { GhostIcon, ExternalLinkIcon } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

interface Props {
  title: string;
  completedTime: Date;
  shortDescription: string;
  description: string;
  links: ProjectLink[];
  tech: (ToolName | LanguageName | CloudName | ChainName)[];
  lastProject?: boolean;
  image: string;
}

interface LinksProps {
  links: ProjectLink[];
}

const getTechDetails = (
  techName: ToolName | LanguageName | CloudName | ChainName
) => {
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

/** Shared project image with lightbox dialog */
function ProjectImage({ title, image, maxHeight = "400px" }: { title: string; image: string; maxHeight?: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          aria-label={`Open ${title} image`}
          className="w-full rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 transition duration-300 ease-out lg:hover:shadow-xl lg:hover:shadow-neutral-900/5 dark:lg:hover:shadow-neutral-100/5 lg:hover:-translate-y-0.5 cursor-pointer"
        >
          <Image
            alt={`${title} screenshot`}
            width={758}
            height={400}
            src={image}
            className="w-full h-full object-contain transition-transform duration-300 ease-out hover:scale-[1.01]"
            style={{ maxHeight }}
          />
        </button>
      </DialogTrigger>
      <DialogContent
        className="w-auto max-w-none p-0 bg-transparent border-none shadow-none sm:rounded-none [&>button]:hidden"
        title={title}
      >
        <Image
          alt={`${title} screenshot (full view)`}
          width={1920}
          height={1080}
          src={image}
          sizes="100vw"
          className="w-auto h-auto max-w-[90vw] max-h-[90vh] object-contain"
        />
      </DialogContent>
    </Dialog>
  );
}

/** Shared project content block */
function ProjectContent({
  title,
  completedTime,
  shortDescription,
  description,
  links,
  tech,
  size = "desktop",
}: {
  title: string;
  completedTime: Date;
  shortDescription: string;
  description: string;
  links: ProjectLink[];
  tech: (ToolName | LanguageName | CloudName | ChainName)[];
  size?: "mobile" | "desktop";
}) {
  const isMobile = size === "mobile";

  return (
    <div className={cn("flex flex-col", !isMobile && "h-full")}>
      <div className="space-y-1.5 pb-4">
        <div className="flex items-baseline gap-3">
          <h3
            className={cn(
              "font-bold text-neutral-900 dark:text-neutral-50",
              isMobile ? "text-lg" : "text-xl"
            )}
          >
            {title}
          </h3>
          <span className="text-xs text-neutral-400 dark:text-neutral-500 font-medium whitespace-nowrap">
            {completedTime.toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
            })}
          </span>
        </div>
        <p
          className={cn(
            "font-medium text-neutral-500 dark:text-neutral-400",
            isMobile ? "text-xs" : "text-sm"
          )}
        >
          {shortDescription}
        </p>
      </div>

      <p
        className={cn(
          "text-neutral-600 dark:text-neutral-300 leading-relaxed pb-5",
          isMobile ? "text-sm" : "text-[15px]"
        )}
      >
        {description}
      </p>

      <div className="pb-4">
        <ProjectLinksComp links={links} />
      </div>

      <div
        className="flex flex-wrap items-center gap-4 md:gap-5 mt-auto pt-1"
      >
        {tech.map((techName) => {
          const techDetails = getTechDetails(techName);
          return (
            <TechUsed
              key={techDetails.toolName}
              logoLocation={techDetails.imageLocation}
              hasDark={techDetails.hasDark}
              techName={techDetails.toolName}
            />
          );
        })}
      </div>
    </div>
  );
}

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
    <div
      className={cn(
        "w-full py-10 md:py-14",
        !lastProject && "border-b border-neutral-200 dark:border-neutral-800"
      )}
    >
      {/* Mobile Layout */}
      <div className="lg:hidden space-y-5">
        <ProjectImage title={title} image={image} maxHeight="250px" />
        <ProjectContent
          title={title}
          completedTime={completedTime}
          shortDescription={shortDescription}
          description={description}
          links={links}
          tech={tech}
          size="mobile"
        />
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-10">
        <div className="flex flex-col">
          <ProjectContent
            title={title}
            completedTime={completedTime}
            shortDescription={shortDescription}
            description={description}
            links={links}
            tech={tech}
            size="desktop"
          />
        </div>
        <div>
          <ProjectImage title={title} image={image} />
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
    <div
      className={cn(
        "w-full py-10 md:py-14",
        !lastProject && "border-b border-neutral-200 dark:border-neutral-800"
      )}
    >
      {/* Mobile Layout */}
      <div className="lg:hidden space-y-5">
        <ProjectImage title={title} image={image} maxHeight="250px" />
        <ProjectContent
          title={title}
          completedTime={completedTime}
          shortDescription={shortDescription}
          description={description}
          links={links}
          tech={tech}
          size="mobile"
        />
      </div>

      {/* Desktop Layout - Inverted */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <ProjectImage title={title} image={image} />
        </div>
        <div className="flex flex-col">
          <ProjectContent
            title={title}
            completedTime={completedTime}
            shortDescription={shortDescription}
            description={description}
            links={links}
            tech={tech}
            size="desktop"
          />
        </div>
      </div>
    </div>
  );
};

export const EmptyProject = () => {
  return (
    <div className="flex items-center justify-center w-full py-8 md:py-14 min-h-[50vh]">
      <div className="flex flex-col items-center justify-center text-neutral-400 dark:text-neutral-600">
        <GhostIcon className="w-10 h-10 mb-2" />
        <h2 className="text-lg font-bold">No Projects Found (YET)</h2>
      </div>
    </div>
  );
};

const ProjectLinksComp = ({ links }: LinksProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {links.map((link) => (
        <Link
          key={link.linkTitle}
          href={link.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-md border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
        >
          {link.linkTitle}
          <ExternalLinkIcon className="w-3 h-3" />
        </Link>
      ))}
    </div>
  );
};
