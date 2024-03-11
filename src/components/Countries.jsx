/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from "uuid";
import Country from "./Country";

const Countries = ({ countries }) => {
  return (
    <ul className="px-4 py-8 grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {countries.map((country) => (
        <Country country={country} key={uuidv4()} />
      ))}
    </ul>
  );
};

export default Countries;
