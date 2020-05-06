import React from 'react';
import './scale.css';




class Scale extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    idTag() {
        console.log("in idTag")
        if(this.props.idTag != undefined) {
            this.state.idTag = this.props.idTag
            return "myRange" + this.props.idTag
        } else {
            this.state.idTag = ""
            return "myRange"
        }
    }
    render() {
        return (
            <div id="slideDiv">
                <div className="slidecontainer">
                    <input type="range" min="1" max="5" defaultValue="1" className="slider" id={this.idTag()} onInput={
                        () => {
                            console.log()
                            var val = document.getElementById("myRange"+this.state.idTag).value
                            console.log("Current slider value is " + val)
                            //document.getElementById("myRange").value
                            this.props.cb(val)
                        }
                    } />
                </div>
                <div className="slideLabel">
                    <div>{this.props.labels[0]}</div>
                    <div>{this.props.labels[1]}</div>
                </div>
            </div>
        );
    }

    componentDidMount() {

        console.log("")
    }
}

export default Scale;