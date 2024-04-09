import React, { useEffect } from 'react';
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';


const Body = () => {
  const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/browse",
            element: <Browse/>
        }
    ])

  return (
    <div>
      <RouterProvider router = {appRouter}/>
    </div>
  );
}

export default Body;
