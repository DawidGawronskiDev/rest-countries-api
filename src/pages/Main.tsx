"use client";

import { useSearchParams } from "react-router-dom";
import Search from "../components/Search";
import { useRef } from "react";
import CountriesList from "../components/CountriesList";
import Wrapper from "../components/Wrapper";

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
      <Wrapper>
        <Search
          ref={ref}
          onChange={handleChange}
          onClick={handleFocus}
          searchParams={searchParams}
        />
      </Wrapper>
      <CountriesList searchParams={searchParams} />
    </main>
  );
}
