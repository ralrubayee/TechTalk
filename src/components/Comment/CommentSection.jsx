import React, { useState, useEffect} from "react"


// Components
import CommentList from './CommentList'
import CreateComment from './CreateComment'

// Services
import * as postService from '../../services/postService'

const CommentSection = (props) => {
  const [posts, setPosts]=useState()
  const comments = props.post.comments
  console.log("comments", comments);
  console.log("props.post", props.post);
  const handleCreateComment = async (formData) => {
  try {
    const newComment = await postService.createComment(props.post._id, formData)
    // setPosts
  } catch (error) {
    throw error
  }
}
  return (
    <div className="comment-section">
      <div className="header">
        <h3>Comment Section</h3>
        <div className="header-buttons"></div>
      </div>
      <CreateComment {...props}
      handleCreateComment={handleCreateComment}
      />
      <CommentList comments={comments} />
    </div>
  )
}

export default CommentSection