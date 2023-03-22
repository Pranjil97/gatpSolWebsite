import React from 'react'
import './Css/about.css'


const About = () => {
    return (
        <div>
            <div className='currenttab'>
                <span>You are here: Home / About us</span>
            </div>
            <div className='aboutpage'>
                <div className='aboutpageinner'>
                    <p>Welcome to GATP SOLUTIONS
                        GATP Solutions is a growing organization with global delivery potential, dedicated to provide outsourced Finance and Accounting expertise.</p>
                    <p>By virtue of its business focus and experienced team, GATP Solutions provides services to its clients enabling them to completely focus on their core competencies.</p>
                    <p>With global melt down, organizations have realised that to succeed they not only have to be internally strong but also have effective financial control. Accounting has now taken a paradigm shift from casual statutory compliance to successful management implementation tool. As the old saying goes "you cannot mend it if you cannot measure it".</p>
                </div>
                <div className='aboutpageservice'>
                    <h5>Our Services</h5>
                </div>
            </div>
        </div>
    )
}

export default About;