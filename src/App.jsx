import { useState } from "react";
import Router from "./Router";
import ThemeContext from "./ThemeContext";
import Header from "./components/Header";

const App = () => {
  const [theme, setTheme] = useState("light");

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      <div className={`${theme}`}>
        <Header />
        <div className="mt-24"></div>
        <Router />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
