import React from "react";
import "./App.css";
import Rating from "./Rating";
import Card from "./Card";
import CounterContainer from "./CounterContainer";
import MathadorContainer from "./MathadorContainer";

function getImgUrl(id) {
  return `https://picsum.photos/200?image=${id}`;
}

class App extends React.Component {
  constructor() {
    // super ruft den Konstruktor der Elternklasse auf
    super();
    this.state = {
      randomNumber: Math.random(),
      timeString: new Date().toLocaleTimeString(),
      dateString: new Date().toLocaleDateString(),
      wikiLink: "JavaScript",
      imgId: 0,
      todos: [
        { id: 1, title: "groceries", completed: false },
        { id: 2, title: "cooking", completed: true },
        { id: 3, title: "gardening", completed: false }
      ],
      buttonText: "Click me!",
      count: 0,
      diashowId: 0,
      myInputText: "",
      rating1: 4,
      rating2: 3
    };
    setInterval(
      // Funktion, die das Datum im State aktualisiert
      () => {
        this.setState({
          timeString: new Date().toLocaleTimeString(),
          imgId: this.state.imgId + 1
        });
      },
      1000
    );
  }

  render() {
    return (
      <div className="App">
        Zufallszahl: {this.state.randomNumber} <br />
        Heute ist der {this.state.dateString} <br />
        <div>Uhrzeit: {this.state.timeString}</div>
        <div>
          <a href={`https://de.wikipedia.org/wiki/${this.state.wikiLink}`}>
            Wikipedia article
          </a>
        </div>
        <img src={getImgUrl(this.state.imgId)} alt="" />
        <img src={getImgUrl(100)} alt="" />
        <div>todos: {JSON.stringify(this.state.todos)}</div>
        <ul>
          {this.state.todos.map(todo => (
            <li
              key={todo.id.toString()}
              style={{
                color: todo.completed ? "grey" : "black",
                textDecoration: todo.completed ? "line-through" : "none"
              }}
              className="todo"
            >
              {todo.completed ? "DONE: " : "TODO: "}
              {todo.title}
            </li>
          ))}
        </ul>
        <button
          onClick={() => {
            this.sayHello(1);
          }}
        >
          {this.state.buttonText}
        </button>
        <br />
        <button onClick={this.increment}>{this.state.count}</button>
        <div>
          <button onClick={this.prevImg}>{"<"}</button>
          <img src={getImgUrl(this.state.diashowId)} alt="diashow" />
          <button onClick={this.nextImg}>></button>
        </div>
        <input
          value={this.state.myInputText}
          onChange={this.onMyInputTextChange}
        />
        <div>{this.state.myInputText.toUpperCase()}</div>
        <Rating
          stars={this.state.rating1}
          onStarsChange={this.handleStarsChange}
          interactive={true}
        />
        <Rating stars={this.state.rating2} interactive={false} />
        <Card color="r" value="K" />
        <Card color="b" value="8" />
        <CounterContainer />
        <MathadorContainer />
      </div>
    );
  }

  handleStarsChange = newValue => {
    this.setState({ rating1: newValue });
  };

  sayHello = () => {
    this.setState({ buttonText: "Hello!" });
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  prevImg = () => {
    if (this.state.diashowId > 0) {
      this.setState({ diashowId: this.state.diashowId - 1 });
    }
  };

  nextImg = () => {
    this.setState({ diashowId: this.state.diashowId + 1 });
  };

  onMyInputTextChange = event => {
    // "speichere" den geänderten wert im state
    this.setState({ myInputText: event.target.value });
  };
}

export default App;
