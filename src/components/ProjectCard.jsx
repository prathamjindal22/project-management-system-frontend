import { Link } from 'react-router-dom'

const ProjectCard = ({project}) => {
  return (
    <div style={{padding: 20, marginBottom: 10, border: "1px solid #ccc"}}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <Link to={`/projects/${project._id}`}>Open Project</Link>
    </div>
  )
}

export default ProjectCard