import React, {memo} from 'react';
import TodoType from './TodoType';

import './TodoItem.css';

type TodoItemProps = {
  todo: TodoType;
  onCompleted: () => void;
};

const TodoItem = (props: TodoItemProps) => {
  return (
    <div
      className={props.todo.completed ? 'todo completed' : 'todo'}
      onClick={() => {
        props.onCompleted();
      }}
    >
      {props.todo.completed ? 'DONE:' : 'TODO:'} {props.todo.title}
    </div>
  );
};

export default memo(TodoItem);
