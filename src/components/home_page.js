import React, { Component } from 'react';
import Header from './header';
import Main from './main';
import Footer from './footer';

class HomePage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}

export default HomePage;