import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import { Link } from 'react-router-dom';

const NavbarButton = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleButtonClick = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className='btnnav'>
            <button className="navbar-button" onClick={handleButtonClick}>
                <FontAwesomeIcon icon={faBars} />
            </button>
            {showMenu && (
                <div className="menu">
                    <div className="menu-item"><Link to='/' style={{ textDecoration: 'none', color: 'darkcyan' }}>Home</Link></div>
                    <div className="menu-item"><Link to='/about' style={{ textDecoration: 'none', color: 'darkcyan' }}>About</Link></div>
                    <div className="menu-item"><Link to='/service' style={{ textDecoration: 'none', color: 'darkcyan' }}>Security</Link> </div>
                    <div className="menu-item"><Link to='/contact' style={{ textDecoration: 'none', color: 'darkcyan' }}>Contact US</Link> </div>
                    <div className="menu-item"><Link to='/login' style={{ textDecoration: 'none', color: 'darkcyan' }}>Login</Link></div>
                </div>
            )}
        </div>
    );
};

export default NavbarButton;
