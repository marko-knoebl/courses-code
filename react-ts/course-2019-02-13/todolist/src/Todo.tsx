import React from 'react';
import TodoInterface from './TodoInterface';
import './Todo.css';
import App from './App';

interface TodoProps {
  todo: TodoInterface;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

function Todo(props: TodoProps) {
  return (
    <li
      className={props.todo.completed ? 'todo completed' : 'todo'}
      onClick={() => {
        props.onToggle(props.todo.id);
      }}
    >
      <input type="checkbox" checked={props.todo.completed} readOnly={true} />
      {props.todo.completed ? 'DONE: ' : 'TODO: '}{props.todo.title}
      <button
        onClick={() => {
          props.onDelete(props.todo.id);
        }}
      >
        X
      </button>
    </li>
  );
}

export default Todo;
