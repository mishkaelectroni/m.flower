import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import Basket from './basket'
import Form from './form'
import decorCvet from './decorCvet'
import decorList from './decorList'
import kaktus from './kaktus'
import orhidei from './orhidei'
import About from './about'
import Search from './search'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './configureStore'

         
const store = configureStore();

ReactDOM.render( <Router >
             <div>                 
                 <Route exact path="/" component={App} />
                 <Route path="/decorCvet" component={decorCvet} />
                 <Route path="/decorList" component={decorList} />
                 <Route path="/kaktus" component={kaktus} />
                 <Route path="/orhidei" component={orhidei} />
                 <Route path="/about" component={About}/>
             </div>
         </Router>,	
	document.getElementById('main')
	);

registerServiceWorker();
