import React from 'react'
import { Link } from 'react-router-dom'

const Contacts = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>((props, ref) => {
  return (
    <div className='w-full' ref={ref}>
      {/* <div className="container"> */}
        <div className="bg-black py-10">
          <div className="container">
            <div className='grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_2fr] gap-y-8'>
              <div className='col-span-2 md:col-span-1'>
                <h3 className='mb-2 text-white'>В нашем саду</h3>
                <p className='description mb-8 text-gray-200'>цветы.букеты.доставка</p>
                <p className='description text-gray-200'>
                  Магазин и мастерская <br/> Б Саввинский 9с1
                </p>
              </div>
              <div className='flex flex-col  space-y-4 order-2 md:order-none'>
                <span>
                  <Link to='catalog'><span className='description text-base text-gray-200'>Каталог</span></Link>
                </span>
                {/* <span>
                  <Link to='projects'><span className='description text-base'>Проекты</span></Link>
                </span> */}
                {/* <span>
                  <Link to='media'><span className='description text-base'>Сми</span></Link>
                </span> */}
                <span>
                  <Link to='about'><span className='description text-base text-gray-200'>О asd</span></Link>
                </span>
              </div>
              <div className='flex flex-col space-y-4 order-1 md:order-none'>
                <span>
                  <a href='catalog'><span className='description text-base text-gray-200'>+7 977 878 22 02</span></a>
                </span>
                <span>
                  <a href='projects'><span className='description text-base text-gray-200'>Instagram</span></a>
                </span>
                <span>
                  <a href='media'><span className='description text-base text-gray-200'>Whatsapp</span></a>
                </span>
                <span>
                  <a href='about'><span className='description text-base text-gray-200'>О нас</span></a>
                </span>
              </div>
              <div className='order-3 md:order-none col-span-2 md:col-span-1'>
                <p className='description md:text-right text-gray-200'>Политика конфиденциальности</p>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  )
}) 

export default Contacts