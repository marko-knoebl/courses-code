import React, { useContext } from 'react';
import TodoInterface from './TodoInterface';
import Todo from './Todo';
import App from './App';
import TodosContext from './TodosContext';

function TodoList() {
  const todosContext = useContext(TodosContext);

  return (
    <ul>
      {todosContext.todos.map(todo => (
        <Todo
          todo={todo}
          key={todo.id}
          onToggle={todosContext.onToggle}
          onDelete={todosContext.onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
