import { Await, useLoaderData } from "react-router-dom";
import CountriesList from "../components/CountriesList";
import Search from "../components/Search";
import SearchWrapper from "../components/SearchWrapper";
import { Suspense } from "react";

export function ErrorBoundary() {
  return (
    <main className="text-sm">
      <SearchWrapper>
        <Search />
      </SearchWrapper>
      <p className="text-rem-500">Failed to fetch countries</p>
    </main>
  );
}

export function CountriesSkeleton() {
  return <p>Loading...</p>;
}

export default function MainPage() {
  const { mappedCountries: countries } = useLoaderData();

  return (
    <main className="text-sm">
      <SearchWrapper>
        <Search />
      </SearchWrapper>
      <Suspense fallback={<CountriesSkeleton />}>
        <Await resolve={countries}>
          {(resolvedCountries) => (
            <CountriesList countries={resolvedCountries} />
          )}
        </Await>
      </Suspense>
    </main>
  );
}
