import { PostModalProps } from '@/interfaces'
import React, { useState } from 'react'

const PostModal: React.FC<PostModalProps> = ({isOpen, onClose, onSave}) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleSave = () => {
        onSave(title, content)
        setTitle('')
        setContent('')
        onClose()
    }
    if (!isOpen) return null
  
    return (
    <>
        <div className='w-96 rounded shadow-md bg-slate-50'>
            <h2 className='text-lg font-semibold'>Add a post</h2>
            <input type="text"
                   placeholder='Title'
                   value={title}
                   onChange={(e) => setTitle(e.target.value)}
            />
            <textarea placeholder='Content'
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
            />
            <button
                onClick={onClose}
                className='bg-gray-300 rounded'
                >
                Cancel
            </button>
            <button
                onClick={handleSave}
                className='bg-green-300 rounded'
                >
                Save
            </button>

        </div>
    </>
  )
}

export default PostModal
