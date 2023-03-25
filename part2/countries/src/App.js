import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Countries from "./components/Countries";

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
