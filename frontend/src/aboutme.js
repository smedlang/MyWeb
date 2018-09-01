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
        <div style={{fontFamily: '"Comic Sans MS", cursive, sans-serif', fontSize: '18pt', padding: '100px'}}> Hello! I'm Savi Medlang. I'm a developer, passionate about
        technology and user experience. I'm currently a senior at Case Western Reserve University, studying Computer Science. <br/> <br/>
        Apart from coding, you can find me in a dog park, in the kitchen cooking, or performing music in my band.
       </div>

      </div>
    );
  }


}
