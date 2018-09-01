import React, {Component} from 'react'
import profilePic from './profile.jpg'
import './App.css';
export default class AboutMe extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    return (
      <div>
      <br />
        <img src={profilePic} style={{float: 'left', width: '400px',  borderRadius: "20%"}}/>
        Hello! I'm Savi Medlang.

      </div>
    );
  }


}
