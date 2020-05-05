import React from 'react';

const Header = (props) => {
    return (
        <header className="callout primary">
            <div className="row column">
                <h1>{props.header}</h1>
                <p className="lead">{props.description}</p>
            </div>
        </header>
    );
};

export default Header;