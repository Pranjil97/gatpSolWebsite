import React from 'react'
import './Css/workpro.css'
import mobilephone from './Assets/phone.gif'
// import health2 from './Assets/health2.gif'
import phone2 from './Assets/phone2.png'
import rarrow from './Assets/rightarrow.png'

const WorkPro = () => {

    const data = [
        { img: { phone2 }, step: "Step 1", heading: 'Call or Email Us', content: "'During an introductory call we will discuss your background and business needs. We will tell you about our team's background, our process- oriented approach, and answer any of your questions." },
        { img: { mobilephone }, step: 'Step 2', heading: 'Finalize Set of Expected Services', content: "We will align on a set of expected services, tailor a pricing package to meet your business needs, and begin working with you and your team.  " },
        { img: { mobilephone }, step: 'Step 3', heading: 'Meet Your Accounting Manager', content: "An GATP Solutions Accounting Manager will speak with your point of contact to discuss your business in further detail. We will also review our Onboarding Checklist with you so that we can begin sharing information and reviewing your books." },
        { img: { mobilephone }, step: 'Step 4', heading: 'Discuss Review', content: 'Your Accounting Manager will discuss our review of your books and suggest ways to make your books more accurate and useful for decision making. Once changes have been implemented, we will begin managing your books.' },
        { img: { mobilephone }, step: 'Step 5', heading: 'Your Books Made Simple', content: "GATP Solutions is now professionally managing your books so you don't have to. Your life just got a whole lot simpler." },
    ]

    return (
        <div className="workpro">
            <h3>Our Working Process</h3>
            {/* <img className='workproarrow1' src={rarrow} alt='arrow'></img> */}
            {/* <img className='workproarrow2' src={rarrow} alt='arrow'></img> */}
            <div className='workprobox'>
                {data.map((item, key) => {
                    return <div key={key} className='workprobox1'>
                        <div className='workprobox1inner1'>
                            <div>{item.step}</div>
                            {/* <img className='workprobox1img' src={item.img} alt='img'></img> */}
                        </div>
                        <h4>{item.heading}</h4>
                        {/* <img className='workprobox1img' src={mobilephone} alt='phone'></img> */}
                        <div className='workprobox1inner2'>{item.content}</div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default WorkPro;