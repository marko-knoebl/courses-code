import React, { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import Slideshow from "./Slideshow";

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
    </div>
  );
}

export default App;
