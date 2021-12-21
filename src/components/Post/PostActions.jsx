import React from "react";
import { updatePost } from "../../services/postService";

const PostActions = (props) => {
  console.log("postAction",props)
  const authorId = props.post.added_by?._id ? props.post.added_by._id : props.post.added_by
  const isAuthor = props.user?.profile === authorId
  
  return (
    isAuthor &&
    <div className="interactions">
      {/* <button onClick={() => props.handleSubmit(props.post._id)}>Edit</button> */}
      <button onClick={() => props.handleDeletePost(props.post._id)}>Delete</button>
    </div >
  )
}



export default PostActions