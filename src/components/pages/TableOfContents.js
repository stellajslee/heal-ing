import React, { useState } from 'react';
import './TableOfContents.css'

function TableOfContents() {

    const [show, setShow] = useState(true);

    return(
        <>
            <div>
                <div onClick={() => setShow(!show)}>
                    {
                        show?
                            <div className="table-of-contents">
                                <p className="x">x</p>
                                <h2 className="toc-header-1">Anxiety & Depression</h2>
                                <a href="#introduction" className="contents">Introduction</a>
                                <a href="#statistics" className="contents">Statistics</a>
                                <a href="#anxiety-disorders" className="contents">Anxiety Disorders</a>
                                <a href="#self-help-anxiety" className="contents">Self-help for Anxiety</a>
                                <a href="#depression" className="contents">Depression</a>
                                <a href="#self-help-depression" className="contents">Self-help for Depression</a>

                                <h2 className="toc-header">Common Myths & Realities</h2>
                                <a href="#common-mr-anxiety" className="contents">Anxiety Disorders</a>
                                <a href="#common-mr-depression" className="contents">Depression</a>
                            </div>
                            :
                            <div className="table-of-contents-1">
                                <p className="icon">☰</p>
                            </div>
                    }
                </div>
            </div>
        </>
    )
}

export default TableOfContents