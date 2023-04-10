import React from 'react'
import './Css/login.css'

const Login = () => {
    return (
        <div>
            <div className='currenttab'>
                <span>You are here: Home / Login</span>
            </div>
            <div className='loginpage'>
                <div className="login-box">
                    <p>Login</p>
                    <form>
                        <div className="user-box">
                            <input required="" name="" type="text" />
                            <label>Email</label>
                        </div>
                        <div className="user-box">
                            <input required="" name="" type="password" />
                            <label>Password</label>
                        </div>
                        <a href="/">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Submit
                        </a>
                    </form>
                    <p>Don't have an account? <a href="/" className="a2">Sign up!</a></p>
                </div>
            </div>
        </div>
    )
}

export default Login