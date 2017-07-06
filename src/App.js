import React, { Component } from 'react';
import { Router, Route, hasHistory } from 'react-router';
import './App.css';
import Menu from './menu.js';
import Basket from './basket.js';
import Form from './form.js';
import About from './about.js';

const menu = [
  {
    link: '/home',
    label: 'home'
  },
  {
    link: '/category',
    label: 'category'
  },
  {
    link: '/contact',
    label: 'contact'
  }
];

class App extends Component {
  render() {

    return (
      <div className="App">
        <div className="App-header">
        
             <Basket />
             <Menu items={menu} />              
             <Form />
                     
        </div>

        <div className="mainContent"> 
          <ul>
            <li>
              <img src={require('./img/product-c1.png')}/>
              <p>декоративно-цветущие</p>
              <h4>Азалия белая</h4>
              <a href={'#'}>55грн</a>
            </li>
            <li>
              <img src={require('./img/product-c1.png')}/>
              <p>декоративно-цветущие</p>
              <h4>Азалия белая</h4>
              <a href={'#'}>55грн</a>
            </li>
          </ul>
          <ul>
            <li>
              <img src={require('./img/product-c1.png')}/>
              <p>декоративно-цветущие</p>
              <h4>Азалия белая</h4>
              <a href={'#'}>55грн</a>
            </li>
            <li>
              <img src={require('./img/product-c1.png')}/>
              <p>декоративно-цветущие</p>
              <h4>Азалия белая</h4>
              <a href={'#'}>55грн</a>
            </li>
          </ul>
        </div>         
      </div>
    );
  }
}

export default App;
