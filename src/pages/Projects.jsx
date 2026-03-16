import React, { useEffect } from 'react'
import { useProjectStore } from '../store/ProjectStore'
import ProjectCard from '../components/ProjectCard';

const Projects = () => {

    const projects = useProjectStore((state) => state.projects);
    const fetchProjects = useProjectStore((state) => state.fetchProjects);

    useEffect(() => {
        fetchProjects();
    },[fetchProjects])

    console.log(projects)

    return (
        <div style={{padding: 40}}>
            <h2>Projects</h2>
            {
                projects?.map((project) => {
                    return (
                        <ProjectCard
                            key={project._id}
                            project={project}
                        />
                    )
                })
            }
        </div>
    )
}

export default Projects