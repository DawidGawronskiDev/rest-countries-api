import { useEffect, useState } from "react";
import Header from "../components/Header";
import Options from "../components/Options";
import Searchbar from "../components/Searchbar";
import axios from "axios";
import Countries from "../components/Countries";

const MainPage = () => {
  const [countries, setCountries] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
  const [allCountries, setAllCountries] = useState(null); // Initialize allCountries state

  const handleSearch = (e) => {
    setSearch(e.target.value);

    if (e.target.value.length === 0) {
      setCountries(allCountries);
    }

    const filteredCountries = allCountries.filter((country) => {
      return country.name.common.includes(e.target.value);
    });

    setCountries(filteredCountries);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");

        const responseData = response.data;

        if (response.status >= 400) {
          throw new Error("Error while fetching data");
        }

        setCountries(responseData);
        setAllCountries(responseData); // Set allCountries only once
        setLoading(false);
      } catch (error) {
        setError({ message: error.message });
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Options>
        <Searchbar search={search} handleSearch={handleSearch} />
      </Options>
      {!loading && <Countries countries={countries} />}
    </>
  );
};

export default MainPage;
