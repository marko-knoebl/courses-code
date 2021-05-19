import "./styles.css";
import { useState } from "react";
import ProgressBar from "./ProgressBar";
import Rating from "./Rating";

export default function App() {
  const [prog, setProg] = useState(0.75);
  const [prog2, setProg2] = useState(0.5);
  const [rating, setRating] = useState(3);
  const [rating2, setRating2] = useState(4);

  return (
    <div className="App">
      <h1>Progress bar</h1>
      <ProgressBar value={prog} />
      <ProgressBar value={prog2} color="green" />
      <h1>Rating</h1>
      <Rating value={rating} onChange={(newRating) => setRating(newRating)} />
      <Rating
        value={rating2}
        onChange={(newRating2) => setRating2(newRating2)}
      />
      <div>average rating: {(rating + rating2) / 2}</div>
    </div>
  );
}
