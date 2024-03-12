/* eslint-disable react/prop-types */
const Searchbar = ({ search, handleSearch }) => {
  return (
    <div className="px-8 py-4 rounded-md shadow bg-white">
      <input
        className="text-sm"
        type="text"
        placeholder="Search for a country..."
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Searchbar;
