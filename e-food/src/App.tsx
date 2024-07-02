// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboad from "./components/layouts/Dashboard";
import Welcome from "./components/pages/Welcome";
import UserTable from "./components/pages/UserTable";

import { Publicites } from "./components/features/fayssol/components/publiciteComponents/Publicites";

import Calendar from "./components/features/events/components/Calendar";
import MenuCreate from "./components/pages/Menus/create";
import Menus from "./components/features/menus/components/Menus";
// import Menus from "./components/pages/Menus";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboad />,
    children: [
      { path: "/", element: <Welcome /> },
      { path: "/liste", element: <UserTable /> },

      { path: "/pub", element: <Publicites /> },

      { path: "/events", element: <Calendar /> },
      { path: "/menus", element: <Menus /> },
      { path: "/create-menu", element: <MenuCreate /> },

    ],
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
