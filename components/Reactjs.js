
import React from 'react';
import ReactDOM from 'react-dom';

var Tabbs = require('pui-react-tabs').Tabs;
var Tab = require('pui-react-tabs').Tab;
var LeftTabs = require('pui-react-tabs').LeftTabs;
var Toggle = require('pui-react-toggle').Toggle;

class REACT extends React.Component {
  render(){
    return(
    <div>
    React (sometimes styled React.js or ReactJS) is an open-source JavaScript library providing a view for data rendered
    as HTML. React views are typically rendered using components that contain additional components specified as custom
    HTML tags. React promises programmers a model in which subcomponents cannot directly affect enclosing components
    ("data flows down"); efficient updating of the HTML document when data changes; and a clean separation between components
    on a modern single-page application.<br /><br />
    <Toggle id="4" checked={this.props.react} />Let me learn the future !
    </div>);
  }
}

export default REACT;
