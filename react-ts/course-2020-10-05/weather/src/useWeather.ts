import { useEffect, useState } from "react";

type Weather = {
  temp: number;
  wind: number;
};

type Success = {
  main: {
    temp: number;
  };
  wind: {
    speed: number;
  };
  name: string;
};
type NotFoundError = {
  cod: "404";
};
type APIResponse = Success | NotFoundError;

function useWeather(city: string): { status: string; weather: Weather | null } {
  const [status, setStatus] = useState("");
  const [weather, setWeather] = useState<Weather | null>(null);
  useEffect(() => {
    setStatus("loading");
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?" +
        "appid=76a06be0de6d6cb054d5110c719ef51b&units=metric&q=" +
        city
    )
      .then((res) => res.json())
      .then((data: APIResponse) => {
        if ("main" in data) {
          setStatus("success");
          setWeather({
            temp: data.main.temp,
            wind: data.wind.speed,
          });
        } else {
          setStatus("error");
          setWeather(null);
        }
      });
  }, [city]);

  // ... useState / useEffect
  // http://api.openweathermap.org/data/2.5/weather?appid=66445a4269dd911a5bbe214fadb768d6&units=metric&q=vienna
  return { status: status, weather: weather };
}

export default useWeather;
