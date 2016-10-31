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
