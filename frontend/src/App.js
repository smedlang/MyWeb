import React, { Component } from 'react';
import './App.css';
import profile from './profile.jpg'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import posed from 'react-pose'
import Quiz from './quiz.js'
import Photos from './photos.js'
import Games from './games.js'
import Music from './music.js'

const Box = posed.div({});

class Home extends Component{
  constructor(props){
    super(props);

    this.state={};

  }

  render(){
    return (
      <div>
        <img style={{display: "inline", paddingTop: 20, height: 400}} src = {profile} />
        <h2> Links </h2>
        <ul>
          <li> <a href="http://linkedin.com/in/savita-medlang"> Linkedin</a> </li>
          <li> <a href="https://github.com/smedlang"> GitHub</a> </li>
          <li> <Box classname="box" /> Hello </li>

        </ul>
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

  render() {
    return (
      <Router>
        <div>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Welcome to Savi's Website</h1>
              <h1>{this.state.header}</h1>
              <button onClick = {()=> this.setState({header: 'Home'})}>  <Link to={'/'}>      Home    </Link> </button>
              <button onClick = {()=> this.setState({header: 'Quiz'})}>  <Link to={'/quiz'}>  Quiz    </Link> </button>
              <button onClick = {()=> this.setState({header: 'Photos'})}><Link to={'/photos'}>Photos  </Link> </button>
              <button onClick = {()=> this.setState({header: 'Music'})}> <Link to={'/music'}> Music   </Link> </button>
              <button onClick = {()=> this.setState({header: 'Games'})}> <Link to={'/games'}> Games   </Link> </button>

            </header>
            </div>
            <div>
              <Route exact={true} path="/" render= {()=> (<Home />)}/>
              <Route exact={true} path="/quiz" render={()=> (<Quiz />)}/>
              <Route exact={true} path="/photos" render={()=> (<Photos /> )}/>
              <Route exact={true} path="/music" render={()=> (<Music /> )}/>
              <Route exact={true} path="/games" render={()=> (<Games />)}/>
            </div>
        </div>
      </Router>
    );
  }
}

export default App;
