import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import App from './App.jsx'
import App1 from './App1.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App1 />,
  },
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
