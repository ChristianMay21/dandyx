//This component is intended to be a parent component of slider.js, adding an iconbar which responds to the slider

import React from 'react';
import Scale from './scale';
import './scale.css';

class IconBarScale extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        if(this.props.slider2off != "true") {
            return (
                <div className="icon-bar-container">
                <div id="icon">{this.props.icon}</div>
                <div id="scale2"><Scale idTag={this.props.idTag} cb={this.props.cb} labels={this.props.labels}/></div>
                </div>
            );
        } else {
            return (
                <div className="icon-bar-container">
                <div id="icon">{this.props.icon}</div>
                </div>
            );
    
        }
    }

    componentDidMount() {

    }
}

export default IconBarScale;