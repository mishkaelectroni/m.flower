import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
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


ReactDOM.render( <Router >
             <div>                 
                 <Route exact path="/" component={App} />
                 <Route path="/decorCvet" component={decorCvet} />
                 <Route path="/decorList" component={decorList} />
                 <Route path="/kaktus" component={kaktus} />
                 <Route path="/orhidei" component={orhidei} />
                 <Route path="/about" component={About} />
                 <Route path="/basket" component={Basket} />
                 <Route path="/search" component={Search} />
             </div>
         </Router>,	
	document.getElementById('main')
	);

registerServiceWorker();
