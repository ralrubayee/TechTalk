import React from "react";


const PostActions = (props) => {
  console.log(props)
  const authorId = props.post.added_by?._id ? props.post.added_by._id : props.post.added_by
  const isAuthor = props.user?.profile === authorId

  return (
    isAuthor &&
    <div className="interactions">
      <button onClick={() => props.handleDeletePost(props.post._id)}>Delete</button>
    </div >
  )
}



export default PostActions