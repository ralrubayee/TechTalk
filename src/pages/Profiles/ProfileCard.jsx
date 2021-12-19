import React from 'react'
import ProfileAction from './ProfileAction'

const ProfileCard = (props) => {

const isFriend = props.myFriends.includes(props.profileId)
const isMe = props.user.includes(props.profileId)

  return(
    <div className="card-container">
      <div className="card">
        <img className="card-content" src={props.img} alt={props.name}  />
        <p className="card-title">{props.name}</p>
        {isFriend ? "" : isMe ? "" :
        <ProfileAction onClick={props.onClick}/>  }
      </div>
    </div>
  )
}

export default ProfileCard