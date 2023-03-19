import React from 'react'
import './Css/home.css'
import house from './Assets/house.png'
import restaurant from './Assets/restaurant.png'
import small from './Assets/bag.png'
import health from './Assets/health.png'
import retailer from './Assets/retailer.png'
import factory from './Assets/factory.png'
import communication from './Assets/communication.png'
import logistic from './Assets/logistic.png'


const AccServices = () => {

    return (
        <div >
            <div className='accServ'>
                <h2>Industry-Specific Accounting Services</h2>
                <div className='accserv2'>
                    <div className='accServboxfake'></div>
                    <div className='accServboxfake'></div>
                    <div className='accServbox'>
                        <img className='accServboxImg' src={house} alt="img"></img>
                        <div className='accServboxHead'>Real Estate</div>
                    </div>
                    <div className='accServboxfake'></div>
                    <div className='accServboxfake'></div>
                    <div className='accServboxfake'></div>
                    <div className='accServbox'>
                        <img className='accServboxImg' src={restaurant} alt="img"></img>
                        <div className='accServboxHead'>Restaurant & Hospitality</div>
                    </div>
                    <div className='accServboxfake'></div>
                    <div className='accServboxfake'></div>
                    <div className='accServbox'>
                        <img className='accServboxImg' src={small} alt="img"></img>
                        <div className='accServboxHead'>Small Business</div>
                    </div>
                    <div className='accServboxfake'></div>
                    <div className='accServboxfake'></div>
                    <div className='accServboxfake'></div>
                    <div className='accServboxfake'></div>
                    {/* <div className='accServboxfake'></div> */}

                    <div className='accServbox'>
                        <img className='accServboxImg' src={health} alt="img"></img>
                        <div className='accServboxHead'>Healthcare</div>
                    </div>
                    <div className='accServboxfake'></div>
                    <div className='accServboxfake'></div>
                    <div className='accServboxfake'></div>
                    <div className='accServboxfake'></div>
                    <div className='accServbox'>
                        <img className='accServboxImg' src={retailer} alt="img"></img>
                        <div className='accServboxHead'>Retail & Wholesale</div>
                    </div>
                    <div className='accServboxfake'></div>
                    <div className='accServbox'>
                        <img className='accServboxImg' src={factory} alt="img"></img>
                        <div className='accServboxHead'>Manufacturing</div>
                    </div>
                    <div className='accServboxfake'></div>
                    <div className='accServboxfake'></div>
                    <div className='accServboxfake'></div>
                    <div className='accServbox'>
                        <img className='accServboxImg' src={communication} alt="img"></img>
                        <div className='accServboxHead'>Telecommunication</div>
                    </div>
                    <div className='accServboxfake'></div>
                    <div className='accServboxfake'></div>
                    <div className='accServboxfake'></div>
                    <div className='accServbox'>
                        <img className='accServboxImg' src={logistic} alt="img"></img>
                        <div className='accServboxHead'>Logistics</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccServices;