import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CountryPage from "./pages/CountryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/name/:name",
    element: <CountryPage />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
