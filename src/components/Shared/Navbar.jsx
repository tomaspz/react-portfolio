import React from 'react';

const Navbar = () => {
    return (
        <nav className="top-bar topbar-responsive">
        <div className="top-bar-title">
            <span data-responsive-toggle="topbar-responsive" data-hide-for="medium">
                <button className="menu-icon" type="button" data-toggle></button>
            </span>
            <a className="topbar-responsive-logo" href="/"><strong id="my-name"> Tomás Pérez-Zafón</strong></a>
            <div id="topbar-responsive" className="topbar-responsive-links">
                <div className="top-bar-right">
                    <ul className="menu simple vertical medium-horizontal">
                        <li><a href="/about">About</a></li>
                        <li><a href="/portfolio">Portfolio</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
        
    </nav>
    );
};

export default Navbar;