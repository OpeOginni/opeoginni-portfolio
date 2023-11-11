import {
  Project,
  ProjectInverted,
} from "@/components/ProjectsComponent/Project";
import { myProjects } from "@/constants/projects";
import { Fragment } from "react";

const ProjectsPage = () => {
  return (
    <div>
      <div className="text-center text-2xl md:text-5xl py-9 font-bold">
        My Projects
      </div>

      {myProjects.map((myProject, index) => {
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
                techTools={myProject.techTools}
                image={myProject.image}
              />
            ) : (
              <Project
                key={myProject.title}
                title={myProject.title}
                completedTime={myProject.completedTime}
                shortDescription={myProject.shortDescription}
                description={myProject.description}
                links={myProject.link}
                techTools={myProject.techTools}
                image={myProject.image}
              />
            )}
          </Fragment>
        );
      })}
    </div>
  );
};

export default ProjectsPage;
