import React from 'react'

const ProfileAction = (props) => {
  return(
    <>
      <button className='profile-button' onClick={props.onClick}><i class="fas fa-user-plus"></i></button>
    </>
  )
}

export default ProfileAction