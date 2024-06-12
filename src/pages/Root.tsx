import { useSelector } from "react-redux";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { RootState } from "../store/store";
import clsx from "clsx";

export default function RootLayout() {
  const { mode } = useSelector((state: RootState) => state.theme);

  return (
    <div
      className={clsx(
        "flex flex-col gap-6 md:gap-12 min-h-[calc(100vh)] bg-gray-very-light dark:bg-blue-very-dark dark:text-white",
        {
          dark: mode === "dark",
        }
      )}
    >
      <Header />
      <Outlet />
    </div>
  );
}
