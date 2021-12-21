import React from 'react'
import PostActions from './PostActions';
const PostCard = (props) => {
  console.log("prpod", props);
  return (
    <div className="post-card">
      <div className="card-header">
        <PostActions {...props} />
        <img src ={props.post.added_by.avatar} alt={props.post.added_by.name}/>
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