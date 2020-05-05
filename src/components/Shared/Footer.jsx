import React from 'react';

const Footer = () => {
    return (
        <footer className="foot-backgr text-center">
            <div id="my-name">
                <p>© Tomás Pérez-Zafón</p>
                <ul className="foot-links">
                    <li><i className="fa fa-github"></i><a href="https://github.com/tomaspz" rel="noopener noreferrer" target="_blank"> GitHub</a></li>
                    <li><i className="fa fa-linkedin"></i><a href="https://www.linkedin.com/in/tomas-perez-333b5231/" rel="noopener noreferrer" target="_blank"> LinkedIn</a></li>
                    <li><i className="fa fa-file"></i><a href="./assets/docs/TPZ-Resume.pdf" rel="noopener noreferrer" target="_blank"> Resume</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;