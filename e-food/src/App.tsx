import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboad from './components/layouts/Dashboard';
import Welcome from './components/pages/Welcome';
import UserTable from './components/pages/UserTable';
import Calendar from './components/features/events/components/Calendar';
import { EventListProvider } from './components/features/events/context/EventContext';
import EventTable from './components/features/events/components/EventTable';
import MainCommand from './components/features/commandes/components/main/MainCommand'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboad />,
    children: [
      { path: '/', element: <Welcome /> },
      { path: '/liste', element: <UserTable /> },
      { path: '/manage/events', element: <Calendar /> },
      {path:'/list/events',element: <EventTable />},
      {path:'list/commands',element:<MainCommand/>}
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
