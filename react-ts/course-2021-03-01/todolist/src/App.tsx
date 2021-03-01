import { useState } from "react";

/*
DONE: anzeige von <li>-Elementen, die todos beinhalten (via .map)
DONE: styling der <li>-Elemente
  - text-decoration: line-through
  - background-color: ...
TODO: hinzufügen eines neuen Todos
TODO: umschalten eines Todos (durch klick)
TODO: statistiken anzeigen
*/

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<Array<Todo>>([
    { id: 1, title: "groceries", completed: false },
    { id: 2, title: "taxes", completed: true },
  ]);
  const [newTitle, setNewTitle] = useState("");

  return (
    <div className="App">
      <h1>Todo</h1>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              padding: "0.5em",
              backgroundColor: todo.completed ? "lightgrey" : "lightblue",
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={(event) => {
                // behalte die meisten Einträge in todos bei,
                // ändere einen Eintrag ab
                const newTodos = todos.map((t) => {
                  if (t.id === todo.id) {
                    // ändern
                    return { ...t, completed: !t.completed };
                  } else {
                    // unverändert beibehalten
                    return t;
                  }
                });
                setTodos(newTodos);
              }}
            />
            {todo.completed ? "DONE: " : "TODO: "}
            {todo.title}
          </li>
        ))}
      </ul>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const newTodos = [
            ...todos,
            {
              id: todos.length + 1,
              title: newTitle,
              completed: false,
            },
          ];
          setTodos(newTodos);
          setNewTitle("");
        }}
      >
        <input
          value={newTitle}
          onChange={(event) => {
            setNewTitle(event.target.value);
          }}
        />
        <button type="submit">add</button>
      </form>
    </div>
  );
}

export default App;
