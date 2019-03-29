import React, { Component } from 'react';
import './App.css';
import TodoListContainer from '../containers/TodoListContainer';
import AddTodoContainer from '../containers/AddTodoContainer';

type AppProps = {};

type AppState = {};

class App extends Component<AppProps, AppState> {
  render() {
    return (
      <div className="App">
        <h1>Todos</h1>
        <TodoListContainer />
        <AddTodoContainer />
      </div>
    );
  }
}

export default App;
