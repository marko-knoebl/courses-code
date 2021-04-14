/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { NavLink, Routes, Route } from "react-router-dom";

import "./styles.css";
import HomeView from "./home/HomeView";
import PokemonView from "./pokemon/PokemonView";
import CartView from "./cart/CartView";
import { useCart } from "./useCart";
import { usePokemons } from "./usePokemons";
import CartContext from "./CartContext";
import DocumentTitle from "./components/DocumentTitle";
import CounterThatLogsEverySecond from "./CounterThatLogsEverySecond";

function App() {
  const { cart, addToCart, removeFromCart } = useCart();

  const { loadedPokemons, loadMore, requestPokemon } = usePokemons();

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
      }}
    >
      <DocumentTitle
        value={`Pokémon Poster Shop (${cart.length} items in the cart)`}
      />
      <CounterThatLogsEverySecond />
      <div
        css={css`
          background-color: #f0f0f0;
        `}
      >
        <h1>Pokémon poster shop</h1>
        <NavLink to="/">Home</NavLink> |{" "}
        <NavLink to="/cart">
          {cart.length === 0 ? "Cart" : `Cart (${cart.length})`}
        </NavLink>
        <Routes>
          <Route
            path="/"
            element={<HomeView pokemons={loadedPokemons} loadMore={loadMore} />}
          />
          <Route
            path="/pokemon/:id"
            element={
              <PokemonView
                pokemons={loadedPokemons}
                requestPokemon={requestPokemon}
                addToCart={addToCart}
                onRemoveFromCart={removeFromCart}
                cart={cart}
              />
            }
          />
          <Route
            path="/cart"
            element={<CartView pokemons={loadedPokemons} />}
          />
        </Routes>
      </div>
    </CartContext.Provider>
  );
}

export default App;
