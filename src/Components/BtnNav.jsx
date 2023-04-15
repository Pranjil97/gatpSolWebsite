import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavbarButton = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleButtonClick = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div>
            <button className="navbar-button" onClick={handleButtonClick}>
                <FontAwesomeIcon icon={faBars} />
            </button>
            {showMenu && (
                <div className="menu">
                    <div className="menu-item">Home</div>
                    <div className="menu-item">About</div>
                    <div className="menu-item">Contact</div>
                </div>
            )}
        </div>
    );
};

export default NavbarButton;
