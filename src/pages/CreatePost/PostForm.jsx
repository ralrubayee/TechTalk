import React from 'react'

const PostForm = (props) => {
  return (
    <form className="create-form">
      <div className="question-prompt">
        <label>Make A Post</label>
      </div>

      <textarea
        required
        name="text"
        autoComplete='off'
        placeholder="Make a Post"
      />

      <button type="submit">Submit</button>
    </form>
  )
}

export default PostForm