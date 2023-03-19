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
            <div className='grid grid-cols-2 grid-rows-2 relative gap-x-4 mb-10'>

              <div className=' lg:mr-16 lg:order-none'>
                <div className='space-y-6'>
                  <img src="https://thumb.tildacdn.com/tild3061-6462-4233-b461-373332316635/-/cover/360x456/center/center/-/format/webp/_.png" className=' w-full' alt="" />
                  <div className="description">Бранч в Доме Культур</div>
                </div>
              </div>

              <div className='-mt-[50%] row-start-2 col-start-2 lg:ml-16'>
                <div className='space-y-6'>
                  <img src="https://thumb.tildacdn.com/tild6533-6134-4239-a231-663064326434/-/cover/360x456/center/center/-/format/webp/IMG_7199-4.png" className=' w-full' alt="" />
                  <div className="description">Осенний фасад @v_nashem_sadu</div>
                </div>
              </div>

              <div className='-mt-[100%] row-start-3 lg:mr-16 lg:order-none'>
                <div className="space-y-6">
                  <img src="https://thumb.tildacdn.com/tild3935-3730-4336-b834-303335363930/-/cover/360x456/center/center/-/format/webp/IMG_7199-5.png" className=' w-full' alt="" />
                  <p>Семейный выезд команды</p>
                </div>
              </div>

            </div>
          )}

          <div className="space-y-8 lg:space-y-16 col-span-2 order-5 lg:order-none mb-10 lg:mb-24">
            <div className='space-y-6 lg:space-y-10'>
              <img src='https://thumb.tildacdn.com/tild6538-6462-4039-b931-386339633566/-/cover/760x420/center/center/-/format/webp/IMG_7199-2.png' className='w-full' alt="" />
              <div className="description">Воскресный ужин в гостях у Альбины Джанабаевой</div>
            </div>
            <h2 className='text-3xl lg:text-4xl'>ДЛЯ НАС ОЧЕНЬ ВАЖНО ПЕРЕДАТЬ ХАРАКТЕР И НАСТРОЕНИЕ МЕСТА ЧЕРЕЗ ДЕКОРАТИВНОЕ НАПОЛНЕНИЕ</h2>
          </div>
          
          {!matches && (
            <div className='flex flex-col justify-end lg:ml-16 order-3 lg:order-none col-span-2 lg:col-span-1 mb-10 lg:mb-24'>
              <div className='space-y-6 lg:space-y-10'>
                <img src="https://thumb.tildacdn.com/tild6533-6134-4239-a231-663064326434/-/cover/360x456/center/center/-/format/webp/IMG_7199-4.png" className='max-w-[300px] w-full' alt="" />
                <div className="description">Осенний фасад @v_nashem_sadu</div>
              </div>
            </div>
          )}

          {!matches && (            
            <div className='flex flex-col justify-end mr-16 order-4 lg:order-none'>
              <div className="space-y-6 lg:space-y-10">
                <img src="https://thumb.tildacdn.com/tild3935-3730-4336-b834-303335363930/-/cover/360x456/center/center/-/format/webp/IMG_7199-5.png" className='max-w-[300px] w-full' alt="" />
                <p>Семейный выезд команды</p>
              </div>
            </div>
          )}

          <div className='space-y-16 lg:space-y-56 col-span-2 order-6 lg:order-none'>
            <div className='space-y-6 lg:space-y-10'>
              <img src="https://thumb.tildacdn.com/tild3262-3833-4661-a463-323366306263/-/cover/760x420/center/center/-/format/webp/photo.png" className='w-full' alt="" />
              <p className='description'>Новогодний фасад мастерской @v_nashem_sadu</p>
            </div>
            {/* <button className='text-sm lg:text-base border border-slate-700 block w-full p-4 text-slate-700 font-medium hover:bg-black hover:text-white transition-all duration-300 ease-in-out'>Получить расчет индивидуального проекта</button> */}
          </div>

        </div>

      </div>
    </div>
  )
}) 

export default Projects