import React from 'react';
import ReactDOM from 'react-dom';

var Tabbs = require('pui-react-tabs').Tabs;
var Tab = require('pui-react-tabs').Tab;
var LeftTabs = require('pui-react-tabs').LeftTabs;
var Toggle = require('pui-react-toggle').Toggle;

class HTMLL extends React.Component {
  render(){
    return(
    <div>
    <span>HyperText Markup Language (HTML) is the standard markup language for creating web pages and web applications.
    With Cascading Style Sheets (CSS), and JavaScript, it forms a triad of cornerstone technologies for the World
    Wide Web. Web browsers receive HTML documents from a webserver or from local storage and render them into
    multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for
    the appearance of the document.</span><br /><br />
    <Toggle id="1" checked={this.props.html} /> This sounds good, am in !
    </div>);
  }
}

export default HTMLL;
