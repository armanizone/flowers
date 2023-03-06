import React from 'react'
import { Button, Text } from '@mantine/core'

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { IFlower } from '../types/Flower.type'
import { addToCart, removeFromCart } from '../redux/slices/cartSlice'
import { useDispatch } from '../redux/store'

import { ActionIcon } from '@mantine/core'
import { getUrl } from '../utils/pocketbase'

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
    <div className='flex flex-col md:flex-row justify-between items-center py-6 border-b border-black md:px-4 gap-4 md:gap-8'>
      <div className='flex mr-auto gap-4 max-w-md max-h-[120px] overflow-hidden flex-grow'>
        <img 
          src={getUrl(product, product.image)} 
          alt={product.name} 
          className='aspect-square max-w-[120px] object-cover' 
        />
        <div className='flex flex-col'>
          <h3 className='font-semibold text-xl'>
            {product.name}
          </h3>
          <Text lineClamp={4}>
            <span className='text-sm md:text-base'>
              {product.description}
            </span>
          </Text>
        </div>
      </div>
      <div className='flex justify-between items-center w-full'>
        <p className='font-semibold text-lg ' >
          {product.price} ₸
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
          {total} ₸
        </div>
      </div>
    </div>
  )
}

export default CartItem