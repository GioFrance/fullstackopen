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

  if (countriesToShow.length > 10) {
    return (
      <div>
        <p>Too many to show</p>
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
    // setCountriesToShow(
    //   countries.filter((country) =>
    //     country.name.common.toLowerCase().includes(showFilter.toLowerCase())
    //   )
    // );
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
