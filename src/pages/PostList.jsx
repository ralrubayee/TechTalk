import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
// Services
import { getAllPosts,getPostById, createComment} from '../services/postService'

// Components
import PostCard from '../components/Post/PostCard'
import CreatePost from './CreatePost/CreatePost'
import CommentSection from '../components/Comment/CommentSection'

const PostList = (props) => {
  // console.log("postlist444",props.user);

  const [posts, setPosts] = useState([])
  useEffect(() => {
    const fetchAllPosts = async () => {
      const postData = await getAllPosts()
      setPosts(postData)
      console.log("PostData", postData);
    }
    fetchAllPosts()
    return () => { setPosts([]) } 
  }, [])

  
  return (
    <div>
      <h1>Posts!</h1>
      <CreatePost user={props.user}/>
      {posts?.map((post) => (
      <>
        <PostCard
          post={post}
          key={post._id}
          />
        <CommentSection
          post={post}
          setPost={setPosts}
          user={props.user}
          // comments={comments}
          // setComments={setComments}
          /> 
      </>
          ))}
    </div>
  )
}

export default PostList