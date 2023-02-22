import React from 'react'

const array = [
  'https://static.tildacdn.com/tild6538-3938-4362-a361-373039366662/svg-8.svg',
  'https://static.tildacdn.com/tild6539-3633-4761-a536-306561303065/svg-7.svg',
  'https://static.tildacdn.com/tild6130-3631-4536-b032-396166393830/svg-3.svg',
  'https://static.tildacdn.com/tild6532-3163-4639-b566-633236393566/svg-1.svg',
  'https://static.tildacdn.com/tild3534-6361-4262-b162-343565613037/svg-4.svg',
  'https://static.tildacdn.com/tild6334-6465-4333-b739-316165616137/svg-9.svg',
  'https://static.tildacdn.com/tild3465-3134-4438-b039-363566636265/svg.svg',
  'https://static.tildacdn.com/tild3531-3131-4666-a165-623239626164/svg-2.svg',
  'https://static.tildacdn.com/tild3166-3662-4535-b366-666538306332/svg-5.svg',
  'https://static.tildacdn.com/tild3534-3135-4466-a436-386165383939/svg-6.svg'
]

const Media = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>((props, ref) => {
  return (
    <div className='w-full' ref={ref}>
      <div className="container">
        <div className="space-y-8 lg:space-y-16">
          <h2>пресса о нас</h2>
          <div className='grid grid-cols-2 lg:grid-cols-5 border-t border-l border-black'>
            {array.map((e: any, i: number) => {
              return (
                <div key={i} className='border-b border-r border-black relative px-14 py-24  lg:px-20 lg:py-28'>
                  <img src={e} alt="" className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[120px] sm:max-w-[160px] lg:max-w-full' />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}) 

export default Media