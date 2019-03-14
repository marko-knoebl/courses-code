import React, { Component } from 'react';
import './App.css';
import TodoType from './TodoType';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

type AppProps = {};
type AppState = {
  todos: Array<TodoType>;
  isFetching: boolean;
};

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      todos: [
        { id: 1, title: 'groceries', completed: false },
        { id: 2, title: 'gardening', completed: true },
        { id: 3, title: 'abc', completed: false }
      ],
      isFetching: false
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Todo</h1>
        <TodoList todos={this.state.todos} onCompleted={this.handleCompleted} />
        <AddTodo
          onAddTodo={newTodoTitle => {
            this.setState({
              todos: [
                ...this.state.todos,
                {
                  id:
                    this.state.todos.reduce(
                      (id, todo) => Math.max(id, todo.id),
                      0
                    ) + 1,
                  title: newTodoTitle,
                  completed: false
                }
              ]
            });
          }}
        />
        <button onClick={this.fetchTodos}>fetch from Server</button>
        {this.state.isFetching && <span>Fetching...</span>}
      </div>
    );
  }

  handleCompleted = (id: number) => {
    const newTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: true };
      }
      return todo;
    });
    this.setState({ todos: newTodos });
  };

  fetchTodos = () => {
    this.setState({ isFetching: true });
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(serverTodos => {
        this.setState({
          todos: serverTodos.map(
            (serverTodo: TodoType & { userId: number }) => {
              const { userId, ...todo } = serverTodo;
              return todo;
            }
          ),
          isFetching: false
        });
      });
  };
}

export default App;
