import { useState, useEffect } from "react";
import axios from "axios";

const Filter = ({ filter, handleFilter }) => {
  return (
    <div>
      <form>
        <div>
          name of country : <input value={filter} onChange={handleFilter} />
        </div>
      </form>
    </div>
  );
};

const Countries = ({ countries, countriesToShow }) => (
  <div>
    {/* {countriesToShow.filter((country) =>
      country.name.common.toLowerCase().includes(filter.toLowerCase())
    )}
    ; */}
    {countries.map((country) => (
      <li key={country.name.official}>{country.name.common}</li>
    ))}
  </div>
);

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");
  const [countriesToShow, setCountriesToShow] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleFilter = (event) => {
    setFilter(event.target.value);
    setCountriesToShow(
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(filter.toLowerCase())
      )
    );
  };

  return (
    <div>
      <h1>Countries</h1>
      <Filter filter={filter} handleFilter={handleFilter} />
      <Countries countries={countries} countriesToShow={countriesToShow} />
    </div>
  );
};

export default App;
