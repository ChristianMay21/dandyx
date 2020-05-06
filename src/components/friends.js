import React from 'react';
import Likertcard2 from './../likertcard2';


class Friends extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.state.activeIcon = <div className="icon-row">
            <div className="frame-container"><object className='iconObj' type="image/svg+xml" data={require("./../assets/icons/pin.svg")}></object></div>
            <div className="frame-container"><object className='iconObj' type="image/svg+xml" data={require("./../assets/icons/friends.svg")}></object></div>
        </div>

    }

    swapIcons = (val) => {
    }

    render() {
        var zip = <div id="box-text"><div id="text">ZIP Code(s) of friend/family: </div><input id="zip-box" type="text"></input></div>
        return (
            < Likertcard2 loadcb={this.props.loadcb} prevcb={this.props.prevcb} nextcb={this.props.nextcb} slider2off="true" labels={["Near", "Far"]} customField={zip} levels={["cold", "cool", "temperate", "warm", "hot"]} headerText="Proximity from Friends and Family" contextText="Living close to my friends and family" cb2={this.swapIcons} icon={this.state.activeIcon} />

        );
    }

    componentDidMount() {
        console.log("")
    }
}

export default Friends;