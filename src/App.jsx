import React from "react";
import LandingPage from "./Pages/LandingPage/Index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Fruites from "./Components/Fruites/Fruites";
import Dairy from "./Components/Dairy/Dairy";
import SeaFoods from "./Components/SeaFoods/SeaFoods";
import AllProducts from "./Components/AllProducts/AllProducts";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/fruites",
      element: <Fruites />,
    },
    {
      path: "/dairy",
      element: <Dairy />,
    },
    {
      path: "/sea",
      element: <SeaFoods />,
    },
    {
      path: "/allproducts",
      element: <AllProducts />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
