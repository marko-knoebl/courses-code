
import {Todo} from "./types";

type StatsProps = {

  todos:Array<Todo> ;

}

function Stats(props: StatsProps){
  const numTodos = props.todos.length ;
  const numCompleted = props.todos.filter(todo => todo.completed ).length;
  const numIncompletedTodos  = numTodos - numCompleted ;
  return <div>
    {props.todos.length} todos . . . .  . {numCompleted} completed, {numIncompletedTodos} {" "} incomplete
  </div>;
}

export default Stats;
