import { MappedCountry } from "../interfaces/mappedCountry";

export default function Item({ country }: { country: MappedCountry }) {
  return (
    <li className="rounded overflow-hidden border dark:border-none bg-white dark:bg-blue-dark shadow-sm">
      <div className="aspect-video">
        <img
          src={country.flags.svg}
          alt={`Flag of ${country.name.common}`}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <div className="p-6 grid gap-4">
          <span className="text-lg font-extrabold">{country.name.common}</span>
          <div>
            <div>
              <span className="font-semibold">Population: </span>
              <span className="font-light">{country.population}</span>
            </div>
            <div>
              <span className="font-semibold">Region: </span>
              <span className="font-light">{country.region}</span>
            </div>
            <div>
              <span className="font-semibold">Capital: </span>
              <span className="font-light">{country.capital}</span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
