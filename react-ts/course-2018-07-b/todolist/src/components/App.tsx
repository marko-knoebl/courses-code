import * as React from 'react';

import { ITodo } from '../interfaces';
import './App.css';

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import About from './About';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import NotFound from './NotFound';

interface IAppState {
  maxTodoId: number;
  todos: ITodo[];
}

class App extends React.Component<{}, IAppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      maxTodoId: 2,
      todos: [
        { id: 1, text: 'gardening', done: false },
        { id: 2, text: 'shopping', done: true },
      ],
    };
  }

  public render() {
    return (
      <div className="App">
        <h1>Todo</h1>
        <a href="/about">About</a> <a href="/">Home</a>
        <br />
        <Link to="/about">About</Link> <Link to="/">Home</Link>{' '}
        <Link to="/add">Add</Link>
        <Switch>
          <Route path="/about" exact={true} component={About} />
          <Route path="/" exact={true} render={this.renderTodoList} />
          <Route path="/home" render={this.renderRedirectHome} />
          <Route path="/add" render={this.renderAddTodo} />
          <Route path="/add-todo" render={this.renderRedirectAddTodo} />
          <Route path="/" component={NotFound} />
        </Switch>
      </div>
    );
  }

  private renderAddTodo = () => <AddTodo onNewTodo={this.handleNewTodo} />;

  private renderTodoList = () => (
    <TodoList todos={this.state.todos} onCompleted={this.handleCompleted} />
  );

  private renderRedirectHome = () => <Redirect to="/" />;

  private renderRedirectAddTodo = () => <Redirect to="/add" />;

  private handleNewTodo = (newTodoText: string) => {
    this.setState(state => ({
      maxTodoId: state.maxTodoId + 1,
      todos: [
        ...state.todos,
        { id: state.maxTodoId + 1, text: newTodoText, done: false },
      ],
    }));
  };

  private handleCompleted = (todoId: number) => {
    this.setState(state => {
      const newState = {
        todos: state.todos.map(todo => {
          if (todo.id === todoId) {
            return { ...todo, done: true };
          } else {
            return todo;
          }
        }),
      };

      return newState;
    });
  };
}

export default App;
