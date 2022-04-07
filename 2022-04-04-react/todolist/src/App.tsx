import { Component } from "react";
import Stats from "./Stats";
import TodoItem from "./TodoItem";
import { fetchTodos } from "./todosApi";
import { Todo } from "./types";

interface AppProps {}
interface AppState {
  todos: Array<Todo>;
  newTitle: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      todos: [
        { id: 1, title: "foo", completed: false },
        { id: 2, title: "bar", completed: true },
      ],
      newTitle: "",
    };
  }

  addTodo = (title: string) => {
    let maxId = 0;
    for (let todo of this.state.todos) {
      maxId = Math.max(maxId, todo.id);
    }
    this.setState({
      todos: [
        ...this.state.todos,
        { id: maxId + 1, title: title, completed: false },
      ],
    });
  };

  setTodoCompleted = (id: number, completed: boolean) => {
    this.setState({
      todos: this.state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: completed } : todo
      ),
    });
  };

  removeTodo = (id: number) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };

  loadTodos = async () => {
    const todosFromApi = await fetchTodos();
    this.setState({ todos: todosFromApi });
  };

  componentDidMount() {
    this.loadTodos();
  }

  render() {
    return (
      <div className="App">
        <h1>Todo</h1>
        <button onClick={this.loadTodos}>load todos from API</button>
        <Stats todos={this.state.todos} />
        <ul>
          {this.state.todos.map((todo) => (
            <TodoItem
              todo={todo}
              onRemoveTodo={this.removeTodo}
              onChangeTodoCompleted={(id, completed) =>
                this.setTodoCompleted(id, completed)
              }
            />
          ))}
        </ul>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            this.addTodo(this.state.newTitle);
            this.setState({ newTitle: "" });
          }}
        >
          title:{" "}
          <input
            value={this.state.newTitle}
            onChange={(event) =>
              this.setState({ newTitle: event.target.value })
            }
          />
          <button>add</button>
        </form>
      </div>
    );
  }
}

export default App;
