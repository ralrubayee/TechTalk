import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import ProfileCard from '../Profiles/ProfileCard'

const Profiles = () => {
  const [profiles, setProfiles] = useState([])
  
  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles => setProfiles(profiles))
  }, [])


  const profileList = profiles.map((ele, idx)=> {
    console.log("loggg",profileService.addFriend(profiles.id))
    return (
      <ProfileCard
        profileId={ele._id}
        img={ele.avatar}
        name={ele.name}
        key={idx}
        onClick={()=> profileService.addFriend(ele._id)}
      />
    )
  })

  return (
    <>
    {profileList}
    </>
  )
}

export default Profiles