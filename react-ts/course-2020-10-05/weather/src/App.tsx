import React, { useState } from "react";
import useWeather from "./useWeather";

function App() {
  const [city, setCity] = useState("");

  const { weather, status } = useWeather(city);
  return (
    <div className="App">
      <h1>Weather</h1>
      <div>
        <input
          value={city}
          onChange={(event) => {
            setCity(event.target.value);
          }}
        />
      </div>
      {status === "loading" ? <div>Loading...</div> : null}
      {status === "error" ? <div>Error</div> : null}
      {weather ? (
        <div>
          <p>temp: {weather.temp}</p>
          <p>wind: {weather.wind}</p>
        </div>
      ) : null}
    </div>
  );
}

export default App;
