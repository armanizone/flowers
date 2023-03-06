import { Button } from '@mantine/core'
import React from 'react'
import { useLocation, useOutletContext } from 'react-router'
import { OutletContext } from '../../App'
import { pb } from '../../utils/pocketbase'
import About from './components/About'
import Catalog from './components/Catalog'
import Hero from './components/Hero'
import Projects from './components/Projects'

function Home() {

  const {flowers} = useOutletContext<OutletContext>()

  const catalogRef = React.useRef<HTMLDivElement>(null)
  const contactsRef = React.useRef<HTMLDivElement>(null)
  const projectsRef = React.useRef<HTMLDivElement>(null)

  const location = useLocation()
  const {pathname} = location

  React.useEffect(() => {
    if (pathname === '/catalog') {
      catalogRef.current?.scrollIntoView({behavior: 'smooth'})
    }
    if (pathname === '/projects') {
      projectsRef.current?.scrollIntoView({behavior: 'smooth'})
    }
    if (pathname === '/contacts') {
      contactsRef.current?.scrollIntoView({behavior: 'smooth'})
    }

  }, [location])

  return (
    <div className='space-y-16 md:space-y-40'>
      <Hero/>
      <Catalog ref={catalogRef} flowers={flowers} />
      <Projects ref={projectsRef} />
      {/* <About ref={aboutRef} /> */}
    </div>
  )
}

export default Home