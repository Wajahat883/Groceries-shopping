import React from "react";
import LandingPage from "./Pages/LandingPage/Index";
import { createBrowserRouter, Form, RouterProvider } from "react-router-dom";
import Fruites from "./Components/Fruites/Fruites";
import Dairy from "./Components/Dairy/Dairy";
import SeaFoods from "./Components/SeaFoods/SeaFoods";
import AllProducts from "./Components/AllProducts/AllProducts";
import Forms from "./Pages/Auth/Form";

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
    {
      path: "/pages",
      element: <Forms />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
