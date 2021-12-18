import React from 'react'

const ProfileCard = (props) => {
  console.log(props)
  return(
    <div className="card-container">
      <div className="card">
        <img className="card-content" src={props.img} alt={props.name}  />
        <p className="card-title">{props.name}</p>
      </div>
    </div>
  )
}

export default ProfileCard