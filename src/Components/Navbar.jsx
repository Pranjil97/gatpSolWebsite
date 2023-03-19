import React from 'react'
import '../App.css';
import logo from './Assets/Logo.png'

const Navbar = () => {
    return (
        <nav className='nav'>
            <div className='imag'><img className='imaginside' src={logo} alt="img"></img></div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Security</li>
                <li>Contact US</li>
            </ul>
            <div className='log'>Login</div>
        </nav>
    )
}

export default Navbar