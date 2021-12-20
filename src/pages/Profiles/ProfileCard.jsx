import React from 'react'
import ProfileAction from './ProfileAction'

const ProfileCard = (props) => {
  

const isFriend = props.myFriends.includes(props.profileId)
const isMe = props.user.includes(props.profileId)

  return(
    <div className="card-container">
      <div className="card">
        <img className="card-img" src={props.img} alt={props.name}  />
        <p className="card-title">{props.name}</p>
        {isFriend ? <button className='profile-button'><i class="far fa-check-square"></i></button> : isMe ? "" :
        <ProfileAction onClick={props.onClick}/>  }
      </div>
    </div>
  )
}

export default ProfileCard