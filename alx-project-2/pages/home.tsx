import Card from '@/components/common/Card'
import PostModal from '@/components/common/PostModal'
import React, { useState } from 'react'

function Home() {
    const [isModalOpen,setIsModalOpen] = useState(false)
    const [posts, setPosts] = useState<{title: string, content:string}[]>([])

    const handleAddPost = (title: string, content: string) => {
        setPosts((prevPosts) => [...prevPosts, {title, content}])
    }

  return (
      <>
          <h1 className='text-2xl font-semibold m-6'>Home page</h1>
          <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
          >
              Add Post
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {posts.map((post, index) => (
                <Card key={index} title={post.title} content={post.content} />
            ))}
          </div>

          <PostModal isOpen={isModalOpen}
                     onClose={() => setIsModalOpen(false)}
                     onSave={handleAddPost}
          />
      </>
  )
}

export default Home