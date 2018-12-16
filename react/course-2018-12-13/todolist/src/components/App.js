import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import { Route, Link } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { id: 1, title: 'groceries', completed: false },
        { id: 2, title: 'cooking', completed: false },
        { id: 3, title: 'gardening', completed: true }
      ],
      isLoading: false,
      errorMessage: null
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Todo</h1>

        <Link to="/">Home</Link>
        <Link to="/add">Add</Link>

        <div>
          <button onClick={this.handleRequestTodos}>
            load Todos from server
          </button>
          {this.state.isLoading ? <div>loading...</div> : null}
          <div>{this.state.errorMessage}</div>
        </div>

        <Route
          path="/"
          exact
          render={props => (
            <TodoList
              todos={this.state.todos}
              onCompleted={this.handleCompleted}
            />
          )}
        />

        <Route
          path="/add"
          exact
          render={props => <AddTodo onNewTodo={this.handleNewTodo} />}
        />
      </div>
    );
  }

  sendStateToServer = () => {
    this.setState({
      isUploading: true
    });
    this.uploadEverything().then(() => {
      this.setState({isUploading: false})
    })
  }

  handleNewTodo = newTodoTitle => {
    this.setState(oldState => {
      return {
        todos: [
          ...oldState.todos,
          {
            id: oldState.todos[oldState.todos.length - 1].id + 1,
            title: newTodoTitle,
            completed: false
          }
        ]
      };
    });
  };

  handleCompleted = id => {
    this.setState(oldState => {
      return {
        todos: oldState.todos.map(todo => ({
          ...todo,
          completed: todo.id === id ? !todo.completed : todo.completed
        }))
      };
    });
  };

  handleRequestTodos = () => {
    this.setState({ isLoading: true });
    fetch('https://jsonplaceholder.typicode.co')
      .then(response => response.json())
      .then(
        todos => {
          console.log(todos)
          this.setState({ todos: todos, isLoading: false });
        },
        error => {
          this.setState({ errorMessage: 'invalid JSON', isLoading: false });
        }
      )
      .catch(error => {
        this.setState({
          errorMessage: `general error: ${error}`,
          isLoading: false
        });
      });
  };
}

export default App;
