import React, { useState } from 'react';
import Diashow from './Diashow';
import Rating from './Rating';
import DocumentTitle from './DocumentTitle';
import DocumentTitleHooks from './DocumentTitleHooks';

const App = () => {
  const [count, setCount] = useState(0);
  const [coin, setCoin] = useState(Math.random() < 0.5 ? 'Kopf' : 'Zahl');

  const [todos, setTodos] = useState([
    { id: 1, title: 'groceries', completed: false },
    { id: 2, title: 'gardening', completed: true },
    { id: 3, title: 'abc', completed: false }
  ]);

  const [inputText, setInputText] = useState('');
  const [rating1, setRating1] = useState(3);

  return (
    <div>
      <DocumentTitleHooks>{`rating: ${rating1}`}</DocumentTitleHooks>
      Ein Jahr hat {365 * 24} Stunden.
      <div>Heute ist der {new Date().toLocaleDateString()}</div>
      <div>{coin}</div>
      <button
        onClick={() => {
          console.log('hello');
        }}
      >
        say hello
      </button>
      <br />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        reset
      </button>
      <Diashow />
      <h1>Todo</h1>
      {todos.map(todoData => (
        <div key={todoData.id}>{todoData.title}</div>
      ))}
      <h1>Inputs</h1>
      <input
        value={inputText}
        onChange={event => {
          // wir übernehmen den geänderten Wert in unseren state
          setInputText(event.target.value);
        }}
      />
      <h1>Rating</h1>
      <Rating
        stars={rating1}
        onStarsChange={stars => {
          setRating1(stars);
        }}
      />
    </div>
  );
};

export default App;
