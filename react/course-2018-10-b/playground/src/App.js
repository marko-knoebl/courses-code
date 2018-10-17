import React, { Component } from 'react';
import './App.css';

import Rating from './Rating';
import Diashow from './Diashow';
import Clock from './Clock';
import Counter from './Counter';
import Mathador from './Mathador';

const getImgUrl = () =>
  'https://picsum.photos/200/200?image=' + Math.floor(Math.random() * 100);

class App extends Component {
  constructor() {
    super();
    this.state = {
      wikiArticle: 'JavaScript',
      imgUrl: getImgUrl(),
      rouletteNumber: Math.floor(Math.random() * 37),
      todos: [
        { title: 'shopping', completed: false, id: 1 },
        { title: 'taxes', completed: true, id: 2 },
        { title: 'cleaning', completed: false, id: 3 }
      ],
      count: 0,
      imgId: 0,
      inputText: 'abc',
      stars: 3
    };
  }

  hello = () => {
    alert(
      `Hello! The roulette number is: ${this.state.rouletteNumber.toString()}`
    );
  };

  countIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // der Browser / React übergibt uns das event als
  // Funktionsparameter
  handleChange = event => {
    this.setState({ inputText: event.target.value.toUpperCase() });
  };

  render() {
    const today = new Date().toLocaleDateString();

    return (
      <div className="App">
        <h2>Diashow</h2>
        <Diashow numPics={5} />
        <Clock />
        <Counter />
        <Mathador />
        Hallo, ich bin {2018 - 1988} Jahr alt. <br /> <br />
        Heute ist der {today}. <br />
        Roulettezahl: {this.state.rouletteNumber} <br />
        <Clock />
        <p>
          Wikipedia:{' '}
          <a href={'https://de.wikipedia.org/wiki/' + this.state.wikiArticle}>
            {this.state.wikiArticle}
          </a>
        </p>
        <p>
          <img src={this.state.imgUrl} alt="random img" />
        </p>
        <ul>
          {this.state.todos.map(todo => (
            <li key={todo.id.toString()}>{todo.title}</li>
          ))}
        </ul>
        <button
          onClick={this.hello}
          style={{ color: 'blue', fontSize: 10 * 10 }}
        >
          Hello
        </button>{' '}
        <br />
        <button onClick={this.countIncrement}>{this.state.count}</button>
        <input value={this.state.inputText} onChange={this.handleChange} />
        <div>{this.state.inputText.toUpperCase()}</div>
        <div>
          <h2>Rating</h2>
          <Rating
            stars={this.state.stars}
            onStarsChange={newStars => {
              this.setState({ stars: newStars });
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
