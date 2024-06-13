import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import Wrapper from "./Wrapper";

export default function Header() {
  return (
    <header className="h-20 flex items-center justify-center bg-white dark:bg-blue-dark shadow">
      <Wrapper>
        <div className="flex items-center justify-between">
          <Link to="/rest-countries-api">
            <h1 className="text-sm md:text-2xl font-extrabold">
              Where in the world?
            </h1>
          </Link>
          <ThemeToggle />
        </div>
      </Wrapper>
    </header>
  );
}
