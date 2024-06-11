import { useLoaderData } from "react-router-dom";
import CountriesList from "../components/CountriesList";
import Search from "../components/Search";

interface Country {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  idd: {
    root: string;
    suffixes: string[];
  };
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: {
    [key: string]: string;
  };
  translations: {
    [key: string]: {
      official: string;
      common: string;
    };
  };
  latlng: [number, number];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: {
    eng: {
      f: string;
      m: string;
    };
    fra: {
      f: string;
      m: string;
    };
  };
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  gini: {
    [year: string]: number;
  };
  fifa: string;
  car: {
    signs: string[];
    side: string;
  };
  timezones: string[];
  continents: string[];
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  coatOfArms: {
    png: string;
    svg: string;
  };
  startOfWeek: string;
  capitalInfo: {
    latlng: [number, number];
  };
}

export interface MappedCountry {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  population: number;
  region: string;
  capital: string[];
}

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

    return mappedCountries;
  } catch (error) {
    throw new Error("Failed to fetch countries");
  }
}

export default function MainPage() {
  const countries = useLoaderData() as MappedCountry[];

  return (
    <main className="text-sm">
      <div className="w-11/12 mx-auto">
        <Search />
      </div>
      <CountriesList countries={countries} />
    </main>
  );
}
