import React from 'react';
import Animated from './assets/Dandy_home.svg';
//import $ from 'jquery';
import './animation.css';

class Animation extends React.Component {
  render() {
    return (
      <div className="home-container">
        <div className="pad"></div>
        <div className="center">
          <object id="svgobj" type="image/svg+xml" data={Animated} >svg-animation</object>
        </div>
        <div className="pad"></div>
      </div>

    );
  }

  componentDidMount() {
    console.log("componentDidMount successfully executed")
    var rect = document.getElementById("svgobj")
    var par = this
    rect.addEventListener('load', function() {
      console.log("svgobj loaded")
      console.log(par)
      console.log(par.props)
      document.getElementById("svgobj").contentDocument.getElementById("epjsesor9s7i12").addEventListener("click", par.props.cb, false)
      document.getElementById("svgobj").contentDocument.getElementById("epjsesor9s7i18").addEventListener("click", par.props.cb, false)
      document.getElementById("svgobj").contentDocument.getElementById("epjsesor9s7i12").style.cursor = "pointer"
      document.getElementById("svgobj").contentDocument.getElementById("epjsesor9s7i18").style.cursor = "pointer"
    });
  }
}

//document.getElementById("e0ga7mdqfsqv12").addEventListener("click",function () {console.log("test2")}, false)

export default Animation;