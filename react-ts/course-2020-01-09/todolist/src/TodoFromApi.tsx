import React, { useEffect, useState } from "react";

type TodoFromApiProps = {
  todoId: number;
};

const TodoFromApi: React.FC<TodoFromApiProps> = props => {
  const [todo, setTodo] = useState({ title: "X", completed: false, id: 0 });
  useEffect(
    // diese Funtion wird ausgeführt, wenn sich ein
    // wert im untenstehenden Array ändert
    () => {
      fetch(`https://jsonplaceholder.typicode.com/todos/${props.todoId}`)
        .then(response => response.json())
        .then(data => setTodo(data));
    },
    [props.todoId]
  );
  return (
    <div>
      <div>Todo with id {props.todoId}</div>
      {todo.title}
    </div>
  );
};

export default TodoFromApi;
