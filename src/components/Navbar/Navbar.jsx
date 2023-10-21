import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'

const Navbar = () => {
    const[menu,setMenu]=useState("shop")
    const {getTotalCartItems}=useContext(ShopContext)

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} className='logo' alt=""/>
            <p>QUICK-5</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to="/">Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Home-Needs")}}><Link style={{textDecoration:'none'}} to="/home-needs">Home Needs</Link>{menu==="Home-Needs"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("accessories")}}><Link style={{textDecoration:'none'}} to="/accessories">Accessories</Link>{menu==="accessories"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("sweets")}}><Link style={{textDecoration:'none'}} to="/sweet-cravings">Sweets</Link>{menu==="sweets"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to="/login"><button>Login</button></Link>
            <Link to="/cart"><img src={cart_icon} className='cart' alt=""/></Link>
            <div className="nav-cart-count">
                {getTotalCartItems()}
            </div>
        </div>
    </div>
  )
}

export default Navbar