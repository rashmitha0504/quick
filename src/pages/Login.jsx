import React, { useState } from 'react'
import './CSS/Login.css'

const Login = () => {
  const[action,setAction]=useState("Sign Up")
  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==='Login'?<div></div>:
                <div className="input">
                <input type="text" placeholder="Full Name"/>
                </div>
            }
            
            <div className="input">
                <input type="email" placeholder="Email" />
            </div>
            <div className="input">
                <input type="password" placeholder='Password'/>
            </div>
        </div>
        {action==='Sign Up'?<div></div>:
        <div className="forgot-pass">Forgot Password ? <span className='spans'>Click here</span></div>
        }
        
        <div className="submit-con">
            <div className={action==='Login'?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>
                Sign Up
            </div>
            <div className={action==='Sign Up'?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>
                Login
            </div>
        </div>
    </div>
  )
}

export default Login