import React from 'react';

const Sidebar = () => {
    return (
        <div className="off-canvas position-left reveal-for-large" id="my-info" data-off-canvas data-position="left">
            <div className="row column">
                <br />
                <img className="thumbnail" src="./assets/img/Tomas-20200319.png" alt="Tomás Pérez-Zafón passport" />
                <h6><strong>Tomás Pérez-Zafón</strong></h6>
                <p>I am a passionate web developer. I am always looking for a way to improve my skills and my code. I like challenges and I find solutions with a high degree of accomplishments.</p>
                <div id="contact-details">
                    <h6><strong>Contact me</strong></h6>
                    <ul>
                        <li><i className="fa fa-phone"></i> (404)788-8336</li>
                        <li><i className="fa fa-envelope-o"></i> tomaspz@yahoo.com</li>
                        <li><i className="fa fa-map-marker fa-lg"></i> Atlanta, GA </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;