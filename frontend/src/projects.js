import React, { Component, Link } from 'react';
import docshare from './docshare.png';

export default class Projects extends Component {
  constructor(props){
    super(props);

  }

  render(){
    return (
      <div>
        <Project photo={docshare} caption="Document sharing" link="https://github.com/smedlang/Couldn-t-Share-Less"/>
        <Project photo={docshare} caption="Document sharing" link="https://github.com/smedlang/Couldn-t-Share-Less"/>
        <Project photo={docshare} caption="Document sharing" link="https://github.com/smedlang/Couldn-t-Share-Less"/>

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
    return (<div style={{textAlign: "center"}}>
      <div style={{textAlign: "center"}}>
        <img style={{textAlign: "left", paddingTop: 20,width: 400}} src={this.props.photo}/>
      <div>
      <div style={{textAlign: "right"}}>
        {/* <Link to={this.props.link}>See this on GitHub</Link> */}
        {this.props.caption}
      </div>
    </div>)
  }
}
