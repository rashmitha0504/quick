import React from 'react'
import './Offers.css'
import exclusive_img from '../assets/offers.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>Only on best sellers products</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_img} className='offer' alt="" />
        </div>
    </div>
  )
}

export default Offers