import React from 'react';
import logo from '../../logo.svg';
import '../../App.css';

const Loader = () => {
    return (
        <div className="App">
            <img src={logo} className="App-logo" alt="logo" />
            <div>loading...</div>
        </div>
    )
}

export default Loader;