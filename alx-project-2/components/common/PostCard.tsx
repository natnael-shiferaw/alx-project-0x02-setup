import React from 'react'
import { PostProps } from '@/interfaces'

const PostCard: React.FC<PostProps> = ({title, content, userId}) => {
  return (
    <div className='flex flex-col gap-2 p-4 w-full  shadow-md shadow-emerald-500 rounded-lg text-gray-800'>
        <h3 className=' text-center font-semibold text-2xl'>
            Title: {title}
        </h3>
        <h4 className='font-semibold text-xl'>
            User: {userId}
        </h4>
        <p className='text-sm'>
            {content}
        </p>
    </div>
  )
}

export default PostCard
