import React, { useEffect } from "react";
import TaskColumn from "../components/TaskColumn";
import { useTaskStore } from "../store/TaskStore";
import socket from "../socket/socket";
import { useParams } from "react-router-dom";

const Taskboard = () => {
  const { id } = useParams();

  const { tasks, fetchTasks, updateTask } = useTaskStore();

  useEffect(() => {
    fetchTasks(id);
    if (!socket.connected) {
      socket.connect();
    }
    socket.emit("joinProject", id);
    socket.on("taskUpdated", (updatedTask) => {
      useTaskStore.setState((state) => ({
        tasks: state.tasks.map((t) =>
          t && t._id === updatedTask?._id ? updatedTask : t,
        ),
      }));
    });
  }, []);

  const handleStatusChange = async (taskId, status) => {
    const task = await updateTask(taskId, status);

    if (!task) {
      console.error("Task update failed");
      return;
    }

    socket.emit("taskUpdated", {
      ...task,
      projectId: task.projectId?._id || task.projectId,
    });
  };

  const todo = tasks?.filter((t) => t && t.status === "todo") || [];
  const progress = tasks?.filter((t) => t && t.status === "in-progress") || [];
  const done = tasks?.filter((t) => t && t.status === "done") || [];

  return (
    <div className="container-fluid pt-4 px-4 task-board">
      <h2 className="mb-4">Task Board</h2>

      <div className="row">
        <div className="col-md-4">
          <TaskColumn
            title="Todo"
            tasks={todo}
            onStatusChange={handleStatusChange}
          />
        </div>

        <div className="col-md-4">
          <TaskColumn
            title="In Progress"
            tasks={progress}
            onStatusChange={handleStatusChange}
          />
        </div>

        <div className="col-md-4">
          <TaskColumn
            title="Done"
            tasks={done}
            onStatusChange={handleStatusChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Taskboard;
