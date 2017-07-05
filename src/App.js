import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './menu.js';
import mainContent from './mainContent.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
           
              <Menu />
            
          <h4>онлайн магазин</h4>
          <h2>ЦВЕТЫ ДОМА</h2>
        </div>
        <div>
            <mainContent />
        </div>
      </div>
    );
  }
}

export default App;
