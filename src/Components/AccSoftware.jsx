import React, { useEffect } from 'react'
import a1 from './Assets/a1.png'
import a2 from './Assets/a2.png'
import a3 from './Assets/a3.png'
import a4 from './Assets/a4.png'
import a5 from './Assets/a5.png'
import a6 from './Assets/a6.png'
import a7 from './Assets/a7.png'
import a8 from './Assets/a8.png'
import a9 from './Assets/a9.png'
import a10 from './Assets/a10.png'
import a11 from './Assets/a11.png'
import a12 from './Assets/a12.png'
import a13 from './Assets/a13.png'
import a14 from './Assets/a14.png'
import a15 from './Assets/a15.png'
import a16 from './Assets/a16.png'
import Aos from 'aos';
import "aos/dist/aos.css";

const AccSoftware = () => {

    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])


    const data1 = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16]

    return (
        <div data-aos="flip-left" className="accSoft">
            <h3>Our Accounting Softwares</h3>
            <div className='accsoftinner'>
                {data1.map((item, key) => {
                    return <div data-aos="fade-up-right" className='accsoftinner2' key={key}>
                        <div class="card2">
                            <img src={item} alt='img'></img>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default AccSoftware