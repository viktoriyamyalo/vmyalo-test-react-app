import React, { Component } from 'react';


class NavbarLogo extends Component {
    render() {
        const style={ width: 40, height: 40};
        return (
            <div className="navbar-header">
            <a className="navbar-brand" href="#" >Company Name<img src="../logo.png" alt="logo" style={style}/>
            </a>
        </div>
        );
    }
}

export default NavbarLogo;