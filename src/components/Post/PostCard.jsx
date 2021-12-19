import React from 'react'

const PostCard = (props) => {
  return (
    <div className="post-card">
      <div className="card-header">
        <h3>{props.post.added_by.name}</h3>
      </div>
      <div className="text">
        <p>{props.post.text}</p>
      </div>
      <div className="comment-dropdown"></div>
    </div>
  )
}

export default PostCard