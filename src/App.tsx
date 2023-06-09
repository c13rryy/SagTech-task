import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import AuthLoginPage from "./pages/AuthLogin";
import AuthRegPage from "./pages/AuthReg";
import { Toaster } from "react-hot-toast";
import Task from "./pages/Task";
import Edit from "./pages/Edit";
import MoreTask from "./pages/MoreTask";
import Add from "./pages/Add";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ":index",
        element: <Task />,
        id: "task-data",
        children: [
          { path: "add-task", element: <Add /> },
          {
            path: ":id",
            element: <MoreTask />,
            children: [{ path: "edit-task", element: <Edit /> }],
          },
        ],
      },

      { path: "login", element: <AuthLoginPage /> },
      { path: "reg", element: <AuthRegPage /> },
    ],
  },
]);

const App: React.FC = () => {
  return (
    <>
      <Toaster position="top-right" />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
