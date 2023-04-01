import './Css/accordian.css'
import React, { useState } from 'react';

function Accordion(props) {
    const [isExpanded, setExpanded] = useState(false);

    const toggleAccordion = () => {
        setExpanded(!isExpanded);
    };

    return (
        <div className="accordian">
            <div className="accordian-header" onClick={toggleAccordion}>
                <div>Accordion Header</div>
                <div className="sign">{isExpanded ? '-' : '+'}</div>
            </div>
            {isExpanded && (
                <div className="accordian-body">
                    Lorem Ipsum is simply dummy text of the printing and type setting
                    industry. Lorem Ipsum has been the industry's ever since the 1500s,
                    when an unknown printer took a galley of type standard dummy text
                    and scrambled it to make a type specimen book.
                </div>
            )}
        </div>
    );
}

export default Accordion;
