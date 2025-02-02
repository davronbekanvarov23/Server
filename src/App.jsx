import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { Home, Partners, Payment } from "./pages";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        { path: "/payment", element: <Payment /> },
        { path: "/partners", element: <Partners /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />{" "}
    </>
  );
}

export default App;
