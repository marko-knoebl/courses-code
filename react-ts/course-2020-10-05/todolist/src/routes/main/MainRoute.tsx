import React, { useCallback, useContext, useState } from "react";
import { Todo } from "../../Todo";
import TodoItem from "./TodoItem";
import { Button } from "@material-ui/core";
import ThemeContext from "../../ThemeContext";
import { useForm } from "react-hook-form";

type MainRouteProps = {
  todos: Array<Todo>;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onAdd: (title: string) => void;
};

function MainRoute(props: MainRouteProps) {
  const [newTitle, setNewTitle] = useState("");
  const theme = useContext(ThemeContext);
  const { register, errors, handleSubmit, reset } = useForm();

  const handleNewTitleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setNewTitle(event.target.value);
  return (
    <div>
      <ul style={{ maxHeight: 500, overflow: "auto" }}>
        {props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            title={todo.title}
            completed={todo.completed}
            onToggle={() => {
              props.onToggle(todo.id);
            }}
            onDelete={() => {
              props.onDelete(todo.id);
            }}
          />
        ))}
      </ul>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          props.onAdd(newTitle);
          setNewTitle("");
        }}
      >
        <input
          value={newTitle}
          onChange={handleNewTitleChange}
          style={{ backgroundColor: theme === "light" ? "white" : "darkgrey" }}
        />{" "}
        <Button type="submit" color="primary" variant="contained">
          add
        </Button>
      </form>
      <form
        onSubmit={handleSubmit(() => {
          props.onAdd(newTitle);
          reset();
        })}
      >
        <input
          name="newtodo"
          ref={register({
            required: "title is required",
            minLength: { value: 3, message: "must be at least 3 chars" },
          })}
        />{" "}
        <Button type="submit" color="primary" variant="contained">
          add
        </Button>
        {errors.newtodo ? <div>{errors.newtodo.message}</div> : null}
      </form>
    </div>
  );
}

export default MainRoute;
