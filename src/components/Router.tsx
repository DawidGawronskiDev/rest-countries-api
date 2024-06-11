import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/Main";
import DetailsPage from "../pages/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/:countryId",
    element: <DetailsPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
