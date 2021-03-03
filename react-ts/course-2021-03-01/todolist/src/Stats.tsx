import { useParams } from "react-router-dom";
import { useContext } from "react";
import TodosContext from "./TodosContext";

function Stats() {
  const routeParams = useParams();

  const context = useContext(TodosContext);

  const numActiveTodos = context.todos.filter((t) => !t.completed).length;

  if (routeParams.lang === "en") {
    return (
      <div>
        <h2>Statistics</h2>
        <p>number of todos: {context.todos.length}</p>
        <p>number of active todos: {numActiveTodos}</p>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Statistiken</h2>
        <p>Anzahl an Todos: {context.todos.length}</p>
        <p>Anzahl an aktiven: {numActiveTodos}</p>
      </div>
    );
  }
}
export default Stats;
