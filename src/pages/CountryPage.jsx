/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import FlagImage from "../components/FlagImage";

const CountryPage = () => {
  let { name } = useParams();

  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${name}`,
        );

        const responseData = response.data[0];

        const country = {
          flag: responseData.flags.svg,
          name: responseData.name.common,
          altSpelling: responseData.altSpellings[1],
          population: responseData.population,
          region: responseData.region,
          subregion: responseData.subregion,
          capital: responseData.capital[0],
          tld: responseData.tld[0],
          currencies: Object.values(responseData.currencies),
          languages: Object.values(responseData.languages),
        };

        console.log(country);

        setCountry(country);

        if (response.status >= 400) {
          throw new Error("Error while fetching data");
        }

        setLoading(false);
      } catch (error) {
        setError({ message: error.message });
      }
    };

    fetchData();
  }, [name]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Wrapper>
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          <FlagImage image={country.flag} />
          <div className="flex flex-col gap-8 justify-center">
            <h2 className="font-extrabold text-3xl">{country.name}</h2>
            <Information country={country} />
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = ({ children }) => {
  return (
    <div className="px-4 py-8 min-h-[calc(100vh_-_96px)] flex items-center">
      {children}
    </div>
  );
};

const Information = ({ country }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <ul className="flex flex-col gap-1 flex-1 *:text-sm *:*:font-semibold">
        <li>
          <span>Native Name:</span> {country.altSpelling}
        </li>
        <li>
          <span>Population:</span> {country.population}
        </li>
        <li>
          <span>Region:</span> {country.region}
        </li>
        <li>
          <span>Sub Region:</span> {country.subregion}
        </li>
        <li>
          <span>Capital:</span> {country.capital}
        </li>
      </ul>

      <ul className="flex flex-col gap-1 flex-1 *:text-sm *:*:font-semibold">
        <li>
          <span>Top Level Domain:</span> {country.tld}
        </li>
        <li>
          <span>Currencies:</span>{" "}
          {country.currencies.map((currency, index) => {
            if (index < country.currencies.length - 1) {
              return `${currency.name}`;
            }
            return `${currency.name}`;
          })}
        </li>
        <li>
          <span>Languages: </span>
          {country.languages.map((language, index) => {
            if (index < country.languages.length - 1) {
              return `${language}, `;
            }
            return `${language}`;
          })}
        </li>
      </ul>
    </div>
  );
};

export default CountryPage;
