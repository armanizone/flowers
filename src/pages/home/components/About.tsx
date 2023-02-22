import React from 'react'

const About = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>((props, ref) => {
  return (
    <div className='w-full' ref={ref}>
      <div className="space-y-8 lg:space-y-16">
        <div className="bg-black py-6">
          <div className="container">
            <div className="space-y-6 lg:space-y-10">
              <h2 className='text-white'>о нас</h2>
              <div className="description text-gray-200">
              Каждый наш флорист — профессионал своего дела, искренне любящий цветы и людей. Чуткость сотрудников в процессе выбора цветов, 
              скорость сборки и доставки, экспертные рекомендации по уходу — всё это создаёт ту атмосферу и качество, которыми мы гордимся.
              </div>
            </div>
          </div>
        </div>
          <div className="container">
            <img src="https://thumb.tildacdn.com/tild3864-3535-4237-a361-363632366337/-/format/webp/_.jpg" alt="" />
          </div>
      </div>
    </div>
  )
}) 


export default About