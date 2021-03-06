import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './Tabs';
import Admin from './Admin';
var Ribbon = require('pui-react-ribbons').Ribbon;
var Carousel = require('nuka-carousel');

const customContentStyle = {
  color: 'black',
};

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

  render(){
    return(
      <div id="padd">
      <Carousel width="75%" wrapAround={true} autoplay={true}>
        <img className="carousel" src="../images/html5.jpg"/>
        <img className="carousel" src="../images/css.jpg"/>
        <img className="carousel" src="../images/js.jpg"/>
        <img className="carousel" src="../images/react.png"/>
      </Carousel>
          <img className="icon" src="../images/admin.png" /> <Ribbon style={customContentStyle}> ADMIN </Ribbon> <button type="button" onClick={this.call1}>Login here</button>
          <img className="icon" src="../images/user.png" />

          <Ribbon style={customContentStyle}> USER </Ribbon> <button type="button" onClick={this.call2}>Click here</button>to check out our Courses ! ... <a href="http://localhost:9001"> <Ribbon style={customContentStyle}> Try DEMO here </Ribbon> </a> <br />
    </div>);
  }
  componentWillUnmount(){
  }
}

export default Switch;
