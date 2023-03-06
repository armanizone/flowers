import React from 'react'
import { Button } from '@mantine/core'
import { CartItem } from '../../components'
import useModal from '../../hooks/useModal'
import { useSelector } from '../../redux/store'

function Cart() {

  const { cartItems } = useSelector(state => state.cart)

  const cartTotalAmount = cartItems.map(e => {
    return e.count! * e.price
  }).reduce((a, b) => a + b, 0)

  const [openModal] = useModal()

  return (
    <div className='w-full'>
      <div className="container">
        <div className="space-y-10">
        <h3 className='mt-10'>Корзина</h3>
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
                Общая сумма: {cartTotalAmount} T
              </p>
              <Button fullWidth onClick={() => openModal.auth()}>
                Купить
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart