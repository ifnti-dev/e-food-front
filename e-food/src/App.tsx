
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboad from "./components/layouts/Dashboard";
import Welcome from "./components/pages/Welcome";
import UserTable from './components/pages/UserTable';
import Login from './components/pages/LoginForm';
import Register from './components/pages/Register';
import UserList from './components/pages/UsersList';
import Rest from './components/pages/Rest';
import RestaurantUI from './components/pages/RestaurantUI';


//// import Publicite from "./components/pages/Publicite";

import Calendar from "./components/features/events/components/Calendar";
import MenuCreate from "./components/pages/Menus/create";
import Menus from "./components/pages/Menus";

import EventTable from './components/features/events/components/EventTable';
import MainCommand from './components/features/commandes/components/main/MainCommand'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboad />,
    children: [
      { path: "/", element: <Welcome /> },
      { path: "/liste", element: <UserTable /> },

      //{ path: "/pub", element: <Publicite /> },
      {path:'/list/events',element: <EventTable />},
      {path:'list/commands',element:<MainCommand/>},


      { path: "/manage/events", element: <Calendar /> },
      { path: "/menus", element: <Menus /> },
      { path: "/create-menu", element: <MenuCreate /> },      
      {path:'/e-food/users', element:<UserList/>},

      {
        path:'/e-food/restaurants/ListeRestaurant',
        element:<Rest/>,
      },

      {
        path:'/e-food/restaurants/ListeRestauran',
        element:<RestaurantUI/>,
      }

    ],

  },
        
  {
    path:'/e-food/auth/login',
    element:<Login/>,
    
  },

  {
    path:'/e-food/auth/signup',
    element:<Register/>,
    
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
