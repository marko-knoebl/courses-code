import { Todo } from "./types";

type TodoListViewProps = {
  todos: Array<Todo>;
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

function TodoListView() {

}

export default TodoListView;
