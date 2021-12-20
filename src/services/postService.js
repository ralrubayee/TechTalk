import * as tokenService from './tokenService'
const BASE_URL = '/api/posts/' 

export const getAllPosts = async () => {
  try {
    const res = await fetch(`${BASE_URL}`)
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const createPost = async (post) => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(post)
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}


export const getPostById = async (postId) => {
	try {
		const res = await fetch(`${BASE_URL}${postId}`);
		const data = await res.json();
		return data;
	} catch (error) {
		throw error;
	}
};


export const createComment = async (postId, comment) => {
	try {
		const res = await fetch(`${BASE_URL}${postId}/comments`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				Authorization: `Bearer ${tokenService.getToken()}`,
			},
			body: JSON.stringify(comment),
		});
		const data = await res.json();
		return data;
	} catch (error) {
		throw error;
	}
};


export const deleteComment = async (postId, commentId) => {
	try {
		await fetch(`${BASE_URL}${postId}/comments/${commentId}`, {
			method: 'DELETE',
			headers: {
				Authorization: 'Bearer ' + tokenService.getToken(),
			},
		});
	} catch (error) {
		throw error;
	}
};