import React from 'react'
import './Home.css'
import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import home_image from '../assets/home.png'

const Home = () => {
  return (
    <div className='home'> 
        <div className="home-left">
            <h2>Eat fresh, feel fresh</h2>
            <div>
                <div className='home-hand-icon'>
                    <p>Fresh</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>Products</p>
                <p>For Everyone</p>
            </div>
            <div className="home-latest-btn">
                <div>
                    Shop Now
                </div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className="home-right">
            <img src={home_image} className='home-img' alt="" />
        </div>
    </div>
  )
}

export default Home