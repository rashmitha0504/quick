import React from 'react'
import './Footer.css'
import footer_logo from '../assets/logo.png'
import instagram from '../assets/instagram_icon.png'
import pinterest from '../assets/pintester_icon.png'
import Whatsapp from '../assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} className='fologo' alt="" />
            <p>QUICK-5</p>
        </div>
        <ul className="footer-links">
            <li>Compnay</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <img src={instagram} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={pinterest} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={Whatsapp} alt="" />
            </div>
        </div>
        <div className="footer-copy-right">
            <hr/>
            <p>Copyright @ 2023 - All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer