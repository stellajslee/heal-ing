import React, { useEffect } from 'react';
import Form from "./Form";

function LetOut() {
    useEffect(() => {
        document.body.style.backgroundColor = '#D4D9C3' }, [])

    return(
        <>
            <Form></Form>
        </>
    )
}

export default LetOut