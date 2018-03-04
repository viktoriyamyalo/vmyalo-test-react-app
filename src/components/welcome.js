import React, { Component } from 'react';
import Navbar from './navbar';
import { signOut } from '../actions/index';
import { connect } from 'react-redux';


class Welcome extends Component {
    
    render() {
        const user = this.props.user;
        return (
        <div className="alert alert-success">
             <p>Welcome, {user.displayName || user.email }!</p>
             <button className="btn btn-danger" onClick={this.props.signOut}>
             Sign out
             </button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { user: state.user.currentuser}
}

export default connect(mapStateToProps, { signOut })(Welcome);