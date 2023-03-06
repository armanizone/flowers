import { createEmotionCache, MantineProvider } from "@mantine/core"
import { ModalsProvider } from "@mantine/modals"
import React from "react"
import { Provider } from "react-redux"
import { createBrowserRouter, Outlet, RouterProvider, useLocation } from "react-router-dom"
import { PersistGate } from "redux-persist/integration/react"
import Footer from "./layout/Footer"
import Header from "./layout/Header"
import AuthForm from "./modules/AuthForm/AuthForm"
import Cart from "./pages/cart/Cart"
import Flowers from "./pages/flowers/Flowers"
import About from "./pages/home/components/About"
import Catalog from "./pages/home/components/Catalog"
import Home from "./pages/home/Home"
import NotFound from "./pages/NotFound"
import { persistor, store } from "./redux/store"

function Layout () {

  const contactsRef = React.useRef<HTMLDivElement>(null)

  const location = useLocation()
  const {pathname} = location

  React.useEffect(() => {
    if (pathname === '/contacts') {
      contactsRef.current?.scrollIntoView({behavior: 'smooth'})
    }
  }, [location])

  const myCache = createEmotionCache({
    key: 'mantine',
    prepend: false
  });

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
          <MantineProvider 
            emotionCache={myCache} 
            theme={{
              defaultRadius: 0,
              cursorType: 'pointer',
              primaryColor: 'dark',
              fontFamily: '"Roboto", sans-serif',
              globalStyles: (theme) => ({

              })
            }}>
            <ModalsProvider modals={{auth: AuthForm}}>
              <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
                <Header/>
                <Outlet/>
                <Footer ref={contactsRef}/>
              </div>
            </ModalsProvider>
          </MantineProvider>
      </PersistGate>
    </Provider>
  )
}


const router = createBrowserRouter([
  { 
    element: <Layout/>, 
    children: [
      { 
        path: '/',  
        element: <Home/>, 
        children: [
          { path: 'about', element: <About/> },
          { path: 'catalog', element: <Catalog/> },
          { path: 'contacts', element: <Footer/> },
      ]},
      {path: '/cart', element: <Cart/>},
      {path: '/flowers/:name', element: <Flowers/>}
    ],
  },
  { path: '*', element: <NotFound/>},
])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
