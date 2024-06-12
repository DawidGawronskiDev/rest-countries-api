import { type Country } from "../interfaces/country";
import { useQuery } from "@tanstack/react-query";
import Item from "./CountriesListItem";
import { MappedCountry } from "../interfaces/mappedCountry";

const getCountries = async (term: string | null) => {
  const query = term ? `name/${term}` : "all";

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
  const term = searchParams.get("name");

  const {
    isPending,
    isError,
    error,
    data: countries,
  } = useQuery({
    queryKey: ["countries", term],
    queryFn: () => getCountries(term),
  });

  if (isError) {
    return <p>{error.message}</p>;
  }

  if (isPending) {
    return <CountriesSkeleton />;
  }

  if (typeof countries !== "undefined" && typeof countries !== "string") {
    return (
      <ul className="w-11/12 max-w-7xl mx-auto grid gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {countries.map((country: MappedCountry) => (
          <Item country={country} />
        ))}
      </ul>
    );
  }
}

function CountriesSkeleton() {
  return (
    <ul className="w-11/12 max-w-7xl mx-auto grid gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div className="bg-gray-300 animate-pulse h-72 rounded"></div>
      <div className="bg-gray-300 animate-pulse h-72 rounded"></div>
      <div className="bg-gray-300 animate-pulse h-72 rounded hidden sm:block"></div>
      <div className="bg-gray-300 animate-pulse h-72 rounded hidden lg:block"></div>
      <div className="bg-gray-300 animate-pulse h-72 rounded hidden lg:block"></div>
    </ul>
  );
}
