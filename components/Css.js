
import React from 'react';
import ReactDOM from 'react-dom';

var Tabbs = require('pui-react-tabs').Tabs;
var Tab = require('pui-react-tabs').Tab;
var LeftTabs = require('pui-react-tabs').LeftTabs;
var Toggle = require('pui-react-toggle').Toggle;

class CSS extends React.Component {
  render(){
    return(
    <div>
    Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written
    in a markup language.[1] Although most often used to set the visual style of web pages and user interfaces written
    in HTML and XHTML, the language can be applied to any XML document, including plain XML, SVG and XUL, and is
    applicable to rendering in speech, or on other media.<br /><br />
    <Toggle id="2" checked={this.props.css}/> Why Not ?

    </div>);
  }
}

export default CSS;
