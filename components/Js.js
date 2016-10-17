import React from 'react';
import ReactDOM from 'react-dom';

var Tabbs = require('pui-react-tabs').Tabs;
var Tab = require('pui-react-tabs').Tab;
var LeftTabs = require('pui-react-tabs').LeftTabs;
var Toggle = require('pui-react-toggle').Toggle;

class JS extends React.Component {
  render(){
    return(
    <div>
                JavaScript is a high-level, dynamic, untyped, and interpreted programming language.[6] It has
                been standardized in the ECMAScript language specification.[7] Alongside HTML and CSS, it is one of the three core
                technologies of World Wide Web content production; the majority of websites employ it and it is supported by all modern
                Web browsers without plug-ins.[6] JavaScript is prototype-based with first-class functions, making it a multi-paradigm
                language, supporting object-oriented,[8] imperat<br />ive, and functional programming styles.<br /><br />
                <Toggle id="3" checked={this.props.js}/>This is great !
    </div>);
  }
}

export default JS;
