import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

type TodoItemProps = {
  title: string;
  completed: boolean;
  onDelete: () => void;
  onToggle: () => void;
};

const TodoItem: React.FC<TodoItemProps> = props => {
  const theme = useContext(ThemeContext);
  return (
    <li
      onClick={() => props.onToggle()}
      className={props.completed ? "todoitem completed" : "todoitem"}
    >
      {props.completed ? "DONE: " : "TODO: "}
      {props.title}
      <button
        onClick={event => {
          // stop "event bubbling" to the parent element
          event.stopPropagation();
          props.onDelete();
        }}
        style={
          theme === "fancy"
            ? { textDecoration: "underline", backgroundColor: "pink" }
            : {}
        }
      >
        X
      </button>
    </li>
  );
};

export default TodoItem;
