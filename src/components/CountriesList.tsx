import { MappedCountry } from "../pages/Main";
import Item from "./CountriesListItem";

interface CountriesListProps {
  countries: MappedCountry[];
}

export default function CountriesList({ countries }: CountriesListProps) {
  return (
    <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-11/12 max-w-7xl mx-auto gap-10 sm:gap-16">
      {countries.map((country) => (
        <Item key={country.name.common} country={country} />
      ))}
    </ul>
  );
}
