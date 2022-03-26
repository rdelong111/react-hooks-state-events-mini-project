import React, {useState} from "react";

function NewTaskForm({onTaskFormSubmit, categories}) {
  const [newTask, changeTask] = useState({
    text: '',
    category: 'Code'
  });

  const catswOutAll = categories.filter((category) => {
    return category === 'All' ? false : true;
  });

  function handleTaskChange(e) {
    changeTask({...newTask, [e.target.name]: e.target.value});
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit(newTask);
  }

  return (
    <form onSubmit={handleFormSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={handleTaskChange} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={handleTaskChange} name="category">
          {catswOutAll.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
