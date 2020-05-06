import React from 'react';
import Likertcard from './../likertcard';

class Downtown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            < Likertcard loadcb={this.props.loadcb} prevcb={this.props.prevcb} nextcb={this.props.nextcb} headerText="Downtown" contextText="An active, clean, safe downtown" icon={<div><img src={require("./../assets/icons/city.gif")}></img><img src={require("./../assets/icons/bicycle.gif")}></img></div>}/>
        );
    }

    componentDidMount() {
        console.log("")
    }
}

export default Downtown;