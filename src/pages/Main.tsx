import { useSearchParams } from "react-router-dom";
import Search from "../components/Search";
import { useEffect, useRef } from "react";
import CountriesList from "../components/CountriesList";
import Wrapper from "../components/Wrapper";
import Filter from "../components/Filter";

export default function MainPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const ref = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    const newSearchParams = new URLSearchParams(searchParams);
    ref.current?.value
      ? newSearchParams.set("name", ref.current.value.trim())
      : newSearchParams.delete("name");
    setSearchParams(newSearchParams);
  };

  const handleFilter = (region: string) => {
    const newSearchParams = new URLSearchParams(searchParams);
    region
      ? newSearchParams.set("region", region)
      : newSearchParams.delete("region");
    setSearchParams(newSearchParams);
  };

  const handleFocus = () => {
    ref.current?.focus();
  };

  useEffect(() => {
    document.title = "Countries";
  }, []);

  return (
    <main className="text-sm grid gap-6 md:gap-12 mb-6 sm:mb-12">
      <Wrapper>
        <div className="flex flex-col md:flex-row justify-between gap-6 *:flex-1">
          <Search
            ref={ref}
            onChange={handleSearch}
            onClick={handleFocus}
            searchParams={searchParams}
          />
          <Filter onClick={handleFilter} searchParams={searchParams} />
        </div>
      </Wrapper>
      <CountriesList searchParams={searchParams} />
    </main>
  );
}
