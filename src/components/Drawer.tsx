import React from 'react'
import { Link, useLocation } from 'react-router-dom';

function Drawer({isOpen, onClose}: {isOpen: boolean, onClose: () => void}) {

  const animation = isOpen ? 'translate-x-0' : 'translate-x-full';

  const { pathname } = useLocation()

  React.useEffect(() => {
    onClose()
  }, [pathname])

  return (
    <>
      {isOpen && (
        <div className='fixed z-10 top-0 bottom-0 left-0 right-0 bg-black indent-0 opacity-50' onClick={onClose}>
        </div>
      )}
      <div className={`fixed inset-y-0 right-0 z-10 w-48 bg-white shadow-xl ${animation} transition duration-300 ease-in-out`}>
        <div className="flex items-center justify-end px-4 py-3">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <nav className='flex flex-col gap-y-4 px-4 uppercase'>
          <Link to={'/catalog'}>
            <span className='font-medium text-slate-700'>
              каталог
            </span>
          </Link>
          {/* <Link to={'projects'}>
            <span className='font-medium text-slate-700'>
              проекты
            </span>
          </Link>
          <Link to={'media'}>
            <span className='font-medium text-slate-700'>
              сми
            </span>
          </Link> */}
          <Link to={'about'}>
            <span className='font-medium text-slate-700'>
              о нас
            </span>
          </Link>
          <Link to={'contacts'}>
            <span className='font-medium text-slate-700'>
              контакты
            </span>
          </Link>
        </nav>
      </div>
    </>
  )
}

export default Drawer