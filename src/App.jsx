import React from "react";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/root.jsx";
import ErrorPage from "./error-page";
import Movies from "./Pages/Movies";
import Login from "./Pages/Login";
import MovieDetail, { loader as movieLoader } from "./Pages/MovieDetail";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Movies />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "/:id",
          element: <MovieDetail />,
          loader: movieLoader,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
