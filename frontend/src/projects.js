import React, { Component } from 'react';
import docshare from './docshare.png';

export default class Projects extends Component {
  constructor(props){
    super(props);

  }

  render(){
    return (
      <div>
        <Project photo={beach} caption="Document sharing"/>
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
    return (<div>
      <img src={docshare}/>
      {caption}
    </div>)
  }
}
