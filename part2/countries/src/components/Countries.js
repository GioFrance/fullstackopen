import CountryList from "./CountryList";

const CountryInfo = ({ countryShow }) => {
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
};

const Countries = ({ countries, showFilter }) => {
  const countriesToShow = countries.filter((country) =>
    country.name.common.toLowerCase().includes(showFilter.toLowerCase())
  );

  if (showFilter.length === 0) {
    return (
      <div>
        {countries.map((country) => (
          <CountryList key={country.name.official} country={country} />
        ))}
      </div>
    );
  }

  if (countriesToShow.length > 10) {
    return (
      <div>
        <p>Too many matches, specify another filter</p>
      </div>
    );
  } else if (countriesToShow.length === 1) {
    return <CountryInfo countryShow={countriesToShow[0]} />;
  } else {
    return (
      <div>
        {countriesToShow.map((country) => (
          <CountryList key={country.name.official} country={country} />
        ))}
      </div>
    );
  }
};

export default Countries;
