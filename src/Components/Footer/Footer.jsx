import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import Linkedin from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'
import GPlay from '../../assets/google-play-store.png'
import APlay from '../../assets/apple-app-store.png'
import footerbg from '../../assets/footer-bg.jpg'

const Footer = () => {
  return (
    <div className="footer-container">
        <hr/>
        <img src={footerbg} alt="" className='background' />
        <div className="footer">
            <div className="social-links">
            <img src={Github} alt="" />
            <img src={Instagram} alt="" />
            <img src={Linkedin} alt="" />
        </div>
        <div className="logo-f">
            <img src={Logo} alt="" />
        </div>
        </div>
        <div className="blur blur-f-l"></div>
        <div className="blur blur-f-r"></div>
        <div className="download-from">
        <img src={GPlay} alt="" />
        <img src={APlay} alt="" />
        </div>
    </div>
  )
}

export default Footer
