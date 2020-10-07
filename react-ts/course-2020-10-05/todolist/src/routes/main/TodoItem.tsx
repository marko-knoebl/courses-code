import React, { memo } from "react";
import styled from "styled-components";

type TodoItemProps = {
  completed: boolean;
  title: string;
  onToggle: () => void;
  onDelete: () => void;
};

const TodoItemLi = styled.li<{ completed: boolean }>`
  margin: 5px;
  padding: 5px;
  background-color: ${(props) =>
    props.completed ? "lightgrey" : "lightcoral"};
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

const DeleteBtn = styled.button`
  background-color: lightblue;
`;

function TodoItem(props: TodoItemProps) {
  return (
    <TodoItemLi
      className={"todoitem" + (props.completed ? " completed" : "")}
      onClick={() => {
        props.onToggle();
      }}
      completed={props.completed}
    >
      {props.completed ? "DONE" : "TODO"}: {props.title}
      <DeleteBtn
        onClick={(event) => {
          event.stopPropagation();
          props.onDelete();
        }}
      >
        X
      </DeleteBtn>
    </TodoItemLi>
  );
}

export default memo(TodoItem);
