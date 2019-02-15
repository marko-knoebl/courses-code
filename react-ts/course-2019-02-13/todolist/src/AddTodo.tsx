import React, { useState } from 'react';
import { Redirect } from 'react-router';

interface AddTodoProps {
  onAdd: (newTodoTitle: string) => void;
}

const AddTodo = (props: AddTodoProps) => {
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [shouldRedirect, setShouldRedirect] = useState(false);

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        props.onAdd(newTodoTitle);
        setNewTodoTitle('');
        setShouldRedirect(true);
      }}
    >
      <input
        value={newTodoTitle}
        onChange={event => {
          setNewTodoTitle(event.target.value);
        }}
      />
      <button>Add</button>
      {shouldRedirect && <Redirect to="/" />}
    </form>
  );
};

export default AddTodo;
