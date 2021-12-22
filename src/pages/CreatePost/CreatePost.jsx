import React, { useState } from 'react'


// Components
import PostForm from './PostForm'

//Services
import { createPost } from '../../services/postService'

const CreatePost = (props) => {
  const [text, setText] = useState('')

  const formData = {
    text: text, 
    added_by: props.user.profile, 
  }
  const handleCreatePost = async (e) => {
    e.preventDefault()
    try {
      const newPost = await createPost(formData)
      props.setPosts([newPost,...props.posts])
      setText('')
    } catch (error) {
      throw error
    }
  }
  console.log(props.user.profile)

  return (
    <div className="layout">
      <PostForm 
        text={text}
        setText={setText}
        handleCreatePost={handleCreatePost}
      />
    </div>
  )
}

export default CreatePost