import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [catFilt, filterChange] = useState("All");

  const filteredTasks = tasks.filter((task) => {
    if (catFilt === 'All') return true;
    else {
      return catFilt === task.category;
    }
  });

  function handleDelete(KEY) {
    setTasks(tasks.filter((task) => task.text !== KEY));
  }

  function handleFilterChange(filter) {
    filterChange(filter);
  }

  function handleTaskSubmit(newTask) {
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        currentFilt={catFilt}
        onFilterChange={handleFilterChange}
        categories={CATEGORIES}
      />
      <NewTaskForm onTaskFormSubmit={handleTaskSubmit} categories={CATEGORIES} />
      <TaskList
        currentFilt={catFilt}
        onTaskDelete={handleDelete}
        tasks={filteredTasks}
      />
    </div>
  );
}

export default App;
