import { Todo } from "./Todo";
import {useParams} from "react-router-dom"

type Props = { todos: Array<Todo> };

function Stats(props: Props) {
  const routeParams = useParams();

  const numActiveTodos = props.todos.filter((t) => !t.completed).length;

  if (routeParams.lang === "en") {
    return (
      <div>
        <h2>Statistics</h2>
        <p>number of todos: {props.todos.length}</p>
        <p>number of active todos: {numActiveTodos}</p>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Statistiken</h2>
        <p>Anzahl an Todos: {props.todos.length}</p>
        <p>Anzahl an aktiven: {numActiveTodos}</p>
      </div>
    );
  }
}
export default Stats;
