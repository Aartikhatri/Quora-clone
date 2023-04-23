import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import Post from './Post'
import axios from 'axios'
import ShimmerEffect from './ShimmerEffect'

const Feed = () => {
   const [allPostQues , setAllPostQues] = useState([]);

  useEffect(()=>{
    get_APi()
  }  , [])

  const get_APi = ()=>{
    axios.get('/que').then((res)=>{
      console.log(res.data.reverse());
      setAllPostQues(res.data)
     }).catch((e)=> console.log(e))
  }


  return (
    <div >
      {/* <h1>feed post</h1> */}
      <SearchBar />
      <div className=''>
         {
          (allPostQues.length === 0 ) ? <ShimmerEffect /> : <div>  {allPostQues.map((post_item) => ( <Post key={post_item.id}  post={post_item} />))  }</div>
         }
      </div>
    </div>
  )
}

export default Feed
