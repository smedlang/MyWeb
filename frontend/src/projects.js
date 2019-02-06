import React, { Component, Link } from 'react';
import docshare from './docshare.png';
import epantry from './images/epantry.png';
import ugood from './images/ugood.png';


export default class Projects extends Component {
  constructor(props){
    super(props);

  }

  render(){
    return (
      <div style={{alignItems: "center", height: 300}}>
        <div style={{height: 100, fontFamily: '"Palatino Linotype", "Book Antiqua", Palatino, serif'}}>
          <h1 style={{textAlign: "center"}}>Featured Technical Projects</h1>
        </div>
        <Project photo={docshare} title="Couldn't Share Less" caption="This is a document sharing application, that allows real-time editing between multiple users on the same document." link="https://github.com/smedlang/Couldn-t-Share-Less"/>
        <Project photo={epantry} title="ePantry" caption="This is the ePantry iOS application, which functions as a smart pantry and recipe searching application." link="https://github.com/smedlang/Couldn-t-Share-Less"/>
        <Project photo={ugood} title="HeadSmart" caption="This is an application built on ReactNative used to monitor daily mental health and make smart suggestions based on the user's profile" link="https://github.com/smedlang/Couldn-t-Share-Less"/>

      </div>
    );
  }
}
class Project extends Component{
  constructor(props){
    super(props);

    this.state={

    }
  }

  render(){
    return (
      <div style={{}}>
          <img style={{justifyContent: "left", float: "left", paddingLeft: 100, paddingTop: 20, height: 300,}} src={this.props.photo}/>
        <div style={{height: 300, textAlign: "center", paddingTop: 100}}>
          <h3><u>{this.props.title}</u></h3> <br/>
          <p>{this.props.caption}</p>
        </div>
      </div>)
  }
}
