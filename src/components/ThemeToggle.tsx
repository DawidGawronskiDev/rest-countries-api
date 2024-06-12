import MoonIcon from "./icons/MoonIcon";

export default function ThemeToggle() {
  return (
    <button className="flex gap-2">
      <MoonIcon />
      <p className="text-base font-semibold">Dark Mode</p>
    </button>
  );
}
