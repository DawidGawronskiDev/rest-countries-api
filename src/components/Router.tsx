import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/Main";
import RootLayout from "../pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
