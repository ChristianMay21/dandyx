import React from 'react';
import Likertcard from './../likertcard';


class Scenic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        var icon = <div className="icon-row">
            <div className="frame-container"><object className='iconObj' type="image/svg+xml" data={require("./../assets/icons/sunset.svg")}></object></div>
            </div>
        return (
            < Likertcard loadcb={this.props.loadcb} prevcb={this.props.prevcb} nextcb={this.props.nextcb} headerText="Scenic Beauty" contextText="Scenic beauty" icon={icon}/>
        );
    }

    componentDidMount() {
    }
}

export default Scenic;