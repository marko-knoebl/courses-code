import React, { Component } from "react";
import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, title: "groceries", completed: false },
        { id: 2, title: "cooking", completed: true },
        { id: 3, title: "gardening", completed: false }
      ]
    };
  }

  render() {
    return (
      <div>
        <h2>Todo</h2>
        <ul>
          {this.state.todos.map(todo => (
            <li key={todo.id} className="todo">
              {todo.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
