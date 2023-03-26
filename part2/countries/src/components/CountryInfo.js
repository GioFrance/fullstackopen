import { useState, useEffect } from "react";
import axios from "axios";

const CountryInfo = ({ countryShow }) => {
  const api_key = process.env.REACT_APP_API_KEY;
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${countryShow}&units=metric&appid=${api_key}`
      )
      .then((response) => {
        setWeather(response.data);
      });
  }, []);

  return (
    <div>
      <h1>{countryShow.name.common}</h1>
      <div>Capital: {countryShow.capital}</div>
      <div>Area: {countryShow.area}</div>

      <h3>Languages</h3>
      <ul>
        {Object.values(countryShow.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={countryShow.flags.png} alt={countryShow.flags.alt} />
      <h3>Weather in {countryShow.capital}</h3>
      <p>
        <strong>temperature:</strong> {weather.temperature} Celcius
      </p>
    </div>
  );
};

export default CountryInfo;
