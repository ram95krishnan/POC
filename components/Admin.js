import React from 'react';
import ReactDOM from 'react-dom';
var Tabbs = require('pui-react-tabs').Tabs;
var Tab = require('pui-react-tabs').Tab;
var LeftTabs = require('pui-react-tabs').LeftTabs;

class Admin extends React.Component {

  render(){
    return(
    <div id="admin">
        <Tabbs defaultActiveKey={1} tabWidth={7} paneWidth={9}>
        <Tab eventKey={1} title="Pending">

        </Tab>
        <Tab eventKey={2} title="Approved">
        <h2>~~~~~~~</h2>
            <span>So much content.</span>
        </Tab>
        </Tabbs>
    </div>);
  }

}

export default Admin;
