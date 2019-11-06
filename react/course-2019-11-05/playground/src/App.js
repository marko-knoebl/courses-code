import React from "react";
import Counter from "./Counter";
import "./App.css";
import Slideshow from "./Slideshow";
import NameInput from "./NameInput";

function App() {
  const now = new Date().toLocaleDateString();
  const articleName = "ReactJS";

  function hello() {
    console.log("Hello world");
  }

  return (
    <div className="App">
      <h1>Hello world</h1>
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
    </div>
  );
}

export default App;
