import React from 'react'
 




const ProfileHeader=(props) =>{
console.log('ProfileHeader', props)

  return(
  <>
  <h1>Bio: {props.profile.bio}</h1>
  <h1 >gitHub: {props.profile.github}</h1>
  <h1> Linkedin: {props.profile.linkedin}</h1>
  <h1>Name: {props.profile.name}</h1>
  <img src={props.profile.avatar} alt={props.profile.name} />
  </>
  
  )
}


export default ProfileHeader