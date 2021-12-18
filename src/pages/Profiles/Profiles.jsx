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
    return (
      <ProfileCard
        img={ele.avatar}
        name={ele.name}
        key={idx}
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