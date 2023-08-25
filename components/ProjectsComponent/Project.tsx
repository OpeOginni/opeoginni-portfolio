/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

import styles from "@/components/ProjectsComponent/Project.module.css";
import TechUsed from "./TechUsed";
import { Tools, Languages } from "@/constants/tools&langages";
import { ProjectLink } from "@/constants/projects";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  completedTime: Date;
  shortDescription: string;
  description: string;
  links: ProjectLink[];
  techTools?: Tools[];
  image?: string;
}

interface LinksProps {
  links: ProjectLink[];
}

export const Project = ({
  title,
  completedTime,
  shortDescription,
  description,
  links,
  techTools,
  image,
}: Props) => {
  return (
    <div className={styles.section}>
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
          <div className={styles.ProjectTech}>
            {techTools?.map((tech) => {
              return (
                <TechUsed
                  key={tech.toolName}
                  logoLocation={tech.imageLocation}
                  techName={tech.toolName}
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
              width={"758"}
              height={"400"}
              src={image}
              // style={{ width: "100%", height: "100%" }} // optional
              className="hidden lg:block"
            />
          ) : (
            <Image
              alt="Project 1"
              width={0}
              height={0}
              src="/cloud/aws.svg"
              style={{ width: "100%", height: "100%" }} // optional
              className="hidden lg:block"
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
  techTools,
  image,
}: Props) => {
  return (
    <div className={styles.section}>
      <div className="lg:grid lg:grid-cols-2 lg:gap-5">
        <div className="max-h-[400px]">
          {image ? (
            <Image
              alt="Project 1"
              width={"758"}
              height={"400"}
              src={image}
              // style={{ width: "100%", height: "100%" }} // optional
              className="hidden lg:block"
            />
          ) : (
            <Image
              alt="Project 1"
              width={0}
              height={0}
              src="/cloud/aws.svg"
              style={{ width: "100%", height: "100%" }} // optional
              className="hidden lg:block"
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
          <div
            className={cn(
              techTools
                ? `grid grid-cols-${
                    techTools?.length + 10 - techTools?.length
                  } gap-3 `
                : "grid"
            )}
          >
            {techTools?.map((tech) => {
              return (
                <TechUsed
                  key={tech.toolName}
                  logoLocation={tech.imageLocation}
                  techName={tech.toolName}
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

const ProjectLinksComp = ({ links }: LinksProps) => {
  return (
    <div
      id="links"
      className="flex h-5 items-center space-x-4 text-sm text-indigo-600"
    >
      {links.map((link, index) => {
        return (
          <>
            {index === links.length - 1 ? (
              <div key={link.lintTitle}>
                <Link href={link.link} target="blank">
                  {link.lintTitle}
                </Link>
              </div>
            ) : (
              <>
                {" "}
                <div key={link.lintTitle}>
                  <Link href={link.link} target="blank">
                    {link.lintTitle}
                  </Link>
                </div>
                <Separator orientation="vertical" />{" "}
              </>
            )}
          </>
        );
      })}
    </div>
  );
};
