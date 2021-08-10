import React, { useEffect } from 'react';
import HeroSection from "../HeroSection";

function Home() {
    useEffect(() => {
        document.body.style.backgroundColor = '#ffffff' }, [])

    return(
        <>
            <HeroSection></HeroSection>
        </>
    )
}

export default Home