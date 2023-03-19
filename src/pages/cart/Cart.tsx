import React from 'react'
import { Button } from '@mantine/core'
import { CartItem } from '../../components'
import useModal from '../../hooks/useModal'
import { useSelector } from '../../redux/store'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

function Cart() {

  const [openModal] = useModal()
  const {logged} = useAuth()

  const { cartItems } = useSelector(state => state.cart)

  const cartTotalAmount = cartItems.map(e => {
    return e.count! * e.price
  }).reduce((a, b) => a + b, 0)


  const handlePurchase = () => {
    openModal.auth()
  }

  if (cartItems.length === 0) return (
    <div className='h-full w-full grid place-items-center'>
      <div>
        <h3>Cart is empty</h3>
        <span className='table mx-auto underline mt-4'>
          <Link to={'/catalog'}>
            Catalog
          </Link>
        </span>
      </div>
    </div>
  )

  return (
    <div className='w-full'>
      <div className="container">
        <div className="space-y-10">
          <h3 className='mt-10'>Cart</h3>
          <div className='border-t border-gray-500'>
            {cartItems.map(flower => {
              return (
                <CartItem product={flower} key={flower.id} />
              )
            })}
          </div>
          <div className='flex flex-col items-end'>
            <div className='space-y-2'>
              <p className='description'>
                Total cost: {cartTotalAmount} ₸
              </p>
              <Button fullWidth onClick={handlePurchase}>
                Buy
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Cart