import React from 'react';

const Project = (props) => {
    return (
        <div className="column">
              <a href={props.deployment} rel="noopener noreferrer" target="_blank"><img className="thumbnail" src={props.imageSource} alt={props.altDesc}/></a>
              <a href={props.deployment} rel="noopener noreferrer" target="_blank"><h5>{props.appTitle}</h5></a>
              <p>{props.appDescription}</p>
              <a href={props.githubUrl} rel="noopener noreferrer" target="_blank">{props.githubDesc}</a>
        </div>
    );
};

export default Project;