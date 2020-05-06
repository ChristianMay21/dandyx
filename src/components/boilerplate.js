import React from 'react';
import Likertcard from './../likertcard';

class Scale extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            < Likertcard contextText="" headerText="" icon={<img src={require("./../assets/icons/walkability.gif")}></img>}/>
        );
    }

    componentDidMount() {
        console.log("")
    }
}

export default Scale;