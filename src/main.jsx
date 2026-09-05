import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import App from './App.jsx'
import App1 from './App1.jsx'
import DateConfirmation from './components/DateConfirmation.jsx'
import ScheduleDate from './components/ScheduleDate.jsx'
import Admin from './components/Admin.jsx'

import AdminLogin from './components/AdminLogin.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App1 />,
  },

  { path: "/schedule", 
    element: <ScheduleDate />, 
  }, 

  { 
    path: "/date-confirmation", 
    element: <DateConfirmation />, 
  },

  { 
    path: "/admin",
    element: <AdminLogin />,
  },

  {
    path: "/admin/dashboard",
    element: <Admin />,
},


  // This Is My Dynamic path 
  {
    path: "/:beautifulname",
    element: <App1 />,
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App1 /> */}

  <RouterProvider router={router}/>
    
  </StrictMode>,
)
