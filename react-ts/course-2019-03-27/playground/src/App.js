import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Slideshow from './Slideshow';
import TodoList from './TodoList';
import Rating from './Rating';
import Button from '@material-ui/core/Button';
import DocumentTitle from './DocumentTitle';

class App extends Component {
  getImgUrl = id => 'https://picsum.photos/200?image=' + id.toString();

  constructor() {
    super();
    this.state = {
      inputText1: '',
      rating1: 3
    };
  }

  // getImgUrl(id) {
  //   return "https://picsum.photos/200?image=" + id.toString()
  // }

  handleStarsChange = newStars => {
    this.setState({ rating1: newStars });
  };

  render() {
    return (
      <div>
        <DocumentTitle>{this.state.inputText1 || '...empty...'}</DocumentTitle>
        Hello world
        <br />A year has {365 * 24} hours
        <div>{new Date().toLocaleDateString()}</div>
        <img src={this.getImgUrl(10)} alt="" />
        <br />
        <Button
          onClick={() => {
            console.log('button clicked');
            alert('button clicked');
          }}
          variant="contained"
          color="primary"
        >
          click me
        </Button>
        <Counter />
        <h2>slideshow</h2>
        <Slideshow />
        <h2>todo list</h2>
        <TodoList />
        <h2>inputs</h2>
        <input
          value={this.state.inputText1}
          onChange={changeEvent => {
            // capture the new content in the state
            this.setState({ inputText1: changeEvent.target.value });
          }}
        />
        <h2>Rating</h2>
        <Rating
          stars={this.state.rating1}
          onStarsChange={this.handleStarsChange}
        />
      </div>
    );
  }
}

export default App;
