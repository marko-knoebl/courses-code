import React, { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import Slideshow from "./Slideshow";
import Rating from "./Rating";

function App() {
  const dateString = new Date().toLocaleDateString();

  const articleName = "ReactJS";

  let coinText = "Kopf";
  if (Math.random() > 0.5) {
    coinText = "Zahl";
  }

  const hello = () => {
    console.log("Hello");
  };

  const [username, setUsername] = useState("abc");
  const [password, setPassword] = useState("");

  const [product1Rating, setProduct1Rating] = useState(3);
  const [product2Rating, setProduct2Rating] = useState(4);

  return (
    <div className="App">
      <h1>playground</h1>
      <div>Ein Jahr hat {365 * 24} Stunden</div>
      <div>Heute ist der {dateString}</div>
      <div>Münzwurf: {coinText}</div>
      <div>Münzwurf: {Math.random() > 0.5 ? "Kopf" : "Zahl"}</div>
      <div>
        <a href={"https://en.wikipedia.org/wiki/" + articleName}>
          some article
        </a>
      </div>
      <div>
        <button onDoubleClick={hello}>Say Hello</button>
      </div>
      <Counter />
      <h3>Slideshow</h3>
      <Slideshow />
      <h3>Inputs</h3>
      Username:{" "}
      <input
        value={username}
        onChange={event => setUsername(event.target.value)}
      />
      <button onClick={() => setUsername("")}>clear</button>
      <h4>
        {username.toUpperCase()}(length: {username.length})
      </h4>
      <h3>Products</h3>
      <p>
        product 1:{" "}
        <Rating
          stars={product1Rating}
          onStarsChange={newRating => {
            setProduct1Rating(newRating);
          }}
        />
      </p>
      <p>
        product 2:{" "}
        <Rating
          stars={product2Rating}
          onStarsChange={newRating => {
            setProduct2Rating(newRating);
          }}
        />
      </p>
    </div>
  );
}

export default App;
