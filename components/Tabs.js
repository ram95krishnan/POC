import React from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {action} from '../actions/actions'
//import status from '../reducers/status'


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
            <LeftTabs defaultActiveKey={1} tabWidth={4} paneWidth={12}>
              <Tab eventKey={1} title="Introduction">Welcome to ConCourse! A platform to develop kickass coding skills !<br /> <br />
              Please look through the courses. Select the ones which you would like to learn here. The, go to 'Apply Now!' and
              fill required details. We ll get back to you soon, after setting up the groundwork for you to start learning on !</Tab>

              {this.props.course.map((course,i) => (
                <Tab key={i} eventKey={i+2} title={course.course}>
                            {course.content}<br /><br />
                      <input key={""+i} type="checkbox" defaultChecked={course.status} onClick= { () => {this.props.action(document.getElementById("t_"+i).checked,course)} } id={"t_"+i} /> This sounds good, am in !
                </Tab>
              ))}
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

function mapStateToProps(state){
     return {
        course : state.course
      /*  HTML :  state.HTML,     checked={this.state.(course.course)}
        CSS : state.CSS,
        JS : state.JS,
        REACT : state.REACT */
     };
   }


   function matchDispatchToProps(dispatch){
     console.log("DISPATCH HAPPENING ");
     return bindActionCreators({action: action},dispatch);
   }
//HTML: HTML,CSS: CSS, JS: JS, REACT: REACT
   export default connect(mapStateToProps,matchDispatchToProps)(Tabs);
