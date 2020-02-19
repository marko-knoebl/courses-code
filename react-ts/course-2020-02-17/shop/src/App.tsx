import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { loadProducts } from "./index";

function App() {
  const products = useSelector(state => (state as any).products);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button
        onClick={() => {
          dispatch(loadProducts);
        }}
      >
        reload
      </button>
      {JSON.stringify(products)}
    </div>
  );
}

export default App;
