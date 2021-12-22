import React, { useState, useEffect } from 'react'

// Services
import { getAllPosts, deletePost} from '../services/postService'

// Components
import PostCard from '../components/Post/PostCard'
import CreatePost from './CreatePost/CreatePost'
import CommentSection from '../components/Comment/CommentSection'

const PostList = (props) => {
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])

  const handleUpdatePost = async (updatedPost) => {
    const newPostsArray = posts.map(post => 
      post._id === updatedPost._id ? updatedPost : post
    )
   setPosts(newPostsArray)
  }

  const handleDeletePost = async (postId) => {
  try {
    await deletePost(postId)
    const newPostsArray = posts.filter(post => 
      post._id !== postId 
    )
    setPosts(newPostsArray)
   
  } catch (error) {
    throw error
  }
}
  useEffect(() => {
    const fetchAllPosts = async () => {
      const postData = await getAllPosts()
      setPosts(postData)
    }
    fetchAllPosts()
    return () => { setPosts([]) } 
  }, [])

  console.log('comments',comments)
  return (
    <div>
      <h1>Posts!</h1>
      <CreatePost user={props.user}
      posts={posts}
      setPosts={setPosts}
      />
      {posts?.map((post) => (
      <>
        <PostCard
          post={post}
          key={post._id}
          user={props.user}
          handleDeletePost={handleDeletePost}
          handleUpdatePost ={handleUpdatePost}
          />
        <CommentSection
          post={post}
          setPost={setPosts}
          user={props.user}
          comments={comments}
          setComments={setComments}
          handleUpdatePost={handleUpdatePost}
          /> 
      </>
          ))}
    </div>
  )
}

export default PostList