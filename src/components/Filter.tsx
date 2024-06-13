import { useState } from "react";

const regions = [
  { name: "Africa", value: "Africa" },
  { name: "America", value: "Americas" },
  { name: "Asia", value: "Asia" },
  { name: "Europe", value: "Europe" },
  { name: "Oceania", value: "Oceania" },
  { name: "All", value: "" },
];

export default function Filter({
  onClick,
  searchParams,
}: {
  onClick: (region: string) => void;
  searchParams: URLSearchParams;
}) {
  const region = searchParams.get("region");
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      onClick={handleClick}
      className="px-6 py-4 font-semibold shadow relative rounded max-w-52 h-14 bg-white dark:bg-blue-dark cursor-pointer flex items-center"
    >
      <p>{region ? region : "Filter by Region"}</p>
      {isOpen && (
        <ul className="flex flex-col gap-2 absolute w-full px-6 py-4 bg-white dark:bg-blue-dark shadow rounded top-full left-0 mt-2 cursor-pointer">
          {regions.map((region) => (
            <li
              onClick={() => onClick(region.value)}
              className="hover:bg-black/5 p-2 rounded"
            >
              {region.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
