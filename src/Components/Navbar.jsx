import React from 'react'
import '../App.css';
// import logo from './Assets/Logo.png'

const Navbar = (props) => {
    const { setPage } = props;
    return (
        <nav className='nav'>
            <div className='logo'>LOGO</div>
            {/* <div className='imag'><img className='imaginside' src={logo} alt="img"></img></div> */}
            <ul>
                <li onClick={() => { setPage(0) }}>Home</li>
                <li onClick={() => { setPage(1) }}>About</li>
                <li onClick={() => { setPage(2) }}>Security</li>
                <li onClick={() => { setPage(3) }}>Contact US</li>
            </ul>
            <div onClick={() => { setPage(4) }} className='logbtn'>Login</div>
        </nav>
    )
}

export default Navbar