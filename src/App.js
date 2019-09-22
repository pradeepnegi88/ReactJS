import React from 'react';
import logo from './logo.svg';
import Greet from './components/Greet';
import Welcome from './components/Welcome'
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Greet name="Pradeep Negi"/>
          <Welcome />
         </header>
      </div>
    );
  }
  
}

export default App;
