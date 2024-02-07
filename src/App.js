
import './App.css';
import { Home } from './pages/Home';
import { Login } from './pages/Login';

import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { SignUp } from './pages/SignUp';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home></Home>
    ),
  },
  {
    path: "login",
    element: (<Login></Login>),
  },
  {
    path: "signup",
    element: (<SignUp></SignUp>),
  },
]);


function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
    
  );
}

export default App;
