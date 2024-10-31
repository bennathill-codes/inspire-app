import React from 'react'
import './LoginForm.css';
import { FaUserAlt, FaLock } from "react-icons/fa"

function LoginForm() {
  return (
    <div className='wrapper'>
        <form action=''>
            <h1>Login</h1>
            <div className='input-box'>
                <input className='username' type='text' placeholder='Username' required />
                <span className='icon'><FaUserAlt /></span>
            </div>
            <div className='input-box'>
                <input className='password' type='text' placeholder='Password' required />
                <span className='icon'><FaLock /></span>
            </div>
            <div className='remember-forgot'>
                <label htmlFor=''>
                    <input type='checkbox'/>Remember me</label>
                    <a href='#'>Forgot password?</a>
            </div>
            <button type='submit'>Login</button>
            <div className='register-link'>
                <p>Don't have an account? <a href='#'>Register</a></p>
            </div>
        </form>
    </div>
  )
}

export default LoginForm