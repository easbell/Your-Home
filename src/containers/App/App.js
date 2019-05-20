import React, { Component } from 'react';
import './App.css';
import NewProject from '../NewProject/NewProject';
import SideDrawer from '../SideDrawer/SideDrawer';

class App extends Component {

  render() {
    return (
      <div className="App" id='App'>
        <header className="App-header">
          <SideDrawer />
          <h1>YourHome</h1>
          <NewProject />
        </header>
      </div>
    );
  }
} 

export default App;
