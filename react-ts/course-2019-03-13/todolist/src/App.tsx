import React, { Component } from 'react';
import './App.css';
import TodoListContainer from './TodoListContainer';
import AddTodoContainer from './AddTodoContainer';
import FetchTodosContainer from './FetchTodosContainer';
import { Route, Redirect, Link, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todo</h1>

        <div>
          <Link to="/">Home</Link> <Link to="/add">Add</Link>
        </div>

        <Switch>
          <Route
            path="/"
            exact={true}
            render={() => (
              <>
                <TodoListContainer />
                <FetchTodosContainer />
              </>
            )}
          />
          <Route path="/add" exact={true} component={AddTodoContainer} />
          <Route path="/" render={() => <Redirect to="/" />} />
        </Switch>
      </div>
    );
  }
}

export default App;
