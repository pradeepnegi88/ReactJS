import React from 'react';
import logo from './logo.svg';
import Greet from './components/Greet';
import Welcome from './components/Welcome'
import Counter from './components/Counter'
import Forms from './components/Forms'

import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Forms/>
          {/* <img src={logo} className="App-logo" alt="logo" />
          <Greet name="Pradeep Negi"/>
          <Welcome />
          <Counter/> */}
         </header>
      </div>
    );
  }
  
}

export default App;
