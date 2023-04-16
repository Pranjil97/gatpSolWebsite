import React from 'react'
import Typewriter from "typewriter-effect";

const Typewrite = () => {
    return (
        <div className='typewrite'>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Welcome To Innovational Accounting, Smart Accounting For Smart People")
                        .pauseFor(100)
                        .deleteAll()
                        .typeString("Welcome To Innovational Accounting, Smart Accounting For Smart People")
                        .start();

                    // .typeString("Welcome To GATP Solutions")
                    // .pauseFor(100)
                    // .deleteAll()
                    // .typeString("Smart Accounting For Smart People")
                    // .start();
                }}
            />
        </div>
    )
}

export default Typewrite;