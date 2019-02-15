import React, { useReducer } from 'react';
import './App.css';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import { Route, Link, Switch } from 'react-router-dom';
import { About } from './About';
import TodosContext from './TodosContext';
import todosReducer from './todosReducer';

const initialTodos = [
  { id: 1, title: 'learn React', completed: false },
  { id: 2, title: 'groceries', completed: true },
  { id: 3, title: 'abc', completed: false }
];

const App = () => {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);

  return (
    <div className="App">
      <TodosContext.Provider
        value={{
          todos: todos,
          onAdd: newTodoTitle => {
            dispatch({ type: 'ADD_TODO', payload: newTodoTitle });
          },
          onDelete: id => {
            dispatch({ type: 'DELETE_TODO', payload: id });
          },
          onToggle: id => {
            dispatch({ type: 'TOGGLE_TODO', payload: id });
          }
        }}
      >
        <h1>Todo</h1>
        <Link to="/">Home</Link> <Link to="/add">Add</Link>{' '}
        <Link to="/about">About</Link>
        <Switch>
          <Route path="/" exact={true} component={TodoList} />
          <Route
            path="/add"
            exact={true}
            render={props => (
              <AddTodo
                onAdd={newTodoTitle => {
                  dispatch({ type: 'ADD_TODO', payload: newTodoTitle });
                }}
              />
            )}
          />
          <Route path="/about" exact={true} component={About} />
          <Route path="/" render={() => <div>not found</div>} />
        </Switch>
      </TodosContext.Provider>
    </div>
  );
};

export default App;
