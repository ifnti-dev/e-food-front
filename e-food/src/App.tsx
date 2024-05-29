// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboad from './components/layouts/Dashboard';
import Welcome from './components/pages/Welcome';
import UserTable from './components/pages/UserTable';
import Calendar from './components/features/events/components/Calendar';
import { EventListProvider } from './components/features/events/context/EventContext';
// import EventTable from './components/features/events/components/EventTable';
import AdvancedFilterDemo from './components/features/events/components/EventTable';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboad />,
    children: [
      { path: '/', element: <Welcome /> },
      { path: '/liste', element: <UserTable /> },
      { path: '/events', element: <Calendar /> },
      {path:'/events/lists',element: <AdvancedFilterDemo />}
    ],

  },


]);


function App() {
  return (
    <>
      <EventListProvider>
        <RouterProvider router={router} />
      </EventListProvider>
    </>
  )
}

export default App;
