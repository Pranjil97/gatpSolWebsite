import React from 'react'
import './Css/loader.css'
import Typewrite from './Typewrite';

const Carousel = () => {
    return (
        <div className='mainpage'>
            <div className='mainhead'><Typewrite /></div>
            <div className='firstinput'>
                <div className="inputbox">
                    <input required="required" type="text" placeholder='Email ID' />
                    <span>EMAIL ID</span>
                    <i></i>
                </div>
                <button className='mainbtn'>
                    Connect
                </button>
            </div>
        </div>
    )
}

export default Carousel;