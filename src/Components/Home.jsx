import React from 'react'
import Carousel from './Carousel'
import '../Components/Css/home.css'
import Services from './Services'
import AccServices from './AccServices'

const Home = () => {
    return (
        <div>
            <div className='caro'>
                <Carousel />
            </div>
            <Services />
            <AccServices />
        </div>
    )
}

export default Home