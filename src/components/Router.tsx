import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage, { loader as indexLoader } from "../pages/Main";
import DetailsPage from "../pages/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    loader: indexLoader,
  },
  {
    path: "/:countryId",
    element: <DetailsPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
