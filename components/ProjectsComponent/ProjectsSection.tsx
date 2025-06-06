import {
  Project,
  ProjectInverted,
} from "./Project";
import { myProjects } from "@/constants/projects";
import { Fragment } from "react";

export default function ProjectsSection() {
  // Sort projects by completion date (newest first)
  const sortedProjects = myProjects.sort((a, b) => b.completedTime.getTime() - a.completedTime.getTime());

  return (
    <section id="projects" className="w-full px-4 md:max-w-[75%] md:mx-auto border-b border-[hsl(207,4%,16%)] py-6 md:py-5 pb-8 md:pb-14">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold py-6 md:py-7 text-center">
          Featured Projects
        </h1>
        <p className="text-center text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base">
          Here are some of the projects I&apos;ve worked on, showcasing various technologies and approaches to solving real-world problems.
        </p>
      </div>
      <div className="space-y-0">
        {sortedProjects.map((myProject, index) => {
          return (
            <Fragment key={myProject.title}>
              {index % 2 === 1 ? (
                <ProjectInverted
                  key={myProject.title}
                  title={myProject.title}
                  completedTime={myProject.completedTime}
                  shortDescription={myProject.shortDescription}
                  description={myProject.description}
                  links={myProject.link}
                  tech={myProject.tech}
                  image={myProject.image}
                  lastProject={index === sortedProjects.length - 1}
                />
              ) : (
                <Project
                  key={myProject.title}
                  title={myProject.title}
                  completedTime={myProject.completedTime}
                  shortDescription={myProject.shortDescription}
                  description={myProject.description}
                  links={myProject.link}
                  tech={myProject.tech}
                  image={myProject.image}
                  lastProject={index === sortedProjects.length - 1}
                />
              )}
            </Fragment>
          );
        })}
      </div>
    </section>
  );
} 