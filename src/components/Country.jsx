/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
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
    <Link to={`/name/${commonName}`}>
      <li className="rounded-xl overflow-hidden w-[100%] shadow bg-white">
        <FlagImage image={flagImage} contained={true} />
        <CountryInfo info={{ population, region, capital, commonName }} />
      </li>
    </Link>
  );
};

export default Country;
