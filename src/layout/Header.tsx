import React from 'react'
import { Burger, Drawer } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Link, useLocation } from 'react-router-dom'

function Header() {

  const matches = useMediaQuery('(max-width: 1024px)');

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  function handleBurgerMenuClick() {
    setIsDrawerOpen(true);
  }

  function handleDrawerMenuClose() {
    setIsDrawerOpen(false);
  }

  const { pathname } = useLocation()

  React.useEffect(() => {
    setIsDrawerOpen(false)
  }, [pathname])

  return (
    <>
      <div className='w-full bg-black'>
        <div className="container">
          <div className='w-full flex items-center justify-between py-6 lg:py-8'>
            <div className='flex w-full lg:w-fit  justify-between items-center lg:justify-center gap-x-8'>
              <p className='text-gray-200 font-medium '>flowers.bouquets.delivery</p>
              {!matches && (
                <a href="/">
                  <span className='text-gray-200'>
                    +7 776 000 93 99
                  </span>
                </a>
              )}
              {matches && (
                <Burger 
                  opened={isDrawerOpen} 
                  onClick={handleBurgerMenuClick}
                  color='white'
                />
              )}
            </div>
            {!matches && (
              <nav className='space-x-12'>
                <Link to={'catalog'}>
                  <span className='font-medium text-gray-200'>
                    catalog
                  </span>
                </Link>
                <Link to={'projects'}>
                  <span className='font-medium text-gray-200'>
                    projects
                </span>
                </Link>
                <Link to={'contacts'}>
                  <span className='font-medium text-gray-200'>
                    contacts
                  </span>
                </Link>
                <Link to={'/cart'}>
                  <span className='font-medium text-gray-200'>
                    cart
                  </span>
                </Link>
              </nav>
            )}
          </div>
        </div>
      </div>
      {matches && (
        <Drawer 
          opened={isDrawerOpen} 
          onClose={handleDrawerMenuClose} 
          position='right'
          size={'50%'}
        >
          <nav className='flex flex-col gap-y-4 px-4 uppercase'>
            <Link to={'/'}>
              <span className='font-medium text-slate-700'>
                главная
              </span>
            </Link>
            <Link to={'/catalog'}>
              <span className='font-medium text-slate-700'>
                каталог
              </span>
            </Link>
            <Link to={'/projects'}>
              <span className='font-medium text-slate-700'>
                проекты
              </span>
            </Link>
            <Link to={'/contacts'}>
              <span className='font-medium text-slate-700'>
                контакты
              </span>
            </Link>
            <Link to={'/cart'}>
              <span className='font-medium text-slate-700'>
                корзина
              </span>
            </Link>
          </nav>
        </Drawer>
      )} 
    </>
  )
}

export default Header