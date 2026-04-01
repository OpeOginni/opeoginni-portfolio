import { Project, ProjectInverted } from "./Project";
import { myProjects } from "@/constants/projects";
import { Fragment } from "react";

export default function ProjectsSection() {
  const sortedProjects = myProjects.sort(
    (a, b) => b.completedTime.getTime() - a.completedTime.getTime()
  );

  return (
    <section
      id="projects"
      className="w-full px-4 md:max-w-[75%] md:mx-auto border-b border-neutral-200 dark:border-neutral-800 py-10 md:py-12"
    >
      <div>
        <h2 className="text-2xl md:text-3xl font-bold pb-3 text-center text-neutral-900 dark:text-neutral-50">
          Featured Projects
        </h2>
        <p className="text-center text-neutral-500 dark:text-neutral-400 mb-8 md:mb-10 max-w-xl mx-auto text-sm">
          A selection of projects showcasing different technologies and
          approaches to solving real-world problems.
        </p>
      </div>
      <div className="space-y-0">
        {sortedProjects.map((myProject, index) => (
          <Fragment key={myProject.title}>
            {index % 2 === 1 ? (
              <ProjectInverted
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
        ))}
      </div>
    </section>
  );
}
