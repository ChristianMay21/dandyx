import React from 'react';
import Likertcard2 from './../likertcard2';


class Climate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.state.activeIcon = <div className="icon-row">
            <div className="frame-container"><object className='iconObj' type="image/svg+xml" data={require("./../assets/icons/snow.svg")}></object></div>
        </div>

    }

    swapIcons = (val) => {
        var icon1 = <div className="icon-row">
            <div className="frame-container"><object className='iconObj' type="image/svg+xml" data={require("./../assets/icons/snow.svg")}></object></div>
        </div>
        var icon2 = <div className="icon-row">
            <div className="frame-container"><object className='iconObj' type="image/svg+xml" data={require("./../assets/icons/temperate.svg")}></object></div>
            <div className="frame-container"><object className='iconObj' type="image/svg+xml" data={require("./../assets/icons/snow.svg")}></object></div>
        </div>
        var icon3 = <div className="icon-row">
            <div className="frame-container"><object className='iconObj' type="image/svg+xml" data={require("./../assets/icons/temperate.svg")}></object></div>
        </div>
        var icon4 = <div className="icon-row">
            <div className="frame-container"><object className='iconObj' type="image/svg+xml" data={require("./../assets/icons/temperate.svg")}></object></div>
            <div className="frame-container"><object className='iconObj' type="image/svg+xml" data={require("./../assets/icons/sun.svg")}></object></div>
        </div>
        var icon5 = <div className="icon-row">
            <div className="frame-container"><object className='iconObj' type="image/svg+xml" data={require("./../assets/icons/sun.svg")}></object></div>
        </div>

        var icons = [icon1, icon2, icon3, icon4, icon5]


        console.log(val)
        console.log(typeof val)
        console.log(this)
        console.log(typeof this)
        this.setState({ activeIcon: icons[parseInt(val) - 1] })
        console.log(document.getElementsByClassName("frame-container"))
    }

    render() {
        return (
            < Likertcard2 loadcb={this.props.loadcb} prevcb={this.props.prevcb} nextcb={this.props.nextcb} labels={["Cold", "Hot"]} levels={["cold", "cool", "temperate", "warm", "hot"]} headerText="Climate" contextText="Living in an area with a $ climate" cb2={this.swapIcons} icon={this.state.activeIcon} />
        );
    }

    componentDidMount() {
        console.log("")
    }
}

export default Climate;