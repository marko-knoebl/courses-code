import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import RegisterForm from "./RegisterForm";
import TodoList from "./TodoList";
import Rating from "./Rating";
import SpaceXLaunch from "./SpaceXLaunch";

function App() {
  const [prod1Rating, setProd1Rating] = useState(3);
  const [prod2Rating, setProd2Rating] = useState(2);

  return (
    <div className="App">
      <RegisterForm />
      <TodoList />
      <h2>products</h2>
      <Rating
        stars={prod1Rating}
        onStarsChange={(newRating) => {
          setProd1Rating(newRating);
        }}
      />
      <Rating
        stars={prod2Rating}
        onStarsChange={(newRating) => {
          setProd2Rating(newRating);
        }}
      />
      <SpaceXLaunch />
    </div>
  );
}

export default App;
