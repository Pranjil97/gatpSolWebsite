import React from 'react'
import location from './Assets/location.png'
import email from './Assets/email.png'
import telephone from './Assets/telephone.png'
import copyright from './Assets/copyright.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footerinner">
                <div className='footcol1'>
                    <h4>OUR SERVICES</h4>
                    <ul className='footcol1ul'>
                        <li><a>Finance & Accounting</a></li>
                        <li><a>Bookkeeping</a></li>
                        <li><a>Accounts Payable</a></li>
                        <li><a>Accounts Receivable</a></li>
                        <li><a>Bank Reconciliation</a></li>
                        <li><a>Payroll Processing</a></li>
                        <li><a>Tax Preparation</a></li>
                        <li><a>Financial Reporting</a></li>
                    </ul>
                </div>

                <div className='footcol1'>
                    <h4>INDUSTRIES</h4>
                    <ul className='footcol1ul'>
                        <li><a>Restaurant Accounting</a></li>
                        <li><a>Real Estate Accounting</a></li>
                        <li><a>Insurance Accounting</a></li>
                        <li><a>Healthcare Accounting</a></li>
                        <li><a>Retail & Wholesale</a></li>
                        <li><a>Manufacturing Accounting</a></li>
                        <li><a>Logistic Accounting</a></li>
                        <li><a>Accounting For Doctors & Dentists</a></li>
                    </ul>
                </div>

                <div className='footcol1'>
                    <h4>OUR COMPANY</h4>
                    <ul className='footcol1ul'>
                        <li><a>About Us</a></li>
                        <li><a>Security</a></li>
                        <li><a>Contact Us</a></li>
                        <li><a>Infrastructure</a></li>
                        <li><a>Career</a></li>
                        <li><a>Terms & Condition</a></li>
                    </ul>
                </div>
            </div>
            <div className='footeraddress'>
                <div className='footeraddress1'><img className='locationgif' src={location} alt='location'></img>Innovational Accounting,
                    95, Sector-24, Rohini, New Delhi</div>
                <div className='footeraddress2'><img className='locationgif' src={email} alt='email'></img>info@innovationalaccounting.com</div>
                <div className='footeraddress3'><img className='locationgif3' src={telephone} alt='email'></img>8586801839 , 7838021171</div>
            </div>
            <div className='copyright'>© Innovational Accounting | All Rights Reserved.<img src={copyright} alt='img'></img> </div>
        </div>
    )
}

export default Footer;