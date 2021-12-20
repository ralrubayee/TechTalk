import React from 'react'



const ProfileHeader=(props) =>{
console.log('ProfileHeader', props)

  return(
  <>
  {/* <p>{props.user.name}</p> */}
  <h2>{props.profile.name}</h2>
  
  </>
  )
}


export default ProfileHeader