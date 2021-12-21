import React, { useState } from 'react'


// Components


//Services
import { updatePost } from '../../services/postService'

const EditPost = (props) => {
  const authorId = props.post.added_by?._id ? props.post.added_by._id : props.post.added_by
  const isAuthor = props.user?.profile === authorId
  console.log("hello",props)
  const [text, setText] = useState({
    text:''
  })
  const handleChange=e =>{
    setText({...text, [e.target.name]: e.target.value})
  }
  console.log("TEXT",text);

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const editPost = await updatePost(props.post._id, text)
      setText({
        text:''
      })
      console.log(editPost) 
    } catch (error) {
      throw error
    }
  }

  return (
    isAuthor &&
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