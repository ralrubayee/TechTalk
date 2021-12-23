import React from 'react'


const CommentActions = (props) => {
  return (
    <div className="interactions">
      <button id='btnn' onClick={() => props.handleDeleteComment(props.comment._id)}><i class="far fa-times-circle"></i></button>
    </div>
  )
}

export default CommentActions