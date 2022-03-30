import {Todo} from "./types";
import {Component, ReactNode} from "react";
//import {Button} from "react-bootstrap";

type TodoItemProps = {

  todo: Todo ;
  onDelete: (id: number) => void ;
  onCompletedChange : (id: number, newValue: boolean ) => void ;  

}
type TodoItemState = {}

class TodoItem extends Component<TodoItemProps, TodoItemState> {

render():ReactNode {

return <li key={this.props.todo.id}>
<input type="checkbox" checked={this.props.todo.completed} onChange={(event) => this.props.onCompletedChange(this.props.todo.id, event.target.checked) }/>
{this.props.todo.id}
{"  "}
{this.props.todo.title}
{"  "}
{this.props.todo.completed.toString()}{" "}
<button onClick ={() => this.props.onDelete(this.props.todo.id)}>delete</button>
</li>

}

}
export default TodoItem ;
