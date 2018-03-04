import React, { Component } from 'react';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import FaTwitter from 'react-icons/lib/fa/twitter';

class Footer extends Component {
    render() {
        return (
        <footer className="page-footer font-small pt-4 mt-4">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
  
              <div className="col-md-6">
                  <h5 className="text-uppercase">Lorem Ipsum</h5>
                  <p>Lorem ipsum dolor sit amet</p>
              </div>
              
              <div className="col-md-6">
                  <h5 className="text-uppercase">Links</h5>
                  <ul className="list-unstyled">
                      <li>
                          <FaFacebook />
                          <a href="#">Facebook</a></li>

                      <li>
                          <FaLinkedinSquare />
                          <a href="#">LinkedIn</a></li>

                      <li>
                          <FaTwitter />
                          <a href="#">Twitter</a></li>
                  </ul>
              </div>
        
          </div>
      </div>
    
      <div className="footer-copyright text-center">
          <div className="container-fluid">
              © 2018 Lorem Ipsum
          </div>
      </div>
    
  
  </footer>
            
        );
    }
}

export default Footer;