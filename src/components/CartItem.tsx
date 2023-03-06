import React from 'react'
import { Button, Text } from '@mantine/core'

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { IFlower } from '../types/Flower.type'
import { addToCart, removeFromCart } from '../redux/slices/cartSlice'
import { useDispatch } from '../redux/store'

import { ActionIcon } from '@mantine/core'

function CartItem({product}: {product: IFlower}) {

  const total = product?.count! * product.price

  const dispatch = useDispatch()

  const addMore = (product: any) => {
    dispatch(addToCart(product))
  }

  const remove = (product: any) => {
    dispatch(removeFromCart(product))
  }

  return (
    <div className='flex justify-between items-center py-6 border-b border-black  px-4'>
      <div className='flex gap-4 max-w-md max-h-[120px] overflow-hidden flex-grow'>
        <img 
          src={product.image} 
          alt={product.name} 
          className='aspect-square max-w-[120px] object-cover' 
        />
        <div className='flex flex-col'>
          <h3 className='font-semibold text-xl'>
            {product.name}
          </h3>
          <Text lineClamp={4}>
            {product.description}
          </Text>
        </div>
      </div>
      <p className='font-semibold text-lg ' >
        {product.price}$
      </p>
      <div className='flex items-center gap-4'>
        <ActionIcon 
          onClick={() => remove(product)}
          size={20}
        >
          <AiOutlineMinus className='text-xl'/>
        </ActionIcon>
        <span>
          {product.count}
        </span>
        <ActionIcon 
          onClick={() => addMore(product)}
          size={20}
        >
          <AiOutlinePlus className='text-xl'/>
        </ActionIcon>
      </div>
      <div className='font-semibold text-lg'>
        {total}$
      </div>
    </div>
  )
}

export default CartItem