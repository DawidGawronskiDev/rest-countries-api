import { useContext } from "react";
import ThemeContext from "../ThemeContext";

const ThemeButton = () => {
  const { handleTheme } = useContext(ThemeContext);
  return (
    <button className="font-semibold text-base" onClick={handleTheme}>
      Dark Mode
    </button>
  );
};

export default ThemeButton;
