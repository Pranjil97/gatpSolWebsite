import React from 'react'
import location from './Assets/location.png'
import email from './Assets/email.png'
import telephone from './Assets/telephone.png'
import copyright from './Assets/copyright.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footerinner">
                <div className='footcol1'>
                    <h4>OUR SERVICES</h4>
                    <ul className='footcol1ul'>
                        <li><Link>Finance & Accounting</Link></li>
                        <li><Link>Bookkeeping</Link></li>
                        <li><Link>Accounts Payable</Link></li>
                        <li><Link>Accounts Receivable</Link></li>
                        <li><Link>Bank Reconciliation</Link></li>
                        <li><Link>Payroll Processing</Link></li>
                        <li><Link>Tax Preparation</Link></li>
                        <li><Link>Financial Reporting</Link></li>
                    </ul>
                </div>

                <div className='footcol1'>
                    <h4>INDUSTRIES</h4>
                    <ul className='footcol1ul'>
                        <li><Link>Restaurant Accounting</Link></li>
                        <li><Link>Real Estate Accounting</Link></li>
                        <li><Link>Insurance Accounting</Link></li>
                        <li><Link>Healthcare Accounting</Link></li>
                        <li><Link>Retail & Wholesale</Link></li>
                        <li><Link>Manufacturing Accounting</Link></li>
                        <li><Link>Logistic Accounting</Link></li>
                        <li><Link>Accounting For Doctors&Dentists</Link></li>
                    </ul>
                </div>

                <div className='footcol1'>
                    <h4>OUR COMPANY</h4>
                    <ul className='footcol1ul'>
                        <li><Link>About Us</Link></li>
                        <li><Link>Security</Link></li>
                        <li><Link>Contact Us</Link></li>
                        <li><Link>Infrastructure</Link></li>
                        <li><Link>Career</Link></li>
                        <li><Link>Terms & Condition</Link></li>
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