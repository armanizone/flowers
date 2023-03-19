import React from 'react'
import { useMediaQuery } from '@mantine/hooks';

const Projects = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>((props, ref) => {

  const matches = useMediaQuery('(max-width: 1024px)');

  return (
    <div className='w-full' ref={ref}>
      <div className="container">
        <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-x-8 relative'>

          {!matches && (
            <div className='flex flex-col justify-end lg:mr-16 order-1 lg:order-none mb-10 lg:mb-24'>
              <div className='space-y-10'>
                <img src="https://thumb.tildacdn.com/tild3061-6462-4233-b461-373332316635/-/cover/360x456/center/center/-/format/webp/_.png" className='max-w-[300px] w-full' alt="" />
                <div className="description">Бранч в Доме Культур</div>
              </div>
            </div>
          )}

          <div className='space-y-8 lg:space-y-16 col-span-2 order-0 lg:order-none mb-10 lg:mb-24'>
            <div className="space-y-6 lg:space-y-10">
              <h2>
                проекты
              </h2>
              <p className='description'>
              Реализует идеи по декорации Ваших celebrations, мы прислушиваемся к каждому желанию, просто сообщите. Мы занимаемся оформлением фасадов, витрин, помещений и уличных мероприятий
              </p>
            </div>
            <div className="space-y-8 lg:space-y-16">
              <div className="space-y-6 lg:space-y-10">
                <img src="https://thumb.tildacdn.com/tild3238-3863-4434-b362-316135373133/-/cover/760x420/center/center/-/format/webp/IMG_7199-7.png" className='w-full' alt="" />
                <p className='description'>Оформление ресторана @whiterabbitmoscow</p>
              </div>
              <h2 className='text-3xl lg:text-4xl'>ИССЛЕДУЕМ ВАШИ ОЖИДАНИЯ И РАССКАЗЫВАЕМ О ВАС ЦВЕТАМИ СКВОЗЬ ПРИЗМУ "В НАШЕМ САДУ"</h2>
            </div>
          </div>

          {matches && (
            <div className='relative'>

              <div className=' lg:mr-16 lg:order-none'>
                <div className='space-y-6'>
                  <img src="https://thumb.tildacdn.com/tild3061-6462-4233-b461-373332316635/-/cover/360x456/center/center/-/format/webp/_.png" className=' w-full' alt="" />
                  <div className="description">Бранч в Доме Культур</div>
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