import React from "react"
import { createHashRouter, RouterProvider } from "react-router-dom"
import About from "./pages/home/components/About"
import Catalog from "./pages/home/components/Catalog"
import Contacts from "./pages/home/components/Contacts"
import Hero from "./pages/home/components/Hero"
import Media from "./pages/home/components/Media"
import Projects from "./pages/home/components/Projects"
import Home from "./pages/home/Home"
import NotFound from "./pages/NotFound"

const router = createHashRouter([
  {path: '*', element: <NotFound/>},
  {
    element: <Home/>, 
    children: [
      { path: '/',  element: <Hero/>},
      { path: 'about',  element: <About/>},
      { path: 'catalog',  element: <Catalog/>},
      // { path: 'media',  element: <Media/>},
      // { path: 'projects',  element: <Projects/>},
      { path: 'contacts',  element: <Contacts/>},
    ]
},
])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
