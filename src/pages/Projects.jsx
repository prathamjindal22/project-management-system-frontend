import React, { useEffect } from "react";
import { useProjectStore } from "../store/projectStore";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = useProjectStore((state) => state.projects);
  const fetchProjects = useProjectStore((state) => state.fetchProjects);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  console.log(projects);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Projects</h2>

        <button className="btn btn-success">+ Create Project</button>
      </div>

      <div className="row">
        {projects.map((project) => (
          <div className="col-md-4" key={project._id}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
