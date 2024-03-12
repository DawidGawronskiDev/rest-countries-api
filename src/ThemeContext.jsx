import { createContext } from "react";

const ThemeContext = createContext({
  theme: "",
  handleTheme: () => {},
});

export default ThemeContext;
