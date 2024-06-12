"use client";

import { useSearchParams } from "react-router-dom";
import Search from "../components/Search";
import SearchWrapper from "../components/SearchWrapper";
import { useRef } from "react";
import CountriesList from "../components/CountriesList";

export default function MainPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const ref = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    ref.current?.value
      ? setSearchParams({ name: ref.current.value.trim() })
      : setSearchParams({});
  };

  const handleFocus = () => {
    ref.current?.focus();
  };

  return (
    <main className="text-sm">
      <SearchWrapper>
        <Search
          ref={ref}
          onChange={handleChange}
          onClick={handleFocus}
          searchParams={searchParams}
        />
      </SearchWrapper>
      <CountriesList searchParams={searchParams} />
    </main>
  );
}
