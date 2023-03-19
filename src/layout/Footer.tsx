import React from 'react'
import { Link } from 'react-router-dom'

const Footer = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>((props, ref) => {
  return (
    <div className='w-full mt-16 md:mt-24' ref={ref}>
      <div className="bg-black py-10">
        <div className="container">
          <div className='grid grid-cols-2 md:grid-cols-[2fr_2fr_1fr] gap-y-8'>
            <div className='col-span-2 md:col-span-1'>
              <h3 className='mb-2 text-white'>В нашем саду</h3>
              <p className='description mb-8 text-gray-200'>цветы.букеты.доставка</p>
              <p className='description text-gray-200'>
                Магазин и мастерская <br/> Маркова 39 г.Алматы
              </p>
            </div>
            <div className='flex flex-col  space-y-4 order-2 md:order-none'>
              <span>
                <Link to='catalog'><span className='description text-base text-gray-200'>Каталог</span></Link>
              </span>
              <span>
                <Link to='about'><span className='description text-base text-gray-200'>Проекты</span></Link>
              </span>
            </div>
            <div className='flex flex-col space-y-4 order-1 md:order-none'>
                <a 
                  href='https://wa.me/87760009399' 
                  target='_blank'
                >
                  <span className='description text-base text-gray-200'>
                    +7 776 000 93 99
                  </span>
                </a>
                <a 
                  href='https://www.instagram.com/v_nashem_sadu' 
                  target='_blank'><span className='description text-base text-gray-200'>Instagram</span></a>
                <a 
                  href='https://wa.me/87760009399' 
                  target='_blank'
                >
                  <span className='description text-base text-gray-200'>
                    Whatsapp
                  </span>
                </a>
                <a href='projects'><span className='description text-base text-gray-200'>Проекты</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}) 

export default Footer