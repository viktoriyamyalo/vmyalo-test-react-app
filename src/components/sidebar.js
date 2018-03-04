import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeFontSize, changeFontFamily, changeBackgroundColor, deleteLastParagraph } from '../actions/index';

class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.onChangeFontSize = this.onChangeFontSize.bind(this);
        this.onChangeBackgroundColor = this.onChangeBackgroundColor.bind(this);
        this.onChangeFontFamily = this.onChangeFontFamily.bind(this);
        this.onDeleteLastParagraph = this.onDeleteLastParagraph.bind(this);
    }

    onChangeFontSize(event) {
        if(event.target.value >= 8 && event.target.value <= 24) {
            this.props.changeFontSize(event.target.value);
        }
    }

    onChangeBackgroundColor(event) {
        this.props.changeBackgroundColor(event.target.value);
    }

    onChangeFontFamily(event) {
        this.props.changeFontFamily(event.target.value);
    }
    
    onDeleteLastParagraph() {
        this.props.deleteLastParagraph();
    }
    render() {

        return (
            <nav id="sidebar" style={{left: this.props.hidden? '-300px': '0px'}}>
                

                <div style={{height: 50}}>
                </div>

                <div className="sidebar-header">
                    <h3>Menu</h3>
                    </div>
        
        
                <ul className="list-group">

                <li className="list-group-item">
                    
                    <label htmlFor="font_size">Please choose font size</label>
                    
                    <input type="number" min="8" max="24" step="1" id="font_size" onChange={this.onChangeFontSize}/>
                    
                </li>

                <li className="list-group-item">
                    
                    <label htmlFor="background_color">Please select background color</label>

                    <select id="background_color" onChange={this.onChangeBackgroundColor}>
                        <option value="#AFCBF3">Blue Perano</option>
                        <option value="#6195C5">Blue Danube</option>
                        <option value="#EECD86">Flax</option>
                        <option value="#E49E7A">Yellow Orange</option>
                        <option value="#E39183">Tonys Pink</option>
                        <option value="#FFFFFF">White (default)</option>
                    </select>
                </li>

                <li className="list-group-item">
                    
                    <label htmlFor="font_family">Please select font family</label>

                    <select id="font_family" onChange={this.onChangeFontFamily}>
                        <option value="Georgia, serif">Georgia</option>
                        <option value="'Courier New', Courier, monospace">Courier New</option>
                        <option value="'Times New Roman', Times, serif">Times New Roman</option>
                        <option value="Arial, Helvetica, sans-serif">Arial (default)</option>
                    </select>
                    
                </li>

                <li className="list-group-item">
                    <span id="delete_paragraph">Delete the last paragraph on page<button className="btn btn-danger" onClick={this.onDeleteLastParagraph}>Delete!</button></span>
                
                </li>

                
            </ul>
        </nav>
        
        );
    }
}

export default connect(null, { changeFontSize, changeFontFamily, changeBackgroundColor, deleteLastParagraph })(Sidebar);