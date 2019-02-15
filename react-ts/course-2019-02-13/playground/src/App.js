import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Rating from './Rating';
import HooksDemo from './HooksDemo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      now: new Date(),
      imgId: 0,
      todos: [
        { id: 1, title: 'learn React', completed: false },
        { id: 2, title: 'groceries', completed: true },
        { id: 3, title: 'abc', completed: false }
      ],
      inputText: '',
      rating1: 4,
      rating2: 5
    };
    setInterval(() => {
      this.setState({ now: new Date() });
    }, 1000);
  }

  render() {
    return (
      <div>
        Ein Jahr hat {365 * 24} Stunden.
        <br />
        Heute ist der {`${new Date()}`}. <br />
        Uhrzeit: {this.state.now.toLocaleTimeString()}
        <div>
          <button onClick={this.prev10Img}>{'<'}</button>
          <button onClick={this.prevImg}>{'<'}</button>
          <img src={`http://picsum.photos/200?image=${this.state.imgId}`} />
          <button onClick={this.nextImg}>&gt;</button>
          <ul>
            {this.state.todos.map(todo => (
              <li key={todo.id}>{todo.title}</li>
            ))}
          </ul>
        </div>
        <input
          value={this.state.inputText}
          onChange={event => {
            this.setState({ inputText: event.target.value.toLowerCase() });
          }}
        />
        <Rating stars={this.state.rating1} />
        <Rating
          stars={this.state.rating2}
          onStarsChange={this.handleStars2Change}
        />
        <HooksDemo />
      </div>
    );
  }

  handleStars2Change = stars => {
    this.setState({ rating2: stars });
  };

  nextImg = () => {
    this.setState(oldState => ({ imgId: oldState.imgId + 1 }));
    this.setState(oldState => ({ imgId: oldState.imgId + 1 }));
  };

  prevImg = () => {
    this.changeImgId(this.state.imgId - 1);
  };

  prev10Img = () => {
    this.changeImgId(this.state.imgId - 10);
  };

  changeImgId = id => {
    if (id >= 0) {
      this.setState({ imgId: id });
    }
  };
}

export default App;
