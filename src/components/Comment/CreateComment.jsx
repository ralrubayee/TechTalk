import React, { useState } from "react"


const CreateComment = (props) => {
	const [text, setText] = useState('')
	const formData = {
    comment_text: text,
    commenter: props.user.profile
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleCreateComment(formData)
    setText('')
  }
  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <div className="question-prompt">
        <label>Enter your Comment</label>
      </div>
      <input
        required
        autoComplete='off'
        placeholder="Comment"
        name="comment_text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
      <div className="border"></div>
      <button type="submit"><i class="fas fa-location-arrow"></i></button>
    </form>
  )
}


export default CreateComment