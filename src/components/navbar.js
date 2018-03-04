import React, { Component } from 'react';
import NavbarMenu from './navbar_menu';
import NavbarLogo from './navbar_logo';
import LoginForm from './login_form';
import Welcome from './welcome';
import Sidebar from './sidebar';
import { connect } from 'react-redux';


class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {hidden: true}
        this.toggleMenu = this.toggleMenu.bind(this);
    }
   
    toggleMenu() {
        this.setState({hidden: !this.state.hidden});
    }

    render() {
        if(this.props.user.email) {
            return (
                <div className="navbar navbar-default">
            <div className="container">
                <div className="row">

                <div className="col-md-2">
                <a id="burger" onClick={this.toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
                </a>
                </div>
                </div>

                <NavbarLogo className="col-md-2"/>
                <NavbarMenu className="col-md-4"/>
                <Welcome className="col-md-4"/>
            </div>
            <Sidebar hidden={this.state.hidden}/> 
        </div>
                );
        }

        return (

        <div className="navbar navbar-default">
            <div className="container">
                <NavbarLogo />
                <NavbarMenu />
                <LoginForm />
            </div>
    </div>
        );
    }
}

function mapStateToProps(state) {
    return { user: state.user.currentuser}
}

export default connect(mapStateToProps)(Navbar);