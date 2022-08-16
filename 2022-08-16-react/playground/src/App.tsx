import "./App.css";

import Slideshow from "./Slideshow";
import Inputs from "./Inputs";
import { useState } from "react";
import Rating from "./Rating";
import Counter from "./Counter";
import ExchangeRateFnAbortController from "./ExchangeRateFnAbortController";

export default function App() {
  const [ratingA, setRatingA] = useState(3);
  const [ratingB, setRatingB] = useState(4);

  return (
    <div className="App">
      <h1>slideshow</h1>
      <Slideshow />
      <h1>inputs</h1>
      <Inputs />
      <h1>ratings</h1>
      <Rating value={ratingA} onChange={(value) => setRatingA(value)} />
      <Rating value={ratingB} onChange={(value) => setRatingB(value)} />
      <h1>Counter (outdated state)</h1>
      <Counter />
      <h1>Exchange Rate</h1>
      <ExchangeRateFnAbortController />
    </div>
  );
}
