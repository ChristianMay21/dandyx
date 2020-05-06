import React from 'react';
import $ from 'jquery';
import './likertcard.css';
import { Container } from 'semantic-ui-react';
import Scale from './components/scale';

//prop: headerText: text to be included in header
//prop: icon: JSX element with icon
//prop: plural: "true" or "false" string denoting whether or not to use "is" or "are" in context phrase
//prop: contextText: optional arg to pass alternative to headerText to be used in context phrase
class Likertcard extends React.Component { //expected props: headerText, icon (element), plural, contextText

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
                <div id="instr">Rate each of the factors based on how important the factors are to you. Cards may ask for additional details. </div>
                <Container textAlign="center">
                    <h1 id='cardHeader'>{this.props.headerText}</h1>
                    <div id="icon">{this.props.icon}</div>
                    <div id="scale"><Scale cb={this.impcb} labels={["Not very important", "Very important"]} /></div>
                    <div id="context">{this.generateContext()}</div>
                    <div id="cardnav"><div className="btn-container"><button className="cardnavbtn" onClick={this.props.prevcb}>Previous</button></div><div id="spacer"></div><div className="btn-container"><button className="cardnavbtn" onClick={this.props.nextcb}>Next</button></div></div>
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

export default Likertcard;