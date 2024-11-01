import React, { useState } from 'react'
import './LoginRegisterForm.css';
import { FaUserAlt, FaLock, FaEnvelope } from "react-icons/fa"

function LoginRegisterForm() {

    const [action, setAction] = useState('');

    const registerLink = () => {
        setAction(' active');
    };

    const loginLink = () => {
        setAction('');
    };


  return (
    <div className={`wrapper${action}`}>
        <div className='form-box login'>
            <form action=''>
                <h1>Login</h1>
                <div className='input-box'>
                    <input className='username' type='text' placeholder='Username' required />
                    <span className='icon'><FaUserAlt /></span>
                </div>
                <div className='input-box'>
                    <input className='password' type='password' placeholder='Password' required />
                    <span className='icon'><FaLock /></span>
                </div>
                <div className='remember-forgot'>
                    <label htmlFor=''>
                        <input type='checkbox'/>Remember me</label>
                        <a href='#'>Forgot password?</a>
                </div>
                <button type='submit'>Login</button>
                <div className='register-link'>
                    <p>Craving some inspiration? <a href='#' onClick={registerLink}>Register</a></p>
                </div>
            </form>
        </div>
        <div className='form-box register'>
            <form action=''>
                <h1>Register</h1>
                <div className='input-box'>
                    <input className='username' type='text' placeholder='Username' required />
                    <span className='icon'><FaUserAlt /></span>
                </div>
                <div className='input-box'>
                    <input className='email' type='email' placeholder='Email' required />
                    <span className='icon'><FaEnvelope /></span>
                </div>
                <div className='input-box'>
                    <input className='password' type='password' placeholder='Password' required />
                    <span className='icon'><FaLock /></span>
                </div>
                <div className='terms-conditions'>
                    <label htmlFor=''>
                        <input type='checkbox'/>I agree to the terms & conditions</label>
                </div>
                <button type='submit'>Create Account</button>
                <div className='register-link'>
                    <p>Already have an account? <a href='#' onClick={loginLink}>Login</a></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoginRegisterForm