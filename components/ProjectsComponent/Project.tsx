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
      !lastProject && "border-b border-gray-200"
    )}>
      {/* Mobile Layout - Consistent pattern */}
      <div className="lg:hidden space-y-6">
        {/* Image always first on mobile */}
        <div className="max-h-[250px] hover:cursor-pointer">
          <Dialog>
            <DialogTrigger asChild>
              <button aria-label={`Open ${title} image`} className="w-full">
                <Image
                  alt={`${title} screenshot`}
                  width={758}
                  height={400}
                  src={image}
                  className="w-full h-full object-contain rounded-lg"
                  style={{ maxHeight: '250px' }}
                />
              </button>
            </DialogTrigger>
            <DialogContent className="w-auto max-w-none p-0 bg-transparent border-none shadow-none sm:rounded-none [&>button]:hidden" title={title}>
              <Image
                alt={`${title} screenshot (full view)`}
                width={1200}
                height={800}
                src={image}
                sizes="100vw"
                className="w-auto h-auto max-w-[90vw] max-h-[90vh] object-contain"
              />
            </DialogContent>
          </Dialog>
        </div>
        
        {/* Content always second on mobile */}
        <div>
          <div id="headers" className="pb-4 space-y-2">
            <h2 className="font-bold text-xl text-gray-900">{title}</h2>
            <p className="font-medium text-sm text-gray-500">
              {shortDescription}
            </p>
          </div>
          <p className="text-gray-700 py-4 text-sm leading-relaxed">
            {description}
          </p>
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
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="order-2 lg:order-1 flex flex-col">
          <div id="headers" className="pb-5 space-y-2">
            <h2 className="font-bold text-2xl text-gray-900">{title}</h2>
            <p className="font-medium text-base text-gray-500">
              {shortDescription}
            </p>
          </div>
          <p className="text-gray-700 pb-6 text-base leading-relaxed">
            {description}
          </p>
          <div className="pb-5">
            <ProjectLinksComp links={links} />
          </div>
          <div className="grid grid-cols-10 gap-3 pb-5">
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

          <div id="date" className="text-sm text-gray-500 mt-auto">
            {completedTime.toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
            })}
          </div>
        </div>
        <div className="order-1 lg:order-2 max-h-[400px] hover:cursor-pointer group">
          <Dialog>
            <DialogTrigger asChild>
              <button
                aria-label={`Open ${title} image`}
                className="w-full rounded-xl overflow-hidden transition duration-300 ease-out lg:hover:shadow-2xl lg:hover:shadow-blue-500/20 lg:hover:-translate-y-1"
              >
                <Image
                  alt={`${title} screenshot`}
                  width={758}
                  height={400}
                  src={image}
                  className="w-full h-full object-contain rounded-xl transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                  style={{ maxHeight: '400px' }}
                />
              </button>
            </DialogTrigger>
            <DialogContent className="w-auto max-w-none p-0 bg-transparent border-none shadow-none sm:rounded-none [&>button]:hidden" title={title}>
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
      !lastProject && "border-b border-gray-200"
    )}>
      {/* Mobile Layout - Same consistent pattern as Project */}
      <div className="lg:hidden space-y-6">
        {/* Image always first on mobile */}
        <div className="max-h-[250px] hover:cursor-pointer">
          <Dialog>
            <DialogTrigger asChild>
              <button aria-label={`Open ${title} image`} className="w-full">
            <Image
                  alt={`${title} screenshot`}
              width={758}
              height={400}
              src={image}
                  className="w-full h-full object-contain rounded-lg"
              style={{ maxHeight: '250px' }}
            />
              </button>
            </DialogTrigger>
            <DialogContent className="w-auto max-w-none p-0 bg-transparent border-none shadow-none sm:rounded-none [&>button]:hidden" title={title}>
              <Image
                alt={`${title} screenshot (full view)`}
                width={1200}
                height={800}
                src={image}
                sizes="100vw"
                className="w-auto h-auto max-w-[90vw] max-h-[90vh] object-contain"
              />
            </DialogContent>
          </Dialog>
        </div>
        
        {/* Content always second on mobile */}
        <div>
          <div id="headers" className="pb-4 space-y-2">
            <h2 className="font-bold text-xl text-gray-900">{title}</h2>
            <p className="font-medium text-sm text-gray-500">
              {shortDescription}
            </p>
          </div>
          <p className="text-gray-700 py-4 text-sm leading-relaxed">
            {description}
          </p>
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
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="order-1 max-h-[400px] hover:cursor-pointer group">
          <Dialog>
            <DialogTrigger asChild>
              <button
                aria-label={`Open ${title} image`}
                className="w-full rounded-xl overflow-hidden transition duration-300 ease-out lg:hover:shadow-2xl lg:hover:shadow-blue-500/20 lg:hover:-translate-y-1"
              >
                <Image
                  alt={`${title} screenshot`}
                  width={758}
                  height={400}
                  src={image}
                  className="w-full h-full object-contain rounded-xl transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                  style={{ maxHeight: '400px' }}
                />
              </button>
            </DialogTrigger>
            <DialogContent className="w-auto max-w-none p-0 bg-transparent border-none shadow-none sm:rounded-none [&>button]:hidden" title={title}>
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
        </div>

        <div className="order-2 flex flex-col">
          <div id="headers" className="pb-5 space-y-2">
            <h2 className="font-bold text-2xl text-gray-900">{title}</h2>
            <p className="font-medium text-base text-gray-500">
              {shortDescription}
            </p>
          </div>
          <p className="text-gray-700 pb-6 text-base leading-relaxed">
            {description}
          </p>
          <div className="pb-5">
            <ProjectLinksComp links={links} />
          </div>
          <div className="grid grid-cols-10 gap-3 pb-5">
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

          <div id="date" className="text-sm text-gray-500 mt-auto">
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
      <div className="flex flex-col items-center justify-center text-gray-400">
        <GhostIcon className="w-10 h-10 mb-2" />
        <h2 className="text-lg font-bold">No Projects Found (YET)</h2>
      </div>
    </div>
  )
}

const ProjectLinksComp = ({ links }: LinksProps) => {
  return (
    <div
      id="links"
      className="flex flex-wrap gap-3 md:flex-nowrap md:items-center text-sm text-blue-600"
    >
      {links.map((link, index) => {
        return (
          <Fragment key={link.linkTitle}>
              <div key={link.linkTitle}>
              <Link href={link.link} target="blank" className="hover:text-blue-700 transition-colors font-medium">
                  {link.linkTitle}
                </Link>
              </div>
            {index < links.length - 1 && (
              <div className="text-gray-300 select-none">|</div>
            )}
          </Fragment>
        );
      })}
    </div>
  );
};