import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./apolloClient";
import { ApolloProvider } from "react-apollo";
import client from "./apolloClient";

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const requestBody = {
  query: `query getOne($name: String!) {
            pokemon(name: $name) {
              name
              number
            }
          }`,
  variables: '{"name": "Pikachu"}'
};

const requestBodyStr = JSON.stringify(requestBody);

fetch("https://graphql-pokemon.now.sh", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: requestBodyStr
})
  .then(response => response.json())
  .then(console.log);
