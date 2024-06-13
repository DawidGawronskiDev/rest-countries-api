import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/Main";
import RootLayout from "../pages/Root";
import DetailsPage, { loader as detailLoader } from "../pages/Details";
import ErrorPage from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/rest-countries-api",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
      {
        path: "country/:countryName",
        loader: detailLoader,
        element: <DetailsPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
