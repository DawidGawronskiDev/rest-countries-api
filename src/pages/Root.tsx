import { useSelector } from "react-redux";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { RootState } from "../store/store";

export default function RootLayout() {
  const { mode } = useSelector((state: RootState) => state.theme);

  return (
    <div className={mode === "dark" ? "dark" : undefined}>
      <Header />
      <Outlet />
    </div>
  );
}
