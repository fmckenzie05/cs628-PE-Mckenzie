import React from "react";

function ToDoItem({ task, deleteTask }) {
  return (
    <li className="todo-item">
      <span>{task.text}</span>
      <button className="delete-btn" onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default ToDoItem;
