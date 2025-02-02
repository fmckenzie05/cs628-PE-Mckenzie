import React, { useState } from "react";
import ToDoList from "./ToDoList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: task }]);
    setTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app-container">
      <h1>ToDo List App</h1>
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task description"
        />
        <button className="add-btn" onClick={addTask}>Add Task</button>
      </div>
      <ToDoList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
