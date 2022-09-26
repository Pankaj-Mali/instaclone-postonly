import "../style/heade.css"

import React from 'react'
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="header-container">
       <section className="icon">
            <img src={require("../image/insta.jpg")} alt="insataclone"  className="icon">
            </img>
        </section>

        <section className="image">
          <Link to='/addPost'>
            <img src={require("../image/camera.webp")} 
            alt="insataclone"  className="header-image" />
          </Link>
            
        </section>

    </div>
  )
}

export default Header