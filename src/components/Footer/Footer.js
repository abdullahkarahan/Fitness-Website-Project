import React from 'react'
import './Footer.css'
import instagram from '../../assets/images/instagram.png'
import linkedin from '../../assets/images/linkedin.png'
import logo from '../../assets/images/logo1.png'

const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={instagram} alt="" />
          <img src={linkedin} alt="" />
        </div>

        <div className="logo-f">
          <img src={logo} alt="" />
        </div>
        <h3>@2022 All rights reserved</h3>
      </div>
    </div>
  )
}

export default Footer
