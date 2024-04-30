import { Profile } from "./profile";
import Home from "./home";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/profile",
    element: <Profile/>
  },
]);

function App() {
  return  <RouterProvider router={router} />
}

export default App
