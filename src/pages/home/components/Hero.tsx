import React from 'react'
import { Link } from 'react-router-dom'
import hero from '../../../assets/hero.png'

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
                  
                It is flowery, inspired by the incredible beauty of the gardens. 
                The main characters of our bouquets are exotic flowers from all over the world. 
                Each flower is unique in its own way, and florists skillfully prove it.
                </p>
                <div className='flex flex-col gap-y-5 lg:flex-row lg:space-x-20'>
                  <Link to='catalog'>
                    <span className='underline text-gray-200'>
                      Go to catalog
                    </span>
                  </Link>
                  <a href='https://wa.me/87760009399' target='_blank'>
                    <span className='underline text-gray-200'>
                    Сontact the manager
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <img src={hero} className='min-h-[400px] object-cover' alt="" />
          </div>
        </div>
      {/* </div> */}
    </div>
  )
}

export default Hero