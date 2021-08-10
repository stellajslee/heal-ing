import React from 'react';
import Learn from "./Learn";
import {useEffect} from "react";
import TableOfContents from "./TableOfContents";

function Learn2() {
    useEffect(() => {
        document.body.style.backgroundColor = '#eff3f3' }, [])

    return(
        <>
            <TableOfContents></TableOfContents>
            <Learn></Learn>
        </>
    )
}

export default Learn2