import React, { Component } from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';

import './App.css';

import TodoList from './home/TodoListContainer';
import NewTodo from './new_todo/NewTodoContainer';
import ServerInteractions from './home/ServerInteractionsContainer';

const HomeComponent = () => (
  <div>
    <TodoList />
    <ServerInteractions />
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar position="static">
          <h1>Todo</h1>
        </AppBar>
        <div>
          <Link to="/">home</Link> <Link to="/add">add</Link>
        </div>
        <Switch>
          <Route path="/" component={HomeComponent} exact />
          <Route path="/add" component={NewTodo} />
          <Route path="/" render={() => <Redirect to="/" />} />
        </Switch>
      </div>
    );
  }
}

export default App;
