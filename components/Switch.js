import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './Tabs';
import Admin from './Admin';
class Switch extends React.Component {
  call1()
  {
    console.log("Admin");
    ReactDOM.unmountComponentAtNode(document.getElementById('container'));
    ReactDOM.render(<Admin />,document.getElementById('container'));
    //document.getElementById('admin').style.visibility="visible";
  }

  call2()
  {
    console.log("User");
    ReactDOM.unmountComponentAtNode(document.getElementById('container'));
    document.getElementById('container2').style.visibility="visible";
  }


  <ol class="list-steps">
  <li>
    Sign up Account
  </li>
  <li class="current">
    Create Organization
  </li>
  <li>
    Do other things
  </li>
  <li>
    And more things
  </li>
</ol>
<ol class="list-steps">

<div class="tabs-images">
  <ul class="list-inline nav-tabs-images">
    <li class="active">
      <a data-toggle="tab" href="#agility">
        <span class="sr-only">Agility</span>
        <svg class="icon-svg" x="0px" y="0px" height="130" width="130" enable-background="new 0 0 130 130" >
          <g>
            <path class="icon" d="M97.283,83.157H86.452c-2.555,3.305-5.781,6.066-9.478,8.067h20.31l4.489-3.945L97.283,83.157z"/>
            <path class="icon" d="M62.788,38.586c-14.513,0-26.319,11.807-26.319,26.319c0,5.429,1.66,10.473,4.489,14.667h11.012
              c-4.499-3.327-7.434-8.654-7.434-14.667c0-10.064,8.188-18.252,18.252-18.252S81.04,54.84,81.04,64.905
              c0,6.013-2.935,11.34-7.434,14.667c-3.032,2.242-6.766,3.585-10.818,3.585H43.853h-4.729H28.292l4.482,4.122l-4.482,3.945h20.311
              h14.185c7.43,0,14.145-3.099,18.935-8.067c1.066-1.106,2.033-2.308,2.895-3.585c2.83-4.194,4.489-9.238,4.489-14.667
              C89.107,50.393,77.301,38.586,62.788,38.586z"/>
          </g>
        </svg>
      </a>
    </li>
    <li>
      <a data-toggle="tab" href="#choice">
        <span class="sr-only">Choice</span>
        <svg class="icon-svg" version="1.1" x="0px" y="0px"
             viewBox="0 0 130 130" enable-background="new 0 0 130 130" xml:space="preserve">
          <g>
            <g>
              <path class="icon" d="M59.642,57.905c0,1.65-1.35,3-3,3h-18c-1.65,0-3-1.35-3-3v-18c0-1.65,1.35-3,3-3h18c1.65,0,3,1.35,3,3V57.905z"/>
            </g>
            <g>
              <path class="icon" d="M78.381,60.905c-1.65,0-3.675-1.169-4.5-2.598l-3.928-6.804c-0.825-1.429-0.825-3.767,0-5.196l3.928-6.804
                c0.825-1.429,2.85-2.598,4.5-2.598h7.856c1.65,0,3.675,1.169,4.5,2.598l3.928,6.804c0.825,1.429,0.825,3.767,0,5.196l-3.928,6.804
                c-0.825,1.429-2.85,2.598-4.5,2.598H78.381z"/>
            </g>
            <circle class="icon" cx="82.309" cy="79.905" r="12"/>
            <g>
              <path class="icon" d="M46.202,70.399c0.792-1.372,2.088-1.372,2.88,0l3.77,6.531c0.792,1.372,2.088,3.616,2.88,4.988l3.77,6.531
                c0.792,1.372,0.144,2.494-1.44,2.494h-7.541c-1.584,0-4.175,0-5.759,0h-7.541c-1.584,0-2.232-1.122-1.44-2.494l3.77-6.531
                c0.792-1.372,2.088-3.616,2.88-4.988L46.202,70.399z"/>
            </g>
          </g>
        </svg>
      </a>
    </li>
    <li>
      <a data-toggle="tab" href="#open-source">
        <span class="sr-only">Open Source</span>
        <svg class="icon-svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 130 130" enable-background="new 0 0 130 130">
          <path class="icon" d="M95.22,65.454c0-16.583-13.441-30.025-30.024-30.025c-16.583,0-30.026,13.442-30.026,30.025
            c0,12.68,7.861,23.525,18.973,27.926l7.596-19.192c-3.477-1.377-5.937-4.767-5.937-8.734c0-5.188,4.207-9.393,9.394-9.393
            c5.188,0,9.395,4.206,9.395,9.393c0,3.966-2.463,7.357-5.937,8.734l7.594,19.192C87.362,88.979,95.22,78.134,95.22,65.454z"/>
        </svg>
      </a>
    </li>
  </ul>
  <div class="tab-content txt-c">
    <div class="tab-pane fade in active" id="agility">Agility Content</div>
    <div class="tab-pane fade" id="choice">Choice Content</div>
    <div class="tab-pane fade" id="open-source">Open Source</div>
  </div>
</div>

  render(){
    return(
    <div id="padd">
          <img id="logo" src="../images/admin.png" /> ADMIN ?  <button type="button" onClick={this.call1}>Login here</button><br />
          <img id="image" src="../images/user.png" />


          USER ? <button type="button" onClick={this.call2}>Click here</button>to check out our Courses ! <br />

    </div>);
  }
  componentWillUnmount(){
  }
}

export default Switch;
