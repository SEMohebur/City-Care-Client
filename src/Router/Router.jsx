import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import NotFound from "../Pages/NotFound";
import AdminDeshBoard from "../Layout/AdminDeshBoard";
import CitizenDeshBoard from "../Layout/CitizenDeshBoard";
import StaffDeshBoard from "../Layout/StaffDeshBoard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "/about", Component: About },
      { path: "/login", Component: Login },
      { path: "/register", Component: Register },

      { path: "*", Component: NotFound },
    ],
  },
  //admin deshboard

  {
    path: "/adminDeshBoard",
    Component: AdminDeshBoard,
  },
  //staff  deshboard
  {
    path: "/citizenDeshBoard",
    Component: CitizenDeshBoard,
  },

  // citizen  deshboard
  {
    path: "/staffDeshBoard",
    Component: StaffDeshBoard,
  },
]);
