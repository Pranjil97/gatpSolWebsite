import React from 'react'
import './Css/home.css'
// import house from './Assets/house.png'
import home from './Assets/home.gif'
// import restaurant from './Assets/restaurant.png'
import restaurant from './Assets/restaurant.gif'
// import small from './Assets/bag.png'
import small from './Assets/presentation.gif'
// import health from './Assets/health.png'
import health2 from './Assets/health2.gif'
// import retailer from './Assets/retailer.png'
import retailer from './Assets/trolley.gif'
// import factory from './Assets/factory.png'
import factory from './Assets/factory.gif'
// import communication from './Assets/communication.png'
import communication from './Assets/conference.gif'
// import logistic from './Assets/logistic.png'
import logistic from './Assets/truck.gif'


const AccServices = () => {

    return (
        <div >
            <div className='accServ'>
                <h2>Industry-Specific Accounting Services</h2>
                <div className='accserv2'>
                    <div className='accServboxfake'></div>
                    <div className='accServboxfake'></div>
                    <div className='accServbox'>
                        <img className='accServboxImg' src={home} alt="img"></img>
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
                        <img className='accServboxImg' src={health2} alt="img"></img>
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