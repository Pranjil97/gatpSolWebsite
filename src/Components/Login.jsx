import React, { useEffect } from 'react'
import './Css/login.css'
// import { useForm } from 'react-hook-form';

const Login = () => {

    // const { register } = useForm();
    // const onSubmit = (data) => {
    //     console.log(data)
    // };

    useEffect(() => {
        window.scrollTo(0, 0);
    });

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
                            Submit
                        </a>
                    </form>
                    <p>Don't have an account? <a href="." className="a2">Sign up!</a></p>
                </div>
            </div>
            {/* <div className='loginpage2'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Login Page</h1>
                    <div className="field">
                        <label>Username</label>
                        <input type='text' name='username' placeholder='Username' ref={register} />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type='email' name='email' placeholder='Email' ref={register} />
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input type='password' name='password' placeholder='Password' ref={register} />
                    </div>
                    <button className='btn'>Login</button>
                </form>

            </div> */}
        </div>
    )
}

export default Login