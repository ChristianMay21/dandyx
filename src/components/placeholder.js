import React from 'react';
import $ from 'jquery';
import '.././likertcard.css';
import { Container } from 'semantic-ui-react';

//prop: headerText: text to be included in header
//prop: icon: JSX element with icon
//prop: plural: "true" or "false" string denoting whether or not to use "is" or "are" in context phrase
//prop: contextText: optional arg to pass alternative to headerText to be used in context phrase
class Placeholder extends React.Component { //expected props: headerText, icon (element), plural, contextText

    constructor(props) {
        super(props);
        this.state = {}
        if(this.props.contextText === undefined) {
            this.state.contextText = this.props.headerText;
        } else {
            this.state.contextText = this.props.contextText;
        }
    }

    impcb = (val) => {
        console.log("in impcb")
        console.log("value is: " + val)
        this.setState({
            impVal: val
        })
    }

    generateContext() {
        var context = '"'
        if(this.props.plural == "true") {
            context = context + this.state.contextText + " are "
        } else {
            context = context + this.state.contextText + " is "
        }

        console.log(this.state.impVal)
        switch(this.state.impVal) {
            case "1":
                // console.log("case 1")
                context = context + "not at all "
                break;
            case "2":
                context = context + "slightly "
                break;
            case "3":
                context = context + "somewhat "
                break;
            case "4":
                // console.log("case 4")
                context = context + ""
                break;
            case "5":
                context = context + "very "
                break;
            default:
                // console.log("bad case :(")
                context = context + "not at all "
        }
        context = context + 'important to me."'
        // console.log(context)
        // console.log("bottom of generateContext")
        try {
            document.getElementById("context").innerHTML = context;
        } catch {
            console.warn("Element with id 'context' not found: fine if occurring on page or component load, may indicate an error otherwise")
        }
        return context
    }

    render() {
        return (
            <div className="card_container">
                <Container textAlign="center">
                    <h1 id='cardHeader'>End of Demo!</h1>
                    <div id="icon"><div className="icon-row"><div class="livicon-evo" data-options=" name: lock.svg; style: original; size: 120px; strokeStyle: original; strokeWidth: original; tryToSharpen: true; rotate: none; flipHorizontal: false; flipVertical: false; strokeColor: #22A7F0; strokeColorAction: #b3421b; strokeColorAlt: #F9B32F; strokeColorAltAction: #ab69c6; fillColor: #91e9ff; fillColorAction: #ff926b; solidColor: #6C7A89; solidColorAction: #4C5A69; solidColorBgAction: #ffffff; solidColorBg: #ffffff; colorsOnHover: none; colorsHoverTime: 0.3; colorsWhenMorph: none; brightness: 0.1; saturation: 0.07; morphState: start; morphImage: none; allowMorphImageTransform: false; strokeWidthFactorOnHover: none; strokeWidthOnHoverTime: 0.3; keepStrokeWidthOnResize: false; animated: true; eventType: hover; eventOn: self; autoPlay: true; delay: 0; duration: default; repeat: default; repeatDelay: default; drawOnViewport: false; viewportShift: oneHalf; drawDelay: 0; drawTime: 1; drawStagger: 0.1; drawStartPoint: middle; drawColor: same; drawColorTime: 1; drawReversed: false; drawEase: Power1.easeOut; eraseDelay: 0; eraseTime: 1; eraseStagger: 0.1; eraseStartPoint: middle; eraseReversed: true; eraseEase: Power1.easeOut; touchEvents: false "></div></div></div>
                    <div id="text">This is where I would put the results page, if I had one! Unfortunately, front-end took WAY more time than I'd estimated, so that will have to wait for another time. </div>
                    <div id="cardnav"></div>
                    <div id="loadingBar"></div>
                </Container>
            </div>
        );
    }

    componentDidMount() {
        this.props.loadcb()
    }
}

//document.getElementById("e0ga7mdqfsqv12").addEventListener("click",function () {console.log("test2")}, false)

export default Placeholder;