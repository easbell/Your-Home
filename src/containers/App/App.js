import React, { Component } from 'react';
import './App.css';
import NewProject from '../NewProject/NewProject';

class App extends Component {

  render() {
    return (
      <div className="App" id='App'>
        <header className="App-header">
          <h1>YourHome</h1>
          <NewProject />
        </header>
      </div>
    );
  }
}

export default App;
