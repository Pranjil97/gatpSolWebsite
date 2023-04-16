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
                    <div className="menu-item">Home</div>
                    <div className="menu-item">About </div>
                    <div className="menu-item">Security</div>
                    <div className="menu-item"><Link to='/contact' style={{ textDecoration: 'none', color: 'darkcyan' }}>Contact US</Link> </div>
                    <div className="menu-item"><Link to='/login' style={{ textDecoration: 'none', color: 'darkcyan' }}>Login</Link></div>
                </div>
            )}
        </div>
    );
};

export default NavbarButton;
