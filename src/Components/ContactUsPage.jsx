import React, { useEffect, useState } from 'react'
import './Css/contactpage.css'
import location from './Assets/location.png'
import email from './Assets/email.png'
import telephone from './Assets/telephone.png'

const ContactUsPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    });


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log(formData); // or send the form data to a server using fetch or axios
    };

    return (
        <div>
            <div className='currenttab'>
                <span>You are here: Home / Contact us</span>
            </div>
            <div className='contactpage'>
                <div className='contactpageinner'>
                    <div className='contactpageform'>
                        <form onSubmit={handleSubmit}>
                            <div className='contactpagename'>
                                <input
                                    placeholder='Name'
                                    className='contactpagenameinput'
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    autoComplete='off'
                                />
                                <input
                                    className='contactpagenameinput'
                                    placeholder='Email'
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    autoComplete='off'
                                />
                            </div>
                            <input
                                placeholder='Subject'
                                className='contactpagemessageinput'
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                autoComplete='off'
                            />
                            <textarea
                                placeholder='Message'
                                className='contactpagetextarea'
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                autoComplete='off'
                            />
                            <button type="submit" className='formbtn'>Send message</button>
                        </form>
                    </div>
                    <div className='contactpageaddress'>
                        <div className='cont1'>
                            <span className='continner1'>
                                <img src={location} alt='img'></img>
                                <span>Visit Us</span>
                            </span>
                            <span className='continner2'>95, Sector-24, Rohini, New Delhi</span>
                        </div>
                        <div className='cont2' >
                            <span className='continner1'>
                                <img src={email} alt='img'></img>
                                <span>Email Us</span>
                            </span>
                            <span className='continner2'>info@innovationalaccounting.com</span>
                        </div>
                        <div className='cont3'>
                            <span className='continner1 '>
                                <img src={telephone} alt='img'></img>
                                <span>Call Us</span>
                            </span>
                            <span className='continner2'>8586801839 , 7838021171</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ContactUsPage