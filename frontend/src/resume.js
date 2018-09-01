import React, {Component} from 'react'
import resume from './resume.docx'

console.log(resume);
export default class Resume extends Component{
  constructor(props){
    super(props);

  }
  render(){
    return (

      <div>
        <a href = "./resume.pdf"> Resume</a>
      </div>
    );
  }
}
