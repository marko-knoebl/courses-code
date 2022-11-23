import AddTodo from "./AddTodo";
import Statistics from "./Statistics";
import TodoList from "./TodoList";
import useTodos from "./useTodos";

export default function App() {
  const todoData = useTodos();

  return (
    <div className="App">
      <h1>Todo</h1>
      <div>
        <button onClick={todoData.loadFromApi}>load data from API</button>
      </div>
      <TodoList
        todos={todoData.todos}
        onChangeCompleted={todoData.setTodoCompleted}
        onDelete={todoData.deleteTodo}
      />
      <AddTodo onAddTodo={(title) => todoData.addTodo(title)} />
      <Statistics todos={todoData.todos} />
    </div>
  );
}
