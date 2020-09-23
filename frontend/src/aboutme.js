import React, {Component} from 'react'
import profilePic from './newpic.jpg'
import './App.css';
export default class AboutMe extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    return (
      <div>
      <br />
        <img src={profilePic} style={{margin: '50px', float: 'left', width: '400px',  borderRadius: "50%"}}/>
        <div style={{fontFamily: '"Comic Sans MS", cursive, sans-serif', fontSize: '18pt', padding: '100px'}}> Hi, I'm Savi! I'm a master's student in the Department of Computer Science at the University of Southern California. This past summer, I worked at Genesys as a Machine Learning Engineer intern on the Security team. The previous summer, I also worked at Genesys as a Software Engineer intern on the DevOps team. I've had experience in many areas of computer science, but I am most interested in machine learning. I enjoy problem solving and learning new skills.  <br/> <br/>
       </div>

      </div>
    );
  }


}
