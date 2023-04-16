import React, { useState } from 'react'
import '../App.css';
import logo from './Assets/Logo.png'
import { Link } from 'react-router-dom';
import BtnNav from './BtnNav';


const Navbar = (props) => {
    const [navbar, setnavBar] = useState(false)
    // const { setPage } = props;

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
        <>
            <nav className={navbar ? 'nav active' : 'nav'}>
                <div className='logo'>
                    <img className='imaginside' src={logo} alt="img"></img>
                </div>
                <ul className='navopt'>
                    <li><Link to='/' style={{ textDecoration: 'none', color: 'darkcyan' }}>Home</Link></li>
                    <li><Link to='/about' style={{ textDecoration: 'none', color: 'darkcyan' }}>About</Link></li>
                    <li><Link to='/service' style={{ textDecoration: 'none', color: 'darkcyan' }}>Security</Link></li>
                    <li><Link to='/contact' style={{ textDecoration: 'none', color: 'darkcyan' }}>Contact US</Link></li>


                    {/* <li onClick={() => { setPage(0) }}>Home</li>
                <li onClick={() => { setPage(1) }}>About</li>
                <li onClick={() => { setPage(2) }}>Security</li>
                <li onClick={() => { setPage(3) }}>Contact US</li> */}
                </ul>
                <BtnNav />
                <div className='logbtn'><Link to='/login' style={{ textDecoration: 'none', color: 'white' }}>Login</Link></div>
                {/* <div onClick={() => { setPage(4) }} className='logbtn'>Login</div> */}
            </nav>
        </>
    )
}

export default Navbar;