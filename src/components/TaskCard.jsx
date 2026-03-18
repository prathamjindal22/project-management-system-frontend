import React from "react";

const TaskCard = ({ task, onStatusChange }) => {
  return (
    <div className="card mb-3 border-0 shadow-sm">
      <div className="card-body p-2">
        <strong>{task.title}</strong>

        <select
          className="form-select mt-2"
          value={task.status}
          onChange={(e) => onStatusChange(task._id, e.target.value)}
        >
          <option value="todo">Todo</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>
    </div>
  );
};

export default TaskCard;
