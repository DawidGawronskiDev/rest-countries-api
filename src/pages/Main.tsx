import { Outlet } from "react-router-dom";
import Search from "../components/Search";
import SearchWrapper from "../components/SearchWrapper";

export default function MainPage() {
  return (
    <main className="text-sm">
      <SearchWrapper>
        <Search />
      </SearchWrapper>
      <Outlet />
    </main>
  );
}
