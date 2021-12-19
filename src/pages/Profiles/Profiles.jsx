import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import ProfileCard from '../Profiles/ProfileCard'

const Profiles = (props) => {
  const [profiles, setProfiles] = useState([])
  
  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles => setProfiles(profiles))
  }, [])

  const myProfile = profiles.filter(profile => {
    if (profile._id === props.user.profile) {
      return profile
    }
  })

  const profileList = profiles.map((ele, idx)=> {
    console.log("my id", props.user.profile)
    return (
      <ProfileCard
        profileId={ele._id}
        img={ele.avatar}
        name={ele.name}
        key={idx}
        onClick={()=> profileService.addFriend(ele._id)}
        myFriends={myProfile[0].friends}
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