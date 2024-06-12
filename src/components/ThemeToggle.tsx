import MoonIcon from "./icons/MoonIcon";

export default function ThemeToggle() {
  return (
    <button className="flex gap-2">
      <MoonIcon />
      <p>Dark Mode</p>
    </button>
  );
}
