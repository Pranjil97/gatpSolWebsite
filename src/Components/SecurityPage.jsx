import React from 'react'
import './Css/securitypage.css'

const ServicePage = () => {

    const data = [
        { head: 'resistance', content: "It is true that any business may face and will have to fight counter attacks by several unknown sources. In order to sustain in the long run, it is important to form defense strategies and strengthen the security architecture. Hence, security technologies are formed which consist of forming the right processes, to get rid of unwanted elements, implement safety filters to fight malware attacks, manage right of entry to data, protect web applications etc.. It is important to note that the term resist is used and not protect." },
        { head: 'detection', content: "Business operates in a very volatile environment and it's not possible to resist all imposition attempts, therefore detection plays yet another important role. The company keeps an eagle eye at each and every level of IT infrastructure which includes network, application and data. Detection is of two types, namely extrusion and intrusion; both these types are used to gather logs and to perform change detection. Detection phase helps in collecting data, which is very important while studying the extent of mal-activities." },
        { head: 'response', content: "Once the violation has been found out, the next step is to hand over the issue to incident handlers which consists of manifold process such as to understanding the scope of the incident, getting to control the situation and most importantly getting rid of the attackers existence. This later leads to recovering from the attack. This phase acts as an input to the plan phase of the next activity." },
        { head: 'physical security', content: "Our centres are taken care of by our security personnel 24 hours round the clock. All our employees/visitors are allowed to enter our premises using Biometric Fingerprint Access Control System. Our premises are guarded by supplementary access control devices and CCTV monitoring systems which makes sure, any illicit entry does not take place.We have specialized Fire preclusion and disaster evacuation plans and procedures to prevent loss due to damage and unforeseen events." },
        { head: 'people and culture', content: "Well trained staff members who comprehend clients' security needs.Lawfully binding privacy agreements for all team members.Only people who are directly involved in the project are provided with important information.It is made sure that GATP provides with tailor made training programs for clients who have some specific security protocols." },
        { head: 'network security', content: "In order to enhance privacy from peers, completely secured VPN Network is implemented.Security of data is of key importance, therefore effective amenities for administrative check, auditing and reporting is conducted.Latest anti-virus, software that detect and fight malware, anti-phishing programs, spam blockers, URL filters, and other standard protections are installed, so that workstations and networks do not get infected." }
    ]

    // const colors = ["lightcoral", "lightseagreen", "seagreen", "lightslategray", "lightsalmon", "gray"];
    // const colors = ["darkgreen", "darkpurple", "magenta", "lightslategray", "lightsalmon", "gray"];

    return (
        <div>
            <div className='currenttab'>
                <span>You are here: Home / Service</span>
            </div>
            <div className='securitypage'>
                <div className='securitypageinner'>
                    <h4>SECURITY - GATP SOLUTIONS</h4>
                    <div className="securitypageinner2">
                        <div className="card-overlay"></div>
                        {data.map((item, index) => {
                            return <div key={index} className='securitypagebox'>
                                {/* <div className='securitypagebox1' style={{ backgroundColor: colors[index % colors.length] }}>{item.head}</div> */}
                                <div className='securitypagebox1'>{item.head}</div>
                                <div className='securitypagebox2'>{item.content}</div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicePage