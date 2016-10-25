import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './Tabs';
class Switch extends React.Component {
  call1()
  {
    console.log("Admin");
    ReactDOM.unmountComponentAtNode(document.getElementById('container'));
    document.getElementById('admin').style.visibility="visible";
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
          <img id="logo" src="../images/admin.png" /> <br />
          ADMIN ?  --- > <button type="button" onClick={this.call1}>Login here</button> <br/>
          User ? <button type="button" onClick={this.call2}>Click here</button> to Apply.. <br />

    </div>);
  }
  componentWillUnmount(){
  }
}

export default Switch;
