import Home from "./pages/home";
import { Login } from "./pages/login";
import Profile from "./pages/profile";
import { Signup } from "./pages/signup";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile/:id",
    element: <Profile />,
  },
  {
    path: `auth/signup`,
    element: <Signup />,
  },
  {
    path: `auth/login`,
    element: <Login />,
  },
];
