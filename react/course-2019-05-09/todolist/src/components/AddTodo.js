import React from "react";

import { Button, TextField } from "@material-ui/core";

const AddTodo = props => {
  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        props.onAddTodo(props.newTodoTitle);
      }}
    >
      <TextField
        id="standard-name"
        label="Todo..."
        value={props.newTodoTitle}
        onChange={event => {
          props.onNewTodoTitleChange(event.target.value);
        }}
        margin="none"
      />

      <Button type="submit" variant="contained" color="primary">
        add
      </Button>
    </form>
  );
};

export default AddTodo;
