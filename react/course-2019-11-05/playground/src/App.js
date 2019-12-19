import React, { useState } from "react";
import Counter from "./Counter";
import "./App.css";
import Slideshow from "./Slideshow";
import NameInput from "./NameInput";
import TodoList from "./TodoList";
import Rating from "./Rating";
import ToggleButton from "./ToggleButton";
import ColorPicker from "./ColorPicker";
import SpaceX from "./SpaceX";

function rgbStringFromValues(values) {
  return `rgb(${values[0]} ,${values[1]} ,${values[2]})`;
}

function App() {
  const now = new Date().toLocaleDateString();
  const articleName = "ReactJS";

  const [product1Rating, setProduct1Rating] = useState(3);
  const [product2Rating, setProduct2Rating] = useState(4);
  const [option1, setOption1] = useState(true);
  const [color, setColor] = useState([200, 200, 50]);

  function hello() {
    console.log("Hello world");
  }

  function handleProduct2RatingChange(newProduct2Rating) {
    setProduct2Rating(newProduct2Rating);
  }

  return (
    <div className="App">
      <h1 style={{ color: rgbStringFromValues(color) }}>Hello world</h1>
      <div>Ein Jahr hat {365 * 24} Stunden</div>
      <div>Heute ist der {now}</div>
      <div>
        <a href={"https://en.wikipedia.org/wiki/" + articleName}>
          some article
        </a>
      </div>
      <div>
        <button onClick={hello}>Say Hello</button>
      </div>
      <Counter />
      <Counter />
      <Slideshow />
      <NameInput />
      <TodoList />
      <div style={{ fontSize: "3em" }}>
        <Rating stars={product1Rating} onStarsChange={setProduct1Rating} />
        <Rating
          stars={product2Rating}
          onStarsChange={handleProduct2RatingChange}
        />
        <div>average rating: {(product1Rating + product2Rating) / 2}</div>
      </div>
      <div>
        <ToggleButton active={option1} onToggle={setOption1} />
        {option1 && <h2>hello</h2>}
      </div>
      <ColorPicker value={color} onChange={newColor => setColor(newColor)} />
      <SpaceX />
    </div>
  );
}

export default App;
