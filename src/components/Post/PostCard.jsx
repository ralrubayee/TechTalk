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
      <div className="post-user-card">
        <img className="post-user-img" src ={props.post.added_by.avatar} alt={props.post.added_by.name}/>
        <h3>{props.post.added_by.name}</h3>
        <PostActions {...props} />
        {props.user.profile === props.post.added_by._id ?
          <>
          <button calssName="comment-btn"  id='btn' onClick={()=> handleClick()}><i class="fas fa-edit"></i></button>
        
        </>
        :''
      }
      </div>
      <div className="post-text">
        <p id="pTag">{props.post.text}</p>
      </div>
      {boolean ? 
        <EditPost 
          post={props.post} 
          user={props.user}
          handleUpdatePost={props.handleUpdatePost}
        />
      :''
      }
    </div>
  )
}

export default PostCard