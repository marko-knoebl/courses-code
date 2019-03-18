import React, { useState, FormEvent } from 'react';
import { Redirect } from 'react-router-dom';

type AddTodoProps = {
  onAddTodo: (title: string) => void;
  onNewTodoTitleChange: (title: string) => void;
  newTodoTitle: string;
};

const AddTodo = (props: AddTodoProps) => {

  const [shouldRedirect, setShouldRedirect] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    props.onAddTodo(props.newTodoTitle);
    setShouldRedirect(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={props.newTodoTitle}
        onChange={event => {
          props.onNewTodoTitleChange(event.target.value);

          //setNewTodoTitle(event.target.value);
        }}
      />
      <button>Add</button>
      {
        shouldRedirect && <Redirect to="/" />
      }
    </form>
  );
};

export default AddTodo;
