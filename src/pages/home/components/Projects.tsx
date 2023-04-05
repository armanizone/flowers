import React from 'react'
import { useMediaQuery } from '@mantine/hooks';

import up from '../../../assets/up.jpg'
import down from '../../../assets/down.jpg'

const Projects = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>((props, ref) => {

  const matches = useMediaQuery('(max-width: 1024px)');

  return (
    <div className='w-full' ref={ref}>
      <div className="container">
        <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-x-8 relative'>

          {!matches && (
            <div className='flex flex-col justify-end lg:mr-16 order-1 lg:order-none mb-10 lg:mb-24'>
              <div className='space-y-10'>
                <img src={down} className='max-w-[300px] w-full' alt="" />
                <div className="description">Brunch at the House of Cultures</div>
              </div>
            </div>
          )}

          <div className='space-y-8 lg:space-y-16 col-span-2 order-0 lg:order-none mb-10 lg:mb-24'>
            <div className="space-y-6 lg:space-y-10">
              <h2>
                projects
              </h2>
              <p className='description'>
              We listen to every wish, just let us know. We are engaged in the design of facades, showcases, premises and street events
              </p>
            </div>
            <div className="space-y-8 lg:space-y-16">
              <div className="space-y-6 lg:space-y-10">
                <img src={up} className='w-full' alt="" />
                <p className='description'>Restaurant decoration @whiterabbitmoscow</p>
              </div>
              <h2 className='text-3xl lg:text-4xl'>EXPLORE YOUR EXPECTATIONS AND TELL YOUR STORY WITH FLOWERS THROUGH THE PRISM "IN OUR GARDEN"</h2>
            </div>
          </div>

          {matches && (
            <div className='relative'>

              <div className=' lg:mr-16 lg:order-none'>
                <div className='space-y-6'>
                  <img src="https://thumb.tildacdn.com/tild3061-6462-4233-b461-373332316635/-/cover/360x456/center/center/-/format/webp/_.png" className=' w-full' alt="" />
                  <div className="description">Brunch at the House of Cultures</div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  )
}) 

export default Projects