import React, { useState } from 'react'
import home from "../assets/d.svg"
import bg1 from "../assets/login-bg1.png"
import bg2 from "../assets/login-bg2.png"
import { useDispatch } from 'react-redux'
import actionFullSignUp from '../actions/actionFullSignUp'

function SignupPage() {
    const dispatch = useDispatch()
    const [userName, setUserName] = useState('')
    const [psw, setPsw] = useState('')
    const [email, setEmail] = useState('') 

    const submit = async() => {
        const response = await dispatch(actionFullSignUp(userName, psw, email))
        console.log(response)
    }

    return (
    <div className='signUp'>
        <div className="container signUp__container">
            <div className="signUp__form">
                <a href="/" className="signUp__home">
                    <p>D</p>
                </a>
                <h2>Sign up</h2>
                <p className="signUp__already">Already have an account? 
                    <a href="/login"> Log in</a>
                </p>
                <div className="signUp__input-container">
                    <label htmlFor="username">Full name</label>
                    <input value={userName} onChange={e => setUserName(e.target.value)} className='d-input' type="text" id="username" />
                </div>
                <div className="signUp__input-container">
                    <label htmlFor="email">Email address</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} className='d-input' type="email" id="email" />
                </div>
                <div className="signUp__input-container">
                    <label htmlFor="password">Password</label>
                    <input value={psw} onChange={e => setPsw(e.target.value)} className='d-input' type="password" id="password" />
                </div>
                <div className="signUp__input-checkbox">
                <label className="control control-checkbox">
                    Remember me
                    <input type="checkbox"  />
                    <div className="control_indicator"></div>
                </label>

                    {/* <label htmlFor="terms">Remember me</label>
                    <input type="checkbox" id="terms" /> */}
                    <a href="#" className="signUp__recover">Forget Password?</a>
                </div>
                <button onClick={submit} className="d-btn-secondary signUp__btn">Sign up</button>
                <p className="signUp__copyright">Copyright © 2022 Delizioso</p>
            </div>
            <div className="signUp__img">
               
                {Math.random() > 0.5 ? 
                 <img src={bg1} alt="image" /> :
                 <div className="signUp__bg2">
                    <img src={bg2} alt="image" />
                 </div>
                }
            </div>
        </div>
    </div>
  )
}

export default SignupPage