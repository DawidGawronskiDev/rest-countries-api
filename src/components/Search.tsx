import { Ref, forwardRef } from "react";
import SearchIcon from "./icons/SearchIcon";

const Search = forwardRef(function Search(
  {
    onChange,
    onClick,
    searchParams,
  }: {
    onChange: () => void;
    onClick: () => void;
    searchParams: URLSearchParams;
  },
  ref: Ref<HTMLInputElement>
) {
  const inputValue = searchParams.get("name") || "";

  return (
    <div className="shadow rounded max-w-xl">
      <div className="flex gap-6 px-8 py-4">
        <button onClick={onClick}>
          <SearchIcon />
        </button>
        <input
          type="text"
          placeholder="Search for a country..."
          className="w-full"
          ref={ref}
          onChange={onChange}
          value={inputValue}
        />
      </div>
    </div>
  );
});

export default Search;
