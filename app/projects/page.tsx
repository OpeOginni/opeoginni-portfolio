import ProjectsFilter from "@/components/ProjectsComponent/Filter";
import {
  EmptyProject,
  Project,
  ProjectInverted,
} from "@/components/ProjectsComponent/Project";
import { myProjects } from "@/constants/projects";
import { ToolName } from "@/constants/tools&langages";
import { CloudName } from "@/constants/tools&langages";
import { LanguageName } from "@/constants/tools&langages";
import { Fragment } from "react";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

const ProjectsPage = async (props: {
  searchParams: SearchParams
}) => {
  const searchParams = await props.searchParams

  const filters = searchParams.filters as string;
  const filtersArray = filters ? filters.split(",") : [];  

  const filteredProjects = myProjects.filter((project) => {

    if(filtersArray.length === 0) return true;

    return filtersArray.some((filter) => 
      project.tech.includes(filter as ToolName | LanguageName | CloudName));
  }).sort((a, b) => b.completedTime.getTime() - a.completedTime.getTime());

  return (
    <div>
      <div className="text-center text-md md:text-xl py-9 font-bold">
        MY PROJECTS
      </div>

      <ProjectsFilter />
      {filteredProjects.length > 0 ? (
        filteredProjects.map((myProject, index) => {
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
                lastProject={index === filteredProjects.length -1}
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
                lastProject={index === filteredProjects.length -1}
              />
            )}
          </Fragment>
        );
      })
      ) : (
        <EmptyProject />
      )}
    </div>
  );
};

export default ProjectsPage;
