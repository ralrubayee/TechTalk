import React from 'react'
 




const ProfileHeader=(props) =>{
console.log('ProfileHeader', props)

  return(
  <>
  <div className= "Bio">
  <h1>{props.profile.name} <img src={props.profile.avatar} alt={props.profile.name} /></h1>
  <h1>GitHub: {props.profile.github}</h1>
  <h1>Bio: {props.profile.bio}</h1>
  <h1>Linkedin: {props.profile.linkedin}</h1>
  </div>
  </>
  
  )
}


export default ProfileHeader