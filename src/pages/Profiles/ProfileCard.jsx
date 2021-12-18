import React from 'react'
import ProfileAction from './ProfileAction'

const ProfileCard = (props) => {
  console.log(props)
  return(
    <div className="card-container">
      <div className="card">
        <img className="card-content" src={props.img} alt={props.name}  />
        <p className="card-title">{props.name}</p>
        <ProfileAction onClick={props.onClick}/>
      </div>
    </div>
  )
}

export default ProfileCard