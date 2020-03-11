import React from "react";

type TodoItemProps = {
  title: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
};

function TodoItem(props: TodoItemProps) {
  let style: { textDecorationLine?: string; color?: string } = {};
  if (props.completed) {
    style = { textDecorationLine: "line-through", color: "lightgrey" };
  }
  return (
    <div
      onClick={() => {
        props.onToggle();
      }}
      style={style}
    >
      {props.completed ? "DONE" : "TODO"}: {props.title}
      <button
        onClick={event => {
          event.stopPropagation();
          props.onDelete();
        }}
      >
        X
      </button>
    </div>
  );
}

export default TodoItem;
