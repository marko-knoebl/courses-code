import * as React from 'react';
import ITodo from 'src/ITodo';

import { connect } from 'react-redux';

import Todo from './Todo';
import { toggleTodo, fetchTodos } from 'src/redux/tododata/actions';
import { ThunkDispatch } from 'redux-thunk';
import { ITodoAction } from 'src/redux/tododata/interfaces';

interface ITodoListProps {
  todos: ITodo[];
  toggle: (id: number) => void;
  fetchTodos: () => void;
}

class TodoList extends React.Component<ITodoListProps> {
  public render() {
    return (
      <div className="todolist">
        {this.props.todos.map((todo: ITodo) => (
          <Todo
            todo={todo}
            key={todo.id.toString()}
            toggle={this.props.toggle}
          />
        ))}
      </div>
    );
  }

  public componentDidMount = () => {
    this.props.fetchTodos();
  };
}

const mapStateToProps = (state: any) => ({
  todos: state.tododata.todos
});
const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, void, ITodoAction>
) => ({
  toggle: (id: number) => {
    dispatch(toggleTodo(id));
  },
  fetchTodos: () => {
    dispatch(fetchTodos());
  }
});

const ConnectedTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default ConnectedTodoList;
