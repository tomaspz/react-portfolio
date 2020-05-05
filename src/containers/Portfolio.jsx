import React, { Component } from 'react';

import Sidebar from '../components/Shared/Sidebar';
import Header from '../components/Shared/Header';
import Projects from '../components/AllProjects';



class Portfolio extends Component {

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
          
          <Header header="Portfolio" description="Take a look at my work" />

          <Projects />
          
        </div>
      </div>
    </div>
    );
  }
}

export default Portfolio;