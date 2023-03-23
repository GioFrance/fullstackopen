import { useState } from "react";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);

  axios.get("https://restcountries.com/v3.1/all").then((response) => {
    setCountries(response.data);
  });

  return (
    <div>
      <h1>Countries</h1>
      <div>
        name of country: <input />
      </div>
      <ul>
        {countries.map((country) => (
          <li key={country.name.official}>{country.name.common}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
