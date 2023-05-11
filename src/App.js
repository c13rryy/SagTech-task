import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/Root';
import AuthLoginPage from './pages/AuthLogin';
import AuthRegPage from './pages/AuthReg';
import { Toaster } from 'react-hot-toast';
import Task from './pages/Task';
import Edit from './pages/Edit';
import MoreTask from './pages/MoreTask';
import Add from './pages/Add';
import { Outlet } from 'react-router-dom';
/* import {loader as getLoader} from './firebase'; */

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      /*  */
      {
         path: ':index',
          element: <Outlet /> ,
          /* loader: getLoader, */
          id: 'task-data',
          children: [
            { index:true, element: <Task /> },
            { path: 'add-task', element: <Add /> },
            { 
              path: ':id', 
              element:<Outlet />, 
              children: [
                {index:true, element:<MoreTask/>},
              { path: 'edit-task', element:<Edit />},
            ]},
          ],
        },

      { path: 'login', element: <AuthLoginPage /> },
      { path: 'reg', element: <AuthRegPage /> },
    ],
  },
]);
function App() {
  return (
    <>
      <Toaster position="top-right" />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
