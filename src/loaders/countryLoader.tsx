import { defer } from "react-router-dom";
import { Country } from "../interfaces/country";
import { MappedCountry } from "../interfaces/mappedCountry";

export async function loader({ request }: { request: Request }) {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("name");

  const query = searchTerm ? `name/${searchTerm}` : "all";

  try {
    const response = await fetch("https://restcountries.com/v3.1/" + query);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const countries = await response.json();

    const mappedCountries: MappedCountry[] = countries.map(
      (country: Country) => ({
        flags: country.flags,
        name: country.name,
        population: country.population,
        region: country.region,
        capital: country.capital,
      })
    );

    return defer({ mappedCountries });
  } catch (error) {
    throw new Error("Failed to fetch countries");
  }
}
