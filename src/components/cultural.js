import React from 'react';
import Likertcard from './../likertcard';


class Cultural extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        var icon = <div className="icon-row">
                <div className="frame-container"><object className='iconObj' type="image/svg+xml" data={require("./../assets/icons/art.svg")}></object></div>
                <div className="frame-container"><object className='iconObj' type="image/svg+xml" data={require("./../assets/icons/drama.svg")}></object></div>
            </div>
        return (
            < Likertcard loadcb={this.props.loadcb} prevcb={this.props.prevcb} nextcb={this.props.nextcb} headerText="Cultural Activities" plural="true" contextText="Cultural activities" icon={icon}/>
        );
    }

    componentDidMount() {
        console.log("")
    }
}

export default Cultural;