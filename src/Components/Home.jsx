import React from 'react'
import Carousel from './Carousel'
import '../Components/Css/home.css'
import Services from './Services'
import AccServices from './AccServices'
import AccSoftware from './AccSoftware'
import WorkPro from './WorkPro'
import Security from './Security'

const Home = () => {
    return (
        <div>
            <div className='caro'>
                <Carousel />
            </div>
            <Services />
            <AccSoftware />
            <AccServices />
            <WorkPro />
            <Security />
        </div>
    )
}

export default Home