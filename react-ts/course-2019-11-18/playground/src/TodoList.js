import React, {useState} from 'react';

import classNames from './TodoList.module.css';

const INITIAL_TODOS = [
  {id: 1, title: 'groceries', completed: false},
  {id: 2, title: 'cooking', completed: true},
  {id: 3, title: 'gardening', completed: false},
];

function TodoList() {
  const [todos, setTodos] = useState(INITIAL_TODOS);

  return (
    <>
      <h1>Todo</h1>

      <ul className={classNames.todolist}>
        {todos.map(todo => (
          <li
            key={todo.id}
            className={
              classNames.todo +
              (todo.completed ? ' ' + classNames.completed : '')
            }>
            {todo.completed ? 'DONE' : 'TODO'}: {todo.title}
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
