import React from "react";
import {  RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import AuthLoginPage from "./pages/AuthLogin";
import AuthRegPage from "./pages/AuthReg";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element:<HomePage />},
      {path:'login', element:<AuthLoginPage />},
      {path:'reg', element:<AuthRegPage />},
    ]
  }

]);
function App() {
  return (
    <>
     <Toaster position="top-right" />
    <RouterProvider router={router} />
    </>
  )
}

export default App;