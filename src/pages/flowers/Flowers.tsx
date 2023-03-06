import { Modal } from '@mantine/core'
import React from 'react'
import { useParams } from 'react-router'
import { array } from '../../db'
import { addToCart } from '../../redux/slices/cartSlice'
import { useDispatch, useSelector } from '../../redux/store'
import { Flowers as IFlowers, IFlower } from '../../types/Flower.type'

function Flowers() {

  const {name} = useParams()
  const dispatch = useDispatch()
  const {cartItems} = useSelector(state => state.cart)

  const [flowers, setFlowers] = React.useState<IFlowers>()

  const label = array.find(e => {
    return e.name === name
  })?.title

  React.useEffect(() => {
    setFlowers(array.find(e => {
      return e.name === name
    }))
  }, [])

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
              {flowers?.flowers.map((flower, i) => {
                return (
                  <div key={i} onClick={() => handleFlowerClick(flower)}>
                    <h3 className='min-h-[40px] leading-5'>{flower.name}</h3>
                    <img src={flower.image} alt="" className='w-full h-[473px] aspect-square object-cover' />
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
      >
        <div className='h-full'>
          <img  
            src={flower.image}
            className='aspect-video object-cover mb-4'
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