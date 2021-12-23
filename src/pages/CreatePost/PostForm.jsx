import React from 'react'

const PostForm = (props) => {
  return (
    <form className="post-form" onSubmit={props.handleCreatePost}>
      <div className="post-prompt">
        <label>Make A Post</label>
      </div>
      <textarea
        // style={{resize: "vertical", minHeight:"95px"}}
        required
        name="text"
        autoComplete='off'
        value={props.text}
        onChange={(e) => props.setText(e.target.value)}
      />
      <div className="border"></div>
      <div className="border"></div>
      <button className='submit-btn' type="submit">Submit</button>
    </form>
  )
}

export default PostForm