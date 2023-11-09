import Home from "./pages/home";
import Profile from "./pages/profile";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile/:id",
    element: <Profile />,
  },
];
