import React from 'react'
import home from "../assets/d.svg"
import bg1 from "../assets/login-bg1.png"
import bg2 from "../assets/login-bg2.png"

function LoginPage() {
  return (
    <div className='login'>
        <div className="container login__container">
            <div className="login__form">
                <a href="/" className="login__home">
                    <p>D</p>
                </a>
                <h2>Login</h2>
                <p className="login__already">Don't have an account? 
                    <a href="/signup"> Sign up</a>
                </p>
                <div className="login__input-container">
                    <label htmlFor="username">Full name</label>
                    <input className='d-input' type="text" id="username" />
                </div>
                <div className="login__input-container">
                    <label htmlFor="email">Email address</label>
                    <input className='d-input' type="email" id="email" />
                </div>
                <div className="login__input-container">
                    <label htmlFor="password">Password</label>
                    <input className='d-input' type="password" id="password" />
                </div>
                <div className="login__input-checkbox">
                <label className="control control-checkbox">
                    Remember me
                    <input type="checkbox"  />
                    <div className="control_indicator"></div>
                </label>
                    <a href="#" className="login__recover">Forget Password?</a>
                </div>
                <button className="d-btn-secondary login__btn">Sign up</button>
                <p className="login__copyright">Copyright © 2022 Delizioso</p>
            </div>
            <div className="login__img">
               
                {Math.random() > 0.5 ? 
                 <img src={bg1} alt="image" /> :
                 <div className="login__bg2">
                    <img src={bg2} alt="image" />
                 </div>
                }
            </div>
        </div>
    </div>
  )
}

export default LoginPage