import { useState } from 'react'

import './App.css'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router'
import Layout from './Layout/Layout'
import Home from './Home/Home'
import Contact from './Contact/Contact'
import About from './About/About'
import Portfolio from './Portfolio/Portfolio'


function App() {

  let routes = createHashRouter([
    {
      path : "", element: <Layout/>, children:[
        {path: "" ,element: <Home/>},
        {path: "about" ,element: <About/>},
        {path: "portfolio" ,element: <Portfolio/>},
        {path: "contact" ,element: <Contact/>},
        {path: "*" ,element: <Error/>},
      ]

    }
  ]);
 

  return  (
    <div>
      <RouterProvider router={routes}/>
    </div>
  )

   
}

export default App
