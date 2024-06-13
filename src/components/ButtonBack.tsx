import BackIcon from "./icons/BackIcon";

export default function ButtonBack() {
  return (
    <button
      onClick={() => history.back()}
      className="flex gap-2 items-center justify-center py-2 px-4 shadow bg-white rounded dark:bg-blue-dark"
    >
      <BackIcon />
      Back
    </button>
  );
}
