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
      <h1>Gather at the<br /><span data-shadow-text="ConCourse">ConCourse</span><br /> but create your own Identity...</h1>
    </div>);
  }
}

export default Header;
