import * as React from "react";
import { Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import HomPageContainer from "./pages/HomPageContainer";
import LoginPageContainer from "./pages/LoginPageContainer";

// place all your page and route definitions here
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomPageContainer />,
  },
  {
    path: "/login",
    element: <LoginPageContainer/>,
  },
  // in this array just add other pages that you want to add here with the path and the element
]);

export const AppRouter = () => (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



// going to main.tsx okay sir
