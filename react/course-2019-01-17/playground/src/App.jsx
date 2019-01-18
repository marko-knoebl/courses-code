import React, { Component } from 'react';
import './App.css';
import Rating from './Rating';
import ToggleButton from './ToggleButton';
import CountContainer from './CountContainer';

const getImgUrl = id => `https://picsum.photos/200?image=${id}`;

class App extends Component {
  constructor() {
    super();
    // intialisiere den state
    this.state = {
      time: new Date().toLocaleTimeString(),
      rouletteNumber: Math.floor(Math.random() * 37),
      imgId: 10,
      count: 0,
      todos: [
        { id: 1, title: 'groceries', completed: false },
        { id: 2, title: 'taxes', completed: true },
        { id: 3, title: 'gardening', completed: false }
      ],
      inputText: '',
      rating1: 4,
      button1: true
    };

    // aktualisiere die Uhrzeit jede Sekunde
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <div>
          Ein Jahr hat {365 * 24} Stunden. <br />
          Heute ist der {new Date().toLocaleDateString()}. <br />
          <span style={{ fontSize: this.state.rouletteNumber }}>
            Roulettezahl: {this.state.rouletteNumber}
          </span>
          <br />
          Uhrzeit: {this.state.time}
        </div>
        <div>
          <button onClick={this.prevImg}>&lt;</button>
          <img src={getImgUrl(this.state.imgId)} alt="" />
          <button onClick={this.nextImg}>></button>
        </div>
        <button onClick={this.incrementCount}>{this.state.count}</button>
        <h3>Todo</h3>
        <ul>
          {this.state.todos.map(todo => (
            <li
              key={todo.id.toString()}
              className={todo.completed ? 'todo completed' : 'todo'}
            >
              {todo.title}
            </li>
          ))}
        </ul>
        <input value={this.state.inputText} onChange={this.handleInputChange} />
        {this.state.inputText.toUpperCase()} ({this.state.inputText.length})
        <Rating
          stars={this.state.rating1}
          onStarsChange={this.handleStarsChange}
        />
        <CountContainer />
        <ToggleButton on={this.state.button1} onToggle={this.handleToggle} />
        <CountContainer />
      </div>
    );
  }

  nextImg = () => {
    this.setState(oldState => ({ imgId: oldState.imgId + 1 }));
  };

  prevImg = () => {
    if (this.state.imgId > 0) {
      this.setState(oldState => ({ imgId: oldState.imgId - 1 }));
    }
  };

  incrementCount = () => {
    // "funktionale" Variante von setState: der neue State hängt vom alten State ab.
    this.setState(
      // Funktion, die den alten state in den neuen State überführt
      oldState => ({ count: oldState.count + 1 })
    );
  };

  handleInputChange = event => {
    // neuen Wert des Eingabefeldes in den State übernehmen
    this.setState({ inputText: event.target.value });
  };

  handleToggle = () => {
    this.setState(oldState => ({ button1: !oldState.button1 }));
  };

  handleStarsChange = newRating => {
    this.setState({ rating1: newRating });
  };
}

export default App;
