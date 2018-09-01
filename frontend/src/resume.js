import React, {Component} from 'react'
import {Document, Page} from 'react-pdf'
let resume = require('./resume.pdf');


console.log(resume);
export default class Resume extends Component{
  constructor(props){
    super(props);

  }
  render(){
    return (
        <Document
          file={resume}
          onLoadSuccess={()=> console.log('success')}
          >
          <Page width={1400} pageNumber={1} />
        </Document>
    );
  }
}
