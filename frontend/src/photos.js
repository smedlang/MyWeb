import beach from './images/bakerbeach.jpg';
import train from './images/train.jpg';
import hike from './images/hike.JPG';
import muirWoods from './images/muir_woods.jpg'


import React, { Component } from 'react';

export default class Photos extends React.Component{
  constructor(props){
    super(props);

    this.state={
      current: ''
    };
  }

  render(){
    return (
      <div>
        <Photo photo={beach} caption="Baker Beach, SF"/>
        <Photo photo={train} caption="California Zephyr Train from Denver, CO to Emoryville, CA"/>
        <Photo photo={hike} caption = "Desolation Wilderness Hike in Tahoe, CA"/>
        <Photo photo={muirWoods} caption = "Muir Woods"/>
      </div>
    );
  }
}

class Photo extends Component{
  constructor(props){
    super(props);

    this.state={

    }
  }

  render(){
    return (
      <div style = {{textAlign: "center"}}>
        <img style={{paddingTop: 20,width: 600}} src={this.props.photo}/>
        <p> {this.props.caption}</p>
      </div>
    );
  }
}
