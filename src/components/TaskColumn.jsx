import TaskCard from './TaskCard'

const TaskColumn = ({title, tasks, onStatusChange}) => {
  return (
    <div style={{flex: 1, padding: 20}}>
      <h3>{title}</h3>
      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} onStatusChange={onStatusChange} />
      ))}
    </div>
  )
}

export default TaskColumn