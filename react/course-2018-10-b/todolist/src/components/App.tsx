import * as React from 'react';
import './App.css';

import TodoList from './TodoList';
import AddTodo from './AddTodo';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <AppBar position="sticky">
          <Typography variant="h6">Todo</Typography>
        </AppBar>
        <TodoList />
        <AddTodo />
      </div>
    );
  }
}

export default App;
