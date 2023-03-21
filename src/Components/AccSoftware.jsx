import React from 'react'
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

const AccSoftware = () => {

    const data1 = [a1, a2, a3, a4, a5, a6, a7, a8]
    const data2 = [a9, a10, a11, a12, a13, a14, a15, a16]

    return (
        <div className="accSoft">
            <h3>Our Accounting Softwares</h3>
            <marquee width="100%" direction="right" height='150px'>
                <div className='accsoftin'>
                    {data1.map((item, key) => {
                        return <div className="accsoftinner" key={key}>
                            <img className="accsoftimg" src={item} alt='img'></img>
                        </div>
                    })}
                </div>
            </marquee>
            <marquee width="100%" direction="left" height='150px'>
                <div className='accsoftin'>
                    {data2.map((item, key) => {
                        return <div className="accsoftinner" key={key}>
                            <img className="accsoftimg" src={item} alt='img'></img>
                        </div>
                    })}
                </div>
            </marquee>
            {/* <marquee width="100%" direction="right" height='150px'>
                <div className="accsoftinner">
                    <img className="accsoftimg" src={a1} alt='img'></img>
                    <div className="accsoftimg">2</div>
                    <div className="accsoftimg">3</div>
                    <div className="accsoftimg">4</div>
                    <div className="accsoftimg">5</div>
                    <div className="accsoftimg">6</div>
                    <div className="accsoftimg">7</div>
                    <div className="accsoftimg">8</div>
                </div>
            </marquee> */}
            {/* <marquee width="100%" direction="left" height='150px'>
                <div className="accsoftinner">
                    <div className="accsoftimg">9</div>
                    <div className="accsoftimg">10</div>
                    <div className="accsoftimg">11</div>
                    <div className="accsoftimg">12</div>
                    <div className="accsoftimg">13</div>
                    <div className="accsoftimg">14</div>
                    <div className="accsoftimg">15</div>
                    <div className="accsoftimg">16</div>
                </div>
            </marquee> */}
        </div>
    )
}

export default AccSoftware