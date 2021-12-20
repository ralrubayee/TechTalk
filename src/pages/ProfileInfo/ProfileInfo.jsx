import { useNavigate } from "react-router-dom"
import React from 'react'
import * as profileService from '../../services/profileService'
import {useState, useEffect} from  "react"

import ProfileHeader from './ProfileHeader'
 


const ProfileInfo = (props) => {

  const [myProfile, setMyProfile] = useState({})
  
  useEffect(()=>{
    const getProfile = async()=>{

      const profile = await profileService.profileInfo(props.user.profile)
      setMyProfile(profile) 
    }
    getProfile()
  },[])
  // console.log('myProfile', profileService.profileInfo(props.user.profile))
console.log('my profile', myProfile)  
  return(
      <>

        <ProfileHeader user={props.user} />

      </>
  )
}

export default ProfileInfo