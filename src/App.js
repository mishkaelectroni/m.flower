import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import './App.css'
import './form.css'
import Menu from './menu'
import Basket from './basket'
import Form from './form'
import Search from './search'

class App extends Component {
  render() {

    return (
      <div className="App">
        <div className="App-header">
        
             <Basket />
             <Menu  />              
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


