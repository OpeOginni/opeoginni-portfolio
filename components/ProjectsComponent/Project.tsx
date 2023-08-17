/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

import styles from "@/components/ProjectsComponent/Project.module.css";
import TechUsed from "./TechUsed";

export const Project = () => {
  const techs = [
    {
      techName: "AWS",
      logoLocation: "/cloud/aws.svg",
    },
    {
      techName: "AWS",
      logoLocation: "/cloud/aws.svg",
    },
    {
      techName: "AWS",
      logoLocation: "/cloud/aws.svg",
    },
    {
      techName: "AWS",
      logoLocation: "/cloud/aws.svg",
    },
    {
      techName: "AWS",
      logoLocation: "/cloud/aws.svg",
    },
    {
      techName: "AWS",
      logoLocation: "/cloud/aws.svg",
    },
  ];
  return (
    <div className={styles.section}>
      <div className="lg:grid lg:grid-cols-2 lg:gap-5">
        <div>
          <div
            id="headers"
            className="py-6 flex text-center justify-between w-[75%]"
          >
            <h1>Project Title</h1> <h1>Project Title</h1>
          </div>
          <div id="description" className="text-justify py-6">
            EchoesEchoesEchoesEchoesEchoesEchoesEchoesEchoesEchoes
            EchoesEchoesEchoesEchoesEchoesEchoesEchoesEchoesEchoesEchoesEchoesEchoesEchoes
            EchoesEchoesEchoesEchoesEchoesEchoesEchoesEchoesEchoesEchoesEchoesEchoesEchoes
          </div>
          <div id="links" className="flex h-5 items-center space-x-4 text-sm">
            <div>Blog</div>
            <Separator orientation="vertical" />
            <div>Docs</div>
            <Separator orientation="vertical" />
            <div>Source</div>
          </div>
          <div className="grid grid-cols-7 gap-3">
            {techs.map((tech) => {
              return (
                <TechUsed
                  key={tech.techName}
                  logoLocation={tech.logoLocation}
                  techName={tech.techName}
                />
              );
            })}
          </div>

          <div id="date">July 2023</div>
        </div>
        <div className="max-h-[400px]">
          <Image
            alt="Project 1"
            width={0}
            height={0}
            src="/cloud/aws.svg"
            style={{ width: "100%", height: "100%" }} // optional
            className="hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
};
