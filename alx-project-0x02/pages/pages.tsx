import PostCard from '@/components/common/PostCard'
import Header from '@/components/layout/Header'
import { Post } from '@/interfaces'
import React, { useEffect, useState } from 'react'

function Pages() {
    const [posts, setPosts] = useState<Post[]>([])

    useEffect(() => {
      const postData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data : Post[] = await response.json()
        setPosts(data)
      }
      postData()
    
      }
    , [])
    

  return (
      <>
          <Header />
          <div className='flex flex-col gap-4 mt-2'>
            <h1 className='text-3xl font-bold'>A page for Posts</h1>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {posts.map((post) => (
                    <PostCard key={post.id} 
                              title={post.title}
                              content={post.body}
                              userId={post.userId.toString()}
                        />
                ))}
            </div>
          </div>
      </>
  )
}

export default Pages