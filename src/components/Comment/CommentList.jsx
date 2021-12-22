import React from "react"

//Components
import CommentCard from './CommentCard'

const CommentList = (props) => {
  console.log('this props.commen', props.comments)
  return (
    props.comments?.map((comment) => (
      <CommentCard
        {...props}
        key={comment._id}
        comment={comment}
      />
    ))
  )
}

export default CommentList