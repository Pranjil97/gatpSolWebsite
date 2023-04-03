import './Css/accordian.css'
import React, { useState } from 'react';

function Accordion(props) {
    const { head, content } = props;
    const [isExpanded, setExpanded] = useState(false);

    const toggleAccordion = () => {
        setExpanded(!isExpanded);
    };

    return (
        <div className="accordian">
            <div className="accordian-header" onClick={toggleAccordion}>
                <div>{head}</div>
                <div className="sign">{isExpanded ? '-' : '+'}</div>
            </div>
            {isExpanded && (
                <div className="accordian-body">{content}</div>
            )}
        </div>
    );
}

export default Accordion;
