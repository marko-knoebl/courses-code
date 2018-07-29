import React, { Component } from 'react';

import Rating from './Rating';
import NumberInput from './NumberInput';

import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import MathadorConnected from './MathadorConnected';

function double(n) {
  return 2 * n;
}

const myDouble = double;

const triple = function(n) {
  return 3 * n;
};

const quadruple = n => {
  return 4 * n;
};

const quintuple = n => 5 * n;

// DEMO: reducer

const initialBalance = 100;

const transactions = [2, -3, 10];

const newBalance = transactions.reduce((a, b) => a + b, initialBalance);

const getImgUrl = () =>
  'https://picsum.photos/200/300?image=' + Math.floor(Math.random() * 100);

const getUrlFromImgNr = imgNr => 'https://picsum.photos/200/300?image=' + imgNr;

class App extends Component {
  constructor() {
    super();
    this.imageNr = 11;
    this.getImgUrlMethod = this.getImgUrlMethod.bind(this);
    this.incrementCount = this.incrementCount.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
    this.startCountdown = this.startCountdown.bind(this);
    this.advanceTimer = this.advanceTimer.bind(this);
    this.toggleClock = this.toggleClock.bind(this);
    this.todos = [
      { id: 1, text: 'groceries', done: false },
      { id: 2, text: 'gardenting', done: true },
      { id: 3, text: 'taxes', done: false },
    ];
    this.baseNumbers = [2, 5, 8, 9];
    this.flipCoin = this.flipCoin.bind(this);
    this.state = {
      count: 0,
      imageNr: 0,
      inputContent: 0,
      remainingTime: 10,
      timerExpired: false,
      clockVisible: true,
      rating1: 4,
      rating2: 3,
    };
    this.intervalId = null;
  }

  getImgUrlMethod() {
    return 'https://picsum.photos/200/300?image=' + this.imageNr;
  }

  getCoin() {
    if (Math.random() > 0.5) {
      return 'heads';
    }
    return 'tails';
  }

  flipCoin() {
    alert(this.getCoin());
  }

  hello() {
    alert('Hello!');
  }

  incrementCount() {
    this.setState(state => ({count: state.count + 1}));
    this.setState(state => ({count: state.count + 1}));
  }

  prevImage() {
    this.setState(state => ({ imageNr: state.imageNr - 10 }));
  }

  nextImage() {
    this.setState(state => ({ imageNr: state.imageNr + 10 }));
  }

  advanceTimer() {
    if (this.state.remainingTime > 0) {
      this.setState(state => ({ remainingTime: state.remainingTime - 1 }));
    } else {
      clearInterval(this.intervalId);
      this.setState({ timerExpired: true });
    }
  }

  startCountdown() {
    this.intervalId = setInterval(this.advanceTimer, 1000);
  }

  toggleClock() {
    this.setState(state => ({ clockVisible: state.clockVisible }));
  }

  handleRatingChanged1 = newRating => {
    this.setState({ rating1: newRating });
  };

  handleRatingChanged2 = newRating => {
    this.setState({ rating2: newRating });
  };

  render() {
    const today = new Date();
    const todayString = today.toLocaleDateString();
    const roulette = Math.floor(Math.random() * 37);

    return (
      <div className={this.state.timerExpired ? 'App expired' : 'App'}>
        <div>Hallo, ich bin {2018 - 1988} Jahre alt.</div>
        <div>Heute ist der {todayString}.</div>
        <div>Roulettezahl: {roulette}</div>
        <input type="number" value={1 / 3} />
        <img src={getImgUrl()} className="raised" />
        <img src={this.getImgUrlMethod()} />
        <ul>
          {this.todos.map(todo => (
            <li key={todo.id.toString()}>{todo.text}</li>
          ))}
        </ul>
        <ul>
          {this.baseNumbers.map(n => (
            <li key={n.toString()} style={{ fontSize: n, color: 'darkgrey' }}>
              {n}
              <sup>4</sup>={n ** 4}
            </li>
          ))}
        </ul>
        <div>{this.getCoin()}</div>
        <div>{Math.random() > 0.5 ? 'heads' : 'tails'}</div>
        <button onClick={this.hello} className="raised important">
          Say Hello
        </button>
        <button onClick={this.flipCoin} id="flip-coin-btn" className="raised">
          Flip a coin
        </button>
        <button onClick={this.incrementCount}>{this.state.count}</button>
        <div>
          <img src={getUrlFromImgNr(this.state.imageNr)} /> <br />
          <button onClick={this.prevImage}>{'<'}</button>
          {this.state.imageNr}
          <button onClick={this.nextImage}>></button>
        </div>
        <input
          type="number"
          value={this.state.inputContent}
          onChange={event => {
            this.setState({ inputContent: event.target.value });
          }}
        />
        {this.state.inputContent * 10}
        <button onClick={this.startCountdown}>
          {this.state.remainingTime}
        </button>
        <Rating
          stars={this.state.rating1}
          onRatingChange={this.handleRatingChanged1}
        />
        <Rating
          stars={this.state.rating2}
          onRatingChange={this.handleRatingChanged2}
        />
        {this.state.clockVisible ? <Clock /> : null}
        <button onClick={this.toggleClock}>show / hide clock</button>
        <NumberInput
          value={this.state.rating1}
          onChange={event => {
            this.setState({ rating1: Number(event.target.value) });
          }}
        />
        <MathadorConnected />
      </div>
    );
  }
}

export default App;
