import React, { useEffect } from 'react';
import './Learn.css';
import './Contact.css'
import Contact from "./Contact";

function Contact2() {
    useEffect(() => {
        document.body.style.backgroundColor = '#EDECEC' }, [])

    return(
        <>
            <div className="contact-container">
                <Contact></Contact>
            </div>
        </>
    )
}

export default Contact2;