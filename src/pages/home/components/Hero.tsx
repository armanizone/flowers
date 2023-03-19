import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/3.png'

function Hero() {
  return (
    <div className='w-full'>
      {/* <div className="container"> */}
        <div className='space-y-8 lg:space-y-12'>
          <div className="bg-black pb-6">
            <div className="container">
              <h1 
                className='uppercase font-[500] text-[54px] 
                md:text-7xl lg:text-[99px] xl:text-[130px] tracking-widest 
                leading-[50px] text-white lg:leading-[130px] mb-6 lg:mb-8'
              >
                В нашем саду
                </h1>
              <div className='flex flex-col md:flex-row md:justify-between md:items-end'>
                <p className='description mb-5 md:mb-0 text-gray-200'>
                Это цветочный, вдохновлённый невероятной красотой садов. 
                Главными героями наших букетов являются экзотические цветы со всех уголков мира. Каждый цветок уникален по-своему, а флористы умело это доказывают.
                </p>
                <div className='flex flex-col gap-y-5 lg:flex-row lg:space-x-20'>
                  <Link to='catalog'>
                    <span className='underline text-gray-200'>
                      Перейти в каталог
                    </span>
                  </Link>
                  <a href='https://wa.me/87760009399' target='_blank'>
                    <span className='underline text-gray-200'>
                    Связаться с менеджером
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <img src="https://static.tildacdn.com/tild6135-6233-4964-b535-633537383764/photo.png" className='min-h-[400px] object-cover' alt="" />
          </div>
        </div>
      {/* </div> */}
    </div>
  )
}

export default Hero