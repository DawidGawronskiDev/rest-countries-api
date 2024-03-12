/* eslint-disable react/prop-types */
const CountryInfo = ({ info }) => {
  const { commonName, population, region, capital } = info;

  return (
    <div className="p-6 grid gap-4">
      <h2 className="font-extrabold text-lg">{commonName}</h2>
      <ul>
        <li className="text-sm">
          <span className="font-semibold">Population: </span>
          {population}
        </li>
        <li className="text-sm">
          <span className="font-semibold">Region: </span>
          {region}
        </li>
        <li className="text-sm">
          <span className="font-semibold">Capital: </span>
          {capital}
        </li>
      </ul>
    </div>
  );
};

export default CountryInfo;
