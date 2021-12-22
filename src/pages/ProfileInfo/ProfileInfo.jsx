import React from 'react'
import * as profileService from '../../services/profileService'
import {useState, useEffect} from  "react"
import ToDoSection from "../../components/ToDo/ToDoSection"

import ProfileHeader from './ProfileHeader'
import ProfileInfoForm from "./ProfileInfoForm"


const ProfileInfo = (props) => {
console.log('this is props from profile info', props)
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
        {myProfile &&
        <ToDoSection 
        user={props.user}
        profile={myProfile}
        />
        }
      </>
      
  )
}

export default ProfileInfo