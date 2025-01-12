import React from 'react'
import { CardProps } from '@/interfaces'

const Card : React.FC<CardProps> = ({title, content}) => {
  return (
    <>
        <div className='flex flex-col gap-4 rounded shadow-md'>
            <h2 className='font-bold text-lg'>{title}</h2>
            <p className='text-sm text-gray-600'>{content}</p>
        </div>
    </>
  )
}

export default Card