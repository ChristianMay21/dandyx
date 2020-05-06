import React from 'react';
import $ from 'jquery';
import './likertcard.css';
import { Container } from 'semantic-ui-react';
import Scale from './components/scale';
import IconBarScale from './components/iconBarScale';

//prop: headerText: text to be included in header
//prop: icon: JSX element with icon
//prop: plural: "true" or "false" string denoting whether or not to use "is" or "are" in context phrase
//prop: contextText: optional arg to pass alternative to headerText to be used in context phrase

var logging = true
function log(string) {
    if(logging) {
        console.log(string)
    }
}

class Likertcard2 extends React.Component { //expected props: headerText, icon (element), plural, contextText

    constructor(props) {
        super(props);
        this.state = {}
        if(this.props.contextText === undefined) {
            this.state.contextText = this.props.headerText;
        } else {
            this.state.contextText = this.props.contextText;
        }
        if(this.props.customField === undefined) {
            this.state.customField = null
        } else {
            this.state.customField = this.props.customField
        }
    }

    labels() {
        return ["Not very important", "Very Important"]
    }

    labels2() {
        return this.props.labels
    }

    impcb = (val) => {
        this.setState({
            impVal: val
        })
    }

    impcb2 = (val) => {
        this.setState({
            impVal2: val
        })
        if(this.props.cb2 != undefined) {
            this.props.cb2(val)
        }
    }

    generateContext() {
        var context = '"'
        context = context + this.props.contextText


        switch(this.state.impVal2) {
            case "1":
                context = context.replace('$',this.props.levels[0])
                break;
            case "2":
                context = context.replace('$',this.props.levels[1])
                break;
            case "3":
                context = context.replace('$',this.props.levels[2])
                break;
            case "4":
                context = context.replace('$',this.props.levels[3])
                break;
            case "5":
                context = context.replace('$',this.props.levels[4])
                break;
            default:
                context = context.replace('$',this.props.levels[0])
        }

        if(this.props.plural == "true") {
            context = context + " are "
        } else {
            context = context + " is "
        }



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
                    < IconBarScale slider2off={this.props.slider2off} icon={this.props.icon} idTag="2" cb={this.impcb2} labels={this.props.labels} />
                    <div id="scale" ><Scale cb={this.impcb} labels={["Not Very Important", "Very Important"]}/></div>
                    {this.props.customField}
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

export default Likertcard2;