import React, { Component } from 'react';

import Sidebar from '../components/Shared/Sidebar';
import Header from '../components/Shared/Header';


class Contact extends Component {

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

                        <Header header="Contact Me" description="I like to talk to people" />

                        <div id="contact-form" className="row">
                            <div className="medium-12 columns">
                                <label>Name<input type="text" placeholder="Type your name" /></label>
                                <hr />
                                <label>Email<input type="text" placeholder="Type your email" /></label>
                                <hr />
                                <label>Message<textarea placeholder="Write me a note"></textarea></label>
                                <hr />
                                <input type="submit" className="button expanded" value="Submit" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;