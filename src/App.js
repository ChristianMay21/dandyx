import React, { useEffect, createRef } from 'react';
import logo from './logo.svg';
import './App.css';
import Animation from './animation';
import Likertcard from './likertcard';


import Guide from './components/guide'
import Crimerate from './components/crimerate';
import Downtown from './components/downtown';
import Hospitals from './components/hospitals';
import Walkability from './components/walkability';
import Scenic from './components/scenic';
import CostofLiving from './components/costofliving';
import Nightlife from './components/nightlife';
import Cultural from './components/cultural';
import Greenery from './components/greenery';
import Tolerant from './components/tolerant';
import Schools from './components/schools';
import Commute from './components/commute';
import Population from './components/population';
import Climate from './components/climate';
import Friends from './components/friends';
import Career from './components/career';
import Placeholder from './components/placeholder';
import { array } from 'prop-types';

//import "./assets/icons/LivIcons/js/tools/snap.svg-min.js";


class App extends React.Component {



  constructor(props) {
    super(props);
    this.state = {page: 0}
    this.instance = createRef();
  }



  homecb = () => {
    this.setState({
      page: 1
    })
    document.body.style.background = "#cce2ff";
  }

  prevcb = () => {
    console.log("detected 'previous' button press")
    this.setState({
      page: this.state.page - 1
    })
  }

  nextcb = () => {
    console.log("detected 'next' button press")
    this.setState({
      page: this.state.page + 1
    })
  }

  loadScripts = () => {
    console.log("inside loadscripts")
    const prefix = "http://ea84c204.ngrok.io/icons/LivIcons/js/"

    const jq = document.createElement('script')
    jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"
    jq.async = true;
    document.body.appendChild(jq)

    function otherScripts() {
      console.log("inside otherScripts")
      const scriptPaths = ["tools/snap.svg-min.js","/tools/TweenMax.min.js","tools/DrawSVGPlugin.min.js","tools/MorphSVGPlugin.min.js","LivIconsEvo.defaults.js","LivIconsEvo.min.js"]
      var scripts = []
      for(var index = 0; index < scriptPaths.length; index++) {
        console.log("in scriptpaths")
        const script = document.createElement('script');
        script.src = prefix + scriptPaths[index]
        script.async = true;
        scripts.push(script)
      }
      var eindex = 1
      console.log(scripts)
      for(var index = 0; index < scripts.length; index++) {
        console.log("in second for loop")
        console.log(index)
        if(index > 0) {
          scripts[index - 1].addEventListener('load', function oneTime() {
            console.log("in onetime")
            scripts[eindex-1].removeEventListener('load',oneTime,false);
            console.log(scripts)
            console.log(eindex)
            console.log(scripts[eindex])            
            console.log(typeof scripts[eindex])
            document.body.appendChild(scripts[eindex])
            console.log("just appended script to body (hopefully)")
            eindex ++;
          });
        }
      }
      document.body.appendChild(scripts[0])
    }

    jq.onload = () => {
      otherScripts()
    }
  }

  render() {
    console.log("rendering!")

    if(this.state.page == 0) {
      console.log("state detected as home")
      document.body.style.background = "black";
      return (
          < Animation cb={this.homecb}/>
      )
    } else if(this.state.page == 1) {
      return (
        < Guide loadcb={this.loadScripts} prevcb={this.prevcb} nextcb={this.nextcb}/>
      )
    } else if(this.state.page == 2) {
      return (
        < Career loadcb={this.loadScripts} prevcb={this.prevcb} nextcb={this.nextcb} />
      )
    } else if(this.state.page == 3) {
      return(
        < Climate loadcb={this.loadScripts} prevcb={this.prevcb} nextcb={this.nextcb}/>
      )
    } else if(this.state.page == 4) {
      return(
        < Commute loadcb={this.loadScripts} prevcb={this.prevcb} nextcb={this.nextcb}/>
      )
    } else if(this.state.page == 5) {
      return(
        < CostofLiving loadcb={this.loadScripts} prevcb={this.prevcb} nextcb={this.nextcb}/>
      )
    } else if(this.state.page == 6) {
      return(
        < Crimerate loadcb={this.loadScripts} prevcb={this.prevcb} nextcb={this.nextcb}/>
      )
    } else if(this.state.page == 7) {
      return(
        < Cultural loadcb={this.loadScripts} prevcb={this.prevcb} nextcb={this.nextcb}/>
      )
    } else if(this.state.page == 8) {
      return(
        < Downtown loadcb={this.loadScripts} prevcb={this.prevcb} nextcb={this.nextcb}/>
      )
    } else if(this.state.page == 9) {
      return(
        < Friends loadcb={this.loadScripts} prevcb={this.prevcb} nextcb={this.nextcb}/>
      )
    } else if(this.state.page == 10) {
      return(
        < Greenery loadcb={this.loadScripts} prevcb={this.prevcb} nextcb={this.nextcb}/>
      )
    } else if(this.state.page == 11) {
      return(
        < Hospitals loadcb={this.loadScripts} prevcb={this.prevcb} nextcb={this.nextcb}/>
      )
    } else if(this.state.page == 12) {
      return(
        < Nightlife loadcb={this.loadScripts} prevcb={this.prevcb} nextcb={this.nextcb}/>
      )
    } else if(this.state.page == 13) {
      return(
        < Population loadcb={this.loadScripts} prevcb={this.prevcb} nextcb={this.nextcb}/>
      )
    } else if(this.state.page == 14) {
      return(
        < Scenic loadcb={this.loadScripts} prevcb={this.prevcb} nextcb={this.nextcb}/>
      )
    } else if(this.state.page == 15) {
      return(
        < Schools loadcb={this.loadScripts} prevcb={this.prevcb} nextcb={this.nextcb}/>
      )
    } else if(this.state.page == 16) {
      return(
        < Tolerant loadcb={this.loadScripts} prevcb={this.prevcb} nextcb={this.nextcb}/>
      )
    }  else if(this.state.page == 17) {
      return(
        < Walkability loadcb={this.loadScripts} prevcb={this.prevcb} nextcb={this.nextcb}/>
      )
    }  else if(this.state.page == 18) {
      return(
        < Placeholder loadcb={this.loadScripts} prevcb={this.prevcb} nextcb={this.nextcb}/>
      )
    }

  }
  componentDidMount() {
    this.loadScripts()
  }
}

export default App;
