import React, { Component } from 'react';
import './App.css';
import profile from './profile.jpg'
import cartoon from './cartoon.JPG'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import posed from 'react-pose'
import AboutMe from './aboutme.js'
import Photos from './photos.js'
import Games from './games.js'
import Music from './music.js'
import stylesheet from './stylesheet.js'
import Projects from './projects.js'
import Resume from './resume.js'
import linkedin from './linkedin.jpg'
import github from './github.png'
import mail from './mail.png'

let tab = stylesheet.stylesheet.tab;
let header = stylesheet.stylesheet.header;
let smallIcon = stylesheet.stylesheet.smallIcon

console.log(tab);

const Box = posed.div({});

class Home extends Component{
  constructor(props){
    super(props);

    this.state={};

  }

  render(){
    return (
      <div style={{textAlign: 'center'}}>
        <div className="profilePic"> <Link to={'/aboutme'}><img className="profilePic" src = {cartoon} /> </Link> </div>
        {/* <div style ={{border: 'solid black 3px'}}>
        <h2> Links </h2>
          <h3> <a href="http://linkedin.com/in/savita-medlang"> LinkedIn</a> <br />
          <a href="https://github.com/smedlang"> GitHub</a> </h3>
        </div> */}
      </div>
    );
  }
}


class App extends Component {
  constructor (props){
    super(props);

    this.state={
      header: 'Home'
    }
  }

  navigate(newPage){
    this.setState({
      header: newPage
    })
  }

  render() {
    return (
      <Router>
        <div>
          <div className="App" height= "100%">
            <header className="App-header" style ={header}>
              <h1 className="App-title">Savi Medlang</h1>
              <h1>{this.state.header}</h1>
              <button className="tab" >  <Link to={'/'}>      Home    </Link> </button>
              <button className="tab" >  <Link to={'/projects'}>  Projects    </Link> </button>
              <button className="tab" ><Link to={'/resume'}> Resume  </Link> </button>
              <button className="tab" ><Link to={'/aboutme'}> About Me  </Link> </button>

            </header>


            </div>
            <div>
              <Route exact={true} path="/" render= {()=> (<Home navigate = {this.navigate.bind(this)}/>)}/>
              <Route exact={true} path="/aboutme" render={()=> (<AboutMe />)}/>
              <Route exact={true} path="/photos" render={()=> (<Photos /> )}/>
              <Route exact={true} path="/music" render={()=> (<Music /> )}/>
              <Route exact={true} path="/games" render={()=> (<Games />)}/>
              <Route exact={true} path="/projects" render={()=> (<Projects />)}/>
              <Route exact={true} path="/resume" render={()=> (<Resume />)}/>

            </div>
            <br />
            <br />
            <div style={{clear: 'left', textAlign: 'center'}}>
              <a href="http://www.github.com/smedlang"> <img style ={smallIcon} src={github} /> </a>
              <a href="http://linkedin.com/in/savita-medlang"> <img style={smallIcon} src = {linkedin} /> </a>
              <a href='mailto:smedlang@gmail.com?subject=Hey Savi!'> <img style= {smallIcon} src={mail}/> </a>
            </div>
        </div>
      </Router>
    );
  }
}

export default App;
