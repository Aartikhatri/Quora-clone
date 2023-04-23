import React, { useEffect } from 'react'
import skill from '../../assets/skill.png'

const RightSideBar = () => {

  useEffect(()=>{

    return()=>{

    }
  }, [])

  

  return (
    <div>

      <div className="advertisement mt-2">
        <p style={{color: 'grey' , textAlign : 'center'}} >Advertisement</p>
        <hr />
         <img src={skill} alt="" width="100%" />
        
       {/* <iframe src="https://www.youtube.com/embed/1EYmVAmXPhc?autoplay=0&mute=0" width={300}></iframe>
 
       <iframe src="https://www.youtube.com/embed/1EYmVAmXPhc?autoplay=0&mute=0" width={300}></iframe> */}
   


      </div>
    </div>
  )
}

export default RightSideBar
