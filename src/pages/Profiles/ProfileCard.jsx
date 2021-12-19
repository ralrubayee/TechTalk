import React from 'react'
import ProfileAction from './ProfileAction'

const ProfileCard = (props) => {
  console.log("profilecard props", props.friends)

const isFriend = props.myFriends.includes(props.profileId)
    


  return(
    <div className="card-container">
      <div className="card">
        <img className="card-content" src={props.img} alt={props.name}  />
        <p className="card-title">{props.name}</p>
        {isFriend ? "" :
        <ProfileAction onClick={props.onClick}/>  }
      </div>
    </div>
  )
}

export default ProfileCard