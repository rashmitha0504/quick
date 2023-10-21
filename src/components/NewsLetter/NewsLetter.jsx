import React from 'react'
import './Newsletter.css'


const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers on Your Email</h1>
        <p>Subscribe to our newsletter and stay updates</p>
        <div>
            <input type="email" placholder="Your email id"/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter