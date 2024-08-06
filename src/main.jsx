import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import About from './pages/About.jsx'
import Cars from './pages/Cars.jsx'
import Contact from './pages/Contact.jsx'
import Booking from './pages/Booking.jsx'
import Video from './pages/Video.jsx'
import Home from './pages/Home.jsx'
import TestDrive from './pages/TestDrive.jsx'
import Enquiry from './pages/Enquiry.jsx'
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/cars",
        element: <Cars />
      },
      {
        path: "/enquiry",
        element: <Enquiry />
      },
      {
        path: "/book",
        element: <Booking />
      },
      {
        path: "/video",
        element: <Video />
      },
      {
        path: "/login",
        element: <Login />
      },

      {
        path: "/test_drive",
        element: <TestDrive />
      },


    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>

      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
