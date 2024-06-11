import { useSearchParams } from "react-router-dom";
import SearchIcon from "./icons/SearchIcon";
import { useRef } from "react";
import { useDebouncedCallback } from "use-debounce";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const ref = useRef<HTMLInputElement>(null);

  // Wrap it in debounce later
  const handleChange = useDebouncedCallback((el: HTMLInputElement): void => {
    if (!el.value) {
      setSearchParams({});
    } else setSearchParams({ name: el.value });
  }, 300);

  function handleFocus(): void {
    ref.current?.focus();
  }

  return (
    <div className="shadow rounded max-w-xl">
      <div className="flex gap-6 px-8 py-4">
        <button onClick={handleFocus}>
          <SearchIcon />
        </button>
        <input
          type="text"
          onChange={(e) => handleChange(e.target)}
          placeholder="Search for a country..."
          ref={ref}
          className="w-full"
        />
      </div>
    </div>
  );
}
