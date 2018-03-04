import React, { Component } from 'react';
import { connect } from 'react-redux';

class Main extends Component {
    
    render() {
       
        let paragraphs = this.props.paragraphs.map((p, index) => <p key={index}>{p}</p>);
        console.log(this.props.paragraphs);
        
        return (
            <div className="container-fluid" id="main" style={this.props.style} >
                {paragraphs}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { style: state.style,
            paragraphs: state.paragraphs }
}

export default connect(mapStateToProps)(Main);


