import React, {useState} from 'react';
import {MenuItems} from "./MenuItems";
import './Navbar.css'
import {Link, HashRouter} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

function Navbar() {
    const [click] = useState(false);

    return (
        <>
            <HashRouter history={createHistory({basename: process.env.PUBLIC_URL})}>
                <nav clsssName="mobile-nav">
                    <Link to='/' className="navbar-logo-mobile">healing</Link>
                </nav>
                <nav className="NavbarItems">
                    <Link to='/' className="navbar-logo">healing</Link>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        {MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link to = {item.url} className={item.cName}>
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </HashRouter>
        </>
    );
}

export default Navbar