import { Profile } from "./components/profile";
import { Home } from "./components/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

export function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* After Pushed */}
    </>
  );
}
