// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboad from './components/layouts/Dashboard';
import Welcome from './components/pages/Welcome';
import UserTable from './components/pages/UserTable';
import Login from './components/pages/LoginForm';
import Register from './components/pages/Register';
import UserList from './components/pages/UsersList';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Dashboad/>,
    children:[
      {path:'/', element:<Welcome/>},
      {path:'/e-food/users', element:<UserList/>}
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
  )
}

export default App;
