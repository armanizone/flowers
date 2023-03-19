import { Modal } from '@mantine/core'
import { Record } from 'pocketbase'
import React from 'react'
import { useOutletContext, useParams } from 'react-router'
import { OutletContext } from '../../App'
import { array } from '../../db'
import { addToCart } from '../../redux/slices/cartSlice'
import { useDispatch, useSelector } from '../../redux/store'
import { Flowers as IFlowers, IFlower } from '../../types/Flower.type'
import { getUrl, pb } from '../../utils/pocketbase'

function Flowers() {


  const {flowers} = useOutletContext<OutletContext>()

  const {name} = useParams()

  const dispatch = useDispatch()
  const {cartItems} = useSelector(state => state.cart)

  const currentFlowers = flowers?.filter(e => {
    return e?.id === name
  })?.[0]

  const label = flowers?.find((e: any) => {
    return e.name === name
  })?.title

  const [modal, setModal] = React.useState(false)
  const [flower, setFlower] = React.useState<IFlower>({} as IFlower)

  const handleFlowerClick = (val: IFlower) => {
    setModal(true)
    setFlower(val)
  }

  const handleAddtoCart = (val: IFlower) => {
    dispatch(addToCart(val))
  }

  const foundCartItem = cartItems.find(e => {
    return e.id === flower.id
  })

  return (
    <>
      <div className="w-full">
        <div className="container">
          <div className="space-y-10 mt-8">
            <h3>{label}</h3>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-8 gap-y-10 lg:gap-y-14'>
              {currentFlowers?.expand?.flowers?.map((flower: any, i: number) => {
                return (
                  <div key={i} onClick={() => handleFlowerClick(flower)}>
                    <h3 className='min-h-[40px] leading-5'>{flower.name}</h3>
                    <img src={getUrl(flower, flower?.image)} alt="" className='w-full h-[473px] object-cover' />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <Modal
        opened={modal}
        onClose={() => setModal(false)}
        centered
        padding={0}
        withCloseButton={false}
        radius={0}
        size='sm'
      >
        <div className='h-full'>
          <img  
            src={getUrl(flower, flower?.image)}
            className='object-contain mb-4'
          />
          <div className='p-4 space-y-4'>
            <h3>
              {flower.name}
            </h3>
            <p className='description mb-auto grow'>
              {flower.description}
            </p>
            <h3 >
              {flower.price} т
            </h3>
            {foundCartItem ? 
                <button 
                  className='w-full'
                  onClick={() => handleAddtoCart(flower)}
                >
                  В корзине ({foundCartItem.count})
                </button>
              :
                <button 
                  className='w-full'
                  onClick={() => handleAddtoCart(flower)}
                >
                  В корзину
                </button>
            }
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Flowers