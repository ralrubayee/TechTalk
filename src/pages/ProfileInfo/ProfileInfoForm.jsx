import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import * as profileService from "../../services/profileService"



const ProfileInfoForm=() =>{
  const [formData, setFormData] = useState({
    bio:"",
    linkedin:"",
    github:"",
  })
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
    
  } catch (error) {
    throw error
  }
}

  // console.log(props)

  return(
    
      <div>
      </div>

  )
}


export default ProfileInfoForm