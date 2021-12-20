import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import * as profileService from "../../services/profileService"



const ProfileInfoForm=() =>{
  const [formData, setFormData] = useState({
    bio:"",
    linkedin:"",
    github:"",
  })
  console.log('formData', formData)
  const handleChange = evt =>{
    setFormData({...formData, [evt.target.name]: [evt.target.value]})
  }
  // useEffect (()=>{
  //   const profileData = async await profileService.updateProfile()=>
  // })

const handleSumbit = async (e) =>{
  e.preventDefault()
  try {
    const editProfile = await profileService.updateProfile(formData)
    //navgate??
  } catch (error) {
    throw error
  }
}


  return(
    
    <form className='create-form' onSubit={handleSumbit}> 
      <input
        type="text"
        required
        name="linkedin"
        autoComplete='off'
        placeholder='linkedin'
        value=""
        onChange={handleChange}
      />
        
      <input
        type="text"
        required
        name="github"
        autoComplete='off'
        placeholder='github'
        value=""
        onChange={handleChange}
      />
      
      <input
        type="text"
        required
        name="brio"
        autoComplete='off'
        placeholder='bio'
        value=""
        onChange={handleChange}
      />
      <button type="submit">Save Changes</button>
    </form>
  )
}


export default ProfileInfoForm