import * as tokenService from '../services/tokenService'

const BASE_URL = '/api/profiles'

async function getAllProfiles() {
  const res = await fetch(BASE_URL, {
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}


export const addFriend = async (profile) => {
  try {
    const res = await fetch(`${BASE_URL}/friends/${profile}`, {
      method: "PUT",
      headers: { 'Authorization': 'Bearer ' + tokenService.getToken() },
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

async function profileInfo(Id) {
  try {
    const res = await fetch(`${BASE_URL}/${Id}`,{
      headers: { 'Authorization': 'Bearer ' + tokenService.getToken()},
    })

    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}


export { 
  getAllProfiles,
  profileInfo,
}
