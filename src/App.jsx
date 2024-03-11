import { useEffect, useState } from "react";
import Header from "./components/Header";
import Options from "./components/Options";
import Searchbar from "./components/Searchbar";
import axios from "axios";
import Countries from "./components/Countries";

const App = () => {
  const [countries, setCountries] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");

        const responseData = response.data;

        if (response.status >= 400) {
          throw new Error("Error while fetching data");
        }

        setCountries(responseData);
        console.log(responseData);
        setLoading(false);
      } catch (error) {
        setError({ message: error.message });
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Options>
        <Searchbar />
      </Options>
      {!loading && <Countries countries={countries} />}
    </>
  );
};

export default App;
