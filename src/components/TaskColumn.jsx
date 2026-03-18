import TaskCard from "./TaskCard";

const TaskColumn = ({ title, tasks, onStatusChange }) => {
  return (
    <div className="bg-light rounded p-3 h-100 shadow-sm">
      <h5 className="text-center mb-3 fw-semibold">{title}</h5>

      {tasks.length === 0 && <p className="text-muted text-center">No tasks</p>}

      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} onStatusChange={onStatusChange} />
      ))}
    </div>
  );
};

export default TaskColumn;
