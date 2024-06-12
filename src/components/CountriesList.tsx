import { type Country } from "../interfaces/country";
import { useQuery } from "@tanstack/react-query";
import Item from "./CountriesListItem";
import { MappedCountry } from "../interfaces/mappedCountry";
import Wrapper from "./Wrapper";
import { useEffect, useState } from "react";

const getCountries = async (name: string | null) => {
  const query = name ? `name/${name}` : "all";

  try {
    const response = await fetch("https://restcountries.com/v3.1/" + query);

    if (!response.ok) {
      throw new Error();
    }

    const countries: Country[] = await response.json();

    if (!countries) {
      throw new Error();
    }

    const mappedCountries: MappedCountry[] = countries.map((country) => ({
      name: country.name,
      flags: country.flags,
      capital: country.capital,
      population: country.population,
      region: country.region,
    }));

    if (!mappedCountries) {
      throw new Error();
    }

    return mappedCountries;
  } catch (error) {
    console.log(error);
    return "Failed to fetch countries";
  }
};

export default function CountriesList({
  searchParams,
}: {
  searchParams: URLSearchParams;
}) {
  const name = searchParams.get("name");
  const region = searchParams.get("region");

  const [filteredCountries, setFilteredCountries] = useState<MappedCountry[]>(
    []
  );

  const {
    isLoading,
    isError,
    error,
    data: countries,
  } = useQuery({
    queryKey: ["countries", name],
    queryFn: () => getCountries(name),
  });

  useEffect(() => {
    if (typeof countries !== "undefined" && typeof countries !== "string") {
      if (region) {
        const filtered = countries.filter(
          (country) => country.region === region
        );
        setFilteredCountries(filtered);
      } else {
        setFilteredCountries(countries);
      }
    }
  }, [countries, region]);

  if (isError) {
    return <p>{error.message}</p>;
  }

  if (isLoading) {
    return <CountriesSkeleton />;
  }

  if (typeof countries !== "undefined" && typeof countries !== "string") {
    return (
      <Wrapper>
        <ul className="grid gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredCountries.map((country: MappedCountry) => (
            <Item key={country.name.common} country={country} />
          ))}
        </ul>
      </Wrapper>
    );
  }
}

function CountriesSkeleton() {
  return (
    <Wrapper>
      <ul className="grid gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="bg-gray-300 animate-pulse h-72 rounded"></div>
        <div className="bg-gray-300 animate-pulse h-72 rounded"></div>
        <div className="bg-gray-300 animate-pulse h-72 rounded hidden sm:block"></div>
        <div className="bg-gray-300 animate-pulse h-72 rounded hidden lg:block"></div>
        <div className="bg-gray-300 animate-pulse h-72 rounded hidden lg:block"></div>
      </ul>
    </Wrapper>
  );
}
