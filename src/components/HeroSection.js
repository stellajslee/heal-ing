import React from 'react'
import '../App.css';
import './HeroSection.css';
import { Link } from "react-router-dom";
import { Button } from './Button';

function HeroSection() {
    return (
        <>
            <div className= 'hero-container'>
                <div className='main-page'></div>
                <div className='title-main'>we're so glad you're here</div>
                <div className='subtitle'>because mental health matters</div>
                <div className = "hero-btns">
                    <Link to = '/learn'>
                        <Button>learn</Button>
                    </Link>
                    <Link to = '/letout'>
                        <Button className = "btn">let out</Button>
                    </Link>
                </div>
            </div>
            <div className="extra"></div>
        </>
    )
}

export default HeroSection