import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <button onClick={this.increment}>{this.state.count}</button>
      </div>
    );
  }

  increment = () => {
    this.setState(oldState => ({ count: oldState.count + 1 }));
    // zwei Aufrufe von setState, wobei der neue Zustand
    // vom alten abhängt -> "funktionale" Variante von setState
    this.setState(oldState => ({ count: oldState.count + 1 }));
  };
}

export default App;
