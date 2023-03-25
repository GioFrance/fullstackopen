import CountryList from "./CountryList";
import CountryInfo from "./CountryInfo";

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
