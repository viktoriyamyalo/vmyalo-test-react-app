import React, { Component } from 'react';
import Navbar from './navbar';


class Header extends Component {
    render() {
        return (
            <header>
            <div className="container">
                <Navbar />
            </div>
            </header>
        );
    }
}

export default Header;