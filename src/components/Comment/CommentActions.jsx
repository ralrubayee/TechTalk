import React from 'react'


const CommentActions = (props) => {
  return (
    <div className="interactions">
      <button onClick={() => props.handleDeleteComment(props.comment._id)}>Delete</button>
    </div>
  )
}

export default CommentActions