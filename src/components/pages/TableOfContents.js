import React, { useState } from 'react';
import './TableOfContents.css'
import { HashLink as Link } from 'react-router-hash-link';

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
                                <Link to="/learn#introduction" className="contents">Introduction</Link>
                                <Link to="/learn#statistics" className="contents">Statistics</Link>
                                <Link to="/learn#anxiety-disorders" className="contents">Anxiety Disorders</Link>
                                <Link to="/learn#self-help-anxiety" className="contents">Self-help for Anxiety</Link>
                                <Link to="/learn#depression" className="contents">Depression</Link>
                                <Link to="/learn#self-help-depression" className="contents">Self-help for Depression</Link>

                                <h2 className="toc-header">Common Myths & Realities</h2>
                                <Link to="/learn#common-mr-anxiety" className="contents">Anxiety Disorders</Link>
                                <Link to="/learn#common-mr-depression" className="contents">Depression</Link>
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