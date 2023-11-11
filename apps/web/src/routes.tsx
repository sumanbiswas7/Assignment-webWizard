import { Protected } from "./components/wrapper/protected";
import { Favourites } from "./pages/favourites";
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
    element: (
      <Protected>
        <Profile />
      </Protected>
    ),
  },
  {
    path: "/favourites",
    element: (
      <Protected>
        <Favourites />
      </Protected>
    ),
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
