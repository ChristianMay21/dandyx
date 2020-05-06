import React from 'react';
import $ from 'jquery';
import Likertcard from './../likertcard';

class Walkability extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            < Likertcard loadcb={this.props.loadcb} prevcb={this.props.prevcb} nextcb={this.props.nextcb} headerText="Walkability" icon={<img src={require("./../assets/icons/walkability.gif")}></img>}/>
        );
    }

    componentDidMount() {
        console.log("")
    }
}

export default Walkability;