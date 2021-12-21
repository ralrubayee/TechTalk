import { useNavigate } from "react-router-dom"
import React from 'react'
import * as profileService from '../../services/profileService'
import {useState, useEffect} from  "react"
import ToDo from "../../components/ToDo/ToDo"

import ProfileHeader from './ProfileHeader'
import ProfileInfoForm from "./ProfileInfoForm"
import { set } from "mongoose"


const ProfileInfo = (props) => {

  const [myProfile, setMyProfile] = useState({})
  
  useEffect(()=>{
    const getProfile = async()=>{

      const profile = await profileService.profileInfo(props.user.profile)
      setMyProfile(profile) 
    }
    getProfile()
  },[props.user.profile])
  // console.log('myProfile', profileService.profileInfo(props.user.profile))
console.log('my profile', myProfile)  
  return(
      <>

        <ProfileHeader 
        user={props.user}
        profile = {myProfile}
        />
        <ProfileInfoForm profile={myProfile} setMyProfile= {setMyProfile} />
        <ToDo />
      </>
      
  )
}

export default ProfileInfo