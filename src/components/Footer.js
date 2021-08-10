import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-main'>
                <p className='footer-text'>
                    “Let your story go. Allow yourself to be present with who you are right now.”
                </p>
                <p className='footer-text-small'>
                    — Russ Kyle
                </p>
                <p className='footer-text'>
                    <Link to = '/about' className='footer-contact'>
                        Contact Creator
                    </Link>
                </p>
                <p className='footer-heading'>
                    Video by ROMAN ODINTSOV from Pexels
                </p>
            </section>
            <small class='website-rights'>healing © 2021</small>
        </div>
    );
}

export default Footer;