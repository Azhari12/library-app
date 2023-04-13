import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { FC, useState, useMemo, useEffect } from "react";
import axios from "axios";

import Home from "@/pages";
import MyBook from "@/pages/MyBook";
import Login from "@/pages/Login";
import Register from "@/pages/auth/Register";
import { ThemeContext } from "@/utils/context";
import Cart from "@/pages/Cart";

axios.defaults.baseURL =
  "https://virtserver.swaggerhub.com/dimasyudhana/akumulasi/1.0.0";

const Router: FC = () => {
  const [theme, setTheme] = useState<string>("dark");
  const background = useMemo(() => ({ theme, setTheme }), [theme]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/myBook",
      element: <MyBook />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
  ]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={background}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  );
};

export default Router;
