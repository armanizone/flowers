import clsx from 'clsx'
import React from 'react'

const array = [
  {title: 'Букет', img: 'https://thumb.tildacdn.com/tild3034-3862-4434-b566-366164333730/-/cover/360x460/center/center/-/format/webp/_.jpg'},
  {title: 'Большой букет', img: 'https://thumb.tildacdn.com/tild3630-6235-4866-a430-663330313237/-/cover/360x460/center/center/-/format/webp/__.jpg'},
  // // {title: 'Цветущие ветви', img: 'https://thumb.tildacdn.com/tild3437-6233-4539-a466-336363336535/-/cover/360x460/center/center/-/format/webp/_.jpg'},
  {title: 'Моно', img: 'https://thumb.tildacdn.com/tild6164-6338-4130-b134-323638613565/-/cover/360x460/center/center/-/format/webp/photo.jpg'},
  {title: 'Ведро с цветами', img: 'https://thumb.tildacdn.com/tild6362-6662-4034-b736-623632363430/-/cover/360x460/center/center/-/format/webp/IMG_7050.jpg'},
  // // {title: 'Луковицы в горшках', img: 'https://thumb.tildacdn.com/tild3066-3239-4563-a561-326139316263/-/cover/360x460/center/center/-/format/webp/_.jpg'},
  // // {title: 'Подписка', img: 'https://thumb.tildacdn.com/tild3238-3738-4434-b839-626134333332/-/cover/360x460/center/center/-/format/webp/_.jpg'},
  // // {title: 'Вазы', img: 'https://thumb.tildacdn.com/tild6337-6137-4433-b230-356561323062/-/cover/360x460/center/center/-/format/webp/_.jpg'},
  // // {title: 'Весенняя композиция', img: 'https://thumb.tildacdn.com/tild3666-3438-4666-a433-643566323832/-/cover/360x460/center/center/-/format/webp/_.jpg'},
]

const Catalog = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>((props, ref) => {
  return (
    <div className='w-full' ref={ref}>
      {/* <div className="container"> */}
        <div className="space-y-8 md:space-y-16">
          <div className="bg-black py-6">
            <div className="container">
              <div className="space-y-6 md:space-y-10 py-6">
                <h2 className='text-white'>каталог</h2>
                <p className='description text-gray-200'>
                  В любом заказе вы найдете отражение наших главных ценностей: уникальность, 
                  выраженная сезонность, профессионализм. Благодаря этому наши работы неизбежно становятся центром притяжения и источником вдохновения.
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-8 gap-y-10 lg:gap-y-14'>
              {array.map((e: any, i: number) => {
                return (
                  <div 
                    // className={clsx('space-y-1 lg:space-y-4',{
                    //   'col-span-2 lg:col-span-1': e.title === 'Весенняя композиция'
                    // })} 
                    key={i}
                  >
                    <h3 className='min-h-[40px] leading-5'>{e.title}</h3>
                    <img src={e.img} alt="" className='w-full min-h-[200px]' />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  )
}) 

export default Catalog

