import React, { useState, useEffect, useReducer } from "react";
import { Route, NavLink, Switch } from "react-router-dom";

import "./App.css";
import DataGrid from "./DataGrid";
import ThemeContext from "./ThemeContext";

import { ThemeName } from "./types";
import Settings from "./Settings";
import DocumentTitle from "./DocumentTitle";

import countryReducer from "./countryReducer";
import AddCountryForm from "./AddCountryForm";

type PersonRow = [string, string, string];

type CountryRow = [string, string, string, number];

type ApiCountry = {
  alpha2Code: string;
  name: string;
  capital: string;
  population: number;
};

type StateCountry = [string, string, string, number];

const INITIAL_DATA: Array<PersonRow> = [
  ["Adam", "Riese", "Germany"],
  ["Jackie", "Chan", "China"]
];

const COUNTRY_DATA: Array<CountryRow> = [
  ["AT", "Austria", "Vienna", 8],
  ["DE", "Germany", "Berlin", 80]
];

const App: React.FC = () => {
  const [data, setData] = useState(INITIAL_DATA);

  const [countryData, countryDataDispatch] = useReducer(
    countryReducer,
    COUNTRY_DATA
  );

  const [countryApiData, setCountryApiData] = useState<Array<StateCountry>>([]);
  const [themeName, setThemeName] = useState<ThemeName>("light");
  const [shouldReloadCountryApiData, setShoudReloadCountryApiData] = useState(
    true
  );
  useEffect(
    // Funktion, die nach dem Einbinden der Komponente ausgeführt wird
    // und jedesmal, wenn sich props oder state ändern
    () => {
      if (shouldReloadCountryApiData) {
        fetch("https://restcountries.eu/rest/v2/all")
          .then(response => response.json())
          .then((data: Array<ApiCountry>) => {
            const countries: Array<StateCountry> = data.map(country => [
              country.alpha2Code,
              country.name,
              country.capital,
              country.population
            ]);
            setCountryApiData(countries);
            setShoudReloadCountryApiData(false);
          });
      } else {
        const timeoutId = setTimeout(() => {
          setShoudReloadCountryApiData(true);
        }, 2000);
        // Aufräumfunktion zurückgeben
        return () => {
          clearTimeout(timeoutId);
        };
      }
    },
    [shouldReloadCountryApiData]
  );

  return (
    <ThemeContext.Provider
      value={{ themeName: themeName, setThemeName: setThemeName }}
    >
      <div
        className="App"
        style={{ backgroundColor: themeName === "light" ? "white" : "grey" }}
      >
        <DocumentTitle>{themeName}</DocumentTitle>

        <div>
          <NavLink to="/" exact={true} activeClassName="active-link">
            Home
          </NavLink>{" "}
          <NavLink to="/settings" activeClassName="active-link">
            Settings
          </NavLink>{" "}
          <NavLink to="/people" activeClassName="active-link">
            People
          </NavLink>{" "}
          <NavLink to="/countries" activeClassName="active-link">
            Countries
          </NavLink>{" "}
          <NavLink to="/countries-from-api" activeClassName="active-link">
            Countries (API)
          </NavLink>
        </div>
        <Switch>
          <Route path="/" exact={true} render={() => <h1>Home</h1>} />
          <Route path="/settings" exact={true} component={Settings} />
          <Route
            path="/people"
            exact={true}
            render={() => (
              <>
                <h2>people</h2>
                <DataGrid data={data} />
              </>
            )}
          />
          <Route
            path="/countries"
            exact={true}
            render={() => (
              <>
                <h2>countries</h2>
                <DataGrid
                  data={countryData}
                  colNames={[
                    "code",
                    "name",
                    "capital",
                    "inhabitants (million)"
                  ]}
                />
                <AddCountryForm
                  onAddCountry={countryData => {
                    countryDataDispatch({
                      type: "ADD_COUNTRY",
                      data: countryData
                    });
                  }}
                />
              </>
            )}
          />
          <Route
            path="/countries-from-api"
            exact={true}
            render={() => (
              <>
                <h2>countries from API</h2>
                <div>
                  <button
                    onClick={() => setShoudReloadCountryApiData(true)}
                    disabled={shouldReloadCountryApiData}
                  >
                    Reload
                  </button>
                  {shouldReloadCountryApiData && "LOADING"}
                </div>
                <DataGrid
                  data={countryApiData}
                  colNames={["code", "name", "capital", "inhabitants"]}
                />
              </>
            )}
          />
          <Route path="/" render={() => <h1>Not found</h1>} />
        </Switch>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
