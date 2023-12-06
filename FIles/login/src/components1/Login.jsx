import React, { useRef, useState } from 'react'
import './login.css'


import mail from '../assessts/mail.png'
import padlock from '../assessts/padlock.png'
import Blob1 from '../assessts/Blob1.png'
import Blob2 from '../assessts/Blob2.png'
import Logo from '../assessts/Logo.png'

export const Login = () => {
    const [show, setShow] = useState(false)
    const handleShow = () => {
        setShow(!show)
    }
    return (
        <div className='contain'>
            <div className="top">
                <img src={Logo} alt="" />
            </div>
            <div className="Blob1">
                <img src={Blob1} alt="" />
            </div>
            <div className="Blob2">
                <img src={Blob2} alt="" />
            </div>
            <div className='container'>
                <div className="header">
                    <div className="text">Welcome back!</div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <img src={mail} alt="" />
                        <input type="email" placeholder='Email' />
                    </div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <img src={padlock} alt="" />
                        <input type={show ? "text" : "password"} placeholder='Confirm Password' />
                        <label onClick={handleShow}>{show ? "Hide" : "Show"}</label>
                    </div>
                </div>
                <div className="forget-password"><span>forget password ?</span></div>
                <div className="submit-contaier">
                    <div className="submit"><span>Login</span></div>
                </div>
                <div className="signup">don't have an account?<span>Signup!</span></div>
            </div>
        </div>
    )
}
export default Login;
