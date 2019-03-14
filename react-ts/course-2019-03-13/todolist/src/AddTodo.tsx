import React, { useState, FormEvent } from 'react';

type AddTodoProps = {
  onAddTodo: (title: string) => void;
}

const AddTodo = (props: AddTodoProps) => {
  const [newTodoTitle, setNewTodoTitle] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    props.onAddTodo(newTodoTitle);
    setNewTodoTitle('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={newTodoTitle}
        onChange={event => {
          setNewTodoTitle(event.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
};

export default AddTodo;
