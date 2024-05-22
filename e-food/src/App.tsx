// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboad from './components/layouts/Dashboard';
import Welcome from './components/pages/Welcome';
import UserTable from './components/pages/UserTable';
import Calendar from './components/features/events/components/Calendar';
const router = createBrowserRouter([
  {
    path:'/',
    element:<Dashboad/>,
    children:[
      {path:'/', element:<Welcome/>},
      {path:'/liste', element:<UserTable/>},
      {path:'/events', element:<Calendar/>},
    ],
    
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
