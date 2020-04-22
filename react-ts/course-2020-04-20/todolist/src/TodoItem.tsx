import React, { useContext } from "react";
import styled from "styled-components";
import { Todo } from "./Todo";
import ThemeContext, { Theme } from "./ThemeContext";

type TodoItemProps = {
  todo: Todo;
  onToggle?: (id: number) => void;
  onDelete: (id: number) => void;
};

type TodoItemStyledProps = {
  completed: boolean;
  theme: Theme;
};

const TodoItemStyled = styled.li`
  padding: 8px;
  background-color: ${(props: TodoItemStyledProps) => {
    if (props.theme === "light") {
      return props.completed ? "lightgrey" : "lightsalmon";
    } else {
      return props.completed ? "darkgrey" : "darkred";
    }
  }};
  text-decoration: ${(props: TodoItemStyledProps) =>
    props.completed ? "line-through" : "none"};
`;

function TodoItem(props: TodoItemProps) {
  const theme = useContext(ThemeContext);
  return (
    <TodoItemStyled completed={props.todo.completed} theme={theme}>
      <span
        onClick={() => {
          if (props.onToggle) {
            props.onToggle(props.todo.id);
          }
        }}
      >
        {props.todo.completed ? "DONE: " : "TODO: "}
        {props.todo.title}
        {theme}
      </span>
      <button
        onClick={() => {
          props.onDelete(props.todo.id);
        }}
      >
        X
      </button>
    </TodoItemStyled>
  );
}

export default TodoItem;
