import { useDispatch } from "react-redux";
import MoonIcon from "./icons/MoonIcon";
import { toggle } from "../store/themeSlice";

export default function ThemeToggle() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggle());
  };

  return (
    <button onClick={handleClick} className="flex gap-2">
      <MoonIcon />
      <p className="text-base font-semibold">Dark Mode</p>
    </button>
  );
}
