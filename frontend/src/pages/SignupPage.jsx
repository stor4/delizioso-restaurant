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
    const [errors, setErrors] = useState({})
    
    const validate = () => {
        const newErrors = {};
        if (!userName.length > 3) {
            newErrors.userName = 'Name length must be longer than 3 symbols'
        } else if (!userName) {
            newErrors.userName = 'Full name is required' 
        } else if (!/^[a-zA-Z]+$/.test(userName)) {
            newErrors.userName = 'Full name must contain only English letters'
        }

        if (!email) {
            newErrors.email = 'Email address is required'
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email address is invalid'
        }
        
        if (!psw) {
            newErrors.psw = 'Password is required' 
        } else if (psw.length < 6) {
            newErrors.psw = 'Password must be at least 6 characters'
        } else if (!/^[a-zA-Z]+$/.test(psw)) {
            newErrors.psw = 'Password must contain only English letters'
        }
        return newErrors;
    }

    const submit = async () => {
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
        } else {
            const response = await dispatch(actionFullSignUp(userName, psw, email))
            console.log(response)
        }
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
                    <input style={errors.userName ? {border: '1px solid red'} : {}} value={userName} onChange={e => setUserName(e.target.value)} className='d-input' type="text" id="username" />
                    {errors.userName && <p className="error-msg">{errors.userName}</p>}
                </div>
                <div className="signUp__input-container">
                    <label htmlFor="email">Email address</label>
                    <input style={errors.email ? {border: '1px solid red'} : {}} value={email} onChange={e => setEmail(e.target.value)} className='d-input' type="email" id="email" />
                    {errors.email && <p className="error-msg">{errors.email}</p>}
                </div>
                <div className="signUp__input-container">
                    <label htmlFor="password">Password</label>
                    <input style={errors.psw ? {border: '1px solid red'} : {}} value={psw} onChange={e => setPsw(e.target.value)} className='d-input' type="password" id="password" />
                    {errors.psw && <p className="error-msg">{errors.psw}</p>}
                </div>
                <div className="signUp__input-checkbox">
                <label className="control control-checkbox">
                    Remember me
                    <input type="checkbox"  />
                    <div className="control_indicator"></div>
                </label>
                    {/* <label htmlFor="terms">Remember me</label>
                    <input type="checkbox" id="terms" /> */}
                    {/* <a href="#" className="signUp__recover">Forget Password?</a> */}
                </div>
                <button onClick={submit} className="d-btn-secondary signUp__btn">Sign up</button>
                <p className="signUp__copyright">Copyright © 2022 Delizioso</p>
            </div>
            <div className="signUp__img">
               
                {/* {Math.random() > 0.5 ?  */}
                 <img src={bg1} alt="image" /> 
                 {/* <div className="signUp__bg2">
                    <img src={bg2} alt="image" />
                 </div> */}
                {/* } */}
            </div>
        </div>
    </div>
  )
}

export default SignupPage