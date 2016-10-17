import React from 'react';
import ReactDOM from 'react-dom';
import HTMLL from './Html';
import CSS from './Css';
import JS from './Js';
import REACT from './Reactjs';

var Tabbs = require('pui-react-tabs').Tabs;
var Tab = require('pui-react-tabs').Tab;
var LeftTabs = require('pui-react-tabs').LeftTabs;
var Toggle = require('pui-react-toggle').Toggle;

class Tabs extends React.Component {
  render(){
    return(
    <div>

      <Tabbs defaultActiveKey={1} tabWidth={7} paneWidth={9}>

        <Tab eventKey={1} title="COURSES">
            <div className="Content">
            <LeftTabs defaultActiveKey={1} tabWidth={3} paneWidth={9}>
              <Tab eventKey={1} title="Introduction">Welcome to ConCourse! A platform to develop kickass coding skills !<br /> <br />
              Please look through the courses. Select the ones which you would like to learn here. The, go to 'Apply Now!' and
              fill required details. We ll get back to you soon, after setting up the groundwork for you to start learning on !</Tab>
              <Tab eventKey={2} title="HTML">
                          <HTMLL />
              </Tab>
              <Tab eventKey={3} title="CSS">
                          <CSS />
              </Tab>
              <Tab eventKey={4} title="Javascript">
                          <JS />
              </Tab>
              <Tab eventKey={5} title="ReactJS">
                          <REACT />
              </Tab>
              </LeftTabs>
            </div>

        </Tab>

        <Tab eventKey={2} title="Apply Now!">
            <div className="Content">
              Amigo
            </div>
        </Tab>

    </Tabbs>

  </div>);
  }
}

export default Tabs;
