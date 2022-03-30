import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Todo } from "./types";
import { useState } from "react";
import Stats from "./Stats";
import TodoItem from "./TodoItem";
import {fetchTodos} from "./todosApi";
import {useEffect} from "react";

function App() {
//managing todos

  const [todos, setTodos] = useState<Array<Todo>>([
    { id: 1, title: "foo", completed: false },
    { id: 2, title: "bar", completed: true },
  ]);

  const [newTitle, setNewTitle]=useState("");

  function addTodo(title:string): void{

    let maxId = 0;
    for(let todo of todos){
      maxId = Math.max(maxId, todo.id);
    }
    
    const newTodo : Todo = {id: maxId +1, title: title, completed: false};

    setTodos([...todos, newTodo])
  }

  function deleteTodo(id: number){ 

    const newTodos = todos.filter((todo) => todo.id!==id);

    setTodos(newTodos);

  }

  function setTodoCompleted(id:number, completed:boolean): void {
    setTodos(todos.map((todo) => 
    todo.id === id ? {...todo, completed:completed} : todo
    )
    );
  }

  //API communication
async function loadTodos(){

const todos = await fetchTodos();
setTodos(todos);
  }

useEffect(() => {
    loadTodos();
  },[]);

  //add todo form

  return (
    <div className="App">
      <h1>Todo</h1>
      <div>
        <button onClick={()=>loadTodos()}>load from API</button>
      </div>

      <ul>
      {todos.map((todo) => (
        <TodoItem 
        todo={todo} 
        onDelete={(id)=>deleteTodo(id)}
        onCompletedChange ={(id,completed) => setTodoCompleted(id, completed)}
        />
      ))}
      </ul>
      <form onSubmit={(event) => {
        event.preventDefault();
        addTodo(newTitle)
        setNewTitle("")
      }}>
        <input
        value ={newTitle}
        onChange ={(event) => setNewTitle(event.target.value)}
        /> {" "}
        <button>add new todo</button>
      </form>

      <Stats todos={todos}/>
     
    </div>
  );
}

export default App;