import React from 'react';
import Likertcard from './../likertcard';


class Nightlife extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        var icon = <div className="icon-row">
            <div class="livicon-evo" data-options=" name: wine-glass.svg; style: original; size: 120px; strokeStyle: original; strokeWidth: original; tryToSharpen: true; rotate: none; flipHorizontal: false; flipVertical: false; strokeColor: #22A7F0; strokeColorAction: #b3421b; strokeColorAlt: #F9B32F; strokeColorAltAction: #ab69c6; fillColor: #91e9ff; fillColorAction: #ff926b; solidColor: #6C7A89; solidColorAction: #4C5A69; solidColorBgAction: #ffffff; solidColorBg: #ffffff; colorsOnHover: none; colorsHoverTime: 0.3; colorsWhenMorph: none; brightness: 0.1; saturation: 0.07; morphState: start; morphImage: none; allowMorphImageTransform: false; strokeWidthFactorOnHover: none; strokeWidthOnHoverTime: 0.3; keepStrokeWidthOnResize: false; animated: true; eventType: hover; eventOn: self; autoPlay: true; delay: 0; duration: default; repeat: default; repeatDelay: default; drawOnViewport: false; viewportShift: oneHalf; drawDelay: 0; drawTime: 1; drawStagger: 0.1; drawStartPoint: middle; drawColor: same; drawColorTime: 1; drawReversed: false; drawEase: Power1.easeOut; eraseDelay: 0; eraseTime: 1; eraseStagger: 0.1; eraseStartPoint: middle; eraseReversed: true; eraseEase: Power1.easeOut; touchEvents: false "></div>
            </div>
        return (
            < Likertcard loadcb={this.props.loadcb} prevcb={this.props.prevcb} nextcb={this.props.nextcb} headerText="Nightlife" contextText="An energetic nightlife scene" icon={icon}/>
        );
    }

    componentDidMount() {
    }
}

export default Nightlife;