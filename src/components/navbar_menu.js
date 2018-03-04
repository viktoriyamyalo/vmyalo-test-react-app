import React, { Component } from 'react';


class NavbarMenu extends Component {
    render() {
        return (
            <ul className="nav navbar-nav">
            <li><a href="#">Home</a>
            </li>
            <li><a href="#">About</a>
            </li>
            <li><a href="#">Contact</a>
            </li>
        </ul>
        );
    }
}

export default NavbarMenu;