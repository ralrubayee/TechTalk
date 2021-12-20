import React from 'react'



const ProfileHeader=(props) =>{
console.log('ProfileHeader', props)

  return(
  <>
  <p>{props.user.name}</p>
  
  </>
  )
}


export default ProfileHeader