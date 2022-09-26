import React from 'react'
import { Link } from 'react-router-dom'
import "../style/landing.css"
const Landing = () => {
  return (
  <>
  <div className='landingpage'>
    <div className='left-container'>
      <img src={require('../image/night.jpg')} alt='main'></img>
    </div>
    <div className='right-container'>
      <div className='landing-text'>
        <p> let's see some posts</p>
        <Link to="/postview">
          <button className='landing-button'>Hit Me</button>
        </Link>
        
      </div> 
    </div>
  </div>
  </>
  )
}

export default Landing