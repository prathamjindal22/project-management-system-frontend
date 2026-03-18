import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {

  return (
    <div className="card shadow-sm mb-3">

      <div className="card-body">

        <h5 className="card-title">{project.name}</h5>

        <p className="card-text">{project.description}</p>

        <Link
          to={`/project/${project._id}`}
          className="btn btn-primary btn-sm"
        >
          Open
        </Link>

      </div>

    </div>
  );
}

export default ProjectCard;