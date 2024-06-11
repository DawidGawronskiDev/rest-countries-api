import { Suspense } from "react";
import Item from "./CountriesListItem";
import { Await, useLoaderData } from "react-router-dom";
import { MappedCountry } from "../interfaces/mappedCountry";

interface CountriesListProps {
  countries: MappedCountry[];
}

export function ErrorBoundary() {
  return <p className="text-rem-500">Failed to fetch countries</p>;
}

export function CountriesSkeleton() {
  return <p>Loading...</p>;
}

export default function CountriesList() {
  const { mappedCountries: countries } = useLoaderData();

  return (
    <Suspense fallback={<CountriesSkeleton />}>
      <Await resolve={countries}>
        {(resolvedCountries) => <List countries={resolvedCountries} />}
      </Await>
    </Suspense>
  );
}

function List({ countries }: CountriesListProps) {
  return (
    <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-11/12 max-w-7xl mx-auto gap-10 sm:gap-16">
      {countries.map((country) => (
        <Item key={country.name.common} country={country} />
      ))}
    </ul>
  );
}
