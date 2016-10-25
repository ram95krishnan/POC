import React from 'react';
import ReactDOM from 'react-dom';
import Switch from './Switch';
class Header extends React.Component {
  componentDidMount(){
    {ReactDOM.render(<Switch />,document.getElementById('container'));}
  }
  render(){
    return(
    <div>
        <h1 id="header"> ConCourse </h1>
        <h2 > ... CoDiNg() = > is fun ! </h2>
    </div>);
  }
}

export default Header;
