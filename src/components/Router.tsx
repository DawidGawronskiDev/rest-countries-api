import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage, { ErrorBoundary } from "../pages/Main";
import DetailsPage from "../pages/Details";
import { loader as mainLoader } from "../loaders/mainLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    loader: mainLoader,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/:countryId",
    element: <DetailsPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
