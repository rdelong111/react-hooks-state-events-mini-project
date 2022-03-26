import React from "react";
import Task from "./Task"

function TaskList({onTaskDelete, tasks}) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task
          key={task.text}
          text={task.text}
          category={task.category}
          onTaskDelete={onTaskDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;
