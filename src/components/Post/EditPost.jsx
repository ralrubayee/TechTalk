import React, { useState } from 'react'


// Components
import PostForm from '../../pages/CreatePost/PostForm'

//Services
import { updatePost } from '../../services/postService'

const EditPost = (props) => {
  // const authorId = props.post.added_by._id ? props.post.added_by._id : props.post.added_by
  // const isAuthor = props.user?.profile === authorId
  const [text, setText] = useState({
    text:props.post.text
  })
  const handleChange=e =>{
    setText({...text, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const editPost = await updatePost(props.post._id, text)
      setText({
        text:''
      })
      props.handleUpdatePost(editPost)
    } catch (error) {
      throw error
    }
  }
  console.log('this is text', text)
  return (
    <form className='create-form' onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        autoComplete='off'
        placeholder='text'
        value={text.text}
        onChange={handleChange}
      />
      <button type="submit">Save Changes</button>
    </form>

  )
}

export default EditPost