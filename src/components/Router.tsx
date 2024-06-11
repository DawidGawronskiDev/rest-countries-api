import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/Main";
import RootLayout from "../pages/Root";
import CountriesList, { ErrorBoundary } from "./CountriesList";
import { loader as countryLoader } from "../loaders/countryLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <MainPage />,
        children: [
          {
            path: "",
            loader: countryLoader,
            errorElement: <ErrorBoundary />,
            element: <CountriesList />,
          },
        ],
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
