import React from 'react'
import { useLocation } from 'react-router'
import Header from '../../layout/Header'
import About from './components/About'
import Catalog from './components/Catalog'
import Contacts from './components/Contacts'
import Hero from './components/Hero'
import Media from './components/Media'
import Projects from './components/Projects'



function Home() {

  const catalogRef = React.useRef<HTMLDivElement>(null)
  const projeesRef = React.useRef<HTMLDivElement>(null)
  const mediaRef = React.useRef<HTMLDivElement>(null)
  const aboutRef = React.useRef<HTMLDivElement>(null)
  const contactsRef = React.useRef<HTMLDivElement>(null)

  const location = useLocation()
  const {pathname} = location


  React.useEffect(() => {
    if (pathname === '/catalog') {
      catalogRef.current?.scrollIntoView({behavior: 'smooth'})
    }
    // if (pathname === '/projects') {
    //   projeesRef.current?.scrollIntoView({behavior: 'smooth'})
    // }
    // if (pathname === '/media') {
    //   mediaRef.current?.scrollIntoView({behavior: 'smooth'})
    // }
    if (pathname === '/about') {
      aboutRef.current?.scrollIntoView({behavior: 'smooth'})
    }
    if (pathname === '/contacts') {
      contactsRef.current?.scrollIntoView({behavior: 'smooth'})
    }

  }, [location])


  return (
    <div>
      <Header/>
      <div className='space-y-16 md:space-y-40'>
        <Hero/>
        <Catalog ref={catalogRef} />
        {/* <Projects ref={projeesRef} /> */}
        {/* <Media ref={mediaRef} /> */}
        <About ref={aboutRef} />
        <Contacts ref={contactsRef} /> 
      </div>
    </div>
  )
}

export default Home