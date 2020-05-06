import React from 'react';
import Likertcard from './../likertcard';

class Hospitals extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            < Likertcard loadcb={this.props.loadcb} prevcb={this.props.prevcb} nextcb={this.props.nextcb} plural="false" headerText="Hospital Quality" contextText="Hospital quality" icon={<div className="frame-container"><object className='iconObj' type="image/svg+xml" data={require("./../assets/icons/heartbeat.svg")}></object></div>} />
        );
    }

    componentDidMount() {
        console.log("")
    }
}

export default Hospitals;