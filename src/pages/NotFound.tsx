import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='h-screen w-screen grid place-items-center'>
      <div>
        <h3>Страница не найдена</h3>
        <span className='table mx-auto underline mt-4'>
          <Link to={'/'}>
            На главную
          </Link>
        </span>
      </div>
    </div>
  )
}

export default NotFound