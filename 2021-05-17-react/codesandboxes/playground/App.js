import React, { useState } from "react";
import { FontSizeDemo } from "./FontSizeDemo";

const baseUrl = "https://picsum.photos/300/200?image=";
function SlideshowApp() {
  // Slideshow

  const [img, setImg] = useState(0);

  const imgUrl = `${baseUrl}${img}`;

  const buttonStyle = {
    color: "white",
    backgroundColor: "navy"
  };

  function prevImg() {
    if (img > 0) {
      setImg(img - 1);
    }
  }

  function randImg() {
    setImg(Math.floor(Math.random() * 100));
  }

  // Passwords

  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  let message;
  if (!(password1.length >= 4)) {
    message = "Pasword 1 is not long enough.";
  } else if (!(password1 === password2)) {
    message = "Passwords don't match.";
  } else {
    message = "";
  }

  // react methods

  const reactMethods = [];
  for (let method in React) {
    reactMethods.push(<li>{method}</li>);
  }

  // todo list

  const initialTodos = [
    { id: 1, title: "groceries", completed: false },
    { id: 2, title: "cooking", completed: true },
    { id: 3, title: "gardening", completed: false }
  ];
  const [todos, setTodos] = useState(initialTodos);

  return (
    <>
      <FontSizeDemo />
      <h1>Image {img}</h1>
      <div style={{ backgroundColor: "lightgrey", display: "flex" }}>
        <button style={buttonStyle} onClick={() => setImg(0)}>
          start
        </button>
        <button style={buttonStyle} onClick={prevImg}>
          prev
        </button>
        <img src={imgUrl} alt="slideshow" style={{ display: "block" }} />
        <button style={buttonStyle} onClick={() => setImg(img + 1)}>
          next
        </button>
        <button style={buttonStyle} onClick={randImg}>
          random
        </button>
      </div>
      <div>
        <label>
          password:
          <input
            value={password1}
            onChange={(event) => setPassword1(event.target.value)}
          />
        </label>
        <label>
          confirm password:
          <input
            value={password2}
            onChange={(event) => setPassword2(event.target.value)}
          />
        </label>
        <div>{message}</div>
        {password1 === password2 ? "Passwords match" : "passwords don't match"}
      </div>
      <h2>React props</h2>
      <ul>{reactMethods}</ul>
      <h2>Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}
export default SlideshowApp;

// Datenverwaltung ohne Mutationen

// Einzelnes Todo

function withCompletedToggled(todo) {
  return { ...todo, completed: !todo.completed };
}

function withTitleChanged(todo, newTitle) {
  return { ...todo, title: newTitle };
}

const todo1 = { id: 1, title: "foo", completed: false };

const todo2 = withCompletedToggled(todo1);
// { id: 1, title: 'foo', completed: true }

const todo3 = withTitleChanged(todo2, "bar");
// { id: 1, title: 'bar', completed: true}

console.log(todo1);
console.log(todo2);
console.log(todo3);

// Array von Todos

function withNewTodoAdded(todos, newTitle) {
  let maxId = 0;
  for (let todo of todos) {
    if (todo.id > maxId) {
      maxId = todo.id;
    }
  }

  return [...todos, { id: maxId + 1, title: newTitle, completed: false }];
}

function withTodoToggled(todos, id) {
  return todos.map((todo) => {
    if (todo.id === id) {
      // "abändern"
      return { ...todo, completed: !todo.completed };
    } else {
      // nicht "abändern"
      return todo;
    }
  });
}

function withCompletedTodosRemoved(todos) {
  return todos.filter((todo) => !todo.completed);
}

const todos1 = [
  { id: 1, title: "foo", completed: false },
  { id: 2, title: "bar", completed: true }
];

const todos2 = withNewTodoAdded(todos1, "baz");
console.log(todos2);

// schaltet den "completed" - state des todos mit der id 1 um
const todos3 = withTodoToggled(todos2, 1);
console.log(todos3);

const todos4 = withCompletedTodosRemoved(todos3);
console.log(todos4);
