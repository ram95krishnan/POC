import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './components/Tabs';
import Header from './components/Header';

class App extends React.Component {
   render() {
      return (
         <div>
              <Header />
              <Tabs />
         </div>
      );
   }
}

export default App;
