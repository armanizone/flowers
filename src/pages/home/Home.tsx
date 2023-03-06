import { Button } from '@mantine/core'
import React from 'react'
import { useLocation } from 'react-router'
import { getUsers } from '../../utils/pocketbase'
import About from './components/About'
import Catalog from './components/Catalog'
import Hero from './components/Hero'


function Home() {

  const catalogRef = React.useRef<HTMLDivElement>(null)
  const aboutRef = React.useRef<HTMLDivElement>(null)
  const contactsRef = React.useRef<HTMLDivElement>(null)

  const location = useLocation()
  const {pathname} = location

  React.useEffect(() => {
    if (pathname === '/catalog') {
      catalogRef.current?.scrollIntoView({behavior: 'smooth'})
    }
    if (pathname === '/about') {
      aboutRef.current?.scrollIntoView({behavior: 'smooth'})
    }
    if (pathname === '/contacts') {
      contactsRef.current?.scrollIntoView({behavior: 'smooth'})
    }

  }, [location])

  

  return (
    <div className='space-y-16 md:space-y-40'>
      <Hero/>
      <Catalog ref={catalogRef} />
      <About ref={aboutRef} />
    </div>
  )
}

export default Home