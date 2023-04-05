import React, { useEffect } from 'react'
import bookkeep from './Assets/bookkeep.jpg'
import accpay from './Assets/accpay.jpg'
import accrev from './Assets/accrev.jpg'
import banking from './Assets/banking.jpg'
import financial from './Assets/financial.jpg'
import payroll from './Assets/payroll.jpg'
import tax from './Assets/tax.jpg'
import Aos from 'aos';
import "aos/dist/aos.css";

const Services = () => {

    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])


    const data = [
        { image: [bookkeep], heading: "Book keeping Services", content: "Keeping your accounting records up-to-date often is a time-intensive and an expensive practice for almost any business, rendering little apparent added value." },
        { image: [accpay], heading: "Account Payable", content: "We offer services in Accounting system's updates through:Invoices from suppliers, Evidence regarding services/goods receipt, Purchase orders" },
        { image: [accrev], heading: "Accounts Receivable", content: "Our accounts receivable implementation is in accordance with the best practices and delivers frequent analysis, automation, reporting, improved communication and flexibility. " },
        { image: [banking], heading: "Bank Reconciliation", content: "The reconciliation procedure can be a result of several factors like outstanding checks, accumulation of service fee, or even interest payments." },
        { image: [financial], heading: "Financial Reporting", content: "Do you have precise, relevant, latest and timely information regarding the performance of your business?" },
        { image: [payroll], heading: "Payroll Processing", content: "How do you factor in reimbursements, loan advances, leaves and other such dynamic HR inputs while managing varied salary structures?" },
        { image: [tax], heading: "Tax Preparation", content: "Our knowledge concerning income tax preparation, our exuberance, our commitment to our clients, and our selection of products is just the beginning of what you can expect from us." },
    ]

    return (
        <div className='service'>
            <h2>Our Services</h2>
            <div className='servbox'>
                {data.map((item, key) => {
                    return <div className='card' key={key}>
                        <img className='svimg' src={item.image} alt='img'></img>
                        <h4>{item.heading}</h4>
                        <p>{item.content}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Services;