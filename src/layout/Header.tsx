import { useMediaQuery } from '@mantine/hooks';
import React from 'react'
import { Link } from 'react-router-dom'
import { BurgerMenu, Drawer } from '../components';

function Header() {

  const matches = useMediaQuery('(max-width: 1024px)');

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  function handleBurgerMenuClick() {
    setIsDrawerOpen(true);
  }

  function handleDrawerMenuClose() {
    setIsDrawerOpen(false);
  }

  return (
    <>
      <div className='w-full bg-black'>
        <div className="container">
          <div className='w-full flex items-center justify-between py-6 lg:py-8'>
            <div className='flex w-full lg:w-fit  justify-between items-center lg:justify-center gap-x-8'>
              <p className='text-gray-200 font-medium '>цветы.букеты.доставка</p>
              {!matches && (
                <a href="/">
                  <span className='text-gray-200'>+7 977 878 22 02</span>
                </a>
              )}
              {matches && (
                <BurgerMenu handleClick={handleBurgerMenuClick} />
              )}
            </div>
            {!matches && (
              <nav className='space-x-12'>
                <Link to={'/catalog'}>
                  <span className='font-medium text-gray-200'>
                    каталог
                  </span>
                </Link>
                <Link to={'about'}>
                  <span className='font-medium text-gray-200'>
                    о нас
                </span>
                </Link>
                <Link to={'contacts'}>
                  <span className='font-medium text-gray-200'>
                    контакты
                  </span>
                </Link>
              </nav>
            )}
          </div>
        </div>
      </div>
      {matches && (
        <Drawer isOpen={isDrawerOpen} onClose={handleDrawerMenuClose} />
      )} 
    </>
  )
}

export default Header