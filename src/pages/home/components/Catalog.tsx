import { Record } from 'pocketbase'
import React from 'react'
import { Link } from 'react-router-dom'
import { getUrl } from '../../../utils/pocketbase'

interface CatalogProps {
  flowers?: any[]
}

const Catalog = React.forwardRef<HTMLDivElement, React.PropsWithChildren<CatalogProps>>((props, ref) => {

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
              {props.flowers?.map((e, i) => {
                return (
                  <div key={i}>
                    <h3 className='min-h-[40px] leading-5'>{e.title}</h3>
                    <Link to={`/flowers/${e.name}`}>
                      <img src={getUrl(e, e?.image)} alt="" className='w-full min-h-[200px]' />
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}) 

export default Catalog

