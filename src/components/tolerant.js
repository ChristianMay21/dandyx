import React from 'react';
import Likertcard from './../likertcard';


class Tolerant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        var icon = <div className="icon-row">
                <div className="frame-container"><object className='iconObj' type="image/svg+xml" data={require("./../assets/icons/heart.svg")}></object></div>
            </div>
        return (
            < Likertcard loadcb={this.props.loadcb} prevcb={this.props.prevcb} nextcb={this.props.nextcb} headerText="Tolerant Society" contextText="A tolerant society" icon={icon}/>
        );
    }

    componentDidMount() {
    }
}

export default Tolerant;