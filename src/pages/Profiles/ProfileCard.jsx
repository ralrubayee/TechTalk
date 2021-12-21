import React, {useEffect, useState}from 'react'
import ProfileAction from './ProfileAction'

const ProfileCard = (props) => {
  const[isFriend, setIsFriend] = useState(props.myFriends.includes(props.profileId))
  const handleCheck=()=>{
    props.handleAddFriend(props.profile)
    setIsFriend(true)
  }

const isMe = props.user.includes(props.profileId)

  return(
    <div className="card-container">
      <div className="card">
        <img className="card-img" src={props.img} alt={props.name}  />
        <p className="card-title">{props.name}</p>
        {isFriend ? <button className='profile-button'><i class="far fa-check-square"></i></button> : isMe ? "" :
        <ProfileAction onClick={()=> handleCheck()}/>  }
      </div>
    </div>
  )
}

export default ProfileCard