/* eslint-disable react/prop-types */
import CountryInfo from "./CountryInfo";
import FlagImage from "./FlagImage";

const Country = ({ country }) => {
  const {
    population,
    region,
    capital,
    flags: { svg: flagImage },
    name: { common: commonName },
  } = country;

  return (
    <li className="rounded-xl overflow-hidden w-[100%] bg-blue-300">
      <FlagImage image={flagImage} />
      <div className="p-6">
        <h2>{commonName}</h2>
        <CountryInfo info={{ population, region, capital }} />
      </div>
    </li>
  );
};

export default Country;
