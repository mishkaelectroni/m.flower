import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import { connect } from 'react-redux';
import './App.css';
import Menu from './menu';
import Basket from './basket';
import Form from './form';
import Search from './search';

const menu = [
  {
    link: './dekor-list',
    label: 'декоративно-лиственные'
  },
  {
    link: './dekor-cvet',
    label: 'декоративно-цветущие'
  },
  {
    link: './kaktus',
    label: 'кактусы и суккуленты'
  },
  {
    link: './orhidei',
    label: 'орхидеи'
  },
  {
    link: './gorshki',
    label: 'горшки и кашпо'
  }
]

class App extends Component {
  render() {

    return (
      <div className="App">
        <div className="App-header">
        
             <Basket />
             <Menu items={menu} />              
             <Search />
                     
        </div>

        <div className="mainContent"> 
          <ul>
            <li>
              <img src={require('./img/product-c1.png')}/>
              <p>декоративно-цветущие</p>
              <h4>јзали¤ бела¤</h4>
              <a href={'#'}>55грн</a>
            </li>
            <li>
              <img src={require('./img/product-c1.png')}/>
              <p>декоративно-цветущие</p>
              <h4>јзали¤ бела¤</h4>
              <a href={'#'}>55грн</a>
            </li>
          </ul>
          <ul>
            <li>
              <img src={require('./img/product-c1.png')}/>
              <p>декоративно-цветущие</p>
              <h4>јзали¤ бела¤</h4>
              <a href={'#'}>55грн</a>
            </li>
            <li>
              <img src={require('./img/product-c1.png')}/>
              <p>декоративно-цветущие</p>
              <h4>јзали¤ бела¤</h4>
              <a href={'#'}>55грн</a>
            </li>
          </ul>
        </div> 
        <div>
          <Form />
        </div>        
      </div>
    );
  }
}

export default App;


