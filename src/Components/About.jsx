import React, { useEffect } from 'react'
import Accordian from './Accordian';
import './Css/about.css'

const About = () => {


    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const head = [
        { head: "Finance and Accounting", content: "For ensuring the final report to be accurate, initial book entry needs to be precise & in sync with the final result. GATP, due to it's vast exposure ensures that the same is being taken care of with high professionalism.Know More" },
        { head: "Finance Planning & Analysis", content: "While planning for our long term growth, we tend to focus more on our core competencies, overlooking certain important data. Our financial reporting services can help you assess your company’s financial performance and also take timely business decisions.Know More" },
        { head: "Tax Compliance", content: "With new compliances coming nearly every quarter, it becomes difficult to keep a track of which compliance has been followed & which is pending. We can help in meeting these compliances in a timely & effective manner.Know More" },
        { head: "Payroll", content: "The more variables involved in an organization's payroll, the more it makes sense to use payroll outsourcing. We calculate payroll, adhere to the latest tax obligations, print and deliver checks, file tax returns on time and provide management reports for a fraction of the Total Cost of Ownership of building and maintaining a large in-house payroll department.Know More" },
        { head: "Consultancy", content: "Our team of business consultants has many years experience, working with all types of businesses across a wide spectrum of industries, and we can help you to optimize your business to achieve its maximum.Know More" }
    ]
    return (
        <div>
            <div className='currenttab'>
                <span>You are here: Home / About us</span>
            </div>
            <div className='aboutpage'>
                <div className='aboutpageinner'>
                    <p>Welcome to Innovational Accounting is a growing organization with global delivery potential, dedicated to provide outsourced Finance and Accounting expertise.</p>
                    <p>By virtue of its business focus and experienced team, Innovational Accounting provides services to its clients enabling them to completely focus on their core competencies.</p>
                    <p>With global melt down, organizations have realised that to succeed they not only have to be internally strong but also have effective financial control. </p>
                    <p>Accounting has now taken a paradigm shift from casual statutory compliance to successful management implementation tool.</p>
                    <p>As the old saying goes "you cannot mend it if you cannot measure it".</p>
                </div>
                <div className='aboutpageservice'>
                    <h3>Our Services</h3>
                    <div className='accordianpage'>
                        {head.map((data, key) => {
                            return <Accordian key={key} head={data.head} content={data.content} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;