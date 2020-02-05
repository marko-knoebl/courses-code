import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Main from "./main/Main";
import { Route, NavLink, Switch } from "react-router-dom";
import About from "./about/About";
import PokemonDetail from "./detail/PokemonDetail";
import ThemeContext from "./ThemeContext";

const App = () => {
  const [theme, setTheme] = useState<"standard" | "fancy">("standard");

  const installPromptRef = useRef();

  // executed when the component has mounted
  useEffect(() => {
    window.addEventListener("beforeinstallprompt", ipEvent => {
      ipEvent.preventDefault();
      (installPromptRef as any).value = ipEvent;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: theme }}>
      <div className="App">
        <div>
          {(installPromptRef as any).value && (
            <button
              onClick={() => {
                (installPromptRef as any).value.prompt();
              }}
            >
              install
            </button>
          )}
        </div>
        <h1>Pokedex</h1>
        <nav>
          <NavLink to="/" activeClassName="active-link" exact={true}>
            Main
          </NavLink>{" "}
          <NavLink to="/about" activeClassName="active-link">
            About
          </NavLink>
        </nav>
        <div>
          <button onClick={() => setTheme("standard")}>standard</button>
          <button onClick={() => setTheme("fancy")}>fancy</button>
        </div>
        <Switch>
          <Route path="/" exact={true} render={() => <Main />} />
          <Route path="/about" exact={true} component={About} />
          <Route
            path="/detail/:id"
            render={props => (
              <PokemonDetail id={Number(props.match.params.id as string)} />
            )}
          />
          <Route path="" render={() => <h2>not found</h2>} />
        </Switch>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
