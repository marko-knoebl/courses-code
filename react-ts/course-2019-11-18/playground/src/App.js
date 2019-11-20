import React from 'react';
import './App.css';
import Counter from './Counter';
import Counter_ from './Counter_';
import Slideshow from './Slideshow';
import LoginForm from './LoginForm';
import TodoList from './TodoList';
import Rating from './Rating';
import ReviewList from './ReviewList';

function App() {
  const articleName = 'React';

  const hello = () => {
    alert('hello');
  };

  return (
    <div className="App">
      <h1>hello world</h1>
      <div>Ein Jahr hat {365 * 24} Stunden</div>
      <div>Heute ist der {new Date().toLocaleDateString()}.</div>
      <div>
        <a href={'https://en.wikipedia.org/wiki/' + articleName}>
          some article
        </a>
      </div>
      <div>
        <button onClick={hello}>Say Hello</button>
      </div>
      <span>abc</span> <span>def</span>
      <h2>counter</h2>
      <Counter />
      <Counter_ />
      <h2>slideshow</h2>
      <Slideshow />
      <h2>Login</h2>
      <LoginForm />
      <TodoList />
      <h2>Rating</h2>
      <Rating stars={3} />
      <h2>Reviews</h2>
      <ReviewList />
    </div>
  );
}

export default App;
