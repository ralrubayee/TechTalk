import React from "react"


//Components
// import UserCard from '../misc/UserCard'
import UserCard from "../../misc/UserCard";
import CommentActions from './CommentActions'

const CommentCard = (props) => {

  return (
    <div className="comment-card">

      <div className="user-header">
        <UserCard
          profile={props.comment.commenter}
        /> 
        <CommentActions {...props} />
      </div>
      <div className="question-container">
        <p>
          {props.comment.comment_text}
        </p>
      </div>
    </div>
  )
}

export default CommentCard