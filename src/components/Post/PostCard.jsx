import React from 'react'
import PostActions from './PostActions';
import EditPost from './EditPost';



const PostCard = (props) => {
  console.log(props.post)
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
     
     {props.user._id = props.post.added_by._id ?
      <EditPost post={props.post} 
      user={props.user}
      />
      :''
     }
    </div>
  )
}

export default PostCard