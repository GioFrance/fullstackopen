import { useState, useEffect } from "react";
import axios from "axios";

const Filter = ({ filter, handleFilter }) => {
  return (
    <form>
      <div>
        name of country : <input value={filter} onChange={handleFilter} />
      </div>
    </form>
  );
};

const Countries = ({ countries, showFilter }) => {
  const countriesToShow = countries.filter((country) =>
    country.name.common.toLowerCase().includes(showFilter.toLowerCase())
  );

  if (showFilter.length === 0) {
    return (
      <div>
        {countries.map((country) => (
          <div key={country.name.official}>{country.name.common}</div>
        ))}
      </div>
    );
  }

  if (countriesToShow.length >= 10) {
    return (
      <div>
        <p>Too many matches, specify another filter</p>
      </div>
    );
  } else if (countriesToShow.length === 1) {
    const countryShow = countriesToShow[0];
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
      </div>
    );
  } else {
    return (
      <div>
        {countriesToShow.map((country) => (
          <div key={country.name.official}>{country.name.common}</div>
        ))}
      </div>
    );
  }
};

const App = () => {
  const [countries, setCountries] = useState([]);
  const [showFilter, setShowFilter] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleFilter = (event) => {
    setShowFilter(event.target.value);
  };

  return (
    <div>
      <h1>Countries</h1>
      <Filter filter={showFilter} handleFilter={handleFilter} />
      <Countries countries={countries} showFilter={showFilter} />
    </div>
  );
};

export default App;
