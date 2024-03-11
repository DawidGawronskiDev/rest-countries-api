/* eslint-disable react/prop-types */
const CountryInfo = ({ info }) => {
  const { population, region, capital } = info;

  return (
    <ul>
      <li>Population: {population}</li>
      <li>Region: {region}</li>
      <li>Capital: {capital}</li>
    </ul>
  );
};

export default CountryInfo;
