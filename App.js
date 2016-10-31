import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './components/Tabs';
import Header from './components/Header';
import Switch from './components/Switch';
import Admin from './components/Admin';
class App extends React.Component {
   render() {
      return (
         <div>
              <Header />
              <div id="container">
              </div>
              <Tabs />
        </div>
      );
   }
}

export default App;
