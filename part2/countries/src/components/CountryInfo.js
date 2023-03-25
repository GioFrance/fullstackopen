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

export default CountryInfo;
