import React from "react";

const PostActions = (props) => {
  const authorId = props.post.added_by?._id ? props.post.added_by._id : props.post.added_by
  const isAuthor = props.user?.profile === authorId
  
  return (
    isAuthor &&
    <div className="interactions">
      <button id="btn" onClick={() => props.handleDeletePost(props.post._id)}><i class="far fa-times-circle"></i></button>
    </div >
  )
}



export default PostActions