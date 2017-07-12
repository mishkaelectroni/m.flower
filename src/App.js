import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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
        
            <div className="Basket">
              <Link to="/basket"><img src={require('./img/basket.png')}/></Link>        
            </div>
             <Menu  />              
            <div className="search">
              <Link to="/search"> &#128269; </Link>             
            </div>
                     
        </div>

        <div className="mainContent"> 
          <ul>
            <li>
              <img src={require('./img/product-c1.png')} alt="foto"/>
              <p>декоративно-цветущие</p>
              <h4>јзали¤ бела¤</h4>
              <a href={'#'}>55грн</a>
            </li>
            <li>
              <img src={require('./img/product-c1.png')} alt="foto"/>
              <p>декоративно-цветущие</p>
              <h4>јзали¤ бела¤</h4>
              <a href={'#'}>55грн</a>
            </li>
          </ul>
          <ul>
            <li>
              <img src={require('./img/product-c1.png')} alt="foto"/>
              <p>декоративно-цветущие</p>
              <h4>јзали¤ бела¤</h4>
              <a href={'#'}>55грн</a>
            </li>
            <li>
              <img src={require('./img/product-c1.png')} alt="foto"/>
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


