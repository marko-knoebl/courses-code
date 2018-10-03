import React, { PureComponent } from 'react';
import './App.css';
import Rating from './Rating';
import Clock from './Clock';
import EditableText from './EditableText';

function hello() {
  alert('hello');
}

const getImgUrl = imgId => 'https://picsum.photos/200/300?image=' + imgId;

class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      todos: [
        { text: 'groceries', completed: false, id: 1 },
        { text: 'laundry', completed: true, id: 2 }
      ],
      count: 0,
      pictureId: 0,
      inputValue: 'abc',
      ratings: [4, 2]
    };
  }

  render() {
    const articleName = 'ReactJS';

    return (
      <div className="App">
        {this.state.ratings[0]}
        {this.state.ratings.map((rating, index) => (
          <Rating
            stars={rating}
            index={index}
            ratingChange={this.handleRatingChange}
          />
        ))}
        <Clock />
        <img src={getImgUrl(this.state.pictureId)} alt="slideshow" />
        <div>
          <input
            value={this.state.inputValue}
            onChange={event => {
              this.setState({ inputValue: event.target.value });
            }}
          />
          : {this.state.inputValue.toUpperCase()}
        </div>
        Hello, I'm {2018 - 1988} years old. <br />
        today is {new Date().toLocaleDateString()}.
        <a href={'https://en.wikipedia.org/wiki/' + articleName}>
          some article
        </a>
        <ul>
          {this.state.todos.map(todo => (
            <li key={todo.id.toString()}>
              {todo.completed ? 'DONE:' : 'TODO:'} {todo.text}{' '}
              {todo.completed ? 'X' : ''} {todo.completed && 'X'}
            </li>
          ))}
        </ul>
        <button onClick={hello}>say hello</button>
        <button onClick={this.clearTodos}>clear</button>
        <button onClick={this.deleteLast}>delete last</button>
        <div style={{ fontSize: Math.random() * 100 }}>random size</div>
        <button onClick={this.handleCounterClick}>{this.state.count}</button>
        <EditableText />
      </div>
    );
  }

  handleRatingChange = (ratingIndex, newRating) => {
    this.setState(oldState => {
      const newRatings = oldState.ratings.slice();
      newRatings[ratingIndex] = newRating;
      return { ratings: newRatings };
    });
  };

  clearTodos = () => {
    this.setState({ todos: [] });
  };

  deleteLast = () => {
    // if the new state depends on the old state
    this.setState(oldState => {
      // copy the array we want to modify
      const newTodos = oldState.todos.slice();
      // remove the last todo from the copy
      newTodos.pop();
      // return the new state
      return { todos: newTodos };
    });
  };

  handleCounterClick = () => {
    this.setState(oldState => ({ count: oldState.count + 1 }));
    this.setState(oldState => ({ count: oldState.count + 1 }));
  };
}

export default App;
