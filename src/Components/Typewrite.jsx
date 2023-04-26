import React from 'react'
import Typewriter from "typewriter-effect";

const Typewrite = () => {
    return (
        <div className='typewrite'>
            <Typewriter

options={{
    strings: ["Welcome To Innovational Accounting, Smart Accounting For Smart People"],
    autoStart: true,
    loop: false,
    delay: 50,
    pauseFor: 10000,
    typingSpeed: 25,
    deleteSpeed: 50,
    cursor: "_",
  }}

                // onInit={(typewriter) => {
                //     typewriter
                //         .typeString("Welcome To Innovational Accounting, Smart Accounting For Smart People")
                //         .pauseFor(80)
                //         .deleteAll()
                //         .typeString("Welcome To Innovational Accounting, Smart Accounting For Smart People")
                //         .start();

                    // .typeString("Welcome To GATP Solutions")
                    // .pauseFor(100)
                    // .deleteAll()
                    // .typeString("Smart Accounting For Smart People")
                    // .start();
                // }}
            />
        </div>
    )
}

export default Typewrite;