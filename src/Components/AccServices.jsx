import React from 'react'
import './Css/home.css'

const AccServices = () => {

    const data = [
        { picture: '', heading: 'Real Estate' },
        { picture: '', heading: '' },
        { picture: '', heading: 'Restaurant & Hospitality' },
        { picture: '', heading: '' },
        { picture: '', heading: 'Small Business' },
        { picture: '', heading: '' },
        { picture: '', heading: 'Healthcare' },
        { picture: '', heading: '' },
        { picture: '', heading: 'Retail & Wholesale' },
        { picture: '', heading: '' },
        { picture: '', heading: 'Manufacturing' },
        { picture: '', heading: '' },
        { picture: '', heading: 'Telecommunication' },
        { picture: '', heading: '' },
        { picture: '', heading: 'Logistics' },
    ]

    return (
        <div >
            <div className='accServ'>
                <h2>Industry-Specific Accounting Services</h2>
                <div className='accserv2'>
                    {data.map((item, key) => {
                        return <div className='accServbox' key={key}></div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default AccServices;