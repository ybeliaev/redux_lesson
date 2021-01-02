import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../redux/actions'

import Post from './Post'



export default () => {  
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts.fetchedPosts)
  console.log("fetchPost: ", posts)
  if(!posts.length){
    return <button 
      className="btn btn-primary" 
      onClick={()=>dispatch(fetchPosts())}
      >Загрузить</button>
  }
 
  return posts.map(post => <Post post={post} key={post.id} />)
}
