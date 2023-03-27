import React from 'react'
import Typewriter from "typewriter-effect";

const Typewrite = () => {
    return (
        <div className='typewrite'>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Get in touch")
                        .pauseFor(100)
                        .deleteAll()
                        .typeString("Get in touch..")
                        .start();
                }}
            />
        </div>
    )
}

export default Typewrite;