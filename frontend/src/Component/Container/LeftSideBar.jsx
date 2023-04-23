import React from 'react'
import './container.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus , faCircle } from '@fortawesome/free-solid-svg-icons'
import health from '../../assets/Cover_HealthServices.jpg'
import economics from '../../assets/economic.jpg'
import history from '../../assets/history.png'
import musical from '../../assets/musical.avif'
import science from '../../assets/science.avif'
import bankExam from '../../assets/upcoming-bank-jobs-.webp'



const LeftSideBar = () => {
  return (
    <div className='mt-2 left-container'>
  
      <div className='create-spaces' >
       <FontAwesomeIcon icon={faPlus} />
        <div>Create Space</div>
      </div>

      <div className='Side-options' >
        <img src={health} alt=""  className='img-option' />
        <div className='spaces-name'> Health</div>
      </div>

      <div className='Side-options' >
        <img src={economics} alt=""className='img-option' />
        <div className='spaces-name'> Economics</div>
      </div>
      <div className='Side-options' >
        <img src={history} alt=""  className='img-option' />
        <div className='spaces-name'> History</div>
      </div>
      <div className='Side-options' >
        <img src={musical} alt="" className='img-option' />
        <div className='spaces-name'> Music </div>
      </div>
      <div className='Side-options' >
        <img src={science} alt=""  className='img-option' />
        <div className='spaces-name'> Science</div>
      </div>
      <div className='Side-options' >
        <img src={bankExam} alt="" className='img-option' />
        <div className='spaces-name'>Bank Exams </div>
      </div>
      <hr/>
      <div style={{color : '#b1b3b5' , fontSize: '0.81rem', width: '11.5rem'}}>
        <span>About <FontAwesomeIcon icon={faCircle} className='circle-icon' /> </span>
        <span>Careers <FontAwesomeIcon icon={faCircle} className='circle-icon' /> </span>
        <span>Terms <FontAwesomeIcon icon={faCircle} className='circle-icon' /> </span>
        <span>Privacy <FontAwesomeIcon icon={faCircle} className='circle-icon' /> </span>
        <span>Accaptable Use <FontAwesomeIcon icon={faCircle} className='circle-icon' /> </span>
        <span>Businesses <FontAwesomeIcon icon={faCircle} className='circle-icon'  /> </span>
        <span>Press <FontAwesomeIcon icon={faCircle} className='circle-icon' /> </span>
        <span>Your Ad Choices <FontAwesomeIcon icon={faCircle} className='circle-icon' /> </span>
        <span> Grievance Officer <FontAwesomeIcon icon={faCircle} className='circle-icon' /> </span>

      </div>
    </div>
  )
}

export default LeftSideBar
