import React,{useState}from 'react'
import PostActions from './PostActions';
import EditPost from './EditPost';



const PostCard = (props) => {
  const [boolean, setBoolean]= useState(false)
  const handleClick = ()=> {
          boolean?
          setBoolean(false)
          :
          setBoolean(true)
          return
        }
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
      {props.user.profile === props.post.added_by._id ?
      
      <>
      <button onClick={()=> handleClick()}>edit</button>
    
      {boolean ? 
      <EditPost post={props.post} 
      user={props.user}
      handleUpdatePost={props.handleUpdatePost}
      />
      
      :''
}
     </>
      :''
      }
    </div>
  )
}

export default PostCard