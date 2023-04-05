import React, { useState } from 'react'
import '../App.css';
// import logo from './Assets/Logo.png'

const Navbar = (props) => {
    const [navbar, setnavBar] = useState(false)
    const { setPage } = props;

    const changeBackground = () => {
        // console.log(window.scrollY)
        if (window.scrollY >= 80) {
            setnavBar(true)
        }
        else {
            setnavBar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)


    return (
        <nav className={navbar ? 'nav active' : 'nav'}>
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