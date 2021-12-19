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
    return (profile._id === props.user.profile)
  })

  const profileList = profiles.map((ele, idx)=> {
    return (
        <ProfileCard
          user={props.user.profile}
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