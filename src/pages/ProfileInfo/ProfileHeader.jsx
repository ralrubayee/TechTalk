import React from 'react'



const ProfileHeader=(props) =>{
console.log('ProfileHeader', props)

  return(
  <>
  {/* <p>{props.user.name}</p> */}
  <p>Bio: {props.profile.bio}</p>
  <h1 >gitHub: {props.profile.github}</h1>
  <h1> Linkedin: {props.profile.linkedin}</h1>
  <h1>Name: {props.profile.name}</h1>
  <img src={props.profile.avatar} />

  </>
  )
}


export default ProfileHeader