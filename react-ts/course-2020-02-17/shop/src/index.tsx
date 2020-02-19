import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {
  configureStore,
  PayloadAction,
  combineReducers,
  ThunkAction,
  Dispatch
} from "@reduxjs/toolkit";
import { Provider } from "react-redux";

type Product = {
  id: number;
  price: number;
  name: string;
  description: string;
};

type SetProductsAction = PayloadAction<Array<Product>, "products/set">;

export const loadProducts = (dispatch: Dispatch) => {
  const requestBody = {
    query: "query { products { id name price description } }"
  };
  const requestBodyStr = JSON.stringify(requestBody);

  fetch("https://fakeql.com/graphql/562f1f11f09f43f279b55c602009f8bb", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: requestBodyStr
  })
    .then(res => res.json())
    .then(content => {
      dispatch({ type: "products/set", payload: content.data });
    });
};

const productsReducer = (
  oldState: Array<Product> = [],
  action: SetProductsAction
) => {
  switch (action.type) {
    case "products/set":
      return action.payload;
    default:
      return oldState;
  }
};

type AddToCartAction = PayloadAction<number, "cart/add">;
type RemoveOneAction = PayloadAction<number, "cart/remove">;
type RemoveAllAction = PayloadAction<number, "cart/removeAll">;

type CartAction = AddToCartAction | RemoveOneAction | RemoveAllAction;

const cartReducer = (oldState: Array<number> = [], action: CartAction) => {
  switch (action.type) {
    case "cart/add":
      return [...oldState, action.payload];
    case "cart/remove":
      const index = oldState.findIndex(cartItem => cartItem === action.payload);
      if (index === -1) {
        return oldState;
      }
      return [
        ...oldState.slice(0, index),
        ...oldState.slice(index + 1, oldState.length)
      ];
    case "cart/removeAll":
      return oldState.filter(cartItem => cartItem !== action.payload);
    default:
      return oldState;
  }
};

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer
});

const store = configureStore({
  reducer: rootReducer
});

store.dispatch(loadProducts);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
