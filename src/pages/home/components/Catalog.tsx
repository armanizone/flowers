import React from 'react'
import { Link } from 'react-router-dom'
import { array } from '../../../db'
import { Flowers, IFlower } from '../../../types/Flower.type'

const Catalog = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>((props, ref) => {

  return (
    <>
      <div className='w-full' ref={ref}>
        <div className="space-y-8 md:space-y-16">
          <div className="bg-black py-6">
            <div className="container">
              <div className="space-y-6 md:space-y-10 py-6">
                <h2 className='text-white'>каталог</h2>
                <p className='description text-gray-200'>
                Давайте посмотрим на наши бомбезные букеты, которые включают в себя дерзость, природность, уникальность и стиль, создаваемый нами
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-8 gap-y-10 lg:gap-y-14'>
              {array.map((e, i) => {
                return (
                  <div key={i}>
                    <h3 className='min-h-[40px] leading-5'>{e.title}</h3>
                    <Link to={`/flowers/${e.name}`}>
                      <img src={e.image} alt="" className='w-full min-h-[200px]' />
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      {/* <Modal
        opened={modal}
        onClose={() => setModal(false)}
        centered
      >
        <Carousel
          loop
          mx='auto'
          slideGap='xs'
          // draggable={false}
          getEmblaApi={setEmbla}
          withControls={false}
        >
          {flowers?.flowers?.map((flower: IFlower, i: number) => {
            return (
              <Carousel.Slide 
                key={i} 
              >
                <div className='space-y-4 h-full'>
                  <img  
                    src={flower.image}
                    className='object-cover aspect-video'
                  />
                  <h3 className='grow'>
                    {flower.name}
                  </h3>
                  <p className='description mb-auto grow'>
                    {flower.description}
                  </p>
                  <h3 >
                    {flower.price} т
                  </h3>
                  <button 
                    className='w-full'
                    onClick={() => handleAddtoCart(flower)}
                  >
                    Купить
                  </button>
                </div>
              </Carousel.Slide>
            )
          })}
        </Carousel>
      </Modal> */}
    </>
  )
}) 

export default Catalog

