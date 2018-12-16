import React, { Component } from 'react';
import './App.css';
import Rating from './Rating';
import PlayingCard from './PlayingCard';

import Button from '@material-ui/core/Button';
import ConnectedCounter from './ConnectedCounter';

const getImgUrl = id => `https://picsum.photos/200?image=${id}`;

class App extends Component {
  constructor() {
    super();
    // Initialisiere den Komponentenzustand (state)
    this.state = {
      now: new Date().toLocaleTimeString(),
      count: 0,
      imgIdx: 10,
      inputText: '',
      rating1: 4
    };
    // aktualisiere jede Sekunde die Uhrzeit
    setInterval(
      // diese Funktion soll jede Sekunde ausgeführt werden:
      () => {
        this.setState({ now: new Date().toLocaleTimeString() });
      },
      1000
    );
  }

  render() {
    let dateString = new Date().toLocaleDateString();
    let articleName = 'JavaScript';

    let todos = [
      { id: 1, title: 'groceries', completed: false },
      { id: 2, title: 'cooking', completed: false },
      { id: 3, title: 'gardening', completed: true }
    ];

    return (
      <div className="App">
        <ConnectedCounter />

        <p>Hallo, ich bin {2018 - 1988} Jahre alt.</p>
        {/* das ist ein Kommentar */}
        <p>Heute ist der {dateString}</p>

        <p>Es ist {this.state.now}</p>

        <a href={`https://de.wikipedia.org/wiki/${articleName}`}>
          Wikipedia-Artikel
        </a>

        <img src={getImgUrl(23)} alt="" />

        <ul>
          {todos.map(todo => (
            <li key={todo.id.toString()}>
              {todo.completed ? 'DONE: ' : 'TODO: '}
              {todo.title}
            </li>
          ))}
        </ul>

        <div>
          <button onClick={this.sayHello}>Hello</button>
        </div>

        <button onClick={this.incrementCounter}>{this.state.count}</button>

        <Button onClick={this.prevImg} variant="contained" color="primary">
          {'<'}
        </Button>
        <img src={getImgUrl(this.state.imgIdx)} alt="diashow Bild" />
        <button onClick={this.nextImg}>></button>

        <input value={this.state.inputText} onChange={this.handleChange} />

        <h2>{this.state.inputText}</h2>

        {/* <div style={{ fontSize: Math.random() * 30 }}>dynamischer Stil</div> */}

        <Rating
          stars={this.state.rating1}
          onRatingChange={this.handleRatingChange}
        />

        <PlayingCard symbol="A" />
        <PlayingCard symbol="K" color="red" />
      </div>
    );
  }

  handleRatingChange = newRating => {
    this.setState({ rating1: newRating });
  };

  prevImg = () => {
    this.setState(state => ({ imgIdx: state.imgIdx - 1 }));
  };

  nextImg = () => {
    this.setState(state => ({ imgIdx: state.imgIdx + 1 }));
  };

  sayHello = () => {
    alert('hello!');
  };

  incrementCounter = () => {
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
  };

  handleChange = event => {
    this.setState({ inputText: event.target.value });
  };
}

export default App;
