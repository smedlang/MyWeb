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
import house from './house.png'

let tab = stylesheet.stylesheet.tab;
let header = stylesheet.stylesheet.header;
let smallIcon = stylesheet.stylesheet.smallIcon

console.log(tab);

const Box = posed.div({});

class Home extends Component{
  constructor(props){
    super(props);

    this.state={
      header: 'home'
    };

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
              <h1 style={{fontSize: '25pt', fontFamily: '"Palatino Linotype", "Book Antiqua", Palatino, serif'}}> Savita Medlang</h1>
              <div>
                <Link onClick={()=> this.setState({header: 'home'})} className="tab" to={'/'}> HOME </Link>
                <Link onClick={()=> this.setState({header: 'projects'})} className="tab" to={'/projects'}>  PROJECTS    </Link>
                <Link onClick={()=> this.setState({header: 'resume'})} className="tab" to={'/resume'}> RESUME  </Link>
                <Link onClick={()=> this.setState({header: 'aboutme'})} className="tab" to={'/aboutme'}> ABOUT ME  </Link>
              </div>
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
              <br />
              <p style= {{color: '#D8D7D7', fontFamily: '"Palatino Linotype", "Book Antiqua", Palatino, serif'}}> ©Savita Medlang 2018 </p>
            </div>
        </div>
      </Router>
    );
  }
}

export default App;
