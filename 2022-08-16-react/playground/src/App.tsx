import './App.css';

import Slideshow from "./Slideshow";
import Inputs from "./Inputs";

export default function App() {
  return (
    <div className="App">
      <h1>slideshow</h1>
      <Slideshow />
      <h1>inputs</h1>
      <Inputs />
    </div>
  );
}
