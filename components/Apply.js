import React from 'react';
import ReactDOM from 'react-dom';
var Input = require('pui-react-inputs').Input;
var PrimaryButton = require('pui-react-buttons').PrimaryButton;
import {connect} from 'react-redux';

class Apply extends React.Component {
  call(){
    console.log("tha");
    var candidateName = document.getElementById("field").value;
    var request = {"name" : candidateName};
    request.mail = document.getElementById("mail").value;
  console.log(document.getElementById("t_0").value);
    request.html=document.querySelector('input[name="HTML"]:checked').value;
    request.css=document.querySelector('input[name="CSS"]:checked').value;
    request.js=document.querySelector('input[name="JS"]:checked').value;
    request.react=document.querySelector('input[name="REACT"]:checked').value;

    var requestBody = {};
    requestBody.request = request;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log("Posted Successfully");
      }
       // Action to be performed when the document is read;
    };
    xhttp.open("POST", "http://localhost:3000/subscribers", true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.send(JSON.stringify(requestBody));
    console.log("Request Body",JSON.stringify(requestBody));
  }


  render(){
    return(
      <div>

      <Input label="Name" id="field" className="theInput" placeholder="Enter your Name here"/>
      <Input label="E-mail" id='mail' className="theInput" placeholder="Enter your mail-id here"/>
      <PrimaryButton onClick={this.call}>
          Apply
      </PrimaryButton>

      </div>);
  }
}



export default Apply;
