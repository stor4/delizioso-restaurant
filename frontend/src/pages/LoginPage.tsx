import {useState} from 'react'
import home from "../assets/d.svg"
import bg1 from "../assets/login-bg1.png"
import bg2 from "../assets/login-bg2.png"
import { useDispatch } from 'react-redux'
import { actionFullLogin } from '../actions/actionFullLogin'
import { useNavigate } from 'react-router-dom'

interface ErrorsInterface {
    userName: string;
    psw: string;
}

function LoginPage() {
    const dispatch = useDispatch()
    const [userName, setUserName] = useState('')
    const [psw, setPsw] = useState('')
    const [errors, setErrors] = useState<Partial<ErrorsInterface>>({})
    const navigate = useNavigate()

    const validate = () => {
        const newErrors: Partial<ErrorsInterface> = {};
        if (userName.length < 3) {
            newErrors.userName = 'Name length must be longer than 3 symbols'
        } else if (!userName) {
            newErrors.userName = 'Full name is required' 
        } else if (!/^[a-zA-Z]+$/.test(userName)) {
            newErrors.userName = 'Full name must contain only English letters'
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
            const response = await dispatch(actionFullLogin(userName, psw) as any)
            if (response.token) {
                navigate('/');
            }
        }
    }

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
                    <input style={errors.userName ? {border: '1px solid red'} : {}} value={userName} onChange={(e) => setUserName(e.target.value)} className='d-input' type="text" id="username" />
                    {errors.userName && <p className="error-msg">{errors.userName}</p>}
                </div>
                <div className="login__input-container">
                    <label htmlFor="password">Password</label>
                    <input style={errors.psw ? {border: '1px solid red'} : {}} value={psw} onChange={(e) => setPsw(e.target.value)} className='d-input' type="password" id="password" />
                    {errors.psw && <p className="error-msg">{errors.psw}</p>}
                </div>
                <div className="login__input-checkbox">
                <label className="control control-checkbox">
                    Remember me
                    <input type="checkbox"  />
                    <div className="control_indicator"></div>
                </label>
                    <a href="#" className="login__recover">Forget Password?</a>
                </div>
                <button onClick={submit} className="d-btn-secondary login__btn">Login</button>
                <p className="login__copyright">Copyright © 2022 Delizioso</p>
            </div>
            <div className="login__img">
               
                {/* {Math.random() > 0.5 ?  */}
                 <img src={bg1} alt="image" /> 
                 {/* <div className="login__bg2">
                    <img src={bg2} alt="image" />
                 </div> */}
                {/* } */}
            </div>
        </div>
    </div>
  )
}

export default LoginPage