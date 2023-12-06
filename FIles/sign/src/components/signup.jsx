import React, { useRef, useState } from 'react'
import './signup.css'

    import Logo from '../assets/Logo.png';
    import Blob1 from '../assets/Blob1.png';
    import Blob2 from '../assets/Blob2.png';
    import user1 from '../assets/user1.png';
    import mail from '../assets/mail.png';
    import padlock from '../assets/padlock.png';

export const Signup = ()   => {
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
            <div className='sidetext'>
                Elevate Your Meetings <br />to the Future<br />
            </div>
            <div className="text">
                SynergyMeet AI revolutionizes <br />collaboration by integrating <br /> advanced AI into video <br />meetings, turning discussions <br />into dynamic and efficient<br /> sessions that yield tangible <br />results.
            </div>
            <div className='container'>
                <div className="header">
                    Sign Up
                </div>
                <div className="inputs">
                    <div className="input">
                        <img src={user1} alt="" />
                        <input type="Fullname" placeholder='Full Name' />
                    </div>
                    <div className="input">
                        <img src={mail} alt="" />
                        <input type="email" placeholder='Email' />
                    </div>
                    <div className="input">
                        <img src={padlock} alt="" />
                        <input type={show ? "text" : "password"} placeholder='Create Password' />
                        <label onClick={handleShow}>{show ? "Hide" : "Show"}</label>
                    </div>
                    <div className="input">
                        <img src={padlock} alt="" />
                        <input type={show ? "text" : "password"} placeholder='Confirm Password' />
                        <label onClick={handleShow}>{show ? "Hide" : "Show"}</label>
                    </div>
                </div>
                <div className="submit-contaier">
                    <div className="submit">Sign Up</div>
                </div>
                <div className="Log">Already have an account?<span>Login</span></div>
            </div>
        </div>
    )
}
export default Signup;