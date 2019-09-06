import React from "react";
import "./TodoItem.css";

function TodoItem({ todo, onToggle }) {
  const prefix = todo.completed ? "DONE: " : "TODO: ";
  const textContent = prefix + todo.title;

  const handleClick = () => {
    onToggle(todo.id);
  };

  if (todo.completed) {
    return (
      <div className="todo" onClick={handleClick}>
        <del>{textContent}</del>
      </div>
    );
  } else {
    return (
      <div className="todo" onClick={handleClick}>
        {textContent}
      </div>
    );
  }
}

export default TodoItem;
