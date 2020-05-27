import React, { Component } from 'react';

import Sidebar from '../components/Shared/Sidebar';
import Header from '../components/Shared/Header';

class About extends Component {

    state = {
        header: "", 
        description: ""
    }

    render() {
        return (
            <div className="off-canvas-wrapper">
            <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>

                <Sidebar />

                <div className="off-canvas-content" data-off-canvas-content>
                    
                    <div className="title-bar hide-for-large">
                        <div className="title-bar-left">
                            <button className="menu-icon" type="button" data-open="my-info"></button>
                            <span className="title-bar-title">Tomás Pérez-Zafón</span>
                        </div>
                    </div>
                    
                    <Header header="About me" description="Full Stack Web Developer"/>

                    <div className="work-feature-block row">
                        
                        <div className="columns medium-7">
                            <img className="work-feature-block-image" src="./assets/img/kevin-ku-clock-laptop.jpg" alt="Bird's eye view of a floor clock with a chair and a laptop in the center" />
                        </div>
                        
                        <div className="columns medium-5">
                            <h2 className="work-feature-block-header">Education</h2>
                            <h5><i className="fa fa-university"></i><strong> 2020 - Georgia Institute of Technology - Full Stack Web Developer</strong></h5>
                            <ul>
                                <li>HTML, CSS, Javascript, jQuery, Bootstrap, Semantic UI</li>
                                <li>Node, Express, Bcrypt, Passport</li>
                                <li>MySQL, Sequelize, MongoDB, Mongoose</li>
                                <li>Handlebars, React, Angular</li>
                                <li>MVC, CRUD and RESTful APIs</li>
                                <li>Git, GitHub, GitLab</li>
                                <hr />
                            </ul>
                            <hr />
                            <h5><i className="fa fa-university"></i><strong> 2018 - edx.org - W3C Certiﬁed Professional Front-End Web Developer</strong></h5>
                            <ul>
                                <li>CSS Basics</li>
                                <li>HTML5 and CSS Fundamentals</li>
                                <li>HTML5 Coding Essentials and Best Practices</li>
                                <li>Javascript Introduction</li>
                                <li>HTML5 Apps and Games</li>
                                <hr />
                            </ul>
                            <hr />
                            <h5><i className="fa fa-university"></i><strong> 2018 - edx.org - Microsoft AngularJS: Framework Fundamentals</strong></h5>
                            <hr />
                            <h5><i className="fa fa-university"></i><strong> 2017 - Kennesaw State University</strong></h5>
                            <ul>
                                <li>CS5000 - Foundations of Programming in Java</li>
                                <li>CS5020 - Computer Architecture and Operating Systems</li>
                            </ul> 
                        </div>
                        
                        <div className="columns medium-12">
                            <hr />
                            <h5><i className="fa fa-university"></i><strong> 2016 - edx.org - MITx - Introduction to CS and Programming with Python</strong></h5>
                            <hr />
                                <h5><i className="fa fa-university"></i><strong> 1993 - Universidad Politécnica de Catalunya (Polytechnic University of Catalonia)</strong></h5>
                                <p>Ingeniero Técnico Industrial Químico (Chemical Engineering)</p>
                                <p>Equivalent to Level 6 EQF (European Qualiﬁcation Framework)</p>
                                <p>Equivalent to Bachelor of Science Degree in the USA</p>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
        );
    }
}

export default About;