import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import About from './About';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { id: 1, title: 'groceries', completed: false },
        { id: 2, title: 'taxes', completed: true },
        { id: 3, title: 'gardening', completed: false }
      ],
      isLoading: false
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Todo</h1>
        <Link to="/">Home</Link> <br />
        <Link to="/add">Add</Link> <br />
        <Link to="/about">About</Link>
        <Switch>
          <Route path="/about" exact component={About} />
          <Route
            path="/"
            exact
            render={() => (
              <div>
                <button onClick={this.loadFromServer}>Load from server</button>
                {this.state.isLoading ? 'loading...' : ''}
                <TodoList
                  todos={this.state.todos}
                  onToggleTodo={this.handleToggleTodo}
                />
              </div>
            )}
          />
          <Route path="/home" render={() => <Redirect to="/" />} />
          <Route
            path="/add"
            exact
            render={() => <AddTodo onAddTodo={this.handleAddTodo} />}
          />
          <Route
            path="/"
            render={() => (
              <div>
                Not found <Link to="/">Go Home</Link>
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }

  loadFromServer = () => {
    this.setState({ isLoading: true });
    // lade demo-todos vom server und schreibe sie in den state
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(serverTodos => {
        const todoData = serverTodos.map(serverTodo => ({
          id: serverTodo.id,
          title: serverTodo.title,
          completed: serverTodo.completed
        }));
        this.setState({ todos: todoData, isLoading: false });
      });
  };

  handleAddTodo = newTodoTitle => {
    this.setState(oldState => ({
      todos: [
        ...oldState.todos,
        { id: oldState.todos.length + 1, title: newTodoTitle, completed: false }
      ]
    }));
  };

  handleToggleTodo = todoId => {
    // schalte das todo mit der entsprechenden id um
    this.setState(oldState => ({
      todos: oldState.todos.map(todo => {
        if (todo.id === todoId) {
          // status umschalten
          return { id: todo.id, title: todo.title, completed: !todo.completed };
        } else {
          // todo unverändert beibehalten
          return todo;
        }
      })
    }));
  };
}

export default App;
