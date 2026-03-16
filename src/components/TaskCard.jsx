import React from 'react'

const TaskCard = ({task, onStatusChange}) => {
  return (
    <div>
      <h4>{task.title}</h4>
      <select value={task.status} onChange={(e) => onStatusChange(task._id, e.target.value)}>
        <option value="todo">To Do</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>
    </div>
  )
}

export default TaskCard