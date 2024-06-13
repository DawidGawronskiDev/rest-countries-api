import { Link, Params, useLoaderData } from "react-router-dom";
import { Country } from "../interfaces/country";
import Wrapper from "../components/Wrapper";
import ButtonBack from "../components/ButtonBack";
import { useEffect } from "react";

export const loader = async ({ params }: { params: Params }) => {
  const countryName = params.countryName;

  const response = await fetch(
    "https://restcountries.com/v3.1/name/" + countryName + "?fullText=true"
  );

  if (!response.ok) {
    throw new Error();
  }

  const country: Country[] = await response.json();

  let borderCountries: string[] = [];

  if (typeof country[0].borders !== "undefined") {
    borderCountries = await Promise.all(
      country[0].borders.map(async (border: string) => {
        const name = await fetch(
          "https://restcountries.com/v3.1/alpha/" + border
        )
          .then((blob) => blob.json())
          .then((country) => country[0].name.common);

        return name;
      })
    );
  }

  return { country: country[0], borderCountries };
};

export default function DetailsPage() {
  const { country, borderCountries } = useLoaderData() as {
    country: Country;
    borderCountries: string[];
  };

  const nativeName = country.name.nativeName
    ? country.name.nativeName[Object.keys(country.name.nativeName)[0]].official
    : undefined;

  const currencies = [];
  for (const key in country.currencies) {
    currencies.push(country.currencies[key].name);
  }

  const languages = [];
  for (const key in country.languages) {
    languages.push(country.languages[key]);
  }

  useEffect(() => {
    document.title = country.name.common;
  });

  return (
    <main className="text-sm sm:text-base mb-6 md:mbg-12">
      <Wrapper>
        <div className="flex flex-col gap-11 items-start">
          <ButtonBack />
          <div className="grid gap-11 lg:grid-cols-2">
            <div className="grid place-content-center">
              <img
                src={country.flags.svg}
                alt={`Flag of ${country.name.common}`}
                className="rounded shadow"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-extrabold">{country.name.common}</h2>
              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <p className="font-light">
                    <span className="font-semibold">Native Name: </span>
                    {nativeName || "None"}
                  </p>
                  <p className="font-light">
                    <span className="font-semibold">Population: </span>
                    {country.population.toLocaleString() || "None"}
                  </p>
                  <p className="font-light">
                    <span className="font-semibold">Region: </span>
                    {country.region || "None"}
                  </p>
                  <p className="font-light">
                    <span className="font-semibold">Sub Region: </span>
                    {country.subregion || "None"}
                  </p>
                  <p className="font-light">
                    <span className="font-semibold">Capital: </span>
                    {country.capital || "None"}
                  </p>
                </div>
                <div>
                  <p className="font-light">
                    <span className="font-semibold">Top Level Domain: </span>
                    {country.tld || "None"}
                  </p>
                  <p className="font-light">
                    <span className="font-semibold">Currencies: </span>
                    {currencies.join(", ") || "None"}
                  </p>
                  <p className="font-light">
                    <span className="font-semibold">Languages: </span>
                    {languages.join(", ") || "None"}
                  </p>
                </div>
                <div className="flex flex-col gap-4 lg:col-span-2">
                  <span className="font-semibold">Border Countries: </span>
                  {borderCountries.length > 0 ? (
                    <ul className="flex gap-2 text-xs sm:text-sm flex-wrap">
                      {borderCountries.map((country) => (
                        <Link to={"/country/" + country}>
                          <li
                            key={country}
                            className="shadow px-4 py-1 bg-white dark:bg-blue-dark"
                          >
                            {country}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  ) : (
                    <p>None</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </main>
  );
}
