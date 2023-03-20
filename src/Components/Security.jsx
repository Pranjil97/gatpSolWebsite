import React from 'react'
import security from './Assets/security.jpg'

const Security = () => {
    return (
        <div className='security'>
            <div className='securityinner'>
                <h4>Security</h4>
                <p>Just like every life cycle involves a planning phase similarly the Security Incident cycle also starts with a planning phase. The security arrangement is studied and plans are laid out to protect the IT infrastructure and data. Finding out threats and factors which cause vulnerability to the system is of prime importance. Penetration testing is carried out by forming red and blue teams. It is in the planning stage when an information security architecture is laid out, which is efficient, realistic and pertinent.</p>
                <span className='learnbtn'>LEARN MORE</span>
            </div>
            <img src={security} alt='img'></img>
        </div>
    )
}

export default Security;