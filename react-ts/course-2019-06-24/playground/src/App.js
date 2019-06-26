import React, { useState, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";

import "./App.css";

import Count from "./Count";
import Slideshow from "./Slideshow";
import TodoList from "./TodoList";
import Rating from "./Rating";
import ToggleButton from "./ToggleButton";
import CoinInTitle from "./CoinInTitle";

function coinText() {
  return Math.random() > 0.5 ? "Kopf" : "Zahl";
}

function App() {
  const [title, setTitle] = useState("my title");
  const [coin, setCoin] = useState(coinText());
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [inputText, setInputText] = useState("");
  const [rating1, setRating1] = useState(3);
  const [slideshowVisible, setSlideshowVisible] = useState(true);

  useEffect(
    // diese Funktion wird beim Einbinden der Komponente aufgerufen
    // weiters wird sie aufgerufen, falls sich am state etwas ändert
    () => {
      console.log("neues Intervall gestartet");
      setInterval(() => {
        // diese Funktion wird jede Sekunde aufgerufen
        setTime(new Date().toLocaleTimeString());
      }, 1000);
    },
    // führe die obige Funktion nur aus, wenn sich einer der folgenden Werte geändert hat
    []
  );

  let articleName = "JavaScript";

  return (
    <div className="App">
      <h2>
        {title}
        <Button
          onClick={() => {
            setTitle("title changed");
          }}
          variant="contained"
          color="primary"
        >
          change title
        </Button>
      </h2>
      <div>Ein Jahr hat {365 * 24} Stunden</div>
      <div>Erstes Rendering dieser Komponente um {time}</div>
      <div>
        Münzwurf: {coin}{" "}
        <button
          onClick={() => {
            setCoin(coinText());
          }}
        >
          werfen
        </button>
        <CoinInTitle coin={coin}/>
      </div>
      <div>
        <a href={"https://en.wikipedia.org/wiki/" + articleName}>
          Wikipedia Artikel
        </a>
      </div>
      <button
        onClick={() => {
          alert("Hello!");
        }}
      >
        click me
      </button>

      <div>
        <Count />
      </div>
      <ToggleButton
        status={slideshowVisible}
        onStatusChange={newSlideshowVisible => {
          setSlideshowVisible(newSlideshowVisible);
        }}
      />
      {slideshowVisible ? <Slideshow /> : null}
      <TodoList />
      <h2>Inputs</h2>
      <input
        value={inputText}
        onChange={event => {
          setInputText(event.target.value);
        }}
      />

      <TextField
        value={inputText}
        onChange={event => {
          setInputText(event.target.value);
        }}
        label="name"
      />

      <h3>{inputText.toUpperCase()}</h3>

      <h2>Rating</h2>

      <Rating
        stars={rating1}
        onStarsChange={newRating1 => {
          setRating1(newRating1);
        }}
      />
    </div>
  );
}

export default App;
