import { useEffect, useState } from "react";
import axios from "axios";

const WeatherInfo = ({ city }) => {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    const api_key = process.env.REACT_APP_API_KEY;
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`
      )
      .then((response) => {
        setWeather(response.data);
      });
  }, [city]);

  return (
    <>
      {weather.main ? (
        <div>
          <h2>Weather in {city}</h2>
          <div>
            <strong>Temperature</strong> {weather.main.temp} Celcius
          </div>
          <img
            alt="weather icon"
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          />
          <div>
            <strong>Wind</strong> {weather.wind.speed} m/s
          </div>
        </div>
      ) : null}
    </>
  );
};

export default WeatherInfo;
